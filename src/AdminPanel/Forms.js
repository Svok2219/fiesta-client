import React, { useState } from 'react';

// T-Shirt Form
const TShirtForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, image });
    setTitle('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold"> T-Shirt Section</h2>
      <div className="my-4">
        <label htmlFor="title" className="block mb-2 text-lg font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="my-4">
        <label htmlFor="description" className="block mb-2 text-lg font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="my-4">
        <label htmlFor="image" className="block mb-2 text-lg font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 mt-4 text-lg font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700"
      >
        Add T-Shirt
      </button>
    </form>
  );
};

// Food Form
const FoodForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, image });
    setName('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold">Add Section</h2>
      <div className="my-4">
        <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="my-4">
        <label htmlFor="description" className="block mb-2 text-lg font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="my-4">
        <label htmlFor="image" className="block mb-2 text-lg font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 mt-4 text-lg font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700"
      >
        Add Food
      </button>
    </form>
  );
};

// Beverages Form
const BeveragesForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, image });
    setName('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold">Add Section</h2>
      <div className="my-4">
        <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="my-4">
        <label htmlFor="description" className="block mb-2 text-lg font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="my-4">
        <label htmlFor="image" className="block mb-2 text-lg font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 mt-4 text-lg font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700"
      >
        Add Beverage
      </button>
    </form>
  );
};

export { TShirtForm, FoodForm, BeveragesForm };
