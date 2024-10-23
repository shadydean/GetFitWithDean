import React from 'react';

const CourseCard = ({ title, description, onBuy, isRegistered, onSwitch }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg transition-transform duration-200 hover:scale-105">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      {isRegistered ? (
        <button
          onClick={onSwitch}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-200 hover:bg-blue-600"
        >
          Switch Course
        </button>
      ) : (
        <button
          onClick={onBuy}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded transition-colors duration-200 hover:bg-green-600"
        >
          Buy Now
        </button>
      )}
    </div>
  );
};

export default CourseCard;