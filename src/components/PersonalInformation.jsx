import React from 'react'; 
import DatePickerComponent from '../DatePickerComponent.jsx';

const SkillsForm = () => {
  return (
    <div className="">
        <h2 className="text-[22px] leading-8 font-semibold text-gray-800 mb-6">Personal information</h2>
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6"> 
            <div>
                <label htmlFor="last-name" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                    Last Name
                </label>
                <input 
                    type="text" 
                    id="last-name" 
                    name="last-name" 
                    placeholder="Last Name" 
                   
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
            </div>

            <div>
                <label htmlFor="first-name" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                    First Name
                </label>
                <input 
                    type="text" 
                    id="first-name" 
                    name="first-name" 
                    placeholder="First Name" 
                    
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6"> 
            <div>
                <label htmlFor="email" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                    Email
                </label>
                <input 
                    type="email"  
                    id="email" 
                    name="email" 
                    placeholder="example@email.com" 
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
            </div>

          
            <div>
                <label htmlFor="phone-number" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                    Phone number
                </label>
                <input 
                    type="tel" 
                    id="phone-number" 
                    name="phone-number" 
                    placeholder="(123) 456-7890" 
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 mb-10 border-b border-[#D9D9D9]">
            <div>
                <label htmlFor="phone-number" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                    Date of birth
                </label>
                <DatePickerComponent />
            </div>    
            <div>
                <label htmlFor="phone-number" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                    Gender
                </label>
                <div className='flex flex-wrap gap-3'>
                    <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                        <input
                        type="radio"
                        id="male"
                        name="radio-group2"
                        className="peer hidden"
                        />
                        <div className="custom-radio-button mr-[10px] relative"></div>
                        <label htmlFor="male" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                        Male
                        </label>
                    </div>

                    <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                        <input
                        type="radio"
                        id="female"
                        name="radio-group2"
                        className="peer hidden"
                        />
                        <div className="custom-radio-button mr-[10px] relative"></div>
                        <label htmlFor="female" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                        Female
                        </label>
                    </div> 
                    <div className="flex items-center border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                        <input
                        type="radio"
                        id="other"
                        name="radio-group2"
                        className="peer hidden"
                        />
                        <div className="custom-radio-button mr-[10px] relative"></div>
                        <label htmlFor="other" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                        Other
                        </label>
                    </div> 
                </div>
            </div> 
        </div>
        <div className="grid grid-cols-1 pb-10 mb-10 border-b border-[#D9D9D9]">
            <label htmlFor="billingaddress" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                Billing address
            </label>
            <input 
                type="text" // Sử dụng type="tel" cho số điện thoại
                id="billingaddress" 
                name="billingaddress" 
                placeholder="Billing address" 
                className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
            
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 mb-10 border-b border-[#D9D9D9]"> 
            <div>
                <label htmlFor="password" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                    Password
                </label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
            </div>

          
            <div>
                <label htmlFor="confirm-password" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                    Confirm Password
                </label>
                <input 
                    type="password"  
                    id="confirm-password" 
                    name="confirm-password" 
                    placeholder="Confirm your password" 
                    className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                />
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