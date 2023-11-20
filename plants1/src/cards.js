// CardsList.js
import React from 'react';
import Card from './card';

const sampleData = [
  { id: 1, title: 'Hydrangea macrophylla', content: 'Hydrangea macrophylla is a species of flowering plant in the family Hydrangeaceae, native to Japan', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwk97RDllQ7DS5Lj4SXtt91Nj-shJrG8W2Q&usqp=CAU' },
  { id: 2, title: 'Impatiens', content: 'Impatiens /ɪmˈpeɪʃəns/[2] is a genus of more than 1,000 species of flowering plants, widely distributed throughout the Northern Hemisphere and the tropics.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtud8yvnQwtu356WL5PeGw-k83pNGiMU_M_w&usqp=CAU' },
  { id: 3, title: 'Schlumbergera truncata', content: 'Schlumbergera truncata, the false Christmas cactus,[1] is a species of plant in the family Cactaceae. ', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnG38oAYIEZEo0FWcmReQCDA4RrFmrFDkxgw&usqp=CAU' },
  { id: 4, title: 'Andean Lupin', content: 'Lupinus mutabilis is a species of lupin grown in the Andes, mainly for its edible bean.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYhutG4xgloUaWo3jIhW0mXTApYyq3LPTeg&usqp=CAU' },
];

const CardsList = () => {
  return (
    <div className="cards-list">
      {sampleData.map((card) => (
        <Card key={card.id} title={card.title} content={card.content} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default CardsList;
