import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import EventCard from '../components/EventCard'

function Landing() {

  return (
    <>
      <Navbar />
      <Carousel />
      <div className="flex container mx-auto justify-center py-10">
        <div className='flex flex-col'>
          <h1 className='font-display lg:text-8xl md:text-7xl text-primary text-center'>
            EVENEMENTS A VENIR
          </h1>
          <div className='lg:flex flex-row gap-20'>
            <EventCard imagePath="src/assets/Carousel/3.jpg" name="Skullgirls Tournament" description="Join us again this year for the 3rd Indie Game Hub Annual Skullgirls Tournament!" link="#" />
            <EventCard imagePath="src/assets/Carousel/3.jpg" name="Skullgirls Tournament" description="Join us again this year for the 3rd Indie Game Hub Annual Skullgirls Tournament!" link="#" />
            <EventCard imagePath="src/assets/Carousel/3.jpg" name="Skullgirls Tournament" description="Join us again this year for the 3rd Indie Game Hub Annual Skullgirls Tournament!" link="#" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
