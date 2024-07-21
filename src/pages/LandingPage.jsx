import Carousel from '../components/Carousel';
import EventCard from '../components/EventCard';
import PropTypes from 'prop-types';

function Landing({ language }) {
  const translations = {
    upcomingEvents: {
      en: "UPCOMING EVENTS",
      fr: "ÉVÉNEMENTS À VENIR",
    },
    skullgirlsTournament: {
      en: "Join us again this year for the 3rd Indie Game Hub Annual Skullgirls Tournament!",
      fr: "Rejoignez-nous pour le 3e tournoi annuel Skullgirls d'Indie Game Hub!",
    },
    hubJam: {
      en: "Attention Devs! HubJam starts in less than 3 weeks and the theme will soon be revealed!",
      fr: "Developpeurs! HubJam est dans moins de 3 semaines et le thème sera bientôt révélé!",
    },
    ultrakillSpeedruns: {
      en: "Compete against rival speedrunners and prove that you're the best!",
      fr: "Affrontez des speedrunners rivaux et prouvez que vous êtes le meilleur!",
    },
  };

  return (
    <>
      <Carousel language={language} />
      <div className="flex container mx-auto justify-center py-10 min-h-screen">
        <div className='flex flex-col'>
          <h1 className='font-display lg:text-8xl md:text-7xl text-primary text-center'>
            {translations.upcomingEvents[language]}
          </h1>
          <div className='lg:flex flex-row gap-20 pt-6'>
            <EventCard imagePath="src/assets/Events/skullgirls.jpg" name="Skullgirls Tournament" description={translations.skullgirlsTournament[language]} link="#" />
            <EventCard imagePath="src/assets/Events/gamejam.jpg" name="HubJam" description={translations.hubJam[language]} link="#" />
            <EventCard imagePath="src/assets/Events/ultrakill.jpg" name="Ultrakill Speedruns" description={translations.ultrakillSpeedruns[language]} link="#" />
          </div>
        </div>
      </div>
    </>
  );
}

Landing.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Landing;