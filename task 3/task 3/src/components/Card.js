import React from 'react';
import './Card.css';



const Card = ({ title, content, image, moveRight }) => {
  return (
    <div className={`card ${moveRight ? 'move-right' : ''}`}>
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

const CardComponent = () => {
  const cardsData = [
    {
      title: 'Dry Fruits',
      content: 'Dry fruits support heart health, boost energy, and provide essential nutrients for overall well-being .',
      image: require('./dry fruits.jpg'), 
      moveRight: false,
    },
    {
      title: 'Fruits',
      content: 'Fruits, packed with vitamins, fiber, and antioxidants, contribute to overall health by supporting immune function and aiding in digestion.',
      image: require('./fruits.jpg'), 
      moveRight: true,
    },
    {
      title: 'Leafy ',
      content: '  A nutrient-packed punch for a healthier you..',
      image: require('./leafy.jpg'), 
      moveRight: false,
    },
    {
      title: 'Vegitables',
      content: 'rich in vitamins, minerals, and fiber, play a vital role in supporting overall health, from boosting immunity to promoting digestive well-being.',
      image: require('./vegitables.jpg'), 
      moveRight: true,
    },
  ];

  return (
    <div>
      <h1 className="charts-heading" id="Cards">Cards</h1>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
