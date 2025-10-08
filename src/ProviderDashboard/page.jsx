import { useState } from 'react'; 
import TabContent from '../components/TabContent'; 
import TabButtons from '../components/TabButtons'; 
import PersonalInformation from '../components/PersonalInformation';
import IdentityDocuments from '../components/IdentityDocuments'; 
import NotificationsGeneralSettings from '../components/NotificationsGeneralSettings'; 
 


 




 


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
                <div className="w-full mx-auto py-15 sm:py-20 container relative">
                    <div className="flex flex-col md:flex-row justify-between space-y-12 lg:space-y-0 lg:space-x-20">
                    
                        <div className="w-full md:w-5/12 relative z-40 md:pr-9 lg:pr-0 pt-4">
                            <div className='flex items-center bg-white rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.08)] px-8 py-16'>
                                <div> 
                                    <img src="avata01.png" alt="" className="rounded-full"/>
                                </div>
                                <div className='pl-10'>
                                    <span className='font-semibold text-[20px] leading-[26px] text-charcoal'>
                                        Welcome
                                    </span>
                                    <h2 className='font-semibold text-[40px] leading-[50px] text-charcoal'>Jack Doe!</h2>

                                </div>
                            </div>
                        </div>
        
                        <div className="relative z-50 w-full md:w-7/12 flex justify-start">
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
                <article className="mx-auto py-15 sm:py-20 container"> 
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-center w-full md:w-auto sm:text-left font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal">Why people trust Manual2Fix</h2> 
                        <button className="hidden md:block bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-8 rounded-[6px]"> 
                        View all reviews
                        </button>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
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
        <div className='w-full mx-auto py-15 sm:py-20 container relative'>
            <div className='max-w-[840px] m-auto'>
                <h2 className='font-semibold text-[40px] leading-[50px] text-center text-charcoal'>Latest notifications</h2>
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
    <section>
        <div className='mx-auto py-15 sm:py-15 px-6 xl:px-20 container'>
            <div className='flex flex-wrap lg:flex-row items-center justify-between mb-3'>
                <h2 className="mb-5 lg:mb-0 text-center w-full lg:w-auto lg:text-left font-semibold text-[34px] leading-[44px] lg:text-[40px] lg:leading-[50px] text-charcoal">All ongoing requests</h2>
                <div className='flex items-center'>
                    <div className='flex flex-col lg:flex-row justify-center lg:justify-end items-center w-full lg:w-auto border-r border-[#D9D9D9] pr-4 mr-4'>
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
                    <div className='flex items-center gap-4'>
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
            <h2 className='font-semibold text-[40px] leading-[50px] text-center'>Subscription status</h2>
            <div className='bg-white rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.08)] p-10 mt-9 max-w-[722px] m-auto'>
                <h3 className='font-semibold text-[22px] leading-8 text-center text-charcoal pb-10'>Subscription name is here</h3>
                <div>
                    <div className='font-normal text-base leading-6 text-charcoal border-t border-[#D9D9D9] pt-6 pb-6'>
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
    <section>
        <div className='mx-auto py-15 sm:py-15 px-6 xl:px-20 container'>
            <div className='flex flex-wrap lg:flex-row items-center justify-between mb-3'>
                <h2 className="mb-5 lg:mb-0 text-center w-full lg:w-auto lg:text-left font-semibold text-[34px] leading-[44px] lg:text-[40px] lg:leading-[50px] text-charcoal">Set up availability</h2>
                <div className='flex items-center'>
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

            <div className='flex gap-10'>
                <div className='w-[calc(100%-280px)]'>
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
                                <div className='bg-white rounded-md p-6 flex items-center justify-between'>
                                    <div className="flex gap-6 items-center">
    
                                        {/* KHỐI 1: START TIME */}
                                        <div className="flex flex-row items-center">
                                            <label className="text-base text-gray-700 mb-2 mr-3">Start time</label>
                                            
                                            {/* INPUT GIỜ/PHÚT TÙY CHỈNH */}
                                            <div className="flex items-center bg-white border border-gray-300 rounded-md p-0 overflow-hidden shadow-sm">
                                                
                                                {/* Trường Hiển thị Thời gian (Mô phỏng input) */}
                                                <input 
                                                    type="text" // Hoặc "number" cho giờ, phút riêng biệt
                                                    defaultValue="00:00" 
                                                    className="w-[70px] px-3 py-2 text-base font-medium text-center focus:outline-none"
                                                    // Loại bỏ mũi tên spin mặc định nếu dùng type="number"
                                                    // [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
                                                />
                                                
                                                {/* Nút Điều chỉnh LÊN/XUỐNG */}
                                                <div className="flex flex-col border-l border-gray-300">
                                                    <button className="h-[23px] w-6 flex items-center justify-center border-b border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path></svg>
                                                    </button>
                                                    <button className="h-[23px] w-6 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* KHỐI 2: END TIME (Dễ dàng tái sử dụng) */}
                                        <div className="flex flex-row items-center">
                                            <label className="text-base text-gray-700 mb-2 mr-3">End time</label>
                                            <div className="flex items-center bg-white border border-gray-300 rounded-md p-0 overflow-hidden shadow-sm">
                                                <input 
                                                    type="text"
                                                    defaultValue="00:00" 
                                                    className="w-[70px] px-3 py-2 text-base font-medium text-center focus:outline-none"
                                                />
                                                <div className="flex flex-col border-l border-gray-300">
                                                    <button className="h-[23px] w-6 flex items-center justify-center border-b border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path></svg>
                                                    </button>
                                                    <button className="h-[23px] w-6 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className='w-[280px]'>
                    2
                </div>
            </div>
        </div>
    </section>    

</>
); 
}; 
export default ProfileTabs;             