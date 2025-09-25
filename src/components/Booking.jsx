import React from 'react'; 

const Booking = () => {
  return (
    <div className="">
        <h2 className="font-semibold text-[22px] leading-8 text-charcoal mb-4">Booking a service</h2>
        <p className='font-normal text-base leading-6 text-charcoal'>In order to make a booking, please provide us with your payment details. The payment will be held within the system until the work completed has been validated. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* Sub-category & Name of Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
            <label htmlFor="iban" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                IBAN
            </label>
            <input 
                type="text" 
                id="iban" 
                name="iban" 
                placeholder="1234-29287-009822-092" 
                className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
            </div>
            <div>
            <label htmlFor="bic-swift" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                BIC / SWIFT
            </label>
            <input 
                type="text" 
                id="bic-swift" 
                name="bic-swift" 
                placeholder="First name" 
                className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-10 pb-10 border-b boder-[#d9d9d9]">
            <div>
            <label htmlFor="email" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                Account holder name
            </label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="name@email.com" 
                className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
            </div>
            <div>
            <label htmlFor="tel" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                Phone number
            </label>
            <input 
                type="tel" 
                id="tel" 
                name="tel" 
                placeholder="+44 21 222 2233" 
                className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
            </div>
        </div>
         
         

        {/* Next Button */}
        <div className="text-right">
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

export default Booking;