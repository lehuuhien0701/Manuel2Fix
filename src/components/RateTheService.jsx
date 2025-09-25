import React, { useState } from 'react';

const Validation = () => {
  // Tạo một state object để lưu trữ các câu trả lời
 
  
  return (
    <div className="">
      <h2 className="font-semibold text-[22px] leading-8 text-charcoal mb-4">Rate the service</h2>
      <p className='font-normal text-base leading-6 text-charcoal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo re magna aliqua. Ut enim ad minim veniam quis nostrud.</p>
      
      <div className="grid mt-6">
         <svg width="1161" height="42" viewBox="0 0 1161 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_438_28090)">
          <path d="M28.2041 14.2588L28.4375 14.7275L28.957 14.8027L42.3115 16.7373L32.6514 26.0879L32.2715 26.4561L32.3613 26.9766L34.6357 40.1768L22.6982 33.9404L22.2354 33.6982L21.7725 33.9395L9.82324 40.1768L12.1094 26.9775L12.2002 26.4561L11.8193 26.0879L2.1582 16.7373L15.5137 14.8027L16.0332 14.7275L16.2666 14.2588L22.2354 2.24707L28.2041 14.2588Z" fill="white" stroke="#D9D9D9" stroke-width="2"/>
          </g>
          <g clip-path="url(#clip1_438_28090)">
          <path d="M82.6748 14.2588L82.9082 14.7275L83.4277 14.8027L96.7822 16.7373L87.1221 26.0879L86.7422 26.4561L86.832 26.9766L89.1064 40.1768L77.1689 33.9404L76.7061 33.6982L76.2432 33.9395L64.2939 40.1768L66.5801 26.9775L66.6709 26.4561L66.29 26.0879L56.6289 16.7373L69.9844 14.8027L70.5039 14.7275L70.7373 14.2588L76.7061 2.24707L82.6748 14.2588Z" fill="white" stroke="#D9D9D9" stroke-width="2"/>
          </g>
          <g clip-path="url(#clip2_438_28090)">
          <path d="M137.146 14.2588L137.379 14.7275L137.898 14.8027L151.253 16.7373L141.593 26.0879L141.213 26.4561L141.303 26.9766L143.577 40.1768L131.64 33.9404L131.177 33.6982L130.714 33.9395L118.765 40.1768L121.051 26.9775L121.142 26.4561L120.761 26.0879L111.1 16.7373L124.455 14.8027L124.975 14.7275L125.208 14.2588L131.177 2.24707L137.146 14.2588Z" fill="white" stroke="#D9D9D9" stroke-width="2"/>
          </g>
          <g clip-path="url(#clip3_438_28090)">
          <path d="M191.616 14.2588L191.85 14.7275L192.369 14.8027L205.724 16.7373L196.063 26.0879L195.684 26.4561L195.773 26.9766L198.048 40.1768L186.11 33.9404L185.647 33.6982L185.185 33.9395L173.235 40.1768L175.521 26.9775L175.612 26.4561L175.231 26.0879L165.57 16.7373L178.926 14.8027L179.445 14.7275L179.679 14.2588L185.647 2.24707L191.616 14.2588Z" fill="white" stroke="#D9D9D9" stroke-width="2"/>
          </g>
          <g clip-path="url(#clip4_438_28090)">
          <path d="M246.089 14.2588L246.322 14.7275L246.842 14.8027L260.196 16.7373L250.536 26.0879L250.156 26.4561L250.246 26.9766L252.521 40.1768L240.583 33.9404L240.12 33.6982L239.657 33.9395L227.708 40.1768L229.994 26.9775L230.085 26.4561L229.704 26.0879L220.043 16.7373L233.398 14.8027L233.918 14.7275L234.151 14.2588L240.12 2.24707L246.089 14.2588Z" fill="white" stroke="#D9D9D9" stroke-width="2"/>
          </g>
          <defs>
          <clipPath id="clip0_438_28090">
          <rect width="44.4706" height="42" fill="white"/>
          </clipPath>
          <clipPath id="clip1_438_28090">
          <rect width="44.4706" height="42" fill="white" transform="translate(54.4707)"/>
          </clipPath>
          <clipPath id="clip2_438_28090">
          <rect width="44.4706" height="42" fill="white" transform="translate(108.941)"/>
          </clipPath>
          <clipPath id="clip3_438_28090">
          <rect width="44.4706" height="42" fill="white" transform="translate(163.412)"/>
          </clipPath>
          <clipPath id="clip4_438_28090">
          <rect width="44.4706" height="42" fill="white" transform="translate(217.883)"/>
          </clipPath>
          </defs>
          </svg>

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