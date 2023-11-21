import React from 'react';
import '../styles/Form.css'; // Import the CSS file for Navbar styles

const Form = () => {
  return (
    <div className="form">
      <h2>Feed Back Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" />
        </div>

        <div className="form-group">
          <label htmlFor="dropdown">Sublect</label>
          <select id="dropdown" name="dropdown">
            <option value="option1">C</option>
            <option value="option2">C++</option>
            <option value="option3">PYTHON</option>
            <option value="option1">CSS</option>
            <option value="option2">JS</option>
            <option value="option3">HTML</option>
            <option value="option1">ETHICAL</option>
            <option value="option2">AWS</option>
          </select>
        </div>

        <div className="form-group">
          <label>WHAT DID YOU LIKE IN THE CLASS : </label><br />
          <input type="checkbox" id="checkbox1" name="checkbox1" />
          <label htmlFor="checkbox1">CONTENT</label><br />
          <input type="checkbox" id="checkbox2" name="checkbox2" />
          <label htmlFor="checkbox2">CLARRIFICATION OF DOUBTS</label><br />
          <input type="checkbox" id="checkbox3" name="checkbox3" />
          <label htmlFor="checkbox3">NOTES</label><br />
        </div>

        <div className="form-group">
          <label>HOW WAS THE SESSION :</label><br />
          <input type="radio" id="radio1" name="radio" value="radio1" />
          <label htmlFor="radio1">GOOD</label><br />
          <input type="radio" id="radio2" name="radio" value="radio2" />
          <label htmlFor="radio2">BAD</label><br />
        </div>

        <div className="form-group">
          <label htmlFor="text1">NAME</label>
          <input type="text" id="text1" name="text1" /><br />
          <label htmlFor="text2">RATING </label>
          <input type="text" id="text2" name="text2" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
