import PropTypes from 'prop-types';
import ThreadContent from './ThreadContent';
import Logo from '../assets/logo.svg';

function ThreadRow({ thread, isExpanded, onToggle, username }) {
    return (
        <>
            <tr className="border-t cursor-pointer" onClick={onToggle}>
                <td className="py-3">{thread.title}</td>
                <td>{thread.subject}</td>
                <td>{thread.date}</td>
                <td className="flex items-center">
                    <img src={Logo} alt="Avatar" className="w-6 h-6 rounded-full mr-2" />
                    {thread.author}
                </td>
            </tr>
            {isExpanded && <ThreadContent thread={thread} username={username} />}
        </>
    );
}

ThreadRow.propTypes = {
    thread: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
};

export default ThreadRow;