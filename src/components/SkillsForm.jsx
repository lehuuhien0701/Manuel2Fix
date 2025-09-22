import React from 'react'; 

const SkillsForm = () => {
  return (
    <div className="">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10 pb-8 border-b border-[#D9D9D9]">Skills</h2>
        
        {/* Sub-category & Name of Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 mb-10 border-b border-[#D9D9D9]">
            <div>
            <label htmlFor="sub-category" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                Select a sub-category
            </label>
            <select 
                id="sub-category" 
                name="sub-category" 
                className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
            >
                <option>Sub-category</option>
            </select>
            </div>
            <div>
            <label htmlFor="service-name" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                Name of the service
            </label>
            <input 
                type="text" 
                id="service-name" 
                name="service-name" 
                placeholder="Address" 
                className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
            </div>
        </div>
        
        {/* Banner Image Upload */}
        <div className="mb-10 pb-10 border-b border-[#D9D9D9]">
            <label className="block font-medium text-base leading-6 text-neutral-700 mb-1">
            Banner image
            </label>
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
        
        {/* Tarif per hour */}
        <div className="mb-10 pb-10 border-b border-[#D9D9D9]">
            <label htmlFor="tariff" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
            Tarif per hour (EUR)
            </label>
            <select 
            id="tariff" 
            name="tariff" 
            className="mt-1 block w-[62%] px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
            >
            <option>Sub-category</option>
            </select>
        </div>

        {/* Next Button */}
        <div className="text-right">
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

export default SkillsForm;