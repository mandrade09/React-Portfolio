import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = (e) => {
    if (!formData[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: 'This field is required'
      });
    } else {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }

    if (e.target.name === 'email' && formData.email) {
      const emailValid = /\S+@\S+\.\S+/.test(formData.email);
      if (!emailValid) {
        setErrors({
          ...errors,
          email: 'Invalid email address'
        });
      }
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Message:</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
