import React from 'react';
import './Form.css'

class SurveyForm extends React.Component {
  render() {
    return (
      <div id="Contact">
      <div className='contact-container'>
      <div className="container">
      <div className='head-of-form'>Contact Form</div>
        <form action="">
          <label htmlFor="fullName">Full Name</label><br />
          <input className="form-text" type="text" id="fullName" /><br /><br />
          <label htmlFor="mobileNumber">Mobile Number</label><br />
          <input className="form-text" type="text" id="mobileNumber" /><br /><br />
          <label htmlFor="email">Email</label><br />
          <input className="form-text" type="email" id="email" /><br /><br />
          <label htmlFor="dob">Date of birth</label><br />
          <input className="form-text" type="date" name="dob" id="dob" /><br /><br />
          <label htmlFor="contactMethod">Contact Method</label><br /><br></br>
          <input type="checkbox" name="contactMethod" id="mobile" />
          <label htmlFor="mobile">Phone Call</label><br /><br></br>
          <input type="checkbox" name="contactMethod" id="email" />
          <label htmlFor="email">Email</label><br /><br></br>
          <input type="checkbox" name="contactMethod" id="whatsapp" />
          <label htmlFor="whatsapp">WhatsApp Number</label><br /><br />
          <label htmlFor="day">Day you are free to contact</label><br /><br></br>
          <select className="Day-form" name="day" id="day">
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select><br /><br />
          <label htmlFor="gender">Gender</label><br /><br></br>
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">Male</label><br></br><br></br>
          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">Female</label><br /><br />
          <button type="submit">Submit Form</button>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default SurveyForm;
