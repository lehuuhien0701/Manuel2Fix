import { useState } from 'react'; 
 
import DatePickerComponent from '../DatePickerComponent.jsx';
 


 




 


    const ProfileTabs = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const handleToggle = () => {
        setIsOpen(!isOpen);  
    };
    

 
  
  return (

<>
    <section>
        <div className=''>    
            <div className='relative'>
                <div className="w-full mx-auto py-15 pb-5 sm:py-20 sm:pb-0 xl:px-20 container relative">
                    <div className="xl:flex flex-col xl:flex-row justify-between lg:gap-20">
                    
                        <div className="w-full xl:w-5/12 relative z-40 md:pr-9 lg:pr-0 pt-4">
                            <div className='flex items-center gap-10 bg-white rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.08)] px-8 py-20'>
                                <div className='w-[161px]'>  
                                    <img src="avata01.png" alt="" className="rounded-full max-w-[161px]"/>
                                </div>
                                <div className='w-[calc(100%-161px)] '>
                                    <div className='pb-4 mb-4 border-b border-[#D9D9D9]'>
                                        <span className='font-semibold text-[20px] leading-[26px] text-charcoal mb-2 block'>
                                            Welcome
                                        </span>
                                        <h2 className='font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal'>Jack Doe!</h2> 
                                    </div>
                                    <div>
                                        <svg width="131" height="20" viewBox="0 0 131 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1916_27458)">
                                        <path d="M21.7863 7.68428L14.2562 6.64494L10.8932 0.196167L7.53012 6.64494L0 7.68428L5.44977 12.7108L4.16071 19.8038L10.8932 16.4549L17.6192 19.8038L16.3365 12.7108L21.7863 7.68428Z" fill="#E7B613"/>
                                        </g>
                                        <g clip-path="url(#clip1_1916_27458)">
                                        <path d="M48.965 7.68428L41.4349 6.64494L38.0719 0.196167L34.7088 6.64494L27.1787 7.68428L32.6285 12.7108L31.3394 19.8038L38.0719 16.4549L44.7979 19.8038L43.5153 12.7108L48.965 7.68428Z" fill="#E7B613"/>
                                        </g>
                                        <g clip-path="url(#clip2_1916_27458)">
                                        <path d="M76.1428 7.68428L68.6126 6.64494L65.2496 0.196167L61.8866 6.64494L54.3564 7.68428L59.8062 12.7108L58.5172 19.8038L65.2496 16.4549L71.9757 19.8038L70.693 12.7108L76.1428 7.68428Z" fill="#E7B613"/>
                                        </g>
                                        <g clip-path="url(#clip3_1916_27458)">
                                        <path d="M103.321 7.68428L95.7913 6.64494L92.4283 0.196167L89.0653 6.64494L81.5352 7.68428L86.9849 12.7108L85.6959 19.8038L92.4283 16.4549L99.1544 19.8038L97.8717 12.7108L103.321 7.68428Z" fill="#E7B613"/>
                                        </g>
                                        <g clip-path="url(#clip4_1916_27458)">
                                        <path d="M130.5 7.68428L122.97 6.64494L119.607 0.196167L116.244 6.64494L108.714 7.68428L114.164 12.7108L112.875 19.8038L119.607 16.4549L126.333 19.8038L125.05 12.7108L130.5 7.68428Z" fill="#E7B613"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1916_27458">
                                        <rect width="21.7863" height="19.6077" fill="white" transform="translate(0 0.196167)"/>
                                        </clipPath>
                                        <clipPath id="clip1_1916_27458">
                                        <rect width="21.7863" height="19.6077" fill="white" transform="translate(27.1787 0.196167)"/>
                                        </clipPath>
                                        <clipPath id="clip2_1916_27458">
                                        <rect width="21.7863" height="19.6077" fill="white" transform="translate(54.3564 0.196167)"/>
                                        </clipPath>
                                        <clipPath id="clip3_1916_27458">
                                        <rect width="21.7863" height="19.6077" fill="white" transform="translate(81.5352 0.196167)"/>
                                        </clipPath>
                                        <clipPath id="clip4_1916_27458">
                                        <rect width="21.7863" height="19.6077" fill="white" transform="translate(108.714 0.196167)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        <span className='text-xs text-charcoal font-normal block mt-3'>105 reviews received</span>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="relative z-50 w-full xl:w-7/12 flex justify-start mt-5 xl:mt-0">
                            <div className="relative overflow-hidden z-20 pt-15"> 
                                <img src="img28.jpg" alt="Main Thumbnail" className="object-cover rounded-lg md:rounded-2xl"/>
                            </div> 
                            <div className="absolute top-0 right-0 bg-gray-100 rounded-lg md:rounded-2xl overflow-hidden z-20 m-auto"> 
                                <img src="img29.jpg" alt="Main Thumbnail" className="object-cover"/>
                            </div>   
                        </div>
                    </div>  
                </div>
                <div 
                    className="min-h-[50px] md:min-h-0 absolute z-10 left-0 right-0 bottom-0 sm:pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-custom-blue" 
                    style={{ backgroundImage: "url('/banner02-s.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
                > 
                
                </div>
                <img src="sign-up-img-dot01.svg" alt="" className="w-[200px] h-[200px] md:w-[334px] md:h-[421px] object-cover absolute bottom-0 right-0 z-20"/>
                
            </div>
            <div className="bg-[#F2F7F8]">
                <article className="mx-auto py-15 sm:py-20 container xl:px-20">  
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-center w-full md:w-auto sm:text-left font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal">Why people trust Manual2Fix</h2> 
                        <button className="hidden md:block bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-8 rounded-[6px]"> 
                        View all reviews
                        </button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='bg-[#E3EFF2] rounded-xl px-6 lg:px-14 py-12 flex items-center justify-center'>
                            <div>
                            <h2 className='font-semibold text-[50px] leading-[60px] md:text-[80px] md:leading-[90px] text-center text-charcoal'>4.85</h2>
                            <p className='font-semibold text-[22px] leading-8 text-charcoal text-center'>Average rating</p>
                            </div>
                        </div>
                        <div className='bg-[#E3EFF2] rounded-xl px-6 lg:px-14 py-12 flex items-center justify-center'>
                            <div>
                            <h2 className='font-semibold text-[50px] leading-[60px] md:text-[80px] md:leading-[90px] text-center text-charcoal'>2000</h2>
                            <p className='font-semibold text-[22px] leading-8 text-charcoal text-center'>Happy customers</p>
                            </div>
                        </div>
                        <div className='bg-[#E3EFF2] rounded-xl px-6 lg:px-14 py-12 flex items-center justify-center'>
                            <div>
                                <h2 className='font-semibold text-[25px] leading-[30px] md:text-3xl md:leading-[38px] text-charcoal text-center'>Secure payments & verified providers</h2> 
                            </div>
                        </div>
                    </div>  
                    <button className="block md:hidden m-auto mt-10 bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-8 rounded-[6px]"> 
                    View all reviews
                    </button>  



                </article>
            </div> 
            
        </div> 
        
    </section>
    <section>
        <div className='w-full mx-auto py-15 sm:py-20 xl:px-20 container relative'> 
            <div className='max-w-[840px] m-auto'>
                <h2 className='font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-center text-charcoal'>Latest notifications</h2>
                <div className='mt-10 border-t border-[#D9D9D9]'>
                    <div className='font-normal text-base leading-6 text-charcoal border-b border-[#D9D9D9] pt-10 pb-10'>
                        <div>
                            <span className='font-semibold mb-2 pr-25 block relative'>Notification item is here <span className='text-[#A0A0A0] text-xs leading-[18px] absolute top-0 right-0'>02/11/2025</span></span>
                            <p className='mb-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...
                            </p>
                            <a className='text-primary font-semibold' href="#">Link is over here</a>
                        </div>   
                    </div>
                    <div className='font-normal text-base leading-6 text-charcoal pt-10 pb-10 border-b border-[#D9D9D9]'>
                        <div>
                            <span className='font-semibold mb-2 pr-25 block relative'>Notification item is here <span className='text-[#A0A0A0] text-xs leading-[18px] absolute top-0 right-0'>02/11/2025</span></span>
                            <p className='mb-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...
                            </p> 
                        </div>   
                    </div>
                </div>    
            </div>
        </div>
    </section>
    <section className=''>
        <div className='mx-auto py-15 sm:py-15 px-6 xl:px-20 container'> 
            <div className='flex flex-wrap lg:flex-row items-center justify-between mb-3'>
                <h2 className="mb-5 lg:mb-0 text-center w-full lg:w-auto lg:text-left font-semibold text-[34px] leading-[44px] lg:text-[40px] lg:leading-[50px] text-charcoal">All ongoing requests</h2>
                <div className='w-full lg:w-auto lg:flex items-center'>
                    <div className='flex flex-col lg:flex-row justify-center lg:justify-end items-center w-full lg:w-auto lg:border-r lg:border-[#D9D9D9] lg:pr-4 lg:mr-4'>
                        <button className="mb-5 lg:mb-0 flex items-center text-charcoal py-[11px] px-6 rounded-[6px] font-semibold bg-white">
                            <svg className='mr-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="#228EA9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            November 2025
                            <svg className='ml-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="#228EA9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>  
                        </button>
                        <button className="bg-primary text-white border border-primary py-[11px] px-6 rounded-[6px] hover:bg-transparent hover:text-teal-600 font-semibold sm:ml-4">Today (13 August 2025)</button>
                    </div>
                    <div className='mt-5 lg:mt-0 flex items-center gap-4 justify-end'>
                        <a href="#">
                            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="45" height="45" rx="6" fill="#228EA9"/>
                            <path d="M18.5 13V17M26.5 13V17M13.5 21H31.5M15.5 15H29.5C30.6046 15 31.5 15.8954 31.5 17V31C31.5 32.1046 30.6046 33 29.5 33H15.5C14.3954 33 13.5 32.1046 13.5 31V17C13.5 15.8954 14.3954 15 15.5 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="45" height="45" rx="6" fill="#F7F9F9"/>
                            <path d="M31.5 23L19.5 23M31.5 17L19.5 17M31.5 29L19.5 29M15.5 23C15.5 23.5523 15.0523 24 14.5 24C13.9477 24 13.5 23.5523 13.5 23C13.5 22.4477 13.9477 22 14.5 22C15.0523 22 15.5 22.4477 15.5 23ZM15.5 17C15.5 17.5523 15.0523 18 14.5 18C13.9477 18 13.5 17.5523 13.5 17C13.5 16.4477 13.9477 16 14.5 16C15.0523 16 15.5 16.4477 15.5 17ZM15.5 29C15.5 29.5523 15.0523 30 14.5 30C13.9477 30 13.5 29.5523 13.5 29C13.5 28.4477 13.9477 28 14.5 28C15.0523 28 15.5 28.4477 15.5 29Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                        </a>
                    </div>
                </div>
            </div>
            <div className='h-[700px] overflow-y-scroll custom-scrollbar'>
                <div className='mt-8'>
                    <span className='font-semibold text-base text-charcoa mb-4 block'>02 November 2025</span> 
                    <div>
                        <div className='border border-[#D9D9D9] px-6 py-[23px] rounded-xl mb-4'>
                            <div className='lg:flex items-center '>
                                <div className='lg:w-[calc(100%-260px)] md:flex items-center justify-between pb-6 mb-6 lg:pb-0 lg:mb-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-[#D9D9D9]'>
                                    <div className='md:flex items-center md:w-[calc(100%-260px)] 2xl:w-auto'>
                                        <div className='mb-5 md:mb-0'>
                                            <img
                                                src="../client-dashboard-img02.jpg"  
                                                alt=""
                                                className="w-full h-full md:w-[151px] md:h-[121px] rounded-xl object-cover"
                                            />
                                        </div>
                                        <div className='font-medium text-base text-charcoal md:ml-8 mb-2 md:mb-0'>
                                            <h3 className='font-semibold text-[22px] leading-8'>Mowing the lawn</h3>
                                            <p>Client name is over here</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap items-center gap-[16px] md:w-[260px] 2xl:w-auto'> 
                                        <span className="flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 "><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 2V6M16.75 2V6M3.75 10H21.75M5.75 4H19.75C20.8546 4 21.75 4.89543 21.75 6V20C21.75 21.1046 20.8546 22 19.75 22H5.75C4.64543 22 3.75 21.1046 3.75 20V6C3.75 4.89543 4.64543 4 5.75 4Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>02/11/2025</span></span>
                                        <span className="flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 "><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 2H14.75M12.75 14L15.75 11M20.75 14C20.75 18.4183 17.1683 22 12.75 22C8.33172 22 4.75 18.4183 4.75 14C4.75 9.58172 8.33172 6 12.75 6C17.1683 6 20.75 9.58172 20.75 14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>10:00-12:00am (2 hours)</span></span>
                                    </div>
                                </div>
                                <div className='lg:w-[260px] lg:pl-10'>
                                    <button className="w-full bg-transparent text-primary border border-primary py-[11px] px-[26px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">View request details</button>
                                </div>
                            </div>


                            <div className='bg-[#F7F9F9] mt-3 rounded-md'>
                                <div className='bg-[#F7F9F9] mt-3 rounded-md'> 
                                   
                                    <div className='px-6 py-3 flex items-center justify-between cursor-pointer' onClick={handleToggle}>
                                        <p className='font-semibold text-base text-charcoal'>
                                            Private chat <span className='font-normal'>(3)</span>
                                        </p>
                                        
                                      
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} >                                           
                                            <path d="M18 15L12 9L6 15" stroke="#228EA9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg> 
                                    </div>
                                    
                                    
                                    <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100 py-8 border-t border-[#D9D9D9]' : 'max-h-0 opacity-0 py-0'}`} >
                                        <div className='px-6'> 
                                            
                                            <div className="flex items-end space-x-4 mb-6">
                                                <div className="w-[47px] h-[47px] sm:w-[72px] sm:h-[72px] bg-[#D9D9D9] rounded-full flex-shrink-0"></div>
                                                <div className="flex-1"> 
                                                    <div className="bg-white px-4 py-5 rounded-xl shadow-sm max-w-2xl">
                                                        <div className="flex items-center space-x-2 mb-2 font-poppins font-medium text-base leading-6 text-charcoal">
                                                            <p className=" ">Name Surname</p>
                                                            <span className=" ">09:34am</span>
                                                        </div>
                                                        <p className="font-poppins font-normal text-base leading-6 text-charcoal">
                                                            Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-end justify-end space-x-4 mb-8">
                                                <div className="flex-1 flex justify-end">
                                                    <div className="bg-[#E3EFF2] p-4 rounded-xl shadow-sm max-w-2xl">
                                                        <div className="flex items-center space-x-2 mb-2 font-poppins font-medium text-base leading-6 text-charcoal">
                                                            <span className="">09:34am</span>
                                                        </div> 
                                                        <p className="font-poppins font-normal text-base leading-6 text-charcoal">
                                                            Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[47px] h-[47px] sm:w-[72px] sm:h-[72px] bg-[#D9D9D9] rounded-full flex-shrink-0"></div>
                                            </div>
                                            
                                            <div className="flex items-end space-x-4">
                                                <div className="w-[47px] h-[47px] sm:w-[72px] sm:h-[72px] bg-[#D9D9D9] rounded-full flex-shrink-0"></div>
                                                <div className="flex-1"> 
                                                    <div className="bg-white p-4 rounded-xl shadow-sm max-w-2xl">
                                                        <div className="flex items-center space-x-2 mb-2 font-poppins font-medium text-base leading-6 text-charcoal">
                                                            <p className="">Name Surname</p>
                                                            <span className="">09:34am</span>
                                                        </div> 
                                                        <p className="font-poppins font-normal text-base leading-6 text-charcoal"> 
                                                            Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        <div className='border border-[#D9D9D9] px-6 py-[23px] rounded-xl mb-4'>
                            <div className='lg:flex items-center '>
                                <div className='lg:w-[calc(100%-260px)] md:flex items-center justify-between pb-6 mb-6 lg:pb-0 lg:mb-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-[#D9D9D9]'>
                                    <div className='md:flex items-center md:w-[calc(100%-260px)] 2xl:w-auto'>
                                        <div className='mb-5 md:mb-0'>
                                            <img
                                                src="../client-dashboard-img02.jpg"  
                                                alt=""
                                                className="w-full h-full md:w-[151px] md:h-[121px] rounded-xl object-cover"
                                            />
                                        </div>
                                        <div className='font-medium text-base text-charcoal md:ml-8 mb-2 md:mb-0'>
                                            <h3 className='font-semibold text-[22px] leading-8'>Mowing the lawn</h3>
                                            <p>Client name is over here</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap items-center gap-[16px] md:w-[260px] 2xl:w-auto'> 
                                        <span className="flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 "><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 2V6M16.75 2V6M3.75 10H21.75M5.75 4H19.75C20.8546 4 21.75 4.89543 21.75 6V20C21.75 21.1046 20.8546 22 19.75 22H5.75C4.64543 22 3.75 21.1046 3.75 20V6C3.75 4.89543 4.64543 4 5.75 4Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>02/11/2025</span></span>
                                        <span className="flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 "><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 2H14.75M12.75 14L15.75 11M20.75 14C20.75 18.4183 17.1683 22 12.75 22C8.33172 22 4.75 18.4183 4.75 14C4.75 9.58172 8.33172 6 12.75 6C17.1683 6 20.75 9.58172 20.75 14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>10:00-12:00am (2 hours)</span></span>
                                    </div>
                                </div>
                                <div className='lg:w-[260px] lg:pl-10'>
                                    <button className="w-full bg-transparent text-primary border border-primary py-[11px] px-[26px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">View request details</button>
                                </div>
                            </div>


                            <div className='bg-[#F7F9F9] mt-3 rounded-md'>
                                <div className='bg-[#F7F9F9] mt-3 rounded-md'> 
                                   
                                    <div className='px-6 py-3 flex items-center justify-between cursor-pointer' onClick={handleToggle}>
                                        <p className='font-semibold text-base text-charcoal'>
                                            Private chat <span className='font-normal'>(3)</span>
                                        </p>
                                        
                                      
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} >                                           
                                            <path d="M18 15L12 9L6 15" stroke="#228EA9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg> 
                                    </div>
                                    
                                    
                                    <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100 py-8 border-t border-[#D9D9D9]' : 'max-h-0 opacity-0 py-0'}`} >
                                        <div className='px-6'> 
                                            
                                            <div className="flex items-end space-x-4 mb-6">
                                                <div className="w-[47px] h-[47px] sm:w-[72px] sm:h-[72px] bg-[#D9D9D9] rounded-full flex-shrink-0"></div>
                                                <div className="flex-1"> 
                                                    <div className="bg-white px-4 py-5 rounded-xl shadow-sm max-w-2xl">
                                                        <div className="flex items-center space-x-2 mb-2 font-poppins font-medium text-base leading-6 text-charcoal">
                                                            <p className=" ">Name Surname</p>
                                                            <span className=" ">09:34am</span>
                                                        </div>
                                                        <p className="font-poppins font-normal text-base leading-6 text-charcoal">
                                                            Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-end justify-end space-x-4 mb-8">
                                                <div className="flex-1 flex justify-end">
                                                    <div className="bg-[#E3EFF2] p-4 rounded-xl shadow-sm max-w-2xl">
                                                        <div className="flex items-center space-x-2 mb-2 font-poppins font-medium text-base leading-6 text-charcoal">
                                                            <span className="">09:34am</span>
                                                        </div> 
                                                        <p className="font-poppins font-normal text-base leading-6 text-charcoal">
                                                            Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-[47px] h-[47px] sm:w-[72px] sm:h-[72px] bg-[#D9D9D9] rounded-full flex-shrink-0"></div>
                                            </div>
                                            
                                            <div className="flex items-end space-x-4">
                                                <div className="w-[47px] h-[47px] sm:w-[72px] sm:h-[72px] bg-[#D9D9D9] rounded-full flex-shrink-0"></div>
                                                <div className="flex-1"> 
                                                    <div className="bg-white p-4 rounded-xl shadow-sm max-w-2xl">
                                                        <div className="flex items-center space-x-2 mb-2 font-poppins font-medium text-base leading-6 text-charcoal">
                                                            <p className="">Name Surname</p>
                                                            <span className="">09:34am</span>
                                                        </div> 
                                                        <p className="font-poppins font-normal text-base leading-6 text-charcoal"> 
                                                            Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                 
            </div>
            
        </div>
    </section> 
    <section className='relative'>
        <div className='mx-auto py-15 sm:py-15 px-6 xl:px-20 container relative z-50'>
            <h2 className='font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-center'>Subscription status</h2>
            <div className='bg-white rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.08)] pb-3 p-10 mt-9 max-w-[722px] m-auto'>
                <h3 className='font-semibold text-[22px] leading-8 text-center text-charcoal pb-10'>Subscription name is here</h3>
                <div>
                    <div className='font-normal text-base leading-6 text-charcoal border-t border-[#D9D9D9] pt-5 pb-5'>
                        <div>
                            <p className='font-semibold mb-2 pr-25 block relative'>Expiration date <span className='text-[#A0A0A0] text-xs leading-[18px] absolute top-0 right-0'>02/11/2025</span></p>                             
                        </div>   
                    </div>
                    <div className='font-normal text-base leading-6 text-charcoal border-t border-[#D9D9D9] pt-6 pb-6'>
                        <div>
                            <p className='font-semibold mb-2 pr-25 block relative'>Expiration date <span className='text-[#A0A0A0] text-xs leading-[18px] absolute top-0 right-0'>02/11/2025</span></p>                             
                        </div>   
                    </div>
                </div>
            </div>
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
        <div className="absolute bottom-0 right-0 z-10">
            <img 
                src="/v2-bg-dot3.svg" 
                alt=""
                className="w-full h-full"
            /> 
        </div>
    </section>

    <section>
        <div className='mx-auto py-15 sm:py-15 px-6 xl:px-20 container'>
            <div className='sm:flex lg:flex-row items-center justify-between mb-3'>
                <h2 className="mb-8 sm:mb-0 text-center md:text-left font-semibold text-[34px] leading-[44px] lg:text-[40px] lg:leading-[50px] text-charcoal">Skills</h2>
                <div className='sm:flex items-center justify-center '>
                     <button className="block sm:inline-block text-primary border-b sm:border-b-0 sm:border-r border-[#D9D9D9] py-[11px] px-6 hover:bg-transparent hover:text-teal-600 font-semibold  w-full sm:w-auto">Disable all skills</button>
                     <button className="block sm:inline-block bg-primary text-white border border-primary py-[11px] px-6 rounded-[6px] hover:bg-transparent hover:text-teal-600 font-semibold sm:ml-6 w-full sm:w-auto mt-[18px] sm:mt-0">Add a new skill</button>
                </div>
            </div>
            <div className='h-[700px] overflow-y-scroll custom-scrollbar'>
                <div className='mt-8'>
                     
                    <div>
                        <div className='border border-[#D9D9D9] px-6 py-6 sm:py-[16px] rounded-xl mb-4'>
                            <div className='sm:flex items-center justify-between'>
                                <div className='sm:flex items-center justify-between lg:pr-10'>
                                    <div className='md:flex items-center'>
                                        <div className='mb-5 md:mb-0 md:w-[220px] md:h-[100px]'>
                                            <img
                                                src="../client-dashboard-img02.jpg"  
                                                alt=""
                                                className="w-full h-full rounded-xl object-cover"
                                            />
                                        </div>
                                        <div className='font-medium text-base text-charcoal md:ml-8 mb-6 pb-6 sm:mb-0 sm:pb-0 border-b border-[#D9D9D9] sm:border-none'>
                                            <h3 className='font-semibold text-[22px] leading-8'>Mowing the lawn</h3>
                                            <p>Client name is over here</p>
                                        </div>
                                    </div> 
                                </div>
                                <div className='flex items-center'>
                                    <a href="#" className='font-semibold text-base leading-5 text-primary pr-6 mr-6 border-r border-[#D9D9D9]'>Disable skill</a>
                                    <a href="#">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#E65656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>                                    
                                </div>
                            </div> 
                            
                        </div>
                         
                    </div>
                </div>
                 
            </div>
            
        </div>
    </section> 
    <section className='shadow-[0px_0px_30px_rgba(0,0,0,0.08)] relative'>
        <div className='mx-auto py-15 sm:py-15 px-6 xl:px-20 container'>
            <div className='flex flex-wrap lg:flex-row items-center justify-between mb-10'>
                <h2 className="mb-5 lg:mb-0 text-center w-full lg:w-auto lg:text-left font-semibold text-[34px] leading-[44px] lg:text-[40px] lg:leading-[50px] text-charcoal">Set up availability</h2>
                <div className='flex items-center w-full lg:w-auto'>
                    <div className='flex flex-col lg:flex-row justify-center lg:justify-end items-center w-full lg:w-auto'>
                        <button className="mb-5 lg:mb-0 flex items-center text-charcoal py-[11px] rounded-[6px] font-semibold bg-white">
                            <svg className='mr-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="#228EA9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            04 August - 10 August 2025
                            <svg className='ml-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="#228EA9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>  
                        </button>                        
                    </div>
                     
                </div>
            </div>

            <div className='flex-col-reverse flex lg:flex lg:flex-row gap-10'>
                <div className='lg:w-[calc(100%-280px)]'>
                    <div className='bg-[#F7F9F9]'>
                        <div className='border-b border-[#D9D9D9] py-5 px-8'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center'>
                                            <div className='flex items-center'>
                                                <input
                                                    type="checkbox"  
                                                    id="male"
                                                    name="gender"  
                                                    className="peer2 hidden" 
                                                    
                                                />
                                                
                                            
                                                <label 
                                                    htmlFor="male" 
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
                                                
                                                
                                                <label htmlFor="male" className="font-medium text-base text-charcoal cursor-pointer select-none">
                                                07/08/2025
                                                </label>
                                            </div>
                                            <div className='ml-2 font-normal text-base leading-6 text-charcoal'>
                                                Monday
                                            </div>
                                        </div>
                                        <div className='flex items-center font-semibold text-base leading-5 text-[#228EA9]'>
                                            Set availability slot
                                            <svg className='ml-2' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0.999999L7 7L13 1" stroke="#228EA9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg> 
                                        </div>
                                    </div>
                                <div> 
                            </div>
                        </div> 
                        <div className='py-5 px-8'>
                           <div>
                                <div className='bg-white rounded-md p-6 lg:flex items-center justify-between mb-3'>
                                    <div className="sm:flex gap-6 items-center justify-between lg:justify-normal">
    
                                         <div className="mb-6 sm:mb-0 flex flex-row items-center">
                                            <label className="w-full max-w-25 font-medium text-base leading-6 text-charcoal  mb-2 mr-3">Start time</label>
                                            
                                             <div className="w-full max-w-32 flex items-center bg-white border border-gray-300 rounded-md p-0 overflow-hidden shadow-sm">
                                                
                                                 <input 
                                                    type="text"  
                                                    defaultValue="00:00" 
                                                    className="w-full px-3 py-2 text-base font-medium text-center focus:outline-none"
                                                 />
                                                
                                                 <div className="flex flex-col ">
                                                    <button className="h-[13px] w-6 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path></svg>
                                                    </button>
                                                    <button className="h-[13px] w-6 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-row items-center">
                                            <label className="w-full max-w-25 sm:max-w-none font-medium text-base leading-6 text-charcoal mb-2 mr-3">End time</label>
                                            <div className="w-full max-w-32 flex items-center bg-white border border-gray-300 rounded-md p-0 overflow-hidden shadow-sm">
                                                <input 
                                                    type="text"
                                                    defaultValue="00:00" 
                                                    className="w-full px-3 py-2 text-base font-medium text-center focus:outline-none"
                                                />
                                                <div className="flex flex-col ">
                                                    <button className="h-[13px] w-6 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path></svg>
                                                    </button>
                                                    <button className="h-[13px] w-6 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5 lg:mt-0'>
                                        <div className='flex items-center justify-end'>
                                            <button className="block sm:inline-block bg-primary text-white border border-primary py-[11px] px-6 rounded-[6px] hover:bg-transparent hover:text-teal-600 font-semibold w-full sm:w-auto">Save slot</button>
                                            <a href="#" className='ml-8 pl-8 border-l border-[#D9D9D9] h-12 flex items-center'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#E65656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </a>                                    
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white rounded-md p-6 lg:flex items-center justify-between mb-3'>
                                    <div className="sm:flex gap-6 items-center justify-between lg:justify-normal">
    
                                         <div className="mb-6 sm:mb-0 flex flex-row items-center">
                                            <label className="w-full max-w-25 font-medium text-base leading-6 text-charcoal  mb-2 mr-3">Start time</label>
                                            
                                             <div className="w-full max-w-32 flex items-center bg-white border border-gray-300 rounded-md p-0 overflow-hidden shadow-sm">
                                                
                                                 <input 
                                                    type="text"  
                                                    defaultValue="00:00" 
                                                    className="w-full px-3 py-2 text-base font-medium text-center focus:outline-none"
                                                 />
                                                
                                                 <div className="flex flex-col ">
                                                    <button className="h-[13px] w-6 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path></svg>
                                                    </button>
                                                    <button className="h-[13px] w-6 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-row items-center">
                                            <label className="w-full max-w-25 sm:max-w-none font-medium text-base leading-6 text-charcoal mb-2 mr-3">End time</label>
                                            <div className="w-full max-w-32 flex items-center bg-white border border-gray-300 rounded-md p-0 overflow-hidden shadow-sm">
                                                <input 
                                                    type="text"
                                                    defaultValue="00:00" 
                                                    className="w-full px-3 py-2 text-base font-medium text-center focus:outline-none"
                                                />
                                                <div className="flex flex-col ">
                                                    <button className="h-[13px] w-6 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path></svg>
                                                    </button>
                                                    <button className="h-[13px] w-6 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5 lg:mt-0'>
                                        <div className='flex items-center justify-end'>
                                            <button className="block sm:inline-block bg-primary text-white border border-primary py-[11px] px-6 rounded-[6px] hover:bg-transparent hover:text-teal-600 font-semibold w-full sm:w-auto">Save slot</button>
                                            <a href="#" className='ml-8 pl-8 border-l border-[#D9D9D9] h-12 flex items-center'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#E65656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </a>                                    
                                        </div>
                                    </div>
                                </div> 
                           </div>
                           <button className="bg-transparent text-primary border border-primary py-[11px] px-[26px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">Add another slot</button>


                        </div>
                    </div>
                </div>
                <div className='mt-5 lg:mt-0 lg:w-[280px] bg-[#F7F9F9] rounded-md py-5 px-8'>
                    <div className='pb-4 mb-4 border-b border-[#D9D9D9]'>
                        <div className='flex items-center justify-between font-semibold text-base leading-6 text-charcoal mb-2'>
                            <span>04/08/2025</span>
                            <span>Monday</span>
                        </div>
                        <ul className='m-0 p-0'>
                            <li className='list-none font-normal text-base text-charcoal mb-2'>
                                10:00 - 11:00 am
                            </li>
                            <li className='list-none font-normal text-base text-charcoal mb-2'>
                                14:00 - 15:00 am
                            </li>
                        </ul>
                    </div>
                    <div className='pb-4 mb-4'>
                        <div className='flex items-center justify-between font-semibold text-base leading-6 text-charcoal mb-2'>
                            <span>04/08/2025</span>
                            <span>Monday</span>
                        </div>
                        <ul className='m-0 p-0'>
                            <li className='list-none font-normal text-base text-charcoal mb-2'>
                                10:00 - 11:00 am
                            </li>
                            <li className='list-none font-normal text-base text-charcoal mb-2'>
                                14:00 - 15:00 am
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <section className='bg-[#FBF8F4]'>
        <div className='mx-auto py-15 sm:py-15 px-6 xl:px-20 container'>
            <div className='flex flex-wrap lg:flex-row items-center justify-between mb-10'>
                <h2 className="mb-5 lg:mb-0 text-center w-full lg:w-auto lg:text-left font-semibold text-[34px] leading-[44px] lg:text-[40px] lg:leading-[50px] text-charcoal">Set up vacancy</h2>               
            </div>

            <div className='flex-col-reverse flex lg:flex lg:flex-row gap-10'>
                <div className='lg:w-[calc(100%-280px)]'>
                    <div className=''>
                         
                        <div className=''>
                           <div>
                                <div className='bg-white rounded-md p-6 xl:flex items-center justify-between mb-3'>
                                    <div className="sm:flex gap-6 items-center justify-between xl:justify-start">
    
                                         <div className="flex flex-row items-center mb-6 sm:mb-0">
                                            <label className="w-full max-w-25 font-medium text-base leading-6 text-charcoal  mb-2 mr-3">Start date</label>
                                            
                                             <div className='w-full sm:w-[200px]'>
                                            <DatePickerComponent />
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-row items-center mb-6 sm:mb-0">
                                            <label className="w-full max-w-25 font-medium text-base leading-6 text-charcoal mb-2 mr-3">End date</label>
                                            <div className='w-full sm:w-[200px]'>
                                            <DatePickerComponent />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5 xl:mt-0'>
                                        <div className='flex items-center justify-end'>
                                            <button className="block sm:inline-block bg-primary text-white border border-primary py-[11px] px-6 rounded-[6px] hover:bg-transparent hover:text-teal-600 font-semibold w-full sm:w-auto">Save slot</button>
                                            <a href="#" className='ml-8 pl-8 border-l border-[#D9D9D9] h-12 flex items-center'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#E65656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </a>                                    
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white rounded-md p-6 xl:flex items-center justify-between mb-3'>
                                    <div className="sm:flex gap-6 items-center justify-between xl:justify-start">
    
                                         <div className="flex flex-row items-center mb-6 sm:mb-0">
                                            <label className="w-full max-w-25 font-medium text-base leading-6 text-charcoal  mb-2 mr-3">Start date</label>
                                            
                                             <div className='w-full sm:w-[200px]'>
                                            <DatePickerComponent />
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-row items-center mb-6 sm:mb-0">
                                            <label className="w-full max-w-25 font-medium text-base leading-6 text-charcoal mb-2 mr-3">End date</label>
                                            <div className='w-full sm:w-[200px]'>
                                            <DatePickerComponent />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5 xl:mt-0'>
                                        <div className='flex items-center justify-end'>
                                            <button className="block sm:inline-block bg-primary text-white border border-primary py-[11px] px-6 rounded-[6px] hover:bg-transparent hover:text-teal-600 font-semibold w-full sm:w-auto">Save slot</button>
                                            <a href="#" className='ml-8 pl-8 border-l border-[#D9D9D9] h-12 flex items-center'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="#E65656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </a>                                    
                                        </div>
                                    </div>
                                </div>
                           </div>
                           <button className="bg-transparent text-primary border border-primary py-[11px] px-[26px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">Add another slot</button>


                        </div>
                    </div>
                </div>
                <div className='mt-5 lg:mt-0 lg:w-[280px] bg-[#F1EDE6] rounded-md py-5 px-8'>
                    <div className='pb-4 mb-4 border-b border-[#D9D9D9]'>
                        <span className='flex items-center justify-between font-semibold text-base leading-6 text-charcoal mb-2'>Slot 1</span>
                        <div className='flex items-center justify-between font-medium text-base leading-6 text-charcoal mb-2'>
                            <span>04/08/2025</span>
                            <span>Monday</span>
                        </div>
                        <ul className='m-0 p-0'>
                            <li className='list-none font-normal text-base text-charcoal mb-2'>
                                10:00 - 11:00 am
                            </li>
                            <li className='list-none font-normal text-base text-charcoal mb-2'>
                                14:00 - 15:00 am
                            </li>
                        </ul>
                    </div>
                    <div className='pb-4 mb-4'>
                        <span className='flex items-center justify-between font-semibold text-base leading-6 text-charcoal mb-2'>Slot 2</span>
                        <div className='flex items-center justify-between font-medium text-base leading-6 text-charcoal mb-2'>
                            <span>04/08/2025</span>
                            <span>Monday</span>
                        </div>
                        <ul className='m-0 p-0'>
                            <li className='list-none font-normal text-base text-charcoal mb-2'>
                                10:00 - 11:00 am
                            </li>
                            <li className='list-none font-normal text-base text-charcoal mb-2'>
                                14:00 - 15:00 am
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>  
    <section>
        <div className="w-full mx-auto py-15 sm:py-20 xl:px-20 container relative">
            <h2 className='font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal text-center mb-10'>New jobs</h2>
            <div className='lg:flex gap-8'>
                <div className='lg:w-[437px] h-[750px] overflow-y-scroll'>
                    <div className='pr-6'>
                        <div className='border border-primary rounded-xl p-6'>
                            <div className='pb-4 mb-4 border-b border-[#D9D9D9] flex items-center'>
                                <img src="thumb-small.png" alt="" className="rounded-2xl mr-4"/>
                                <h3>Mowing the lawn</h3>
                            </div>
                            <div className='flex gap-[10px] mb-4'>
                                <span className="w-[50%] flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 "><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 2V6M16.75 2V6M3.75 10H21.75M5.75 4H19.75C20.8546 4 21.75 4.89543 21.75 6V20C21.75 21.1046 20.8546 22 19.75 22H5.75C4.64543 22 3.75 21.1046 3.75 20V6C3.75 4.89543 4.64543 4 5.75 4Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>02/11/2025</span></span>
                                <span className="w-[50%] flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 "><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 2H14.75M12.75 14L15.75 11M20.75 14C20.75 18.4183 17.1683 22 12.75 22C8.33172 22 4.75 18.4183 4.75 14C4.75 9.58172 8.33172 6 12.75 6C17.1683 6 20.75 9.58172 20.75 14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>10:00-11:00am</span></span>
                            </div>
                            <button className="block bg-primary text-white border border-primary py-[11px] px-6 rounded-[6px] hover:bg-transparent hover:text-teal-600 font-semibold w-full mt-[18px] sm:mt-0">View details</button>
                        </div>
                    </div>
                    <div className='pr-6'>
                        <div className='border border-primary rounded-xl p-6'>
                            <div className='pb-4 mb-4 border-b border-[#D9D9D9] flex items-center'>
                                <img src="thumb-small.png" alt="" className="rounded-2xl mr-4"/>
                                <h3>Mowing the lawn</h3>
                            </div>
                            <div className='flex gap-[10px] mb-4'>
                                <span className="w-[50%] flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 "><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 2V6M16.75 2V6M3.75 10H21.75M5.75 4H19.75C20.8546 4 21.75 4.89543 21.75 6V20C21.75 21.1046 20.8546 22 19.75 22H5.75C4.64543 22 3.75 21.1046 3.75 20V6C3.75 4.89543 4.64543 4 5.75 4Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>02/11/2025</span></span>
                                <span className="w-[50%] flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 "><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 2H14.75M12.75 14L15.75 11M20.75 14C20.75 18.4183 17.1683 22 12.75 22C8.33172 22 4.75 18.4183 4.75 14C4.75 9.58172 8.33172 6 12.75 6C17.1683 6 20.75 9.58172 20.75 14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>10:00-11:00am</span></span>
                            </div>
                            <button className="block bg-primary text-white border border-primary py-[11px] px-6 rounded-[6px] hover:bg-transparent hover:text-teal-600 font-semibold w-full mt-[18px] sm:mt-0">View details</button>
                        </div>
                    </div>
                    <div className='pr-6'>
                        <div className='border border-primary rounded-xl p-6'>
                            <div className='pb-4 mb-4 border-b border-[#D9D9D9] flex items-center'>
                                <img src="thumb-small.png" alt="" className="rounded-2xl mr-4"/>
                                <h3>Mowing the lawn</h3>
                            </div>
                            <div className='flex gap-[10px] mb-4'>
                                <span className="w-[50%] flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 "><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 2V6M16.75 2V6M3.75 10H21.75M5.75 4H19.75C20.8546 4 21.75 4.89543 21.75 6V20C21.75 21.1046 20.8546 22 19.75 22H5.75C4.64543 22 3.75 21.1046 3.75 20V6C3.75 4.89543 4.64543 4 5.75 4Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>02/11/2025</span></span>
                                <span className="w-[50%] flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 "><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 2H14.75M12.75 14L15.75 11M20.75 14C20.75 18.4183 17.1683 22 12.75 22C8.33172 22 4.75 18.4183 4.75 14C4.75 9.58172 8.33172 6 12.75 6C17.1683 6 20.75 9.58172 20.75 14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>10:00-11:00am</span></span>
                            </div>
                            <button className="block bg-primary text-white border border-primary py-[11px] px-6 rounded-[6px] hover:bg-transparent hover:text-teal-600 font-semibold w-full mt-[18px] sm:mt-0">View details</button>
                        </div>
                    </div>
                </div>    
                <div className='mt-5 lg:mt-0 lg:w-[calc(100%-437px)]'>
                    <img src="map-img02.jpg" alt="" className="w-full h-[750px] object-cover"/>
                </div>    
            </div>    
        </div>
    </section>  
    <section className="bg-[#F1EDE6] relative overflow-hidden">
        <article className="mx-auto py-15 sm:py-20 container xl:px-20">
        
        <div className="flex justify-between items-center mb-10">
            <h2 className="text-center w-full font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal">Client reviews</h2>                       
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        
            <div className="bg-white rounded-xl overflow-hidden">   
                <div className="p-6"> 
                    <div className="flex gap-4"> 
                        <div className='w-[79px]'>
                            <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[22px] leading-8 text-charcoal">Jill</h3>
                            <span className='block'>Service provider type</span>
                            <span className='block'>Luxembourg 1233</span>
                        </div> 
                    </div> 
                    <div className="border-b border-[#D9D9D9] mt-3 mb-4"></div>  
                    <p className='text-[22px] leading-8 text-charcoal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className=''> 
                        <div className='flex font-medium text-sm leading-5 mt-2 mb-3'>
                            <span className='mr-3 text-charcoal'>Name</span> <span className='text-[#D9D9D9]'>|</span><span className='ml-3'>04-08-2025</span>
                        </div>
                        
                    </div> 
                    <div className="flex items-center space-x-1 text-yellow-400 mb-5">
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
                    <div className='grid grid-cols-1'>
                        <button className="w-full mt-2 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">
                            View service provider
                        </button> 
                    </div> 
                </div> 
            </div>
            <div className="bg-white rounded-xl overflow-hidden">   
                <div className="p-6"> 
                    <div className="flex gap-4"> 
                        <div className='w-[79px]'>
                            <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[22px] leading-8 text-charcoal">Jill</h3>
                            <span className='block'>Service provider type</span>
                            <span className='block'>Luxembourg 1233</span>
                        </div> 
                    </div> 
                    <div className="border-b border-[#D9D9D9] mt-3 mb-4"></div>  
                    <p className='text-[22px] leading-8 text-charcoal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className=''> 
                        <div className='flex font-medium text-sm leading-5 mt-2 mb-3'>
                            <span className='mr-3 text-charcoal'>Name</span> <span className='text-[#D9D9D9]'>|</span><span className='ml-3'>04-08-2025</span>
                        </div>
                        
                    </div> 
                    <div className="flex items-center space-x-1 text-yellow-400 mb-5">
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
                    <div className='grid grid-cols-1'>
                        <button className="w-full mt-2 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">
                            View service provider
                        </button> 
                    </div> 
                </div> 
            </div>
            <div className="bg-white rounded-xl overflow-hidden">   
                <div className="p-6"> 
                    <div className="flex gap-4"> 
                        <div className='w-[79px]'>
                            <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[22px] leading-8 text-charcoal">Jill</h3>
                            <span className='block'>Service provider type</span>
                            <span className='block'>Luxembourg 1233</span>
                        </div> 
                    </div> 
                    <div className="border-b border-[#D9D9D9] mt-3 mb-4"></div>  
                    <p className='text-[22px] leading-8 text-charcoal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className=''> 
                        <div className='flex font-medium text-sm leading-5 mt-2 mb-3'>
                            <span className='mr-3 text-charcoal'>Name</span> <span className='text-[#D9D9D9]'>|</span><span className='ml-3'>04-08-2025</span>
                        </div>
                        
                    </div> 
                    <div className="flex items-center space-x-1 text-yellow-400 mb-5">
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
                    <div className='grid grid-cols-1'>
                        <button className="w-full mt-2 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">
                            View service provider
                        </button> 
                    </div> 
                </div> 
            </div> 

        </div>
        <button className="block sm:hidden w-full sm:w-auto mt-6 sm:mt-0 bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-8 rounded-[6px]"> 
            View all providers
        </button>
        </article>
    </section>
    <section className="bg-primary relative overflow-hidden">
        <img src="/v2-bg-dot7.svg" alt="rovider thumbnail" className="absolute top-0 left-0"/>        
        <article className="mx-auto py-15 sm:py-20 container">
            <div className='max-w-[724px] m-auto bg-[#19829C] p-[50px]'>
                <h3 className='font-semibold text-[22px] leading-8 text-center text-white'>My balance</h3>
                <h2 className='font-semibold text-[60px] leading-[70px] md:text-[80px] md:leading-[90px] text-center text-white mb-2'>1500 EUR</h2> 
                <p className='font-normal text-base leading-6 text-center text-white'>This amount represents the total amount you are entitled to receive for completed services.</p>
            </div>
        </article>
    </section>
    <section className="bg-white relative shadow-[0px_0px_30px_rgba(0,0,0,0.08)]">        
        <article className="mx-auto py-15 sm:py-20 container xl:px-20">
            <h2 className='text-center w-full font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal mb-10'>Bank transfer</h2>
            <div>
                <h3 className='font-semibold text-[22px] leading-8 text-charcoal'>Account details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6"> 
                    <div>
                        <label htmlFor="iban" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                            IBAN
                        </label>
                        <input 
                            type="number" 
                            id="iban" 
                            name="iban" 
                            placeholder="1234-29287-009822-092" 
                        
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 pb-10 border-b border-[#D9D9D9]"> 
                    <div>
                        <label htmlFor="account-holder-name" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                            Account holder name
                        </label>
                        <input 
                            type="text" 
                            id="account-holder-name" 
                            name="account-holder-name" 
                            placeholder="name@email.com" 
                        
                            className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone-number" className="block font-medium text-sm leading-5 text-neutral-700 mb-1">
                            Phone number
                        </label>
                        <input 
                            type="text" 
                            id="phone-number" 
                            name="phone-number" 
                            placeholder="Phone number" 
                            
                            className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                        />
                    </div>
                </div>
                <h3 className='font-semibold text-[22px] leading-8 text-charcoal'>Transfer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 pb-10 border-b border-[#D9D9D9]">
                    <div className="border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                        <div className='flex items-center '>
                            <input
                            type="radio"
                            id="manual"
                            name="radio-group22"
                            className="peer hidden"
                            />
                            <div className="custom-radio-button mr-[10px] relative"></div>
                            <label htmlFor="manual" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                            Manual
                            </label>
                        </div>
                        <div className='pl-[26px]'>
                            Manual transfer to this account with a monthly notification sent at the beginning of each month to initiate the fund transfer.
                        </div>
                    </div>
                    <div className="border border-[#D9D9D9] rounded-md px-4 py-[11px] cursor-pointer">
                        <div className='flex items-center '>
                            <input
                            type="radio"
                            id="automatic"
                            name="radio-group22"
                            className="peer hidden"
                            />
                            <div className="custom-radio-button mr-[10px] relative"></div>
                            <label htmlFor="automatic" className="font-medium text-base text-neutral-700 cursor-pointer inline-block align-middle">
                            Automatic
                            </label>
                        </div>
                        <div className='pl-[26px]'>
                            Automatic transfer can be set up with a monthly notification sent at the beginning of each month to initiate the fund transfer.
                        </div>
                    </div> 
                </div>
                <div className="text-right">
                    <button type="submit" className="w-full sm:w-auto bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-7 rounded-[6px]">Save changes</button>
                </div>
                
            </div>
        </article>
    </section>     
    <section className="bg-[#FBF8F4]">        
        <article className="mx-auto py-15 sm:py-20 container xl:px-20 ">
            <h2 className='text-center w-full font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal mb-10'>Transaction history</h2>
            <div>
                <div className='md:flex items-center justify-between py-4 md:py-[14px] px-5 md:px-3 mb-3 bg-[#F1EDE6] rounded-md'>
                    <div className='md:flex items-center'>
                        <span className='block font-normal text-base text-charcoal md:mr-8 md:pr-8 border-b md:border-b-0 md:border-r border-[#D9D9D9] py-[5px] md:py-[12.5px]'>02/22/2025</span>
                        <div className='pr-40 md:pr-0 pt-2 pb-4 md:pt-0 md:pb-0 font-semibold text-base text-charcoal border-b md:border-b-0 border-[#D9D9D9] relative'>
                            Transaction heading is over here
                            <strong className='absolute top-2 right-0 md:relative block md:hidden md:mr-8 md:pr-8 border-r-none md:border-r border-[#D9D9D9 md:py-[12.5px] font-semibold text-base text-charcoal'>1234 EUR</strong>
                        </div>
                        
                    </div>
                    <div className='pt-3 md:pt-0 flex items-center justify-center sm:justify-end'>
                        <strong className='hidden md:block mr-8 pr-8 border-r-none md:border-r border-[#D9D9D9 py-[12.5px] font-semibold text-base text-charcoal'>1234 EUR</strong>
                        <a href="#" className='flex items-center font-semibold text-base leading-5 text-primary'>
                            Download invoice 
                            <svg className='ml-[10px]' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 13V14C17.5 15.4001 17.5 16.1002 17.2275 16.635C16.9878 17.1054 16.6054 17.4878 16.135 17.7275C15.6002 18 14.9001 18 13.5 18H6.5C5.09987 18 4.3998 18 3.86502 17.7275C3.39462 17.4878 3.01217 17.1054 2.77248 16.635C2.5 16.1002 2.5 15.4001 2.5 14V13M14.1667 8.83333L10 13M10 13L5.83333 8.83333M10 13V3" stroke="#228EA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                        </a>
                    </div>
                </div>
                <div className='md:flex items-center justify-between py-4 md:py-[14px] px-5 md:px-3 mb-3 bg-[#F1EDE6] rounded-md'>
                    <div className='md:flex items-center'>
                        <span className='block font-normal text-base text-charcoal md:mr-8 md:pr-8 border-b md:border-b-0 md:border-r border-[#D9D9D9] py-[5px] md:py-[12.5px]'>02/22/2025</span>
                        <div className='pr-40 md:pr-0 pt-2 pb-4 md:pt-0 md:pb-0 font-semibold text-base text-charcoal border-b md:border-b-0 border-[#D9D9D9] relative'>
                            Transaction heading is over here
                            <strong className='absolute top-2 right-0 md:relative block md:hidden md:mr-8 md:pr-8 border-r-none md:border-r border-[#D9D9D9 md:py-[12.5px] font-semibold text-base text-charcoal'>1234 EUR</strong>
                        </div>
                        
                    </div>
                    <div className='pt-3 md:pt-0 flex items-center justify-center sm:justify-end'>
                        <strong className='hidden md:block mr-8 pr-8 border-r-none md:border-r border-[#D9D9D9 py-[12.5px] font-semibold text-base text-charcoal'>1234 EUR</strong>
                        <a href="#" className='flex items-center font-semibold text-base leading-5 text-primary'>
                            Download invoice 
                            <svg className='ml-[10px]' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 13V14C17.5 15.4001 17.5 16.1002 17.2275 16.635C16.9878 17.1054 16.6054 17.4878 16.135 17.7275C15.6002 18 14.9001 18 13.5 18H6.5C5.09987 18 4.3998 18 3.86502 17.7275C3.39462 17.4878 3.01217 17.1054 2.77248 16.635C2.5 16.1002 2.5 15.4001 2.5 14V13M14.1667 8.83333L10 13M10 13L5.83333 8.83333M10 13V3" stroke="#228EA9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                        </a>
                    </div>
                </div>
            </div>
        </article>   
    </section>    

</>
); 
}; 
export default ProfileTabs;             