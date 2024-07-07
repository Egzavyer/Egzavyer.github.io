

import PropTypes from 'prop-types';

function Modal({ onClose, children }) {

    const handleModalContentClick = (e) => e.stopPropagation();

    return (
        <div
            className="fixed inset-0 bg-primary bg-opacity-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="bg-text p-6 rounded-lg max-w-lg w-full text-center"
                onClick={handleModalContentClick}
            >
                {children}
                <button
                    className="mt-4 bg-red-600 text-text py-2 px-4 rounded w-full"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;