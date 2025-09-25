import React, { useState } from 'react';

const Validation = () => {
  // Tạo một state object để lưu trữ các câu trả lời
 
  
  return (
    <div className="">
      <h2 className="font-semibold text-[22px] leading-8 text-charcoal mb-4">Rate the service (Optional)</h2>
      <p className='font-normal text-base leading-6 text-charcoal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo re magna aliqua. Ut enim ad minim veniam quis nostrud.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
          <label htmlFor="hours" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
              Add extra hours
          </label>
          <input 
              type="text" 
              id="hours" 
              name="hours" 
              placeholder="4 hours" 
              className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
          />
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
          Complete
          </button>
      </div>
    </div> 
  );
};

export default Validation;