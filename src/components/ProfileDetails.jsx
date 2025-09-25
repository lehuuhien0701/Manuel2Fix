import React from 'react'; 

const ProfileDetails = () => {
  return (
    <div className="">
        <h2 className="text-[22px] leading-8 font-semibold text-gray-800 mb-10 pb-8 border-b border-[#D9D9D9]">Profile</h2>
        
        {/* Sub-category & Name of Service */}
        <div className="pb-10 mb-10 border-b border-[#D9D9D9]">
            <div>
                <label htmlFor="diploma" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                    Diploma
                </label>
                <input 
                    type="text" 
                    id="diploma" 
                    name="diploma" 
                    placeholder="Diploma name" 
                    className="w-[62%] mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                /> 
            </div> 
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>
                <label htmlFor="experience" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                    Experience
                </label>
                <input 
                    type="text" 
                    id="experience" 
                    name="experience" 
                    placeholder="Experience" 
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                /> 
            </div>
            <div>
                <label htmlFor="years-experience" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                    Years experience
                </label>
                <input 
                    type="text" 
                    id="years-experience" 
                    name="years-experience" 
                    placeholder="Diploma name" 
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                /> 
            </div>
            
        </div>

        <div className="mb-5">
            <div>
                <label htmlFor="commitments" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                    Commitments
                </label>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10'>
                    <select 
                    id="commitments" 
                    name="commitments" 
                    className="mb-6 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                    >
                    <option>Select</option>
                    </select>
                    <select 
                    id="commitments" 
                    name="commitments" 
                    className="mb-6 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                    >
                    <option>SSelect</option>
                    </select>
                    <select 
                    id="commitments" 
                    name="commitments" 
                    className="mb-6 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                    >
                    <option>Select</option>
                    </select>
                </div>
            </div> 
        </div>
        <div className="mb-10 ">
            <div>
                <label htmlFor="commitments" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                    About me
                </label>
                <div className=''>
                    <textarea placeholder="Description" rows="5" className="w-full px-4 py-3 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228EA9]"></textarea>
                </div>
            </div> 
        </div> 

        {/* Next Button */}
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

export default ProfileDetails;