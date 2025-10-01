import { useState } from 'react'; 
 

 




 
const ProfileTabs = () => { 

 

 
  
  return (

<>

     
    <section className="relative bg-white sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-8 shadow-[0px_0px_30px_rgba(0,0,0,0.08)]">  

        <div className="md:max-w-[852px] lg:max-w-[955px] m-auto relative z-50 flex flex-col-reverse md:flex-row items-start"> 
            <div className="md:mt-6 sm:mt-0 w-12/12 w-full md:w-[50%] lg:w-[442px] pr-0 md:pr-16">
                <h4 className="font-semibold text-xl leading-[26px] text-charcoal mb-2">
                    Provider profile
                </h4>

                <div className="flex justify-between items-start pb-4 border-b border-[#D9D9D9]">
                    <h2 className="font-semibold text-[34px] leading-[44px] md:text-[40px] md:leading-[50px] text-charcoal">
                    Jack Doe
                    </h2> 
                </div>
                <div className='font-medium text-base text-charcoal py-[18px] border-b border-[#D9D9D9]'>
                    <p className='mb-2'>Service type is right over here</p>
                    <p>Service type is right over here</p>
                </div>
                <div className='font-medium text-base text-charcoal py-[18px] border-b border-[#D9D9D9]'>
                    <p>3 Years experience</p> 
                </div>
                <div className='flex items-center justify-between flex-wrap font-medium text-base text-charcoal py-[18px] border-b border-[#D9D9D9] mb-4'>
                    <svg width="131" height="20" viewBox="0 0 131 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_154_7538)">
                    <path d="M22.2863 7.48812L14.7562 6.44877L11.3932 0L8.03012 6.44877L0.5 7.48812L5.94977 12.5146L4.66071 19.6077L11.3932 16.2587L18.1192 19.6077L16.8365 12.5146L22.2863 7.48812Z" fill="#E7B613"/>
                    </g>
                    <g clip-path="url(#clip1_154_7538)">
                    <path d="M49.4648 7.48812L41.9347 6.44877L38.5716 0L35.2086 6.44877L27.6785 7.48812L33.1282 12.5146L31.8392 19.6077L38.5716 16.2587L45.2977 19.6077L44.015 12.5146L49.4648 7.48812Z" fill="#E7B613"/>
                    </g>
                    <g clip-path="url(#clip2_154_7538)">
                    <path d="M76.6432 7.48812L69.1131 6.44877L65.7501 0L62.3871 6.44877L54.8569 7.48812L60.3067 12.5146L59.0176 19.6077L65.7501 16.2587L72.4761 19.6077L71.1935 12.5146L76.6432 7.48812Z" fill="#E7B613"/>
                    </g>
                    <g clip-path="url(#clip3_154_7538)">
                    <path d="M103.821 7.48812L96.2913 6.44877L92.9283 0L89.5653 6.44877L82.0352 7.48812L87.4849 12.5146L86.1959 19.6077L92.9283 16.2587L99.6544 19.6077L98.3717 12.5146L103.821 7.48812Z" fill="#E7B613"/>
                    </g>
                    <g clip-path="url(#clip4_154_7538)">
                    <path d="M131 7.48812L123.47 6.44877L120.107 0L116.744 6.44877L109.214 7.48812L114.663 12.5146L113.374 19.6077L120.107 16.2587L126.833 19.6077L125.55 12.5146L131 7.48812Z" fill="#E7B613"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_154_7538">
                    <rect width="21.7863" height="19.6077" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                    <clipPath id="clip1_154_7538">
                    <rect width="21.7863" height="19.6077" fill="white" transform="translate(27.6785)"/>
                    </clipPath>
                    <clipPath id="clip2_154_7538">
                    <rect width="21.7863" height="19.6077" fill="white" transform="translate(54.8569)"/>
                    </clipPath>
                    <clipPath id="clip3_154_7538">
                    <rect width="21.7863" height="19.6077" fill="white" transform="translate(82.0352)"/>
                    </clipPath>
                    <clipPath id="clip4_154_7538">
                    <rect width="21.7863" height="19.6077" fill="white" transform="translate(109.214)"/>
                    </clipPath>
                    </defs>
                    </svg>

                    <p>105 reviews received</p> 
                </div>
                <h3 className='font-semibold text-[22px] leading-8 text-charcoal mb-3'>100EUR ph</h3>
                <button className="w-full mt-2 bg-primary text-white border border-primary py-[11px] rounded-[6px] hover:bg-transparent hover:text-teal-600 font-semibold">Book provider</button>
            </div>
            <div className="w-12/12 md:w-[50%] lg:w-[515px] mb-8 md:mb-0">
                <img
                    src="../client-dashboard-img01.jpg"  
                    alt="Service thumbnail"
                    className="w-full md:h-[430px] lg:h-auto rounded-2xl object-cover"
                />
            </div>
        </div>
        <div className="absolute top-0 md:top-auto md:bottom-0 right-0 z-10">
            <img 
                src="/v2-bg-dot3.svg" 
                alt=""
                className="w-full h-full"
            /> 
        </div>
        <div 
            className="absolute left-0 right-0 bottom-[-65px] md:bottom-0 z-9 pt-4 md:pt-16 pb-60 md:pb-32 overflow-hidden bg-custom-blue" 
            style={{ backgroundImage: "url('/v2-bg-circle3.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
        > 
            <div className="container mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center">
            
            </div>
            </div>
        </div>
    </section> 
    <div className='pb-15 pt-[125px] lg:py-20'>
        <div className='container'>
            <div className='max-w-[802px] m-auto'>
                <h2 className='mb-10 font-semibold text-[34px] leading-[44px] lg:text-[40px] lg:leading-[50px] text-center text-charcoal'>About me</h2>
                <div className='font-normal text-base leading-6 text-center text-charcoal pb-10'>
                    <p>Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p>Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
            <div className='container border-t border-[#D9D9D9] pt-10'>    
                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <button className="px-6 bg-[#F1EDE6] text-charcoal border border-[#F1EDE6] py-[11px] rounded-full hover:bg-primary hover:text-white font-semibold">Honesty & integrity</button>
                    <button className="px-6 bg-[#F1EDE6] text-charcoal border border-[#F1EDE6] py-[11px] rounded-full hover:bg-primary hover:text-white font-semibold">Speed % reliability</button>
                    <button className="px-6 bg-[#F1EDE6] text-charcoal border border-[#F1EDE6] py-[11px] rounded-full hover:bg-primary hover:text-white font-semibold">Clean worksite</button>
                </div>
            </div>
        </div>
    </div>
    <div className='bg-[#FBF8F4]'>
        <div className="mx-auto py-14 sm:py-15 px-6 xl:px-20 container">
             <h2 className='mb-8 md:mb-10 font-semibold text-[40px] leading-[50px] text-center text-charcoal'>Equipment</h2>
             <div className='items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <button className="w-full mt-2 bg-white text-charcoal border border-[#D9D9D9] py-[21px] rounded-xl hover:bg-primary hover:text-white font-semibold">Equipment item is here</button>
                <button className="w-full mt-2 bg-white text-charcoal border border-[#D9D9D9] py-[21px] rounded-xl hover:bg-primary hover:text-white font-semibold">Equipment item is here</button>
                <button className="w-full mt-2 bg-white text-charcoal border border-[#D9D9D9] py-[21px] rounded-xl hover:bg-primary hover:text-white font-semibold">Equipment item is here</button>
                <button className="w-full mt-2 bg-white text-charcoal border border-[#D9D9D9] py-[21px] rounded-xl hover:bg-primary hover:text-white font-semibold">Equipment item is here</button>
                <button className="w-full mt-2 bg-white text-charcoal border border-[#D9D9D9] py-[21px] rounded-xl hover:bg-primary hover:text-white font-semibold">Equipment item is here</button>
                <button className="w-full mt-2 bg-white text-charcoal border border-[#D9D9D9] py-[21px] rounded-xl hover:bg-primary hover:text-white font-semibold">Equipment item is here</button>
             </div>
        </div>
    </div>
    <div className='bg-primary'>
        <div className="mx-auto py-15 sm:py-15 px-6 xl:px-20 container">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-10">
                <h2 className="mb-6 md:mb-0 text-center w-full sm:w-auto sm:text-left font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-white">Evaluation</h2>
                <button className="w-full sm:w-auto block bg-white hover:bg-charcoal hover:text-white text-primary font-semibold text-[16px] py-3 px-8 rounded-[6px]">View all reviews</button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                <div className='bg-[#19829C] rounded-xl px-6 lg:px-14 py-6 flex items-center justify-center'>
                    <div>
                    <h2 className='font-semibold text-[80px] leading-[90px] text-center text-white'>4.85</h2>
                    <p className='font-semibold text-[22px] leading-8 text-white text-center'>Rating</p>
                    </div>
                </div>
                <div className='bg-[#19829C] rounded-xl px-6 lg:px-14 py-6 flex items-center justify-center'>
                    <div>
                    <h2 className='font-semibold text-[80px] leading-[90px] text-center text-white'>32</h2>
                    <p className='font-semibold text-[22px] leading-8 text-white text-center'>Reviews</p>
                    </div>
                </div>
                <div className='bg-[#19829C] rounded-xl px-6 lg:px-14 py-6 flex items-center justify-center'>
                    <div className='w-full'>
                        <div className='flex justify-center mb-6'>
                            <svg width="131" height="20" viewBox="0 0 131 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_154_7538)">
                            <path d="M22.2863 7.48812L14.7562 6.44877L11.3932 0L8.03012 6.44877L0.5 7.48812L5.94977 12.5146L4.66071 19.6077L11.3932 16.2587L18.1192 19.6077L16.8365 12.5146L22.2863 7.48812Z" fill="#E7B613"/>
                            </g>
                            <g clip-path="url(#clip1_154_7538)">
                            <path d="M49.4648 7.48812L41.9347 6.44877L38.5716 0L35.2086 6.44877L27.6785 7.48812L33.1282 12.5146L31.8392 19.6077L38.5716 16.2587L45.2977 19.6077L44.015 12.5146L49.4648 7.48812Z" fill="#E7B613"/>
                            </g>
                            <g clip-path="url(#clip2_154_7538)">
                            <path d="M76.6432 7.48812L69.1131 6.44877L65.7501 0L62.3871 6.44877L54.8569 7.48812L60.3067 12.5146L59.0176 19.6077L65.7501 16.2587L72.4761 19.6077L71.1935 12.5146L76.6432 7.48812Z" fill="#E7B613"/>
                            </g>
                            <g clip-path="url(#clip3_154_7538)">
                            <path d="M103.821 7.48812L96.2913 6.44877L92.9283 0L89.5653 6.44877L82.0352 7.48812L87.4849 12.5146L86.1959 19.6077L92.9283 16.2587L99.6544 19.6077L98.3717 12.5146L103.821 7.48812Z" fill="#E7B613"/>
                            </g>
                            <g clip-path="url(#clip4_154_7538)">
                            <path d="M131 7.48812L123.47 6.44877L120.107 0L116.744 6.44877L109.214 7.48812L114.663 12.5146L113.374 19.6077L120.107 16.2587L126.833 19.6077L125.55 12.5146L131 7.48812Z" fill="#E7B613"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_154_7538">
                            <rect width="21.7863" height="19.6077" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                            <clipPath id="clip1_154_7538">
                            <rect width="21.7863" height="19.6077" fill="white" transform="translate(27.6785)"/>
                            </clipPath>
                            <clipPath id="clip2_154_7538">
                            <rect width="21.7863" height="19.6077" fill="white" transform="translate(54.8569)"/>
                            </clipPath>
                            <clipPath id="clip3_154_7538">
                            <rect width="21.7863" height="19.6077" fill="white" transform="translate(82.0352)"/>
                            </clipPath>
                            <clipPath id="clip4_154_7538">
                            <rect width="21.7863" height="19.6077" fill="white" transform="translate(109.214)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        <div className=''>
                            <div className='font-semibold text-base leading-6 text-white flex items-center justify-between mb-1'>
                                <span className='w-[70px]'>5 Star</span>
                                <span className='bg-[#186D82] h-2 w-[calc(100%-70px)] rounded-full block mr-2'>
                                    <span className='w-[80%] bg-white h-2 rounded-full block'></span> 
                                </span>
                                <span className='font-medium w-[24px]'>82%</span>
                            </div>
                            <div className='font-semibold text-base leading-6 text-white flex items-center justify-between mb-1'>
                                <span className='w-[70px]'>4 Star</span>
                                <span className='bg-[#186D82] h-2 w-[calc(100%-70px)] rounded-full block mr-2'>
                                    <span className='w-[20%] bg-white h-2 rounded-full block'></span> 
                                </span>
                                <span className='font-medium w-[24px]'>8%</span>
                            </div>
                            <div className='font-semibold text-base leading-6 text-white flex items-center justify-between mb-1'>
                                <span className='w-[70px]'>3 Star</span>
                                <span className='bg-[#186D82] h-2 w-[calc(100%-70px)] rounded-full block mr-2'>
                                    <span className='w-[40%] bg-white h-2 rounded-full block'></span> 
                                </span>
                                <span className='font-medium w-[24px]'>10%</span>
                            </div>
                            <div className='font-semibold text-base leading-6 text-white flex items-center justify-between mb-1'>
                                <span className='w-[70px]'>2 Star</span>
                                <span className='bg-[#186D82] h-2 w-[calc(100%-70px)] rounded-full block mr-2'>
                                    <span className='w-[0%] bg-white h-2 rounded-full block'></span> 
                                </span>
                                <span className='font-medium w-[24px]'>0%</span>
                            </div>
                            <div className='font-semibold text-base leading-6 text-white flex items-center justify-between mb-1'>
                                <span className='w-[70px]'>1 Star</span>
                                <span className='bg-[#186D82] h-2 w-[calc(100%-70px)] rounded-full block mr-2'>
                                    <span className='w-[00%] bg-white h-2 rounded-full block'></span> 
                                </span>
                                <span className='font-medium w-[24px]'>0%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>    
    <div className='bg-[#F2F7F8]'>
        <div className="mx-auto py-15 sm:py-15 px-6 xl:px-20 container">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-center w-full sm:w-auto sm:text-left font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal">Intervention zone</h2>
                <div className='flex items-center gap-6'>
                <button className="hidden sm:block bg-white hover:bg-primary hover:text-white hover:border-primary text-charcoal font-normal text-[16px] py-[15px] px-8 rounded-xl border border-[#D9D9D9]">Postal code: <span className='font-semibold'>7327 Steinsel</span></button>
                <button className="hidden sm:block bg-white hover:bg-primary hover:text-white hover:border-primary text-charcoal font-normal text-[16px] py-[15px] px-8 rounded-xl border border-[#D9D9D9]">Intervention radius: <span className='font-semibold'>25 km</span></button>
                </div>
            </div>
            <img
                    src="../client-dashboard-map-img02.jpg"  
                    alt=""
                    className="w-full h-auto rounded-xl"
            />
            <div className="pt-25 mb-10">
                <h2 className="text-center w-full sm:w-auto font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal">Intervention zone</h2>                
            </div>
            <div className='flex flex-wrap items-center gap-6 justify-center'>
                <button className="w-full sm:w-auto justify-center flex group bg-white hover:bg-primary hover:text-white hover:border-primary text-charcoal font-normal text-[16px] py-[15px] px-8 rounded-xl border border-[#D9D9D9]">
                    <svg 
                        className='mr-3 text-[#272727] group-hover:text-white' 
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                            stroke="currentColor" // Đặt stroke thành currentColor để nó nhận màu từ lớp CSS text-*
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        /> 
                    </svg> 
                    Verified ID: <span className='font-semibold ml-1'>12345687654</span>
                </button>
                <button className="w-full sm:w-auto justify-center flex group bg-white hover:bg-primary hover:text-white hover:border-primary text-charcoal font-normal text-[16px] py-[15px] px-8 rounded-xl border border-[#D9D9D9]">
                    <svg 
                        className='mr-3 text-[#272727] group-hover:text-white' 
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                            stroke="currentColor" // Đặt stroke thành currentColor để nó nhận màu từ lớp CSS text-*
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        /> 
                    </svg> 
                    Phone number: <span className='font-semibold ml-1'> 021 223 3344</span>
                </button>
                <button className="w-full sm:w-auto justify-center flex group bg-white hover:bg-primary hover:text-white hover:border-primary text-charcoal font-normal text-[16px] py-[15px] px-8 rounded-xl border border-[#D9D9D9]">
                    <svg 
                        className='mr-3 text-[#272727] group-hover:text-white' 
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                            stroke="currentColor" // Đặt stroke thành currentColor để nó nhận màu từ lớp CSS text-*
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        /> 
                    </svg> 
                    Trade register: <span className='font-semibold ml-1'>76543765</span>
                </button>
            </div>
        </div> 
    </div>       
    



    <div className="min-h-80 bg-white relative pt-5"> 
        <div className="absolute bottom-0 right-0 z-10">
            <img 
                src="/v2-bg-dot4.svg" 
                alt=""
                className="w-full h-full"
            /> 
        </div>
        
        <div 
            className="absolute left-0 right-0 bottom-0 pb-14 md:pb-16 bg-custom-blue" 
            style={{ backgroundImage: "url('/v2-bg-circle3.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
        > 
            
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center justify-center mt-[-40px]">
                    <h3 className='font-semibold text-[22px] leading-8 text-center text-charcoal'>Overview</h3>
                    <h2 className="font-poppins font-semibold text-[40px] leading-[45px] md:text-[65px] md:leading-[78px] text-center text-charcoal">All my requests</h2>   
                </div>
            </div>
        </div> 
    </div>


    <div className='mx-auto py-15 sm:py-15 px-6 xl:px-20 container'>
        <div className='flex items-center justify-between mb-3'>
            <h2 className="text-center w-full sm:w-auto sm:text-left font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal">All ongoing requests</h2>
            <div className='flex justify-end items-center'>
                <button className="flex items-center text-charcoal py-[11px] rounded-[6px] font-semibold">
                    <svg className='mr-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#228EA9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    November 2025
                    <svg className='ml-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#228EA9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </button>
                <button className="bg-primary text-white border border-primary py-[11px] px-9 rounded-[6px] hover:bg-transparent hover:text-teal-600 font-semibold sm:ml-4">Today (13 August 2025)</button>
            </div>
        </div>
        <div>
            <div className='mt-9'>
                <span className='font-semibold text-base leading-6 text-charcoal'>02 November 2025</span>
                <div>
                    <div className='border border-[#D9D9D9] p-6 flex items-center'>
                        <div className='w-[calc(100%-260px)] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <div>
                                    <img
                                        src="../client-dashboard-img02.jpg"  
                                        alt=""
                                        className="w-[265px] h-[153px] md:w-[151px] md:h-[121px] rounded-xl object-cover"
                                    />
                                </div>
                                <div className='font-medium text-base leading-6 text-charcoal ml-8'>
                                    <h3 className='font-semibold text-[22px] leading-8'>Mowing the lawn</h3>
                                    <p>Client name is over here</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[16px]'> 
                                <span className="flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 mb-4"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 2V6M16.75 2V6M3.75 10H21.75M5.75 4H19.75C20.8546 4 21.75 4.89543 21.75 6V20C21.75 21.1046 20.8546 22 19.75 22H5.75C4.64543 22 3.75 21.1046 3.75 20V6C3.75 4.89543 4.64543 4 5.75 4Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>02/11/2025</span></span>
                                <span className="flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 mb-4"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 2H14.75M12.75 14L15.75 11M20.75 14C20.75 18.4183 17.1683 22 12.75 22C8.33172 22 4.75 18.4183 4.75 14C4.75 9.58172 8.33172 6 12.75 6C17.1683 6 20.75 9.58172 20.75 14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>10:00-12:00am (2 hours)</span></span>
                            </div>
                        </div>
                        <div className='w-[260px] pl-[62px]'>
                            <button className="w-full bg-transparent text-primary border border-primary py-[11px] px-[26px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">View request details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>


</>
); 
}; 
export default ProfileTabs;             