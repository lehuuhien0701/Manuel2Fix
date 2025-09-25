import React, { useState } from 'react';

const RadioEquipmentList = () => {
  

  return (
    <div className="">
        <h2 className="text-[22px] leading-8 font-semibold text-gray-800 mb-10 pb-8 border-b border-[#D9D9D9]">Job types</h2>
        <div className='min-h-[600px]'>
        
          
     
        <div className='flex flex-wrap gap-3'>
          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-1"
              name="radio-group"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-1" className="font-medium text-base text-neutral-700 cursor-pointer">
              Equipment item is here
            </label>
          </div>
          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-2"
              name="radio-group"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-2" className="font-medium text-base text-neutral-700 cursor-pointer">
              Equipment item is over here
            </label>
          </div>
          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-3"
              name="radio-group"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-3" className="font-medium text-base text-neutral-700 cursor-pointer">
              Equipment item
            </label>
          </div>


          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-4"
              name="radio-group"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-4" className="font-medium text-base text-neutral-700 cursor-pointer">
              Equipment item is here
            </label>
          </div>
          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-5"
              name="radio-group"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-5" className="font-medium text-base text-neutral-700 cursor-pointer">
              Equipment item is right over here
            </label>
          </div>
          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-6"
              name="radio-group"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-6" className="font-medium text-base text-neutral-700 cursor-pointer">
              Equipment item is here
            </label>
          </div>  
        </div>



        </div>
        <div className="flex justify-between mt-10 pt-10 border-t border-[#D9D9D9] gap-8">
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
            Save
            </button>
        </div>
    </div> 
  );
};

export default RadioEquipmentList;