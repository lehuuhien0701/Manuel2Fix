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
    </div> 
  );
};

export default SkillsForm;