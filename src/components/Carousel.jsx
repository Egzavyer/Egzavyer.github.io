import {useState} from 'react';

function Carousel() {
    const carouselItems = [
        {
            imageUrl: 'src/assets/Carousel/1.jpg',
            title: 'Hollow Knight',
            subtitle: 'Explore the vast underground world of Hallownest',
            buttonLink: "www.google.com",
            buttonText: "Click to Learn More"
        }
    ];
    const [currentItem, setCurrentItem] = useState(0);
    const nextSlide = () => {
        setCurrentItem((currentItem + 1) % carouselItems.length);
    };
    const prevSlide = () => {
        setCurrentItem((currentItem - 1 + carouselItems.length) % carouselItems.length);
    };

    return (
        <div className="relative flex justify-center items-center font-body text-text">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`w-full h-96 bg-center bg-cover p-4 transition-opacity duration-500 ease-in-out ${index === currentItem ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className='flex flex-col items-center justify-center h-full'>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p>{item.subtitle}</p>
                <a href={item.buttonLink} className="mt-4 inline-block bg-primary py-2 px-4 rounded">
                  {item.buttonText}
                </a>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className=" text-2xl absolute left-0 z-30 ml-2">
          &#10094;
        </button>
        <button onClick={nextSlide} className=" text-2xl absolute right-0 z-30 mr-2">
          &#10095;
        </button>
      </div>
    );
}

export default Carousel;