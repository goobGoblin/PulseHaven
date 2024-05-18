import React, { useState} from 'react';
import './EventsPage.css'; // Ensure you link to your CSS file

function EventsPage() {
    // Sample array of image URLs
    const posters = [
        '/PulseHaven/Posters/E1Lime.png',
        '/PulseHaven/Posters/E1Purple.png',
        '/PulseHaven/Posters/E1Red.png',
        '/PulseHaven/Posters/E1Teal.png',
        '/PulseHaven/Posters/E1BW.png'

    ];

    const [activeIndex, setActiveIndex] = useState(-1); // State to track the active (clicked) poster
    const [previousIndex, setPreviousIndex] = useState(-1); // To track previously active poster
    const [hoverIndex, setHoverIndex] = useState(-1); // State to track the hovered poster
    const getRandomRotation = () => Math.random() * 20 - 10;
    const getRandomShift = () => Math.random() * 40 - 20;
    const getRandomScale = () => 1;//Math.random() * 1;

    const handleClick = (index) => {
        if (activeIndex === index) {
            // If clicking the already active poster, deactivate it
            setPreviousIndex(activeIndex);
            setActiveIndex(-1);
        } else {
            setPreviousIndex(activeIndex);
            setActiveIndex(index);
        }
    };
    return (
        <div className="events-page">
            {posters.map((url, index) => (
                <div key={index} 
                    className="event-poster" 
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(-1)}
                    onClick={() => handleClick(index)}
                    style={{
                        transform: `translate(-50%, -50%) translate(0, ${index * 50}px) 
                                    rotate(${getRandomRotation()}deg) scale(${getRandomScale()}) 
                                    translateY(${activeIndex === index ? -50 * index : 0}px)`,
                        zIndex: activeIndex === index ? 10 : (previousIndex === index ? 0 : 1)
                     }}>
                    <img src={url} alt={`Event Poster ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default EventsPage;