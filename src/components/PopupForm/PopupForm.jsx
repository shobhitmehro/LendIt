import React from 'react'
import { useState } from 'react';
import './PopupForm.scss';



const PopupForm = ({ isOpen, onClose }) => {

    const [formData, setFormData] = useState({
        // Define your form fields here
        // For example:
        Name: '',
        Item: '',
        Email: '',
        DateStart: '',
        DateEnd: '',

      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        onClose(); // Close the popup after submission
      };
    
  return (
    <div className={`popup-form ${isOpen ? 'open' : ''}`}>
      <div className="overlay" onClick={onClose}></div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Render your form fields here */}
          <label>
            Name:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          <label>
            Item:
            <input type="text" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={formData.password} onChange={handleChange} />
          </label>
          <label>
            Date Start:
            <input type="text" name="dates" value={formData.password} onChange={handleChange} />
          </label>
          <label>
            Date End:
            <input type="text" name="datee" value={formData.password} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default PopupForm