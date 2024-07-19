import { Carousel, Typography, Button } from "@material-tailwind/react";

import PropTypes from 'prop-types';

export function CarouselWithContent({ language }) {
  const translations = {
    desc1: {
      en: "Explore the vast and beautiful world of Hallownest.",
      fr: "Explorez le vaste et magnifique monde de Hallownest."
    },
    desc2: {
      en: "Conquer the galaxy in this new space exploration game.",
      fr: "Conquérez la galaxie dans ce nouveau jeu d'exploration spatiale."
    },
    click: {
      en: "Click to Learn More!",
      fr: "Cliquez pour en savoir plus!"
    }
  };
  return (
    <div className="w-full mx-auto overflow-hidden h-96" >
      <Carousel>
        <div className="relative h-full w-full">
          <img
            src="src/assets/Carousel/1.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl text-text font-body"
              >
                Hollow Knight
              </Typography>
              <Typography
                variant="lead"
                className="mb-12 opacity-80 text-text font-body"
              >
                {translations.desc1[language]}
              </Typography>
              <div className="flex justify-center gap-2">
                <Button className="bg-primary text-text font-body" size="lg">
                  {translations.click[language]}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src="src/assets/Carousel/2.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Constellation
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {translations.desc2[language]}
              </Typography>
              <div className="flex justify-center gap-2">
                <Button className="bg-primary text-text" size="lg">
                  {translations.click[language]}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

CarouselWithContent.propTypes = {
  language: PropTypes.string.isRequired
};

export default CarouselWithContent;