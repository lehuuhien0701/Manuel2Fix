import React from 'react'; 

const SkillsForm = () => {
  return (
    <div className="">
        <h2 className="text-[22px] leading-8 font-semibold text-gray-800 mb-10 pb-8 border-b border-[#D9D9D9]">Notifications & general settings</h2>
        
         
        <div className="grid grid-cols-1 gap-10 pb-10 mb-10 border-b border-[#D9D9D9]">
            <div>
                <label htmlFor="language" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                    Language selector
                </label>
                <select 
                    id="sub-category" 
                    name="sub-category" 
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                >
                    <option>English</option>
                </select>
            </div>
             
        </div>
        <div className="grid grid-cols-1 gap-10 pb-10 mb-10 border-b border-[#D9D9D9]">
            <div>
                <h4 className='font-semibold text-[20px] leading-[26px] text-charcoal mb-3'>Smartphone notifications</h4>
                <label htmlFor="language" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                    Proposals for my service requests
                </label>
                <div className='flex flex-wrap gap-3'>
                    <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                        <input
                        type="radio"
                        id="enable"
                        name="radio-group1"
                        className="peer hidden"
                        />
                        <div className="custom-radio-button mr-[10px] relative"></div>
                        <label htmlFor="enable" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                        Enable
                        </label>
                    </div>

                    <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                        <input
                        type="radio"
                        id="disable"
                        name="radio-group1"
                        className="peer hidden"
                        />
                        <div className="custom-radio-button mr-[10px] relative"></div>
                        <label htmlFor="disable" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                        Disable
                        </label>
                    </div>
                    
                </div>
            </div>
             
        </div>
        <div className="grid grid-cols-1 gap-10 pb-10 mb-10 border-b border-[#D9D9D9]">
            <div>
                <h4 className='font-semibold text-[20px] leading-[26px] text-charcoal mb-3'>Email notifications</h4>
                <label htmlFor="language" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                    Partner promotions
                </label>
                <div className='flex flex-wrap gap-3'>
                    <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                        <input
                        type="radio"
                        id="enable2"
                        name="radio-group2"
                        className="peer hidden"
                        />
                        <div className="custom-radio-button mr-[10px] relative"></div>
                        <label htmlFor="enable2" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                        Enable
                        </label>
                    </div>

                    <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                        <input
                        type="radio"
                        id="disable2"
                        name="radio-group2"
                        className="peer hidden"
                        />
                        <div className="custom-radio-button mr-[10px] relative"></div>
                        <label htmlFor="disable2" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                        Disable
                        </label>
                    </div>
                    
                </div>
            </div>
             
        </div> 
        
        <div className="text-right">
            <button 
            type="submit" 
            className="w-full sm:w-auto bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-7 rounded-[6px]"
            >
            Save changes
            </button>
        </div>

        <h2 className="text-[22px] leading-8 font-semibold text-gray-800 mb-6">Notifications & general settings 2</h2>
        <div className="grid grid-cols-2 gap-10 pb-10 mb-10 border-b border-[#D9D9D9]">
            <div>
                <label htmlFor="language" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                    Language selector
                </label>
                <select 
                    id="sub-category" 
                    name="sub-category" 
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                >
                    <option>English</option>
                </select>
            </div>
            <div>
               <label htmlFor="language" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                    Enable, disable notifications for:
                </label> 
               <div className='flex items-center gap-3'>
                    <div className='flex items-center rounded-md border border-[#D9D9D9] p-[11px]'>
                        <input
                            type="checkbox"  
                            id="email"
                            name="email"  
                            className="peer2 hidden" 
                            
                        /> 
                        <label 
                            htmlFor="email" 
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
                        
                        
                        <label htmlFor="email" className="font-medium text-base text-charcoal cursor-pointer select-none">
                        Email
                        </label>
                    </div>
                    <div className='flex items-center rounded-md border border-[#D9D9D9] p-[11px]'>
                        <input
                            type="checkbox"  
                            id="push-notifications"
                            name="push-notifications"  
                            className="peer2 hidden" 
                            
                        /> 
                        <label 
                            htmlFor="push-notifications" 
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
                        
                        
                        <label htmlFor="push-notifications" className="font-medium text-base text-charcoal cursor-pointer select-none">
                        Push notifications
                        </label>
                    </div>
                </div> 
                
            </div>
             
        </div>

        <h2 className="text-[22px] leading-8 font-semibold text-gray-800 mb-6">Customise your notifications</h2>
        <div>
            <div className='flex items-center mb-[10px]'>
                <input
                    type="checkbox"  
                    id="check1"
                    name="push-notifications"  
                    className="peer2 hidden" 
                    
                /> 
                <label 
                    htmlFor="check1" 
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
                
                
                <label htmlFor="check1" className="font-normal text-base text-charcoal cursor-pointer select-none">
                New request / Job offers: Alerts for every new available assignment.
                </label>
            </div>
            <div className='flex items-center mb-[10px]'>
                <input
                    type="checkbox"  
                    id="check2"
                    name="push-notifications"  
                    className="peer2 hidden" 
                    
                /> 
                <label 
                    htmlFor="check2" 
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
                
                
                <label htmlFor="check2" className="font-normal text-base text-charcoal cursor-pointer select-none">
                Messages and communication: Alerts for each new message in public or private chats.
                </label>
            </div>
            <div className='flex items-center mb-[10px]'>
                <input
                    type="checkbox"  
                    id="check3"
                    name="push-notifications"  
                    className="peer2 hidden" 
                    
                /> 
                <label 
                    htmlFor="check3" 
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
                
                
                <label htmlFor="check3" className="font-normal text-base text-charcoal cursor-pointer select-none">
                Job status updates: Notifications for key stages (quote accepted, job booked, provide confirmed, job completed etc.)
                </label>
            </div>
            <div className='flex items-center mb-[10px]'>
                <input
                    type="checkbox"  
                    id="check4"
                    name="push-notifications"  
                    className="peer2 hidden" 
                    
                /> 
                <label 
                    htmlFor="check4" 
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
                
                
                <label htmlFor="check4" className="font-normal text-base text-charcoal cursor-pointer select-none">
                Reminders and deadlines: Alerts for upcoming appointments and task follow-ups.
                </label>
            </div>
        </div>


    </div> 
  );
};

export default SkillsForm;