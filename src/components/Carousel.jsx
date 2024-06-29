import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export function CarouselWithContent() {
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
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      Hollow Knight
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                        Explore the vast and beautiful world of Hallownest.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button className="bg-primary text-text" size="lg">
                        Click to Learn More!
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
                      Hollow Knight
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                        Explore the vast and beautiful world of Hallownest.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button className="bg-primary text-text" size="lg">
                        Click to Learn More!
                      </Button>
                    </div>
                  </div>
                </div>
          </div>
        </Carousel>
    </div>
  );
}

export default CarouselWithContent;