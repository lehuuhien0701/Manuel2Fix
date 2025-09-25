import React, { useState } from 'react'; 

const Validation = () => {
  const [validationStatus, setValidationStatus] = useState('');

  const handleValidationChange = (event) => {
    setValidationStatus(event.target.value);
  };
  
  return (
    <div className="">
      <h2 className="font-semibold text-[22px] leading-8 text-charcoal mb-4">Validate completed job</h2>
      <p className='font-normal text-base leading-6 text-charcoal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo re magna aliqua. Ut enim ad minim veniam quis nostrud.</p>
      
      <div className="grid mt-6">
          <label className="block font-medium text-base leading-6 text-neutral-700 mb-1">Validate this job as completed</label>  
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
                  Complete
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
                  Not complete
                </label>
              </div> 
          </div>
          <div className='flex justify-self-start flex-wrap gap-3'>
            <label className='bg-lightblue rounded-xl py-2 px-4 flex items-center gap-[10px] mt-2'>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.9173 8.375L12.5632 23.7292L5.58398 16.75" stroke="#228EA9" stroke-width="2.79167" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              This job has been validated as completed
            </label>
            <label className='bg-[#F5DBDB] rounded-xl py-2 px-4 flex items-center gap-[10px] mt-2'>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.125 8.375L8.375 25.125M8.375 8.375L25.125 25.125" stroke="#E65656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
              This job has not been validated as completed
            </label>
            
            
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