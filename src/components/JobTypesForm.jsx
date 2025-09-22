import React, { useState } from 'react';

const RadioList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 'cat1', label: 'Category is here' },
    { id: 'cat2', label: 'Category is here' },
    { id: 'cat3', label: 'Category is here' },
    { id: 'cat4', label: 'Category is here' },
    { id: 'cat5', label: 'Category is here' },
    { id: 'cat6', label: 'Category is here' },
    { id: 'cat7', label: 'Category is here' },
  ];

  const handleRadioChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10 pb-8 border-b border-[#D9D9D9]">Job types</h2>
        <div className='min-h-[600px]'>
        <label htmlFor="sub-category" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                Sub-categories
        </label>    
        <div className='grid grid-cols-4 gap-3'>
        {categories.map((category) => (
          <label 
            key={category.id} 
            className="flex items-center space-x-2 border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          >
            <input
              type="radio"
              name="sub-category"
              value={category.id}
              checked={selectedCategory === category.id}
              onChange={handleRadioChange}
              className="mr-1 w-[18px] h-[18px] accent-[#228EA9]"
            />
            <span className="font-medium text-base leading-6 text-neutral-700">{category.label}</span>
          </label>
        ))}
        </div>
        </div>
        <div className="flex justify-between mt-10 pt-10 border-t border-[#D9D9D9]">
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

export default RadioList;