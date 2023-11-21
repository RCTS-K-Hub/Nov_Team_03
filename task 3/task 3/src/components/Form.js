import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState(''); // 'veg' or 'non-veg'
  const [restaurant, setRestaurant] = useState('');
  const [rating, setRating] = useState('');
  const [calories, setCalories] = useState('');
  const [nutrientLevel, setNutrientLevel] = useState('');
  const [fatPercentage, setFatPercentage] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with the form data here, such as sending it to a server
    const foodData = {
      foodName,
      foodType,
      restaurant,
      rating,
      calories,
      nutrientLevel,
      fatPercentage,
    };
    console.log('Form submitted with:', foodData);

    // Navigate to another page (you can replace '/food-result' with your desired route)
    Navigate.push('/food-result', { foodData });
  };

  return (
    <div className="form-container">
      <h1>Food Information Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="foodName">Food Name:</label>
          <input
            type="text"
            id="foodName"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="foodType">Food Type:</label>
          <select
            id="foodType"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            required
          >
            <option value="" disabled>Select food type</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
          </select>
        </div>
        <div>
          <label htmlFor="restaurant">Restaurant:</label>
          <input
            type="text"
            id="restaurant"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
          <label htmlFor="calories">Calories:</label>
          <input
            type="number"
            id="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nutrientLevel">Nutrient Level:</label>
          <input
            type="number"
            id="nutrientLevel"
            value={nutrientLevel}
            onChange={(e) => setNutrientLevel(e.target.value)}
            min="0"
            max="100"
            required
          />
        </div>
        <div>
          <label htmlFor="fatPercentage">Fat Percentage:</label>
          <input
            type="number"
            id="fatPercentage"
            value={fatPercentage}
            onChange={(e) => setFatPercentage(e.target.value)}
            min="0"
            max="100"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
