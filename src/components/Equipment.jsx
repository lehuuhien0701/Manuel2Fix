import React, { useState } from 'react';

const RadioEquipmentList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 'cat1', label: 'Equipment item is here' },
    { id: 'cat2', label: 'Equipment item is over here' },
    { id: 'cat3', label: 'Equipment item' },
    { id: 'cat4', label: 'Equipment item is here' },
    { id: 'cat5', label: 'Equipment item is right over here' },
    { id: 'cat6', label: 'Equipment item is here' },
    { id: 'cat7', label: 'Equipment item is right over here' }, 
    { id: 'cat8', label: 'Equipment item is here' },
    { id: 'cat9', label: 'Equipment item is here' },
    { id: 'cat10', label: 'Equipment item is here' },
    { id: 'cat11', label: 'Equipment item' },
    { id: 'cat12', label: 'Equipment item' },
    { id: 'cat13', label: 'Equipment item' },
    { id: 'cat14', label: 'Equipment item is here' },
    { id: 'cat15', label: 'Equipment item is here' },
  ];

  const handleRadioChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10 pb-8 border-b border-[#D9D9D9]">Job types</h2>
        <div className='mb-10 pb-10 border-b border-[#D9D9D9]'>
        {categories.map((category) => (
          <label 
            key={category.id} 
            className="inline-block mb-3 mr-3 space-x-2 border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          >
            <input
              type="radio"
              name="sub-category"
              value={category.id}
              checked={selectedCategory === category.id}
              onChange={handleRadioChange}
              className="mr-1 w-5 h-5 accent-[#228EA9]"
            />
            <span className="text-gray-700">{category.label}</span>
          </label>
        ))}
        </div>
        <div className="flex justify-between">
            <button 
            type="text" 
            className="border border-primary w-full sm:w-auto bg-transparent hover:bg-charcoal text-primary font-semibold text-[16px] py-[11px] px-7 rounded-[6px]"
            >
            back
            </button>
            <button 
            type="submit" 
            className="w-full sm:w-auto bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-7 rounded-[6px]"
            >
            Next
            </button>
        </div>
    </div> 
  );
};

export default RadioEquipmentList;