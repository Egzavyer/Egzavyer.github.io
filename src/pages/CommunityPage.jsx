import { useState } from 'react';
import ThreadList from '../components/ThreadList';
import Modal from '../components/Modal';

function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Collect form data and handle game jam event creation
    console.log("Form data submitted");
    toggleModal(); // Close modal after submission
  };

  return (
    <>
      <div className="flex-grow p-6 font-body text-primary">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-5xl font-display">Community Posts</h1>
          <button
            className="bg-primary text-text py-2 px-4 rounded transition duration-300"
            onClick={toggleModal}
          >
            Create Event
          </button>
        </div>
      </div>
      <ThreadList />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <form className="flex flex-col font-body gap-2 " onSubmit={handleSubmit}>
            <label htmlFor="eventName">Event Name:</label>
            <input type="text" id="eventName" name="eventName" required />
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required />
            <div className='flex flex-row gap-2'>
              <label htmlFor="startDate">Start Date:</label>
              <input type="date" id="startDate" name="startDate" required />
              <label htmlFor="endDate">End Date:</label>
              <input type="date" id="endDate" name="endDate" required />
            </div>
            <button className="mt-4 bg-green-600 text-text py-2 px-4 rounded" type="submit">Submit</button>
          </form>
        </Modal>
      )}
    </>
  );
}

export default Community;