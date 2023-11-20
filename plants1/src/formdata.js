// FormDataForm.js
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './formdata.css';

const FormDataForm = () => {
  const { handleSubmit, control } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    // Handle form submission logic
    console.log('Form data submitted:', data);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Date and Day:</label>
        <Controller
          name="dateAndDay"
          control={control}
          render={({ field }) => <input type="datetime-local" {...field} />}
        />
      </div>

      <div>
        <label>Payment:</label>
        <Controller
          name="Dropdown"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="Hydrangea">UPI</option>
              <option value="Impatiens">CARD</option>
              <option value="Truncata">CASH</option>
            </select>
          )}
        />
      </div>

      <div>
        <label>Select:</label>
        <Controller
          name="paymentOptions"
          control={control}
          render={({ field }) => (
            <>
              <label>
                <input type="checkbox" value="Hydrangea" {...field} /> Hydrangea
              </label>
              <label>
                <input type="checkbox" value="Impatiens" {...field} /> Impatiens
              </label>
              <label>
                <input type="checkbox" value="Truncata" {...field} /> Truncata
              </label>
              <label>
                <input type="checkbox" value="Andean Lupin" {...field} /> Andean Lupin
              </label>
            </>
          )}
        />
      </div>

      <div>
        <label>Address:</label>
        <Controller
          name="radioOptions"
          control={control}
          render={({ field }) => (
            <>
              <label>
                <input type="radio" value="Option 1" {...field} /> House
              </label>
              <label>
                <input type="radio" value="Option 2" {...field} /> Office
              </label>
            </>
          )}
        />
      </div>

      <div>
        <label>Address:</label>
        <Controller
          name="Address1"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
        <Controller
          name="Address2"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>

      <button type="submit">Submit</button>

      {submitted && <p>Thank you for submitting the form!</p>}
    </form>
  );
};

export default FormDataForm;