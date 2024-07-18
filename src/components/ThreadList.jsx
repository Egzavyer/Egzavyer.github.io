import ThreadRow from "./ThreadRow";
import { useState } from "react";

function ThreadList({ username }) {
    const [threads, setThreads] = useState([
        {
            id: 1,
            title: "How do I get started in game dev?",
            subject: "General",
            date: "Dec 5",
            author: "game-maker123",
            content: "I'm new to game development and looking for advice on where to start...",
            comments: [
                { author: "dev1", "text": "Start with Unity, it's great for beginners!" },
                { author: "dev2", "text": "Learn the basics of programming first, then choose an engine." }
            ]
        },
        {
            id: 2,
            title: "Best tools for 2D game development?",
            subject: "General",
            date: "Jan 12",
            author: "pixel_enthusiast",
            content: "Looking for recommendations on tools and frameworks for creating 2D games...",
            comments: [
                { author: "artist1", "text": "Try out Aseprite for sprite creation!" },
                { author: "dev3", "text": "GameMaker Studio is a solid choice for 2D game dev." }
            ]
        },
        {
            id: 3,
            title: "Tips for optimizing game performance?",
            subject: "Development",
            date: "Feb 8",
            author: "lag_hater",
            content: "My game is running slow, any tips on optimizing performance?",
            comments: [
                { author: "tech_guru", "text": "Profile your game to find bottlenecks and optimize accordingly." },
                { author: "speedster", "text": "Make sure to use efficient algorithms and manage memory wisely." }
            ]
        },
        {
            id: 4,
            title: "How to create realistic animations?",
            subject: "Art",
            date: "Mar 14",
            author: "animator123",
            content: "I'm struggling with making my character animations look realistic. Any advice?",
            comments: [
                { author: "motion_expert", "text": "Study real-life references and use animation curves." },
                { author: "game_dev", "text": "Consider using motion capture for more natural movements." }
            ]
        },
        {
            id: 5,
            title: "Best practices for game audio?",
            subject: "Sound",
            date: "Apr 20",
            author: "sound_dev",
            content: "What are some best practices for creating and implementing game audio?",
            comments: [
                { author: "audio_guru", "text": "Use spatial audio to enhance immersion." },
                { author: "music_maker", "text": "Ensure your sound effects match the game's theme and atmosphere." }
            ]
        },
        {
            id: 6,
            title: "How to balance game difficulty?",
            subject: "Design",
            date: "May 30",
            author: "game_designer",
            content: "Struggling to find the right difficulty balance in my game. Any tips?",
            comments: [
                { author: "designer1", "text": "Playtest with a diverse group of players to gather feedback." },
                { author: "gamer_pro", "text": "Provide adjustable difficulty settings to cater to different skill levels." }
            ]
        }
    ]);
    const [expandedThreadId, setExpandedThreadId] = useState(null);

    const toggleThread = (id) => {
        setExpandedThreadId(expandedThreadId === id ? null : id);
    };

    return (
        <div className="flex-grow p-6 font-body text-primary min-h-screen">
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
                            username={username}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ThreadList;