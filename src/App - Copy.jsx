const App = () => {
  return (
    <main className="relative">
     
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-[65px] leading-[78px] font-bold text-gray-900 mb-6">Activity overview</h2> 
        <button className="bg-primary hover:bg-secondary text-white font-semibold text-[16px] py-3 px-6 rounded-[10px]"> 
          Request a service
        </button>
      </div>
      <div className="w-full md:w-7/12 lg:w-1/3 absolute top-0 right-0">
          <img 
            src="/v2-bg-dot.svg" 
            alt=""
            className=""
          /> 
        </div>
    </section>
    <section className="bg-[#F1EDE6]">
        <article className="mx-auto px-4 py-20 container">
        
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Providers</h2> 
            <button className="bg-primary hover:bg-secondary text-white font-semibold text-[16px] py-3 px-6 rounded-[10px]"> 
              View all providers
            </button>
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
            
              <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
              
                <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
              </div>

              <div className="p-4">
                
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-[22px] leading-8 text-secondary">Jill</h3>
                  <span className="font-semibold text-base leading-normal text-secondary">100EUR ph</span>
                </div>

              
                <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                  <svg width="73" height="11" viewBox="0 0 73 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_393_335)">
                  <path d="M12.1212 4.16615L7.93169 3.58789L6.06061 0L4.18952 3.58789L0 4.16615L3.03208 6.96275L2.31489 10.9091L6.06061 9.04582L9.80277 10.9091L9.08913 6.96275L12.1212 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip1_393_335)">
                  <path d="M27.2423 4.16615L23.0528 3.58789L21.1817 0L19.3106 3.58789L15.1211 4.16615L18.1532 6.96275L17.436 10.9091L21.1817 9.04582L24.9239 10.9091L24.2102 6.96275L27.2423 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip2_393_335)">
                  <path d="M42.3636 4.16615L38.1741 3.58789L36.303 0L34.432 3.58789L30.2424 4.16615L33.2745 6.96275L32.5573 10.9091L36.303 9.04582L40.0452 10.9091L39.3316 6.96275L42.3636 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip3_393_335)">
                  <path d="M57.4847 4.16615L53.2952 3.58789L51.4241 0L49.553 3.58789L45.3635 4.16615L48.3956 6.96275L47.6784 10.9091L51.4241 9.04582L55.1663 10.9091L54.4527 6.96275L57.4847 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip4_393_335)">
                  <path d="M72.6061 4.16615L68.4166 3.58789L66.5455 0L64.6744 3.58789L60.4849 4.16615L63.5169 6.96275L62.7998 10.9091L66.5455 9.04582L70.2876 10.9091L69.574 6.96275L72.6061 4.16615Z" fill="#E7B613"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_393_335">
                  <rect width="12.1212" height="10.9091" fill="white"/>
                  </clipPath>
                  <clipPath id="clip1_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(15.1211)"/>
                  </clipPath>
                  <clipPath id="clip2_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(30.2424)"/>
                  </clipPath>
                  <clipPath id="clip3_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(45.3635)"/>
                  </clipPath>
                  <clipPath id="clip4_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(60.4849)"/>
                  </clipPath>
                  </defs>
                  </svg>

                </div>

              
                <p className="font-normal text-base text-secondary">Service type is right over here</p>

              
                <div className="border-b border-[#D9D9D9] my-2"></div>

                
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Punctual</span>
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Reliable</span>
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Calm & patient</span>
                </div>

                
                <button className="w-full mt-4 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[10px] hover:bg-primary hover:text-white font-semibold">
                  View provider profile
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
            
              <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
              
                <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
              </div>

              <div className="p-4">
                
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-[22px] leading-8 text-secondary">Jill</h3>
                  <span className="font-semibold text-base leading-normal text-secondary">100EUR ph</span>
                </div>

              
                <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                  <svg width="73" height="11" viewBox="0 0 73 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_393_335)">
                  <path d="M12.1212 4.16615L7.93169 3.58789L6.06061 0L4.18952 3.58789L0 4.16615L3.03208 6.96275L2.31489 10.9091L6.06061 9.04582L9.80277 10.9091L9.08913 6.96275L12.1212 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip1_393_335)">
                  <path d="M27.2423 4.16615L23.0528 3.58789L21.1817 0L19.3106 3.58789L15.1211 4.16615L18.1532 6.96275L17.436 10.9091L21.1817 9.04582L24.9239 10.9091L24.2102 6.96275L27.2423 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip2_393_335)">
                  <path d="M42.3636 4.16615L38.1741 3.58789L36.303 0L34.432 3.58789L30.2424 4.16615L33.2745 6.96275L32.5573 10.9091L36.303 9.04582L40.0452 10.9091L39.3316 6.96275L42.3636 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip3_393_335)">
                  <path d="M57.4847 4.16615L53.2952 3.58789L51.4241 0L49.553 3.58789L45.3635 4.16615L48.3956 6.96275L47.6784 10.9091L51.4241 9.04582L55.1663 10.9091L54.4527 6.96275L57.4847 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip4_393_335)">
                  <path d="M72.6061 4.16615L68.4166 3.58789L66.5455 0L64.6744 3.58789L60.4849 4.16615L63.5169 6.96275L62.7998 10.9091L66.5455 9.04582L70.2876 10.9091L69.574 6.96275L72.6061 4.16615Z" fill="#E7B613"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_393_335">
                  <rect width="12.1212" height="10.9091" fill="white"/>
                  </clipPath>
                  <clipPath id="clip1_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(15.1211)"/>
                  </clipPath>
                  <clipPath id="clip2_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(30.2424)"/>
                  </clipPath>
                  <clipPath id="clip3_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(45.3635)"/>
                  </clipPath>
                  <clipPath id="clip4_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(60.4849)"/>
                  </clipPath>
                  </defs>
                  </svg>

                </div>

              
                <p className="font-normal text-base text-secondary">Service type is right over here</p>

              
                <div className="border-b border-[#D9D9D9] my-2"></div>

                
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Punctual</span>
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Reliable</span>
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Calm & patient</span>
                </div>

                
                <button className="w-full mt-4 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[10px] hover:bg-primary hover:text-white font-semibold">
                  View provider profile
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
            
              <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
              
                <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
              </div>

              <div className="p-4">
                
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-[22px] leading-8 text-secondary">Jill</h3>
                  <span className="font-semibold text-base leading-normal text-secondary">100EUR ph</span>
                </div>

              
                <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                  <svg width="73" height="11" viewBox="0 0 73 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_393_335)">
                  <path d="M12.1212 4.16615L7.93169 3.58789L6.06061 0L4.18952 3.58789L0 4.16615L3.03208 6.96275L2.31489 10.9091L6.06061 9.04582L9.80277 10.9091L9.08913 6.96275L12.1212 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip1_393_335)">
                  <path d="M27.2423 4.16615L23.0528 3.58789L21.1817 0L19.3106 3.58789L15.1211 4.16615L18.1532 6.96275L17.436 10.9091L21.1817 9.04582L24.9239 10.9091L24.2102 6.96275L27.2423 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip2_393_335)">
                  <path d="M42.3636 4.16615L38.1741 3.58789L36.303 0L34.432 3.58789L30.2424 4.16615L33.2745 6.96275L32.5573 10.9091L36.303 9.04582L40.0452 10.9091L39.3316 6.96275L42.3636 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip3_393_335)">
                  <path d="M57.4847 4.16615L53.2952 3.58789L51.4241 0L49.553 3.58789L45.3635 4.16615L48.3956 6.96275L47.6784 10.9091L51.4241 9.04582L55.1663 10.9091L54.4527 6.96275L57.4847 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip4_393_335)">
                  <path d="M72.6061 4.16615L68.4166 3.58789L66.5455 0L64.6744 3.58789L60.4849 4.16615L63.5169 6.96275L62.7998 10.9091L66.5455 9.04582L70.2876 10.9091L69.574 6.96275L72.6061 4.16615Z" fill="#E7B613"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_393_335">
                  <rect width="12.1212" height="10.9091" fill="white"/>
                  </clipPath>
                  <clipPath id="clip1_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(15.1211)"/>
                  </clipPath>
                  <clipPath id="clip2_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(30.2424)"/>
                  </clipPath>
                  <clipPath id="clip3_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(45.3635)"/>
                  </clipPath>
                  <clipPath id="clip4_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(60.4849)"/>
                  </clipPath>
                  </defs>
                  </svg>

                </div>

              
                <p className="font-normal text-base text-secondary">Service type is right over here</p>

              
                <div className="border-b border-[#D9D9D9] my-2"></div>

                
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Punctual</span>
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Reliable</span>
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Calm & patient</span>
                </div>

                
                <button className="w-full mt-4 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[10px] hover:bg-primary hover:text-white font-semibold">
                  View provider profile
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
            
              <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
              
                <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
              </div>

              <div className="p-4">
                
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-[22px] leading-8 text-secondary">Jill</h3>
                  <span className="font-semibold text-base leading-normal text-secondary">100EUR ph</span>
                </div>

              
                <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                  <svg width="73" height="11" viewBox="0 0 73 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_393_335)">
                  <path d="M12.1212 4.16615L7.93169 3.58789L6.06061 0L4.18952 3.58789L0 4.16615L3.03208 6.96275L2.31489 10.9091L6.06061 9.04582L9.80277 10.9091L9.08913 6.96275L12.1212 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip1_393_335)">
                  <path d="M27.2423 4.16615L23.0528 3.58789L21.1817 0L19.3106 3.58789L15.1211 4.16615L18.1532 6.96275L17.436 10.9091L21.1817 9.04582L24.9239 10.9091L24.2102 6.96275L27.2423 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip2_393_335)">
                  <path d="M42.3636 4.16615L38.1741 3.58789L36.303 0L34.432 3.58789L30.2424 4.16615L33.2745 6.96275L32.5573 10.9091L36.303 9.04582L40.0452 10.9091L39.3316 6.96275L42.3636 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip3_393_335)">
                  <path d="M57.4847 4.16615L53.2952 3.58789L51.4241 0L49.553 3.58789L45.3635 4.16615L48.3956 6.96275L47.6784 10.9091L51.4241 9.04582L55.1663 10.9091L54.4527 6.96275L57.4847 4.16615Z" fill="#E7B613"/>
                  </g>
                  <g clip-path="url(#clip4_393_335)">
                  <path d="M72.6061 4.16615L68.4166 3.58789L66.5455 0L64.6744 3.58789L60.4849 4.16615L63.5169 6.96275L62.7998 10.9091L66.5455 9.04582L70.2876 10.9091L69.574 6.96275L72.6061 4.16615Z" fill="#E7B613"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_393_335">
                  <rect width="12.1212" height="10.9091" fill="white"/>
                  </clipPath>
                  <clipPath id="clip1_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(15.1211)"/>
                  </clipPath>
                  <clipPath id="clip2_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(30.2424)"/>
                  </clipPath>
                  <clipPath id="clip3_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(45.3635)"/>
                  </clipPath>
                  <clipPath id="clip4_393_335">
                  <rect width="12.1212" height="10.9091" fill="white" transform="translate(60.4849)"/>
                  </clipPath>
                  </defs>
                  </svg>

                </div>

              
                <p className="font-normal text-base text-secondary">Service type is right over here</p>

              
                <div className="border-b border-[#D9D9D9] my-2"></div>

                
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Punctual</span>
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Reliable</span>
                  <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] rounded-[10px] mr-2">Calm & patient</span>
                </div>

                
                <button className="w-full mt-4 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[10px] hover:bg-primary hover:text-white font-semibold">
                  View provider profile
                </button>
              </div>
            </div>
          

          </div>
        </article>
    </section>
    <div className="bg-[#F1EDE6] shadow-[10px_16px_0px_#272727] relative overflow-hidden"> 
      <div className="w-full md:w-7/12 lg:w-1/3 absolute top-48 left-0"> 
          <img 
            src="/v2-bg-dot2.svg" 
            alt=""
            className=""
          /> 
        </div>
      <div 
        className="relative pt-16 pb-32 overflow-hidden bg-custom-blue" 
        style={{ backgroundImage: "url('/v2-bg-circle.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
      > 
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center">
           
          </div>
        </div>
      </div>

      
      <div className="bg-primary pb-32">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap">
           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full relative z-10"> 
              
              <div className="group border border-white rounded-[12px] p-6 text-center min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                <div>
                  <div className="flex justify-center items-center mb-4">
                    <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-primary" d="M15.3001 5.25H8.6501C7.67001 5.25 7.17996 5.25 6.80561 5.44074C6.47633 5.60852 6.20861 5.87623 6.04084 6.20552C5.8501 6.57986 5.8501 7.06991 5.8501 8.05V14.7C5.8501 15.6801 5.8501 16.1701 6.04084 16.5445C6.20861 16.8738 6.47633 17.1415 6.80561 17.3093C7.17996 17.5 7.67001 17.5 8.6501 17.5H15.3001C16.2802 17.5 16.7702 17.5 17.1446 17.3093C17.4739 17.1415 17.7416 16.8738 17.9094 16.5445C18.1001 16.1701 18.1001 15.6801 18.1001 14.7V8.05C18.1001 7.06991 18.1001 6.57986 17.9094 6.20552C17.7416 5.87623 17.4739 5.60852 17.1446 5.44074C16.7702 5.25 16.2802 5.25 15.3001 5.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path className="group-hover:stroke-primary" d="M34.5501 5.25H27.9001C26.92 5.25 26.43 5.25 26.0556 5.44074C25.7263 5.60852 25.4586 5.87623 25.2908 6.20552C25.1001 6.57986 25.1001 7.06991 25.1001 8.05V14.7C25.1001 15.6801 25.1001 16.1701 25.2908 16.5445C25.4586 16.8738 25.7263 17.1415 26.0556 17.3093C26.43 17.5 26.92 17.5 27.9001 17.5H34.5501C35.5302 17.5 36.0202 17.5 36.3946 17.3093C36.7239 17.1415 36.9916 16.8738 37.1594 16.5445C37.3501 16.1701 37.3501 15.6801 37.3501 14.7V8.05C37.3501 7.06991 37.3501 6.57986 37.1594 6.20552C36.9916 5.87623 36.7239 5.60852 36.3946 5.44074C36.0202 5.25 35.5302 5.25 34.5501 5.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path className="group-hover:stroke-primary" d="M34.5501 24.5H27.9001C26.92 24.5 26.43 24.5 26.0556 24.6907C25.7263 24.8585 25.4586 25.1262 25.2908 25.4555C25.1001 25.8299 25.1001 26.3199 25.1001 27.3V33.95C25.1001 34.9301 25.1001 35.4201 25.2908 35.7945C25.4586 36.1238 25.7263 36.3915 26.0556 36.5593C26.43 36.75 26.92 36.75 27.9001 36.75H34.5501C35.5302 36.75 36.0202 36.75 36.3946 36.5593C36.7239 36.3915 36.9916 36.1238 37.1594 35.7945C37.3501 35.4201 37.3501 34.9301 37.3501 33.95V27.3C37.3501 26.3199 37.3501 25.8299 37.1594 25.4555C36.9916 25.1262 36.7239 24.8585 36.3946 24.6907C36.0202 24.5 35.5302 24.5 34.5501 24.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path className="group-hover:stroke-primary" d="M15.3001 24.5H8.6501C7.67001 24.5 7.17996 24.5 6.80561 24.6907C6.47633 24.8585 6.20861 25.1262 6.04084 25.4555C5.8501 25.8299 5.8501 26.3199 5.8501 27.3V33.95C5.8501 34.9301 5.8501 35.4201 6.04084 35.7945C6.20861 36.1238 6.47633 36.3915 6.80561 36.5593C7.17996 36.75 7.67001 36.75 8.6501 36.75H15.3001C16.2802 36.75 16.7702 36.75 17.1446 36.5593C17.4739 36.3915 17.7416 36.1238 17.9094 35.7945C18.1001 35.4201 18.1001 34.9301 18.1001 33.95V27.3C18.1001 26.3199 18.1001 25.8299 17.9094 25.4555C17.7416 25.1262 17.4739 24.8585 17.1446 24.6907C16.7702 24.5 16.2802 24.5 15.3001 24.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                  </div>
  
                  <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                    <span className="group-hover:text-primary font-semibold text-base leading-5 text-white">View Details</span>
                    <svg className=" ml-3 mt-[2px]" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-primary" d="M1.6001 13L7.6001 7L1.6001 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                  </button>
                </div>
              </div>
              <div className="group border border-white rounded-[12px] p-6 text-center min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                <div>
                  <div className="flex justify-center items-center mb-4"> 
                    <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-primary" d="M20.05 7H14.45C11.5098 7 10.0396 7 8.9166 7.57222C7.92875 8.07555 7.1256 8.8787 6.62226 9.86655C6.05005 10.9896 6.05005 12.4597 6.05005 15.4V24.5C6.05005 26.1275 6.05005 26.9412 6.22894 27.6088C6.71439 29.4205 8.12952 30.8357 9.94125 31.3211C10.6089 31.5 11.4226 31.5 13.05 31.5V35.5871C13.05 36.5196 13.05 36.9859 13.2412 37.2253C13.4074 37.4336 13.6595 37.5547 13.926 37.5545C14.2324 37.5541 14.5965 37.2629 15.3246 36.6803L19.4992 33.3407C20.352 32.6585 20.7783 32.3174 21.2532 32.0748C21.6744 31.8596 22.1228 31.7023 22.5862 31.6072C23.1085 31.5 23.6545 31.5 24.7466 31.5H27.4C30.3403 31.5 31.8105 31.5 32.9335 30.9278C33.9213 30.4244 34.7245 29.6213 35.2278 28.6335C35.8 27.5104 35.8 26.0403 35.8 23.1V22.75M36.0124 6.78769C38.0626 8.83794 38.0626 12.1621 36.0124 14.2123C33.9621 16.2626 30.638 16.2626 28.5877 14.2123C26.5375 12.1621 26.5375 8.83794 28.5877 6.78769C30.638 4.73744 33.9621 4.73744 36.0124 6.78769Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>  
                  </div> 
  
                  <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                    <span className="group-hover:text-primary font-semibold text-base leading-5 text-white">Requests Overview</span>
                    <svg className=" ml-3 mt-[2px]" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-primary" d="M1.6001 13L7.6001 7L1.6001 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                  </button>
                </div>
              </div>
              <div className="group border border-white rounded-[12px] p-6 text-center min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                <div>
                  <div className="flex justify-center items-center mb-4"> 
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-primary" d="M36.75 17.5H5.25M28 3.5V10.5M14 3.5V10.5M15.75 28L19.25 31.5L27.125 23.625M13.65 38.5H28.35C31.2903 38.5 32.7604 38.5 33.8834 37.9278C34.8713 37.4244 35.6744 36.6213 36.1778 35.6334C36.75 34.5104 36.75 33.0403 36.75 30.1V15.4C36.75 12.4597 36.75 10.9896 36.1778 9.86655C35.6744 8.8787 34.8713 8.07555 33.8834 7.57222C32.7604 7 31.2903 7 28.35 7H13.65C10.7097 7 9.23959 7 8.11655 7.57222C7.1287 8.07555 6.32555 8.8787 5.82222 9.86655C5.25 10.9896 5.25 12.4597 5.25 15.4V30.1C5.25 33.0403 5.25 34.5104 5.82222 35.6334C6.32555 36.6213 7.1287 37.4244 8.11655 37.9278C9.23959 38.5 10.7097 38.5 13.65 38.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                  </div> 
  
                  <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                    <span className="group-hover:text-primary font-semibold text-base leading-5 text-white">Request a service</span>
                    <svg className=" ml-3 mt-[2px]" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-primary" d="M1.6001 13L7.6001 7L1.6001 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                  </button>
                </div>
              </div>
              <div className="group border border-white rounded-[12px] p-6 text-center min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                <div>
                  <div className="flex justify-center items-center mb-4"> 
                    <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-primary" d="M12.4502 14.875H21.2002M12.4502 21H26.4502M12.4502 31.5V35.5871C12.4502 36.5196 12.4502 36.9859 12.6413 37.2253C12.8076 37.4336 13.0597 37.5547 13.3261 37.5545C13.6325 37.5541 13.9966 37.2629 14.7248 36.6803L18.8993 33.3407C19.7521 32.6585 20.1785 32.3174 20.6533 32.0748C21.0745 31.8596 21.5229 31.7023 21.9863 31.6072C22.5086 31.5 23.0547 31.5 24.1468 31.5H28.5502C31.4905 31.5 32.9606 31.5 34.0836 30.9278C35.0715 30.4244 35.8746 29.6213 36.378 28.6335C36.9502 27.5104 36.9502 26.0403 36.9502 23.1V13.65C36.9502 10.7097 36.9502 9.23959 36.378 8.11655C35.8746 7.1287 35.0715 6.32555 34.0836 5.82222C32.9606 5.25 31.4905 5.25 28.5502 5.25H13.8502C10.9099 5.25 9.43978 5.25 8.31675 5.82222C7.32889 6.32555 6.52575 7.1287 6.02241 8.11655C5.4502 9.23959 5.4502 10.7097 5.4502 13.65V24.5C5.4502 26.1275 5.4502 26.9412 5.62908 27.6088C6.11454 29.4205 7.52966 30.8357 9.3414 31.3211C10.009 31.5 10.8227 31.5 12.4502 31.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                  </div> 
  
                  <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                    <span className="group-hover:text-primary font-semibold text-base leading-5 text-white">Private Messaging</span>
                    <svg className=" ml-3 mt-[2px]" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-primary" d="M1.6001 13L7.6001 7L1.6001 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                  </button>
                </div>
              </div>
              <div className="group border border-white rounded-[12px] p-6 text-center min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                <div>
                  <div className="flex justify-center items-center mb-4"> 
                    <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-primary"  d="M21.3999 26.25C24.2994 26.25 26.6499 23.8995 26.6499 21C26.6499 18.1005 24.2994 15.75 21.3999 15.75C18.5004 15.75 16.1499 18.1005 16.1499 21C16.1499 23.8995 18.5004 26.25 21.3999 26.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path className="group-hover:stroke-primary"  d="M33.1726 25.7727C32.9609 26.2526 32.8977 26.7849 32.9913 27.3009C33.0848 27.817 33.3309 28.2932 33.6976 28.6682L33.7931 28.7636C34.0889 29.0591 34.3236 29.4101 34.4837 29.7963C34.6439 30.1826 34.7263 30.5966 34.7263 31.0148C34.7263 31.4329 34.6439 31.847 34.4837 32.2332C34.3236 32.6195 34.0889 32.9704 33.7931 33.2659C33.4976 33.5617 33.1467 33.7964 32.7604 33.9566C32.3741 34.1167 31.9601 34.1991 31.5419 34.1991C31.1238 34.1991 30.7098 34.1167 30.3235 33.9566C29.9372 33.7964 29.5863 33.5617 29.2908 33.2659L29.1954 33.1705C28.8204 32.8037 28.3442 32.5577 27.8281 32.4641C27.312 32.3705 26.7797 32.4337 26.2999 32.6455C25.8294 32.8471 25.4281 33.182 25.1454 33.6088C24.8627 34.0356 24.711 34.5358 24.709 35.0477V35.3182C24.709 36.1621 24.3738 36.9714 23.7771 37.5681C23.1804 38.1648 22.371 38.5 21.5272 38.5C20.6833 38.5 19.874 38.1648 19.2773 37.5681C18.6806 36.9714 18.3454 36.1621 18.3454 35.3182V35.175C18.333 34.6484 18.1626 34.1377 17.8562 33.7093C17.5497 33.2809 17.1215 32.9545 16.6272 32.7727C16.1473 32.561 15.615 32.4978 15.099 32.5914C14.5829 32.6849 14.1067 32.931 13.7317 33.2977L13.6363 33.3932C13.3408 33.689 12.9898 33.9237 12.6036 34.0838C12.2173 34.244 11.8033 34.3264 11.3851 34.3264C10.967 34.3264 10.5529 34.244 10.1667 34.0838C9.78042 33.9237 9.4295 33.689 9.13399 33.3932C8.83816 33.0977 8.60347 32.7468 8.44335 32.3605C8.28323 31.9742 8.20081 31.5602 8.20081 31.142C8.20081 30.7239 8.28323 30.3099 8.44335 29.9236C8.60347 29.5373 8.83816 29.1864 9.13399 28.8909L9.22945 28.7955C9.59621 28.4205 9.84224 27.9443 9.93582 27.4282C10.0294 26.9121 9.96622 26.3798 9.75445 25.9C9.55278 25.4295 9.21792 25.0282 8.7911 24.7455C8.36427 24.4628 7.86411 24.3111 7.35218 24.3091H7.08172C6.23785 24.3091 5.42854 23.9739 4.83184 23.3772C4.23513 22.7805 3.8999 21.9711 3.8999 21.1273C3.8999 20.2834 4.23513 19.4741 4.83184 18.8774C5.42854 18.2807 6.23785 17.9455 7.08172 17.9455H7.2249C7.75148 17.9331 8.26218 17.7627 8.69061 17.4563C9.11903 17.1498 9.44536 16.7216 9.62717 16.2273C9.83895 15.7474 9.90212 15.2151 9.80855 14.6991C9.71497 14.183 9.46894 13.7068 9.10218 13.3318L9.00672 13.2364C8.71089 12.9409 8.4762 12.5899 8.31608 12.2037C8.15595 11.8174 8.07354 11.4034 8.07354 10.9852C8.07354 10.5671 8.15595 10.153 8.31608 9.76678C8.4762 9.38051 8.71089 9.0296 9.00672 8.73409C9.30223 8.43826 9.65314 8.20357 10.0394 8.04345C10.4257 7.88332 10.8397 7.80091 11.2579 7.80091C11.676 7.80091 12.09 7.88332 12.4763 8.04345C12.8626 8.20357 13.2135 8.43826 13.509 8.73409L13.6044 8.82955C13.9794 9.19631 14.4556 9.44234 14.9717 9.53592C15.4878 9.62949 16.0201 9.56632 16.4999 9.35455H16.6272C17.0977 9.15288 17.499 8.81802 17.7817 8.3912C18.0644 7.96437 18.216 7.46421 18.2181 6.95227V6.68182C18.2181 5.83795 18.5533 5.02864 19.15 4.43193C19.7467 3.83523 20.556 3.5 21.3999 3.5C22.2438 3.5 23.0531 3.83523 23.6498 4.43193C24.2465 5.02864 24.5817 5.83795 24.5817 6.68182V6.825C24.5838 7.33693 24.7355 7.8371 25.0181 8.26392C25.3008 8.69075 25.7021 9.0256 26.1726 9.22727C26.6525 9.43905 27.1848 9.50222 27.7008 9.40864C28.2169 9.31507 28.6931 9.06904 29.0681 8.70227L29.1635 8.60682C29.459 8.31098 29.81 8.0763 30.1962 7.91617C30.5825 7.75605 30.9965 7.67363 31.4147 7.67363C31.8328 7.67363 32.2469 7.75605 32.6331 7.91617C33.0194 8.0763 33.3703 8.31098 33.6658 8.60682C33.9616 8.90232 34.1963 9.25324 34.3565 9.63951C34.5166 10.0258 34.599 10.4398 34.599 10.858C34.599 11.2761 34.5166 11.6901 34.3565 12.0764C34.1963 12.4627 33.9616 12.8136 33.6658 13.1091L33.5704 13.2045C33.2036 13.5795 32.9576 14.0557 32.864 14.5718C32.7704 15.0879 32.8336 15.6202 33.0454 16.1V16.2273C33.247 16.6978 33.5819 17.0991 34.0087 17.3818C34.4355 17.6645 34.9357 17.8161 35.4476 17.8182H35.7181C36.562 17.8182 37.3713 18.1534 37.968 18.7501C38.5647 19.3468 38.8999 20.1561 38.8999 21C38.8999 21.8439 38.5647 22.6532 37.968 23.2499C37.3713 23.8466 36.562 24.1818 35.7181 24.1818H35.5749C35.063 24.1839 34.5628 24.3356 34.136 24.6182C33.7092 24.9009 33.3743 25.3022 33.1726 25.7727Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                  </div> 
  
                  <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                    <span className="group-hover:text-primary font-semibold text-base leading-5 text-white">Account Settings</span>
                    <svg className=" ml-3 mt-[2px]" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-primary" d="M1.6001 13L7.6001 7L1.6001 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                  </button>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>



    <section className="max-w-7xl  mx-auto px-5 md:px-10 lg:px-25 py-10 lg:py-25">
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
        <div className="w-full md:w-7/12 lg:w-1/3">
          <img 
            src="/img01.jpg" 
            alt="Marc Careri"
            className="rounded-[10px] w-full object-cover"
          /> 
        </div>
        <div className="w-full md:w-5/12 lg:w-2/3">
          <h3 className="text-[34px] leading-[40px] md:text-5xl md:leading-[55px] font-inter font-bold mb-5 lg:mb-10 text-secondary">Introduction</h3> 
          <p className="font-inter font-normal text-gray-500 leading-relaxed text-base">
            Welcome to the world of Marc Careri – a photographer who doesn’t just take pictures but brings spaces to life. 
            In today’s digital age, where first impressions often happen online, the way a property is visually presented 
            can determine whether it stands out or gets overlooked. Marc Careri specializes in capturing architecture, 
            real estate, interiors, and cityscapes in a way that transforms them into emotional visual stories. 
            His work is not just photography – it’s visual storytelling with soul.
          </p>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-25 lg:pr-14 py-10 pb-20 lg:pb-20 md:pt-[80px]">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 lg:gap-32">
        
        <div className="mt-[35px] md:mt-0 flex flex-col justify-between"> 
          <div className="sm:mt-0 lg:mt-20">
            <h3 className="text-[34px] leading-[40px] md:text-5xl md:leading-[55px] font-inter font-bold lg:mb-10  text-secondary">
              Architectural and real estate photography that evokes emotion
            </h3>
            <p className="mt-6 md:mt-10 font-inter font-normal text-gray-500 leading-relaxed text-base">
              From modern city apartments to historic villas, from boutique hotels to cutting-edge architecture – every 
              space has a unique story to tell. The challenge is not just to photograph it, but to reveal 
              its essence. Marc has a rare talent for seeing what makes a place special and translating it 
              into powerful imagery. Light, texture, geometry, and atmosphere come together in his lens to 
              create visual compositions that move and inspire.
            </p>
          </div>
          <div className="aspect-video mt-10 lg:mt-24 hidden lg:block"> 
            <img
              src="/img02.jpg" 
              alt="Modern interior"
              className="w-[90%] h-[294px] object-cover rounded-[10px]"
            />
          </div>
        </div>

       
        <div className="relative pb-0 lg:pb-0 mt-0 lg:mt-[-34px]">
          <div className="aspect-[4/3] w-full">
            <img 
              src="/img03.jpg" 
              alt="Luxury interior"
              className="w-full h-[400px] lg:h-[690px] object-cover rounded-[10px]"
            />
          </div>
          <div className="absolute right-[0px] top-[64%] md:top-[54%] bottom-auto w-full left-[0px] rounded-[10px]">
            <img 
              src="/img04.jpg" 
              alt="Detail shot"
              className="w-[249px] h-[182px] m-auto lg:ml-[-90px] lg:w-[285px] lg:h-[294px] object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-secondary relative"> 
      <div className="absolute top-1/2 right-0 max-w-64 w-full h-[347px] -translate-y-1/2 bg-[url('/bg-nc01.svg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-25 py-20 md:py-32 md:pb-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-25">
         
          <div className="pr-0 md:pr-[40px] lg:pr-0">
            <h2 className="text-[34px] leading-[40px] w-full lg:w-[95%] md:text-5xl md:leading-[55px] font-inter font-bold mb-0 lg:mb-10 text-primary">
              Photography for architects, developers, real estate agents and hoteliers
            </h2>
          </div>

        
          <div className="flex flex-col ">
            <p className="font-inter font-normal text-white text-base leading-relaxed mb-10 md:mb-14 lg:mb-10">
              His clients include architects, interior designers, developers, real estate professionals and 
              hospitality brands – all with one thing in common: the desire to stand out in a 
              competitive market. Especially in the luxury property sector or high-end hospitality, 
              exceptional imagery is no longer a bonus – it’s a necessity. Marc’s visuals don’t 
              just showcase a property – they sell a lifestyle, a mood, a dream.
            </p>
            <a className="place-self-start bg-primary hover:bg-primary2 hover:text-white border-x border-b border-t-0 border-solid border-primary2 relative z-10 text-black text-base md:text-sm transition font-bold duration-200 rounded-full px-11 py-4 flex items-center justify-center shadow-[0px_-1px_0px0px#FFFFFF60_inset,_0px_1px_0px0px#FFFFFF60_inset hover:-translate-y-1 active:-translate-y-0" href="/en#contact">Book Now</a>
          </div>
          
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-25 pt-20 md:pt-25 lg:pt-25 pb-20 lg:pb-[183px]">
        <div className="md:flex gap-[115px] md:gap-[40px] lg:gap-[120px] md:flex-row">
         
          <div className="relative pl-[26px] md:pl-[26px] md:pt-9 md:w-6/12 lg:w-7/12 mb-32 lg:mb-0">
             <img 
                src="/img05.jpg" 
                alt="Main interior shot"
                className="w-full h-[450px] lg:h-[568px] lg:w-[95%] object-cover rounded-[10px]"
              />
            <div className="absolute bottom-[-30px] md:bottom-[-30px] lg:bottom-[60px] left-0 lg:left-0">
              <img 
                src="/img06.jpg" 
                alt="Detail view"
                className="w-[173px] h-[216px] lg:w-[238px] lg:h-[325px] object-cover rounded-[10px]"
              />
            </div>  
            <div className="absolute bottom-[-83px] right-0 md:bottom-[-83px] md:right-0 lg:right-[-20px]"> 
              <img 
                src="/img07.jpg" 
                alt="Secondary view"
                className="w-[150px] h-[167px] lg:w-[285px] lg:h-[294px] object-cover rounded-[10px]"
              />
            </div>
            
          </div>

          
          <div className="flex flex-col justify-center md:w-6/12 lg:w-5/12">
            <h2 className="text-[34px] leading-[40px] md:text-5xl md:leading-[55px] lg:mt-10 font-inter font-bold mb-5 md:mb-12 lg:mb-16 text-secondary">
              From interiors to aerials – visuals with precision and purpose
            </h2>
            <p className="font-inter font-normal text-gray-500 leading-relaxed text-base">
              Using the latest technology, Marc offers a wide range of services. High-resolution photography, cinematic video tours, immersive 3D walk-throughs and breathtaking drone footage are all planned with precision. Every frame tells a story. It's this blend of artistry and precision that makes his work so effective.
            </p>
          </div>
        </div>
      </section>
    
      <section className="bg-primary mx-auto pt-15 pb-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-25 md:flex gap-10 lg:gap-10">
          
          <div className="md:w-6/12 lg:w-5/12 flex flex-col justify-center mb-10 md:mb-0">
            <h2 className="w-full md:w-[90%] text-[34px] leading-[40px] md:text-5xl md:leading-[55px]font-inter font-bold mb-5 lg:mb-16 text-secondary">
              Why visual storytelling matters  more than ever
            </h2>
            <p className="font-inter font-normal text-secondary leading-relaxed text-base opacity-[.6]">
              Photos are no longer just static content. They are emotional triggers. People want to imagine themselves in the space - living there, working there, relaxing there. Great imagery builds trust, ignites curiosity, and turns passive viewers into active buyers. That's why Marc's work goes beyond aesthetics: it creates emotional engagement from the very first glance.
            </p>
          </div>

         
          <div className="md:w-6/12 lg:w-7/12 relative">
            <div className="pr-[32px] lg:px-[65px]">
              <img 
                src="/img08.jpg" 
                alt="Interior design showcase"
                className="w-full h-[400px] lg:h-[590px]  object-cover rounded-[10px]"
              />
            </div>
            <div className="absolute bottom-[-100px] md:bottom-[-10px] lg:bottom-[-30px] right-0">
              <img 
                src="/img09.jpg" 
                alt="Detail interior"
                className="w-[375px] w-[191px] h-[240px] lg:h-[294px] object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white">
        <div className="items-center max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-25 px-5 md:px-10 lg:px-25 py-20 md:py-25 lg:py-25">
           
          <div className="aspect-video relative rounded-[10px] overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/video-poster.jpg"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          
          <div className="flex flex-col justify-center">
            <h2 className="text-[34px] leading-[40px] md:text-5xl md:leading-[55px] font-inter font-bold mb-5 md:mb-10 lg:mb-16 text-secondary">
              Every space has a soul. It's time to make it visible.
            </h2> 
            <div className="font-inter font-normal text-gray-500 leading-relaxed text-base mb-6">
              – Deep expertise in architectural, interior, and real estate photography<br/>
              – Trusted by top-tier architects, real estate brands and hotel groups<br/>
              – Signature visual style combining clarity, elegance and emotional depth<br/>
              – Fast turnaround times and impeccable post<br/>
              - Full-service support from concept to delivery <br/>
            </div>
            <div className="font-inter font-normal text-gray-500 leading-relaxed text-base"> 
              Whether you’re selling a home, launching a development, branding a hotel or redefining your image – Marc Careri creates visuals that make people feel, imagine, and act.
            </div>
          </div>
        </div>
      </section>


      <section className="bg-secondary"> 
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-25 py-20 md:py-[122px]">
          <div className="items-center flex flex-col md:flex-row gap-5 lg:gap-25">
            <div className="w-full md:w-[calc(100%-250px)] mb-[20px] md:mb-0">
              <h2 className="text-[34px] leading-[40px] w-full lg:w-[95%] md:text-5xl md:leading-[55px] font-inter font-bold mb-0 text-primary">
                Let your property be seen. As it truly deserves.
              </h2>
            </div>
            <div className="w-full md:w-[250px] flex justify-end"> 
              <a className="place-self-start bg-primary hover:bg-primary2 hover:text-white border-x border-b border-t-0 border-solid border-primary2 relative z-10 text-black text-base md:text-sm transition font-bold duration-200 rounded-full px-11 py-4 flex items-center justify-center shadow-[0px_-1px_0px0px#FFFFFF60_inset,_0px_1px_0px0px#FFFFFF60_inset] hover:-translate-y-1 active:-translate-y-0" href="/en#contact">Book Now</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-20 md:py-25 md:pb-151 lg:py-25 lg:pb-32">
          <div className="mb-16 md:mb-20">
            <h2 className="text-[34px] leading-[40px] md:text-5xl md:leading-[55px] text-center font-inter font-bold text-secondary">
              Who I work with
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 gap-y-12 [&>*:last-child]:col-span-2 [&>*:last-child]:md:col-span-1 [&>*:last-child]:mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="mb-7 p-5 w-[76px] h-[76px] flex items-center bg-white shadow-[0px_10px_10px_-5px_rgba(208,191,172,0.1)] rounded-full">  
                <img src="/icon01.svg" alt="" className="w-12 h-12" />
              </div>
              <p className="text-xl font-inter font-semibold text-secondary">Real estate agencies</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-7 p-5 w-[76px] h-[76px] flex items-center bg-white shadow-[0px_10px_10px_-5px_rgba(208,191,172,0.1)] rounded-full">  
                <img src="/icon02.svg" alt="" className="w-12 h-12" />
              </div>
              <p className="text-xl font-inter font-semibold text-secondary">Interior designers</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-7 p-5 w-[76px] h-[76px] flex items-center bg-white shadow-[0px_10px_10px_-5px_rgba(208,191,172,0.1)] rounded-full">  
                <img src="/icon03.svg" alt="" className="w-12 h-12" />
              </div>
              <p className="text-xl font-inter font-semibold text-secondary">Private property owners</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-7 p-5 w-[76px] h-[76px] flex items-center bg-white shadow-[0px_10px_10px_-5px_rgba(208,191,172,0.1)] rounded-full">  
                <img src="/icon04.svg" alt="" className="w-12 h-12" />
              </div>
              <p className="text-xl font-inter font-semibold text-secondary">Architects</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-7 p-5 w-[76px] h-[76px] flex items-center bg-white shadow-[0px_10px_10px_-5px_rgba(208,191,172,0.1)] rounded-full">  
                <img src="/icon05.svg" alt="" className="w-12 h-12" />
              </div>
              <p className="text-xl font-inter font-semibold text-secondary">Hospitality (hotels, rentals)</p>
            </div>
             
          </div>
        </div>
      </section>
      
      <section className="bg-primary background-image-nc02-bk">
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 lg:px-25 py-[74px] md:py-25 lg:py-25">
           <div className="absolute left-0 bottom-0 max-w-[475px] w-full h-[125px] md:h-[135px] bg-[url('/bg-nc02.svg')] bg-cover bg-center bg-no-repeat z-10"></div>
        </div>
      </section>
      
      <section className="relative bg-[url('/img10.jpg')] bg-no-repeat bg-cover bg-center min-h-[622px] md:min-h-[662px]"> 
        
        <div className="bg-[linear-gradient(180deg,rgba(27,36,49,0)_0%,#1B2431_100%)] absolute left-0 right-0 bottom-0 z-10">
          <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-25 py-16 md:py-20">
            <div className="items-center flex flex-col md:flex-row gap-5 lg:gap-25"> 
              <div className="w-full md:w-[calc(100%-250px)]">
                <h2 className="text-[34px] leading-[40px] w-full lg:w-[95%] md:text-5xl md:leading-[55px] font-inter font-bold mb-5 text-white">
                  Ready to book your session?
                </h2>
                <p className="font-inter font-normal text-white text-base leading-relaxed">
                  Let's capture something extraordinary — photos, video, or drone.
                </p>
              </div>
              <div className="w-full md:w-[250px] flex justify-end"> 
                <a className="place-self-start bg-primary hover:bg-primary2 hover:text-white border-x border-b border-t-0 border-solid border-[#7A6752] relative z-10 text-black text-base md:text-sm transition font-bold duration-200 rounded-full px-11 py-4 flex items-center justify-center shadow-[0px_-1px_0px0px#FFFFFF60_inset,_0px_1px_0px0px#FFFFFF60_inset] hover:-translate-y-1 active:-translate-y-0" href="/en#contact">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary pt-20 md:pt-24"> 
        <div className="max-w-7xl mx-auto pr-0 px-5 md:pr-0 md:px-0">
          <div className="flex flex-col md:flex-row">
 
            <div className="w-full hidden lg:block md:w-4/12 pr-0">
              <img 
                src="/img11.jpg" 
                alt="FAQ section" 
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="w-full lg:w-8/12 md:pl-10">
            
              <article className="px-0 md:px-0 lg:px-15 pb-15">
                <h2 className="text-[34px] leading-[40px] md:text-5xl md:leading-[55px] font-inter font-bold mb-5 text-primary">
                  Common Questions
                </h2>
                <p className="font-inter font-normal text-white text-base leading-relaxed">
                  Photography & Video Services
                </p>
              </article>

            
              <article className="bg-primary px-5 md:px-10 lg:px-15 pt-10 md:pt-15 h-auto lg:h-[90%]">
                <ul className="">
                  <li className="border-b border-[#BAA48D] pb-4">
                    <h3 className="font-inter font-bold text-xl mb-2 text-secondary">1. How do I prepare my space for a photo shoot?</h3>
                    <p className="font-inter text-secondary text-base leading-relaxed opacity-60">
                      We'll send you a simple prep checklist before your session — including tips on decluttering, lighting, and staging. A clean, well-lit space always photographs best!
                    </p>
                  </li>
                  <li className="border-b border-[#BAA48D] pb-4 mt-4">
                    <h3 className="font-inter font-bold text-xl mb-2 text-secondary">2. Do you travel for shoots outside [City/Region]?</h3>
                    <p className="font-inter text-secondary text-base leading-relaxed opacity-60">
                      Yes, Marc is available for travel across the country and internationally. Travel fees may apply depending on distance — just ask when booking.
                    </p>
                  </li>
                  <li className="border-b border-[#BAA48D] pb-4 mt-4">
                    <h3 className="font-inter font-bold text-xl mb-2 text-secondary">3. How soon will I receive the photos or video?</h3>
                    <p className="font-inter text-secondary text-base leading-relaxed opacity-60">
                      Delivery typically takes 3-5 business days. If you need fast turnaround, express editing can be arranged.
                    </p>
                  </li>
                  <li className="pb-4 mt-4">
                    <h3 className="font-inter font-bold text-xl mb-2 text-secondary">4. Can I combine different services (e.g., photos + drone + video)?</h3>
                    <p className="font-inter text-secondary text-base leading-relaxed opacity-60">
                      Absolutely. Many clients choose a custom package that includes multiple formats. We'll help you find the best combination based on your goals and budget.
                    </p>
                  </li>
                </ul>
              </article>
            </div> 
          </div>

          <div className="hidden lg:block w-full bg-primary min-h-24">

          </div>
        </div>
      </section>


      <section className="bg-secondary text-white relative">
        
        <div className="max-w-7xl mx-auto py-20 md:py-32 px-5 md:px-10 lg:px-24 relative">
          <div className="absolute left-0 top-0 max-w-[485px] w-full h-[167px] md:h-[167px] bg-[url('/bg-nc03.svg')] bg-cover bg-center bg-no-repeat z-10"></div>
         
          <article className="grid grid-cols-12 md:grid-cols-12 md:gap-[40px] relative z-10">
            
            
            <div className="col-span-12 lg:col-span-4 flex items-center"> 
              <div className="inner w-full grid grid-cols-12 lg:block mb-15 md:pb-0">
                <div className="mb-10 md:mb-0 text-center md:text-left col-span-12 md:col-span-8 lg:col-span-12">
                  <h2 className="text-[34px] leading-[40px] md:text-5xl md:leading-[55px] font-inter font-bold text-primary">
                    Our Selected Work
                    </h2>
                  <p className="font-inter font-normal text-base text-white mt-8">Photography & Video Across Real Estate, Interiors & More</p>
                </div>
                <div className="col-span-12 md:col-span-4 text-center md:text-right lg:text-left lg:col-span-12">
                  <a className="inline-block place-self-start bg-primary hover:bg-primary2 hover:text-white border-x border-b border-t-0 border-solid border-[#7A6752] relative z-10 text-black text-base md:text-sm transition font-bold duration-200 rounded-full px-11 py-4 items-center justify-center shadow-[0px_-1px_0px0px#FFFFFF60_inset,_0px_1px_0px0px#FFFFFF60_inset] hover:-translate-y-1 active:-translate-y-0 mt-0 lg:mt-10" href="/en#contact">Book Now</a>
                  <a href="#" className="font-inter font-semibold text-base text-primary hover:text-white mt-4 transition duration-200 block">View more on Instagram</a>
                </div>
              </div>
            </div>
            
            
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-12 gap-[10px] mb-[10px]">
                <img src="/img12.jpg" alt="Ảnh 1" className="rounded-[10px] w-full col-span-4 h-[208px] object-cover" />
                <img src="/img13.jpg" alt="Ảnh 2" className="rounded-[10px] w-full col-span-4 h-[208px] object-cover" />
                <img src="/img14.jpg" alt="Ảnh 3" className="rounded-[10px] w-full col-span-4 h-[208px] object-cover" />
              </div>
              <div className="grid grid-cols-12 gap-[10px]"> 
                <img src="/img15.jpg" alt="Ảnh 4" className="rounded-[10px] w-full col-span-5 h-[208px] object-cover" />
                <img src="/img16.jpg" alt="Ảnh 5" className="rounded-[10px] w-full col-span-3 h-[208px] object-cover" />
                <img src="/img17.jpg" alt="Ảnh 6" className="rounded-[10px] w-full col-span-4 h-[208px] object-cover" />
              </div>
            </div>
          </article>  
          <article className="">
            <div className="grid grid-cols-12 gap-[10px] mt-[10px]">
                <div className="relative col-span-6 lg:col-span-5">
                  <img src="/img18.jpg" alt="Ảnh 1" className="rounded-[10px] w-full h-[208px] object-cover" /> 
                </div>
                <div className="relative col-span-6 lg:col-span-3">
                  <img src="/img19.jpg" alt="Ảnh 2" className="rounded-[10px] w-full h-[208px] object-cover" /> 
                </div>
                <div className="relative col-span-6 lg:col-span-2">
                  <img src="/img20.jpg" alt="Ảnh 3" className="rounded-[10px] w-full h-[208px] object-cover" /> 
                </div> 
                <div className="relative col-span-6 lg:col-span-2">
                  <img src="/img21.jpg" alt="Ảnh 4" className="rounded-[10px] w-full h-[208px] object-cover" /> 
                </div>
            </div>
            <div className="grid grid-cols-12 gap-[10px] mt-[10px]">
              <div className="relative col-span-6">
                <img src="/img22.jpg" alt="Ảnh 4" className="w-full h-[300px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
                  <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="relative col-span-6">
                <img src="/img23.jpg" alt="Ảnh 4" className="w-full h-[300px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
                  <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div> 
            </div>
     
          </article>
        </div>
      </section>



      
    </main>
  );
}; 

 

export default App; 