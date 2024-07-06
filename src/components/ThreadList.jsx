import ThreadRow from "./ThreadRow";
import { useState } from "react";

function ThreadList() {
    const [threads, setThreads] = useState([
        {
            id: 1,
            title: "How do I get started in game dev?",
            subject: "General",
            date: "Dec 5",
            author: "game-maker123",
            content: "I'm new to game development and looking for advice on where to start...",
            comments: [
                { author: "dev1", text: "Start with Unity, it's great for beginners!" },
                { author: "dev2", text: "Learn the basics of programming first, then choose an engine." }
            ]
        },
        {
            id: 2,
            title: "How do I get started in game dev?",
            subject: "General",
            date: "Dec 5",
            author: "game-maker123",
            content: "I'm new to game development and looking for advice on where to start...",
            comments: [
                { author: "dev1", text: "Start with Unity, it's great for beginners!" },
                { author: "dev2", text: "Learn the basics of programming first, then choose an engine." }
            ]
        },
        {
            id: 3,
            title: "How do I get started in game dev?",
            subject: "General",
            date: "Dec 5",
            author: "game-maker123",
            content: "I'm new to game development and looking for advice on where to start...",
            comments: [
                { author: "dev1", text: "Start with Unity, it's great for beginners!" },
                { author: "dev2", text: "Learn the basics of programming first, then choose an engine." }
            ]
        },
        {
            id: 4,
            title: "How do I get started in game dev?",
            subject: "General",
            date: "Dec 5",
            author: "game-maker123",
            content: "I'm new to game development and looking for advice on where to start...",
            comments: [
                { author: "dev1", text: "Start with Unity, it's great for beginners!" },
                { author: "dev2", text: "Learn the basics of programming first, then choose an engine." }
            ]
        },
        {
            id: 5,
            title: "How do I get started in game dev?",
            subject: "General",
            date: "Dec 5",
            author: "game-maker123",
            content: "I'm new to game development and looking for advice on where to start...",
            comments: [
                { author: "dev1", text: "Start with Unity, it's great for beginners!" },
                { author: "dev2", text: "Learn the basics of programming first, then choose an engine." }
            ]
        },
        {
            id: 6,
            title: "How do I get started in game dev?",
            subject: "General",
            date: "Dec 5",
            author: "game-maker123",
            content: "I'm new to game development and looking for advice on where to start...",
            comments: [
                { author: "dev1", text: "Start with Unity, it's great for beginners!" },
                { author: "dev2", text: "Learn the basics of programming first, then choose an engine." }
            ]
        },
    ]);
    const [expandedThreadId, setExpandedThreadId] = useState(null);

    const toggleThread = (id) => {
        setExpandedThreadId(expandedThreadId === id ? null : id);
    };

    return (
        <div className="flex-grow p-6 font-body text-primary">
            <h1 className="text-5xl font-display mb-6">Community Posts</h1>
            <table className="w-full">
                <thead>
                    <tr className="text-left text-lg font-display">
                        <th className="pb-2">Title</th>
                        <th className="pb-2">Subject</th>
                        <th className="pb-2">Date</th>
                        <th className="pb-2">Author</th>
                    </tr>
                </thead>
                <tbody>
                    {threads.map((thread) => (
                        <ThreadRow
                            key={thread.id}
                            thread={thread}
                            isExpanded={expandedThreadId === thread.id}
                            onToggle={() => toggleThread(thread.id)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ThreadList;