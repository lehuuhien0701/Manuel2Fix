import React, { useState } from 'react';

const Validation = () => {
  // Tạo một state object để lưu trữ các câu trả lời
  const [answers, setAnswers] = useState({
    taskCompleted: '',
    onTime: '',
    serviceQuality: '',
    politeness: '',
  });

  // Một hàm xử lý duy nhất để cập nhật state object
  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };
  
  return (
    <div className="">
      <h2 className="font-semibold text-[22px] leading-8 text-charcoal mb-4">Validate completed job aaa</h2>
      <p className='font-normal text-base leading-6 text-charcoal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo re magna aliqua. Ut enim ad minim veniam quis nostrud.</p>
      
      <div className="grid mt-6">
        <label className="block font-medium text-base leading-6 text-neutral-700 mb-1">Was the task completed as expected?</label> 
        <div className='flex flex-wrap gap-3 mb-6'>
          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-2"
              name="radio-group2"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-2" className="font-medium text-base text-neutral-700 cursor-pointer">
              Yes
            </label>
          </div>

          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-3"
              name="radio-group2"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-3" className="font-medium text-base text-neutral-700 cursor-pointer">
              No
            </label>
          </div> 
        </div>
        
        <label className="block font-medium text-base leading-6 text-neutral-700 mb-1">Did the provider arrive on time?</label> 
        <div className='flex flex-wrap gap-3 mb-6'>
          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-4"
              name="radio-group4"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-4" className="font-medium text-base text-neutral-700 cursor-pointer">
              Yes
            </label>
          </div>

          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-5"
              name="radio-group4"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-5" className="font-medium text-base text-neutral-700 cursor-pointer">
              No
            </label>
          </div>
        </div>
        
        <label className="block font-medium text-base leading-6 text-neutral-700 mb-1">How would you rate the quality of the service?</label> 
        <div className='flex flex-wrap gap-3 mb-6'>
          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-6"
              name="radio-group6"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-6" className="font-medium text-base text-neutral-700 cursor-pointer">
              Yes
            </label>
          </div>

          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-7"
              name="radio-group6"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-7" className="font-medium text-base text-neutral-700 cursor-pointer">
              No
            </label>
          </div>
        </div>
        
        <label className="block font-medium text-base leading-6 text-neutral-700 mb-1">Was the provider polite and professional?</label> 
        <div className='flex flex-wrap gap-3 mb-6'>
          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-8"
              name="radio-group8"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-8" className="font-medium text-base text-neutral-700 cursor-pointer">
              Yes
            </label>
          </div>

          <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
            <input
              type="radio"
              id="radio-option-9"
              name="radio-group8"
              className="peer hidden"
            />
            <div className="custom-radio-button mr-[10px] relative"></div>
            <label htmlFor="radio-option-9" className="font-medium text-base text-neutral-700 cursor-pointer">
              No
            </label>
          </div>
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
          Save & Next
          </button>
      </div>
    </div> 
  );
};

export default Validation;