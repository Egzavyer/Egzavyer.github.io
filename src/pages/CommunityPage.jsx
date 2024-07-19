import { useState } from 'react';
import ThreadList from '../components/ThreadList';
import Modal from '../components/Modal';
import PropTypes from 'prop-types';

function Community({ language, username, setUserEvents }) {
  const translations = {
    communityPosts: {
      en: "Community Posts",
      fr: "Publications de la Communauté",
    },
    createEvent: {
      en: "Create Event",
      fr: "Créer un Evenement",
    },
    eventName: {
      en: "Event Name: ",
      fr: "Nom de l'Evenement: ",
    },
    startDate: {
      en: "Start Date:",
      fr: "Date de Début:",
    },
    endDate: {
      en: "End Date:",
      fr: "Date de Fin:",
    },
    submit: {
      en: "Submit",
      fr: "Soumettre",
    },
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted");
    setUserEvents((prevEvents) => {
      const newEvent = {
        id: prevEvents.length + 1,
        title: event.target.eventName.value,
        startDate: event.target.startDate.value,
        endDate: event.target.endDate.value,
      };
      return [...prevEvents, newEvent];
    });
    toggleModal();
  };

  return (
    <>
      <div className="flex-grow p-6 font-body text-primary">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-5xl font-display">{translations.communityPosts[language]}</h1>
          <button
            className="bg-primary text-text py-2 px-4 rounded transition duration-300"
            onClick={toggleModal}
          >
            {translations.createEvent[language]}
          </button>
        </div>
      </div>
      <ThreadList username={username} />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <form className="flex flex-col font-body gap-2 " onSubmit={handleSubmit}>
            <label htmlFor="eventName">{translations.eventName[language]}</label>
            <input type="text" id="eventName" name="eventName" required />
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required />
            <div className='flex flex-row gap-2'>
              <label htmlFor="startDate">{translations.startDate[language]}</label>
              <input type="date" id="startDate" name="startDate" required />
              <label htmlFor="endDate">{translations.endDate[language]}</label>
              <input type="date" id="endDate" name="endDate" required />
            </div>
            <button className="mt-4 bg-green-600 text-text py-2 px-4 rounded" type="submit">{translations.submit[language]}</button>
          </form>
        </Modal>
      )}
    </>
  );
}

Community.propTypes = {
  language: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  setUserEvents: PropTypes.func.isRequired,
};

export default Community;