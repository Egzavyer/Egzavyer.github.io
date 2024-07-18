import { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadContent({ thread, username }) {
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState(thread.comments);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, newComment);
        const newCommentObject = {
            author: username,
            text: newComment,
        };
        setComments([...comments, newCommentObject]);
        setNewComment('');
    };

    return (
        <tr>
            <td colSpan="4" className="p-4 bg-text">
                <div className="mb-4">{thread.content}</div>
                <div className="mb-4">
                    {comments.map((comment, index) => (
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