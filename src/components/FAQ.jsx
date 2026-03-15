import { InteractiveAccordion } from "./ui/InteractiveAccordion";

export default function FAQ() {
    const questions = [
        {
            id: "q1",
            title: "What is Pitchsap?",
            content: "Pitchsap is the first end-to-end startup platform that blends AI-powered tools, expert mentorship, and founder hacks to help you create, scale, and fund your business legacy."
        },
        {
            id: "q2",
            title: "Who can join?",
            content: "Whether you are an ideator with a fresh concept, an established consultant, or an investor looking for the next big venture, Pitchsap is designed for the entire startup ecosystem."
        },
        {
            id: "q3",
            title: "How does feedback work?",
            content: "Our AI analysis provides instant insights on your pitch decks and business models, while our network of expert mentors offers deep-dive constructive criticism to refine your strategy."
        },
        {
            id: "q4",
            title: "Do I need a subscription?",
            content: "We offer various plans including Alpha, Beta, and Gamma to suit different stages of your startup journey. You can start with our base features and scale as you grow."
        },
        {
            id: "q5",
            title: "How does AI help?",
            content: "Our proprietary AI analyzes market trends, competitor data, and your business logic to provide actionable recommendations, pitch deck optimizations, and growth forecasting."
        },
        {
            id: "q6",
            title: "How are consultants rated?",
            content: "Consultants on Pitchsap are vetted through a rigorous verification process and rated based on their successful project outcomes, founder feedback, and domain expertise."
        },
        {
            id: "q7",
            title: "Can I build long-term connections?",
            content: "Yes, Pitchsap is built for community. Our platform facilitates meaningful networking between founders, mentors, and investors to build lasting professional relationships."
        },
        {
            id: "q8",
            title: "Can I upgrade or downgrade my plan anytime?",
            content: "Absolutely. You can change your plan at any time through your dashboard. Adjustments will be reflected in your next billing cycle without any penalties."
        },
        {
            id: "q9",
            title: "What happens if I exceed my plan limits?",
            content: "We'll notify you when you're close to your limits. You can then choose to upgrade or purchase additional credits to continue your work without interruption."
        },
        {
            id: "q10",
            title: "Do you offer refunds?",
            content: "We provide a standard 14-day money-back guarantee if you're not satisfied with the platform. Please refer to our terms of service for detailed conditions."
        },
        {
            id: "q11",
            title: "How does the investor access work?",
            content: "Verified investors get access to a curated pipeline of venture-ready startups, detailed performance metrics, and direct communication channels with founders."
        }
    ];

    // Split questions into two columns
    const col1 = questions.slice(0, Math.ceil(questions.length / 2));
    const col2 = questions.slice(Math.ceil(questions.length / 2));

    return (
        <section className="py-24 bg-bg relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic bg-clip-text text-transparent bg-[linear-gradient(180deg,#ffffffe6,#ffffffbf)] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Everything you need to know about the Pitchsap ecosystem and how we help you scale.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <InteractiveAccordion items={col1} />
                    <InteractiveAccordion items={col2} />
                </div>
            </div>
        </section>
    );
}
