# Pitchsap

A full-stack web app for founders — featuring a landing page, JWT-based authentication, and real-time 1-to-1 chat.

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React + Vite, Tailwind CSS, React Router |
| Backend | Node.js, Express, WebSocket (`ws`) |
| Database | MongoDB (Mongoose) |
| Auth | JWT + bcryptjs |
| Hosting | Frontend → Vercel, Backend → EC2 + Nginx |

---

## Project Structure

```
pitchsap/
├── src/
│   ├── pages/        # Landing, Login, Signup, Chat
│   ├── components/   # Navbar, Pricing, UI components
│   └── assets/       # Fonts, images, logo
├── backend/
│   ├── models/       # User, Message (Mongoose)
│   ├── routes/       # auth.js, users.js, messages.js
│   └── index.js      # Express + WebSocket server
└── vercel.json       # SPA routing config
```

---

## API Endpoints

Base URL: `https://pitchsapapi.1forge.in`

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive JWT |

**Request body (both):**
```json
{ "email": "user@example.com", "password": "yourpassword" }
```
**Response:**
```json
{ "token": "<jwt>", "userId": "<id>" }
```

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/users` | Get all registered users |

### Messages
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/messages/:userId/:otherUserId` | Get chat history between two users |

### WebSocket
- Connect to `wss://pitchsapapi.1forge.in`
- Send `{ type: "auth", userId }` on open
- Send `{ type: "message", to: "<userId>", text: "..." }` to message a user

---

## Environment Variables (Backend)

Create a `.env` file in `/backend`:
```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/pitchsap
JWT_SECRET=your_secret_here
```

---

## Local Development

```bash
# Frontend
npm install
npm run dev       # http://localhost:5173

# Backend
cd backend
npm install
npm run dev       # http://localhost:5001
```

---

## Deployment

### Frontend (Vercel)
- Push to GitHub → Vercel auto-deploys
- `vercel.json` handles SPA routing (all paths → `index.html`)

### Backend (EC2 + Nginx)

1. SSH into EC2, clone repo, `cd backend`, `npm install`
2. Create `.env` with your secrets
3. Run with PM2: `pm2 start index.js --name pitchsap-backend`
4. Nginx config proxies `pitchsapapi.1forge.in` → `localhost:5001` (with WSS support)
5. SSL via Let's Encrypt: `certbot --nginx -d pitchsapapi.1forge.in`
