require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const messageRoutes = require('./routes/messages');
const Message = require('./models/Message');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const clients = new Map();

wss.on('connection', (ws) => {
  let userId = null;
  ws.on('message', async (message) => {
    try {
      const data = JSON.parse(message.toString());

      if (data.type === 'auth') {
        userId = data.userId;
        clients.set(userId, ws);
        console.log(`User ${userId} authenticated`);
      } else if (data.type === 'message') {
        if (!userId) return;
        try {
          const newMessage = new Message({
            sender: userId,
            receiver: data.to,
            text: data.text
          });
          await newMessage.save();

          const targetWs = clients.get(data.to);
          if (targetWs && targetWs.readyState === WebSocket.OPEN) {
            targetWs.send(JSON.stringify({
              from: userId,
              text: data.text
            }));
          }
        } catch (err) {
          console.error('Failed', err);
        }
      }
    } catch (err) {
      console.error('WebSocket message parsing failed:', err);
    }
  });

  ws.on('close', () => {
    if (userId) clients.delete(userId);
  });
});

const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Server running on port 5001`);
});
