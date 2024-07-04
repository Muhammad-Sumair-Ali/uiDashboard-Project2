import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
// import "../App.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = {
      ...formData,
      profileImage: imageUrl,
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <>
      <h2 className="text-center mt-12 font-sans">Sign Up and Register Account First</h2>
      <form
        className="m-2 p-4 bg-white shadow-md rounded-lg max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-3 py-2 border rounded-md"
          />
          {imageUrl && (
            <img src={imageUrl} alt="Profile" className="mt-2 h-20 w-20 rounded-full object-cover" />
          )}
        </div>
        <div className="mb-4">
          <NavLink to="/login" className="text-indigo-600 underline">
            I already have an account. Login
          </NavLink>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-3 py-2 rounded-md"
          >
            <b>Sign Up</b>
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
