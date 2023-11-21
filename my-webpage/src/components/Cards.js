import React from 'react';
import '../styles/Cards.css'; // Import the CSS file for Navbar styles

const Cards = () => {
  // Sample card data
  const cardData = [
    { 
      id: 1,
      image: 'E:\Pictures\certificates\AWS.png',
      title: 'Certificate',
      content: 'AWS'
    },
    { 
      id: 2,
      image: 'E:\Pictures\certificates\AWS.png',
      title: 'Certificate',
      content: 'PYTHON'
    },
    { 
      id: 3,
      image: 'E:\Pictures\certificates\AWS.png',
      title: 'Certificate',
      content: 'C'
    },
    { 
      id: 4,
      image: 'E:\Pictures\certificates\AWS.png',
      title: 'Certificate',
      content: 'C++'
    },
    { 
      id: 5,
      image: 'E:\Pictures\certificates\AWS.png',
      title: 'Certificate',
      content: 'HTML'
    },
    { 
      id: 6,
      image: 'E:\Pictures\certificates\AWS.png',
      title: 'Certificate',
      content: 'CSS'
    },
    { 
      id: 7,
      image: 'E:\Pictures\certificates\AWS.png',
      title: 'Certificate',
      content: 'JS'
    },
    { 
      id: 8,
      image: 'E:\Pictures\certificates\AWS.png',
      title: 'Certificate',
      content: 'Ethical '
    },
  ];

  return (
    <div className="cards">
      {cardData.map(card => (
        <div key={card.id} className="card">
          <img src={card.image} alt={`Card ${card.id}`} />
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
