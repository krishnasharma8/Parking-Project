// import React from 'react';
// import '../Styles/SignUp.css';

// const SignUp = () => {
//     return (
//         <div class="container1">
//             <div class="signup-box">
//                 <h2>Sign Up</h2>
//                 <form>
//                     <div class="input-box">
//                         <input type="text" name="name" required />
//                         <label>Name</label>
//                     </div>
//                     <div class="input-box">
//                         <input type="email" name="email" required />
//                         <label>Email</label>
//                     </div>
//                     <div class="input-box">
//                         <input type="tel" name="phone" required pattern="[0-9]{10}" />
//                         <label>Phone Number</label>
//                     </div>
//                     <div class="input-box">
//                         <input type="password" name="password" required />
//                         <label>Password</label>
//                     </div>
//                     <div class="input-box">
//                         <label class="role-label">Select Role:</label>
//                         <select name="role" required>
//                             <option value="user">User</option>
//                             <option value="admin">Admin</option>
//                         </select>
//                     </div>
//                     <button type="submit" class="btn">Sign Up</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignUp;





import React, { useState } from 'react';
import '../Styles/SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    role: 'user', // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add logic to send the form data to the server here
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;