import React from 'react'; 
import DatePickerComponent from '../DatePickerComponent.jsx';

const SkillsForm = () => {
  return (
    <div className="">
        <h2 className="text-[22px] leading-8 font-semibold text-gray-800 mb-6">Pro account</h2>  
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6"> 
            <div>
                <label htmlFor="registration-number" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                    Business registration number
                </label>
                <input 
                    type="number" 
                    id="registration-number" 
                    name="last-name" 
                    placeholder="0912345678" 
                   
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
            </div>

            <div>
                <label htmlFor="entity-name" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                    Entity name
                </label>
                <input 
                    type="text" 
                    id="entity-name" 
                    name="entity-name" 
                    placeholder="Entity Name" 
                    
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
            </div>
        </div>

        <div className='pb-10 mb-10 border-b border-[#D9D9D9]'>
            <label htmlFor="phone-number" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                Legal status
            </label>
            <div className='flex flex-wrap gap-3'>
                <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                    <input
                    type="radio"
                    id="status"
                    name="status"
                    className="peer hidden"
                    />
                    <div className="custom-radio-button mr-[10px] relative"></div>
                    <label htmlFor="status" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                    Status
                    </label>
                </div>

                <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                    <input
                    type="radio"
                    id="status2"
                    name="status"
                    className="peer hidden"
                    />
                    <div className="custom-radio-button mr-[10px] relative"></div>
                    <label htmlFor="status2" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                    Status
                    </label>
                </div> 
                <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                    <input
                    type="radio"
                    id="status3"
                    name="status"
                    className="peer hidden"
                    />
                    <div className="custom-radio-button mr-[10px] relative"></div>
                    <label htmlFor="status3" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                    Status
                    </label>
                </div> 
            </div>
        </div> 
        <div className="pb-10 mb-10 border-b border-[#D9D9D9]"> 
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-dashed border-2 border-[#D9D9D9] rounded-xl h-[270px] items-center">
            <div className="space-y-1 text-center">
                <svg className='inline mb-6' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.6" y="0.6" width="46.8" height="46.8" rx="9" fill="white"/>
                <rect x="0.6" y="0.6" width="46.8" height="46.8" rx="9" stroke="#272727" stroke-width="1.2"/>
                <path d="M33 27V28.2C33 29.8802 33 30.7202 32.673 31.362C32.3854 31.9265 31.9265 32.3854 31.362 32.673C30.7202 33 29.8802 33 28.2 33H19.8C18.1198 33 17.2798 33 16.638 32.673C16.0735 32.3854 15.6146 31.9265 15.327 31.362C15 30.7202 15 29.8802 15 28.2V27M29 20L24 15M24 15L19 20M24 15V27" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <div className="md:flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 font-medium text-base leading-6 text-primary">
                    <span>Click to upload</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1 font-medium text-base leading-6 text-charcoal">or drag and drop your files here</p>
                </div>
                <p className="font-normal text-base leading-6 text-charcoal">
                PDF, PNG, or JPG (max 100mb)
                </p>
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