import React from 'react';  
import DatePickerComponentBgnone from '../DatePickerComponentBgnone.jsx';
const SkillsForm = () => {
  return (
    <div className="">
        <h2 className="text-[22px] leading-8 font-semibold text-gray-800 mb-6">Subscription</h2>  
        <div className='bg-white rounded-[12px] shadow-[0px_0px_30px_rgba(0,0,0,0.08)] p-10'>
             <div className='font-semibold text-[22px] leading-8 text-charcoal flex justify-between items-center mb-8'>
                <div>
                    Subscription name is here
                </div>
                <div className='text-right'>
                    100EUR p/m
                </div>
             </div>
             <div className='font-medium text-base leading-6 text-charcoal flex gap-3 mb-6 pb-6 border-b border-[#D9D9D9]'>
                <div className='rounded-xl bg-[#FBF8F4] flex items-center justify-between h-[72px] px-8 w-[50%]'>
                    <span>
                        Start date
                    </span> 
                    <DatePickerComponentBgnone />
                </div>
                <div className='rounded-xl bg-[#FBF8F4] flex items-center justify-between h-[72px] px-8 w-[50%]'>
                    <span>
                        End date
                    </span> 
                    <DatePickerComponentBgnone />
                </div>
             </div>
             <div className='flex items-center gap-3 justify-between mb-6 pb-6 border-b border-[#D9D9D9] font-medium text-base leading-6 text-charcoal'>
                <div>
                    This plan will auto renew every 30 days
                </div>
                <div>
                    <div className='flex items-center'>
                        <input
                            type="checkbox"  
                            id="male"
                            name="gender"  
                            className="peer2 hidden" 
                            
                        />
                        
                    
                        <label 
                            htmlFor="male" 
                            className="custom-checkbox-button2 mr-[10px] relative flex items-center justify-center flex-shrink-0"
                        > 
                            <svg 
                                className="absolute h-4 w-4 text-white opacity-0 transition-opacity duration-200" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </label>
                        
                        
                        <label htmlFor="male" className="font-medium text-base text-charcoal cursor-pointer select-none">
                        Disable auto-renewal
                        </label>
                    </div>
                </div>
             </div>


             <div className="text-right">
                <button 
                type="submit" 
                className="w-full sm:w-auto bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-7 rounded-[6px]"
                >
                Select this plan
                </button>
            </div>
        </div>
         
       
    </div> 
  );
};

export default SkillsForm;