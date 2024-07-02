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
          <div className='lg:flex flex-row gap-20 pt-6'>
            <EventCard imagePath="src/assets/Events/skullgirls.jpg" name="Skullgirls Tournament" description="Join us again this year for the 3rd Indie Game Hub Annual Skullgirls Tournament!" link="#" />
            <EventCard imagePath="src/assets/Events/gamejam.jpg" name="HubJam" description="Attention Devs! HubJam starts in less than 3 weeks and the theme will soon be revealed!" link="#" />
            <EventCard imagePath="src/assets/Events/ultrakill.jpg" name="Ultrakill Speedruns" description="Compete against rival speedrunners and prove that you're the best!" link="#" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
