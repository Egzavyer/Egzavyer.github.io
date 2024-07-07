import { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadContent({ thread }) {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit the new comment
        setNewComment('');
    };

    return (
        <tr>
            <td colSpan="4" className="p-4 bg-text">
                <div className="mb-4">{thread.content}</div>
                <div className="mb-4">
                    {thread.comments.map((comment, index) => (
                        <div key={index} className="mb-2">
                            <strong>{comment.author}:</strong> {comment.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full p-2 border rounded mb-2"
                        placeholder="Add a comment..."
                    />
                    <button type="submit" className="px-4 py-2 bg-primary text-text rounded">
                        Post Comment
                    </button>
                </form>
            </td>
        </tr>
    );
}

ThreadContent.propTypes = {
    thread: PropTypes.object.isRequired,
};

export default ThreadContent;