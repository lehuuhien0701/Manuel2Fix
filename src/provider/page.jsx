import { useState } from 'react';
import TabContent from '../components/TabContent'; 
import TabButtons from '../components/TabButtons'; 
import SkillsForm from '../components/SkillsForm';
import JobTypesForm from '../components/JobTypesForm'; 
import ProfileDetails from '../components/ProfileDetails'; 
import Equipment from '../components/Equipment'; 

import DatePickerComponent from '../DatePickerComponent.jsx';



const ProfileTabs = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('tab1');

  // Tab data
  const tabs = [
    { id: 'tab1', label: 'Skills' },
    { id: 'tab2', label: 'Job types' },
    { id: 'tab3', label: 'Profile details' },
    { id: 'tab4', label: 'Equipment' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); 
  }; 


 

 
  
  return (

<>

    <section>
        <div className='flex items-center justify-center pb-14 sm:pb-10 px-6 relative'>    
            <div>
                <div className="max-w-[1280px] w-full m-auto relative">
                    <div className="flex flex-col md:flex-row justify-between space-y-12 lg:space-y-0 lg:space-x-12">
                    
                        <div className="w-full md:w-5/12 relative z-40 mt-32 md:pr-9 lg:pr-0">
                            <h1 className="poppins text-[40px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[65px] lg:leading-[78px] font-semibold text-gray-900 text-center md:text-left mb-4">
                                Find the ideal home service provider
                            </h1>
                            <p className='font-medium text-base leading-6 text-charcoal'>Attract new clients, boost your visibility and start increasing your earnings today.</p>
                        </div>
        
                        <div className="relative w-full md:w-7/12 flex justify-end">
                            <div className="relative bg-gray-100 rounded-lg md:rounded-2xl overflow-hidden z-10 m-auto"> 
                                <img src="banner-img01.png" alt="Main Thumbnail" className="w-[254px] :h-[306px] md:w-[401px] md:h-[483px] lg:w-[575px] lg:h-[692px] object-cover"/>
                            </div>

                        
                            <div className="absolute bottom-0 md:bottom-auto md:top-[350px] left-10 w-[130px] h-[86px] md:w-[239px] md:h-[200px] lg:w-[434px] lg:h-[286px] z-40">
                                <img src="banner-img04.png" alt="Absolute Thumbnail 1" className="w-full h-full object-cover rounded-lg md:rounded-2xl"/>
                            </div>
                            
                            <div className="absolute top-[150px] left-[-10px] sm:left-[-35px] w-[105px] h-[109px] md:w-[221px] md:h-[287px] lg:w-[239px] lg:h-[248px] z-30">
                                <img src="banner-img02a.png" alt="Absolute Thumbnail 2" className="w-full h-full object-cover rounded-lg md:rounded-2xl"/>
                            </div>

                            <div className="absolute top-12 right-0 w-[133px] h-[126px] md:w-[189px] md:h-[200px] lg:w-[301px] lg:h-[286px] z-40">
                                <img src="banner-img03.png" alt="Absolute Thumbnail 2" className="w-full h-full object-cover rounded-lg md:rounded-2xl"/>
                            </div>
                            <div className="absolute top-[150px] md:top-[280px] right-[20px] w-[88px] h-[60px] sm:w-[103px] sm:h-[103px] z-40">
                                <img src="banner-img05.png" alt="Absolute Thumbnail 2" className="w-full h-full object-cover rounded-lg md:rounded-2xl"/>
                            </div>
                            <img src="sign-up-img-dot01.svg" alt="" className="w-[200px] h-[200px] md:w-[334px] md:h-[421px] object-cover absolute bottom-0 top-auto sm:top-0 left-0"/>
                            
                        </div>
                    </div>  
                </div>
                <div 
                    className="min-h-[350px] md:min-h-0 absolute z-10 left-0 right-0 bottom-[40px] sm:pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-custom-blue" 
                    style={{ backgroundImage: "url('/banner03-s.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
                > 
                
                </div>
                <div className="relative z-40 md:max-w-[353px] lg:max-w-[795px] px-6 md:px-8 py-5 bg-white rounded-xl shadow-lg mt-[20px] md:mt-[-100px]">
                    <div className='lg:flex items-center'>
                        <div className='w-full lg:w-[197px] pb-5 mb-5 border-b border-[#D9D9D9] lg:pb-0 lg:mb-0 lg:border-b-0 lg:pr-8 lg:mr-8 lg:border-r lg:border-[#D9D9D9]'>
                            <p className="font-poppins font-semibold text-lg leading-7 text-charcoal text-center mb-2">
                                Request a service
                            </p>
                            <button className="w-full flex-shrink-0 text-center py-[12px] bg-[#228EA9] text-white rounded-md font-poppins font-medium text-base">
                                Request
                            </button>
                        </div>
                        <div className='flex-grow'>
                            <p className="font-poppins font-semibold text-lg leading-7 text-charcoal text-center lg:text-left mb-2">
                                Search for a service
                            </p>
                            <div className='md:flex items-center justify-between'>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="mb-4 md:mb-0 border border-[#D9D9D9] rounded-lg w-full py-3 px-4 font-poppins font-normal text-base leading-6 text-charcoal focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>  
    </section>
    <section>
        <div className='flex items-center justify-center pb-14 sm:pb-10 px-6 relative'>    
            <div className="max-w-[1280px] w-full m-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
                
                    <div className="w-full lg:w-5/12 flex items-center justify-center lg:justify-start relative z-10">
                        <div>
                            <h1 className="mb-5 poppins text-[40px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[65px] lg:leading-[78px] font-semibold text-gray-900 text-center md:text-left">
                                Welcome to Manuel2Fix
                            </h1>
                            <p className='font-medium text-base leading-6 text-charcoal'>Short description is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="mt-4 bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-9 rounded-[6px] w-full sm:w-auto">Request this service</button>
                        </div>
                    </div>
    
                    <div className="relative w-full lg:w-7/12 flex justify-end">
                        <div className="relative bg-gray-100 rounded-lg md:rounded-2xl overflow-hidden z-10"> 
                            <img src="sign-up-img01.png" alt="Main Thumbnail" className="w-[250px] h-[205px] sm:w-[550px] sm:h-[395px] object-cover"/>
                        </div>

                    
                        <div className="absolute bottom-[10px] sm:bottom-0 left-10 w-[157px] h-[100px] sm:w-[346px] sm:h-[223px] z-20">
                            <img src="sign-up-img02.png" alt="Absolute Thumbnail 1" className="w-full h-full object-cover rounded-lg md:rounded-2xl"/>
                        </div>
                        
                        <div className="absolute top-6 left-[-10px] sm:left-[-35px] w-[88px] h-[60px] sm:w-[190px] sm:h-[133px] z-40">
                            <img src="sign-up-img03.png" alt="Absolute Thumbnail 2" className="w-full h-full object-cover rounded-lg md:rounded-2xl"/>
                        </div>
                        <img src="sign-up-img-dot01.svg" alt="" className="w-[200px] h-[200px] md:w-[334px] md:h-[421px] object-cover absolute bottom-0 top-auto sm:top-0 left-0"/>
                          
                    </div>
                </div>
            </div>
            <div 
                className="absolute left-0 right-0 bottom-[40px] sm:pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-custom-blue" 
                style={{ backgroundImage: "url('/banner02-s.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
            > 
            
            </div>
        </div>  
        <div className="bg-white"> 
            <div className="px-6 max-w-[1280px] mx-auto">
            <div className="pt-0 pb-[50px] sm:pb-22 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="px-10 py-9 flex items-center justify-center min-h-52 group bg-white border border-[#EEEEEE] shadow-[0px_14px_22px_rgba(0,0,0,0.07)] rounded-xl">
                    <div className="w-full flex flex-col items-center text-center">
                    <img alt="" src="sign-up-icon1.svg"/> 
                    <span className="mt-4 font-semibold text-[22px] leading-8 text-charcoal group-hover:text-primary">I need a service</span>
                    <button className="w-full mt-4 bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-9 rounded-[6px]">Create account</button>
                    </div>
                </div>

                <div className="px-10 py-9 flex items-center justify-center min-h-52 group bg-white border border-[#EEEEEE] shadow-[0px_14px_22px_rgba(0,0,0,0.07)] rounded-xl">
                    <div className="w-full flex flex-col items-center text-center">
                    <img alt="" src="sign-up-icon2.svg"/>    
                    <span className="mt-4 font-semibold text-[22px] leading-8 text-charcoal group-hover:text-primary">Become a service provider</span>
                    <button className="w-full mt-4 bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-9 rounded-[6px]">Become a provider</button>
                    </div>
                </div>

                <div className="px-10 py-9 flex items-center justify-center min-h-52 group bg-white border border-[#EEEEEE] shadow-[0px_14px_22px_rgba(0,0,0,0.07)] rounded-xl">
                    <div className="w-full flex flex-col items-center text-center">
                    <img alt="" src="sign-up-icon3.svg"/> 
                    <span className="mt-4 font-semibold text-[22px] leading-8 text-charcoal group-hover:text-primary">I already have an account</span>
                    <button className="w-full mt-4 bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-9 rounded-[6px]">Login</button>
                    </div>
                </div>
                </div>

            </div>

            <div className="bg-white pb-32">
                <div className="mx-auto block md:flex items-center">
                
                    <h2 className="text-center md:text-left mb-6 md:mb-0 font-poppins font-semibold text-[22px] leading-8 text-charcoal md:mr-10">Partners:</h2>

                
                    <div className="flex-grow overflow-x-auto">
                    <div className="flex space-x-4 pr-4">  
                        
                        <input
                        type="number"
                        className="flex-shrink-0 max-w-14 h-14 sm:max-w-36 sm:h-24 bg-[#F1EDE6] rounded-md text-center"
                        placeholder="0" max="1" 
                        />

                        <input
                        type="number"
                        className="flex-shrink-0  max-w-14 h-14 sm:max-w-36 sm:h-24 bg-[#F1EDE6] rounded-md text-center"
                        placeholder="0" max="1" 
                        />

                        <input
                        type="number"
                        className="flex-shrink-0  max-w-14 h-14 sm:max-w-36 sm:h-24 bg-[#F1EDE6] rounded-md text-center"
                        placeholder="0" max="1"  
                        />
                    
                        <input
                        type="number"
                        className="flex-shrink-0  max-w-14 h-14 sm:max-w-36 sm:h-24 bg-[#F1EDE6] rounded-md text-center"
                        placeholder="0" max="1"  
                        />
                    
                        <input
                        type="number"
                        className="flex-shrink-0  max-w-14 h-14 sm:max-w-36 sm:h-24 bg-[#F1EDE6] rounded-md text-center"
                        placeholder="0" max="1"  
                        />
                    
                        <input
                        type="number"
                        className="flex-shrink-0  max-w-14 h-14 sm:max-w-36 sm:h-24 bg-[#F1EDE6] rounded-md text-center"
                        placeholder="0" max="1" 
                        />
                    
                        <input
                        type="number"
                        className="flex-shrink-0  max-w-14 h-14 sm:max-w-36 sm:h-24 bg-[#F1EDE6] rounded-md text-center"
                        placeholder="0" max="1"  
                        />
                    </div>
                    </div>
                </div>
                </div>


            </div>
        </div>  
        


    </section>




    <section className="bg-white pt-[60px] pb-0 mb-[60px] relative">
        <img className='w-52 md:w-auto absolute top-32 md:top-0 right-0' alt="" src="banner01-dot.svg"/>
        <div className='max-w-[1280px] m-auto px-6 relative z-10'>
             <div className="relative">
 
                 <div className="lg:hidden text-center pb-8 pt-0 md:py-16">
                    <h1 className="font-poppins font-semibold text-[40px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[65px] lg:leading-[78px] text-center text-charcoal">
                    Help center
                    </h1>
                </div>

                <div className="flex justify-between items-end md:items-center">
                     <div className="relative max-w-[180px] md:max-w-[385px] w-full flex-shrink-0 pt-20 md:pt-40 ml-[-24px]">
                     <img src="left-img01.png" alt="Left main image" className="w-[148px] h-[161px] md:w-[274px] md:h-[190px] object-cover rounded-xl" />
                     <img src="left-img02.png" alt="Small image 1" className="hidden md:block absolute top-7 left-14 w-[108px] h-[106px] object-cover rounded-lg" />
                    <img src="left-img03.png" alt="Small image 2" className="absolute top-0 right-0 w-[127px] h-[127px] md:w-[179px] md:h-[178px] object-cover rounded-lg" />
                    <img src="left-img04.png" alt="Small image 2" className="hidden md:block absolute z-10 bottom-15 right-0 w-[91px] h-[90px] object-cover rounded-lg" />
                    </div>

                     <div className="hidden lg:block absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
                    <h1 className="font-poppins font-semibold text-[40px] leading-[45px] md:text-[4px] md:leading-[55px] lg:text-[65px] lg:leading-[78px] text-center text-charcoal">
                        Help center
                    </h1>
                    </div>

                     <div className="relative max-w-[160px] md:max-w-[340px] w-full md:h-[378px] flex-shrink-0 mr-[-24px] md:mr-0"> 
                     <img src="right-img01.png" alt="Left main image" className="float-end md:float-none w-[100px] h-[162px] md:w-[236px] md:h-[210px] object-cover rounded-xl mt-15 md:ml-[-24px]" />
                     <img src="right-img02.png" alt="Small image 1" className="hidden md:block absolute top-24 right-8 w-[76px] h-[74px] object-cover rounded-lg" />
                    <img src="right-img03.png" alt="Small image 2" className="absolute top-0 md:top-auto md:bottom-0 left-0 md:right-[30px] md:m-auto w-[79px] h-[70px] md:w-[172px] md:h-[178px] object-cover rounded-lg" /> 
                    </div>
                </div>

                
                </div>

             <div className="relative mt-12 lg:mt-0 z-20"> 
                <div className="max-w-[795PX] mx-auto px-6 md:px-8 py-5 bg-white rounded-xl shadow-lg mt-[-100px] md:mt-[-100px]">
                    <p className="font-poppins font-semibold text-lg leading-7 text-charcoal text-center sm:text-left mb-2">
                        What are you looking for?
                    </p>
                    <div className='md:flex items-center justify-between'>
                        <input
                            type="text"
                            placeholder="Search"
                            className="mb-4 md:mb-0 md:mr-4 border border-[#D9D9D9] rounded-lg w-full py-3 px-4 font-poppins font-normal text-base leading-6 text-charcoal focus:outline-none"
                        />
                        <button className="w-full sm:w-[110px] flex-shrink-0 text-center py-[12px] bg-[#228EA9] text-white rounded-md font-poppins font-medium text-base">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div 
            className="hidden md:block absolute left-0 right-0 bottom-[40px] z-9 pt-4 pb-10 md:pt-16 md:pb-32 overflow-hidden bg-custom-blue" 
            style={{ backgroundImage: "url('/banner02-s.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
        > 
           
        </div>
         
    </section> 
    <section className="flex justify-center items-center min-h-screen bg-light-beige relative pb-96">
        <div className="bg-white px-6 md:px-10 pt-5 pb-10 max-w-[580px] w-full relative z-10">
        
            <div className="flex items-center justify-center mb-10 sm:mb-22">
            <img src="/v2-logo.png" alt="Manuel2Fix Logo" className="h-[42px] w-[39px] sm:h-16 sm:w-16 mb-2" />
            <h1 className="font-jakarta font-extrabold text-[12px] leading-[18px] sm:text-[21.95px] sm:leading-8 text-charcoal ml-4">Manuel2Fix</h1>
            </div>
            
        
            <h2 className="font-poppins font-semibold text-[40px] leading-[45px] md:text-[65px] md:leading-[78px] text-center text-charcoal mb-12">Login</h2>
            
        
            <form> 
            
            <div className="mb-8">
                <label htmlFor="email" className="block font-poppins font-medium text-base text-charcoal mb-1">Email</label>
                <input 
                type="email" 
                id="email" 
                placeholder="email@example.com"
                className="w-full px-4 py-[11px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue" 
                />
            </div>
            
            
            <div className="mb-1">
                <label htmlFor="password" className="block font-poppins font-medium text-base text-charcoal mb-1">Password</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Password"
                className="w-full px-4 py-[11px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue" 
                />
            </div>
            
            
            <div className="mb-7">
                <a href="#" className="font-poppins font-semibold text-base text-primary">Forgot password</a>
            </div>
            
            <div className="mt-8 sm:mt-0 flex-col sm:flex-row flex items-center"> 
                <button type="submit" className="w-full sm:w-auto bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-7 rounded-[6px]"> 
                    Login
                </button> 
                <div className="ml-0 sm:ml-8 mt-4 sm:mt-0 text-center font-poppins font-medium text-base text-charcoal">
                    <span>Don't have an account? </span>
                    <a href="#" className="text-primary hover:underline">Sign up</a>
                </div>
            </div>
            </form> 
            
        </div>
        <div className="absolute bottom-0 right-0 z-10">
            <img 
                src="/v2-bg-dot3.svg" 
                alt=""
                className="w-full h-full"
            /> 
        </div>
        <div 
            className="absolute left-0 right-0 bottom-0 z-9 pt-4 pb-10 md:pt-16 md:pb-32 overflow-hidden bg-custom-blue" 
            style={{ backgroundImage: "url('/banner02-s.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
        > 
            <div className="container mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center">
            
            </div>
            </div>
        </div>
    </section>
    <section className="flex justify-center items-center min-h-screen bg-light-beige relative pb-96">
        <div className="bg-white px-6 md:px-10 pt-5 pb-10 max-w-[580px] w-full relative z-10">
        
            <div className="flex items-center justify-center mb-10 sm:mb-22">
            <img src="/v2-logo.png" alt="Manuel2Fix Logo" className="h-[42px] w-[39px] sm:h-16 sm:w-16 mb-2" />
            <h1 className="font-jakarta font-extrabold text-[12px] leading-[18px] sm:text-[21.95px] sm:leading-8 text-charcoal ml-4">Manuel2Fix</h1>
            </div>
            
        
            <h2 className="font-poppins font-semibold text-[40px] leading-[45px] md:text-[65px] md:leading-[78px] text-center text-charcoal mb-12">Sign up</h2>
            
        
            <form> 
            <div className="mb-8">
                <label htmlFor="email" className="block font-poppins font-medium text-base text-charcoal mb-1">First name</label>
                <input 
                type="text" 
                id="fname" 
                placeholder="First name"
                className="w-full px-4 py-[11px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue" 
                />
            </div>

            <div className="mb-8">
                <label htmlFor="email" className="block font-poppins font-medium text-base text-charcoal mb-1">Last name</label>
                <input 
                type="text" 
                id="lname" 
                placeholder="Last name"
                className="w-full px-4 py-[11px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue" 
                />
            </div>

            <div className="mb-8">
                <label htmlFor="email" className="block font-poppins font-medium text-base text-charcoal mb-1">Email</label>
                <input 
                type="email" 
                id="email" 
                placeholder="email@example.com"
                className="w-full px-4 py-[11px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue" 
                />
            </div>
            
            
            <div className="mb-1">
                <label htmlFor="password" className="block font-poppins font-medium text-base text-charcoal mb-1">Password</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Password"
                className="w-full px-4 py-[11px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue" 
                />
            </div>
            
            
            <div className="mb-7">
                <a href="#" className="font-poppins font-semibold text-base text-primary">Forgot password</a>
            </div>
            
            <div className="mt-8 sm:mt-0 flex-col sm:flex-row flex items-center"> 
                <button type="submit" className="w-full sm:w-auto bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-7 rounded-[6px]"> 
                    Sign up
                </button> 
                <div className="ml-0 sm:ml-8 mt-4 sm:mt-0 text-center font-poppins font-medium text-base text-charcoal">
                    <span>Already have an account? </span>
                    <a href="#" className="text-primary hover:underline">Login</a>
                </div>
            </div>
            </form> 
            
        </div>
        <div className="absolute bottom-0 right-0 z-10">
            <img 
                src="/v2-bg-dot3.svg" 
                alt=""
                className="w-full h-full"
            /> 
        </div>
        <div 
            className="absolute left-0 right-0 bottom-0 z-9 pt-4 pb-10 md:pt-16 md:pb-32 overflow-hidden bg-custom-blue" 
            style={{ backgroundImage: "url('/banner02-s.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
        > 
            <div className="container mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center">
            
            </div>
            </div>
        </div>
    </section>


    <section className="pt-20 pb-15 sm:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
            <h2 className="font-poppins font-semibold text-[40px] leading-[45px] md:text-[65px] md:leading-[78px] text-center text-charcoal mb-4 sm:mb-8">Profile details</h2> 
             
        </div>
        <div className="w-full md:w-7/12 lg:w-1/3 absolute top-0 right-0">
        <img 
            src="/v2-bg-dot.svg" 
            alt=""
            className=""
        /> 
        </div>
        <div 
            className="absolute left-0 right-0 bottom-0 z-9 pt-4 pb-10 md:pt-8 md:pb-32 overflow-hidden bg-custom-blue" 
            style={{ backgroundImage: "url('/banner02-s.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
        > 
            <div className="container mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center">
            
            </div>
            </div>
        </div>
    </section>

    <section className="bg-white py-20 poppins"> 
      <div className="mx-auto max-w-[1280px] w-full md:px-6">
        <div className="flex flex-col md:flex-row gap-10 lg:space-y-0">
         
          <div className="w-full md:w-[288px] flex flex-col space-y-4 bg-[#F7F9F9] p-6 rounded-xl">
               <TabButtons tabs={tabs} activeTab={activeTab} handleTabClick={handleTabClick} />
          </div>

           
          <div className="w-full md:w-9/12 bg-white px-6 md:px-0">
             <TabContent activeTab={activeTab}>
                {activeTab === 'tab1' && <SkillsForm />} 
                {activeTab === 'tab2' && <JobTypesForm />}
                {activeTab === 'tab3' && <ProfileDetails />} 
                {activeTab === 'tab4' && <Equipment />} 
                

                
            </TabContent>
          </div>
        </div>
      </div>
    </section>


    <section className="relative bg-white py-16 pb-10 sm:py-16 px-4 sm:px-6 lg:px-8 shadow-[0px_0px_30px_rgba(0,0,0,0.08)]">
        <div className="absolute top-90px left-0"> 
            <img 
                src="/v2-bg-dot.svg" 
                alt=""
                className=""
            /> 
            </div> 
            <div className="relative z-10 text-center mb-12">
            <h2 className="font-poppins font-semibold text-[40px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[65px] lg:leading-[78px] text-center text-charcoal">
            My request details
            </h2>
        </div>

        <div className="max-w-[983px] m-auto relative z-10 sm:flex sm:flex-row gap-8 lg:gap-15 items-start">
            <div className="w-12/12 sm:w-5/12">
            <img
                src="../img24.jpg"  
                alt="Service thumbnail"
                className="w-full h-auto rounded-xl"
            />
            </div>

            <div className="mt-6 sm:mt-0 w-12/12 sm:w-7/12">
                <h3 className="font-poppins font-semibold text-base leading-6 text-charcoal pb-4 border-b border-[#D9D9D9] mb-4">
                Gardening
            </h3>

                <div className="flex justify-between items-start mb-3">
                <h4 className="font-poppins font-semibold text-2xl leading-8 text-charcoal">
                Mowing the lawn
                </h4>
                <span className="font-poppins font-semibold text-2xl leading-8 text-charcoal">
                14EUR p/h
                </span>
            </div>

                <p className="font-poppins font-normal text-base leading-6 text-charcoal mb-6">
                Description is here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>

                <div className="flex flex-wrap">
                <span className="flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 mb-4">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.75 2V6M16.75 2V6M3.75 10H21.75M5.75 4H19.75C20.8546 4 21.75 4.89543 21.75 6V20C21.75 21.1046 20.8546 22 19.75 22H5.75C4.64543 22 3.75 21.1046 3.75 20V6C3.75 4.89543 4.64543 4 5.75 4Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <span>02/11/2025</span>
                </span>
                
                <span className="flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 mb-4">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.75 2H14.75M12.75 14L15.75 11M20.75 14C20.75 18.4183 17.1683 22 12.75 22C8.33172 22 4.75 18.4183 4.75 14C4.75 9.58172 8.33172 6 12.75 6C17.1683 6 20.75 9.58172 20.75 14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <span>10:00-12:00am (2 hours)</span>
                </span>

                <span className="flex items-center space-x-2 font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 mb-4">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 13C14.4069 13 15.75 11.6569 15.75 10C15.75 8.34315 14.4069 7 12.75 7C11.0931 7 9.75 8.34315 9.75 10C9.75 11.6569 11.0931 13 12.75 13Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.75 22C16.75 18 20.75 14.4183 20.75 10C20.75 5.58172 17.1683 2 12.75 2C8.33172 2 4.75 5.58172 4.75 10C4.75 14.4183 8.75 18 12.75 22Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <span>Luxembourg, 12345</span>
                </span>
            </div>
            </div>
        </div>
    </section> 
    <section className="bg-[#F7F9F9] py-16 sm:px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-[45px]">
            <h2 className="font-poppins font-semibold text-[34px] leading-[40px] md:text-[40px] md:leading-[50px] text-center text-charcoal">
            Public chat
            </h2>
        </div>

        <div className="container mx-auto border-t border-[#D9D9D9] pt-[40px]">
            <div className="flex items-end space-x-4 mb-6">
                <div className="w-[47px] h-[47px] sm:w-[72px] sm:h-[72px] bg-[#D9D9D9] rounded-full flex-shrink-0"></div>
            
                <div className="flex-1"> 
                <div className="bg-white px-4 py-5 rounded-xl shadow-sm max-w-2xl">
                <div className="flex items-center space-x-2 mb-2 font-poppins font-medium text-base leading-6 text-charcoal">
                    <p className=" ">
                    Name Surname
                    </p>
                    <span className=" ">
                    09:34am
                    </span>
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
                    <span className="">
                        09:34am
                    </span>
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
                    <p className="">
                        Name Surname
                    </p>
                    <span className="">
                        09:34am
                    </span>
                    </div>  
                    <p className="font-poppins font-normal text-base leading-6 text-charcoal"> 
                    Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-[#F1EDE6] shadow-[10px_16px_0px_#272727] relative overflow-hidden mb-5">
        <article className="mx-auto py-15 sm:py-20 container"> 
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-center w-full font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal">Offers / Quotes</h2>                       
            </div> 
            <div className='rounded-xl bg-white max-w-1280px m-auto px-15 py-11'>
                <h3 className='font-semibold text-xl leading-8 text-charcoal mb-6'>Intervention details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 mb-10 border-b border-[#D9D9D9]">
                    <div>
                        <label htmlFor="sub-category" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                            Date of the intervention
                        </label>
                        <div className="relative">
                            <DatePickerComponent /> 
                             
                        </div>
                    </div>
                    <div>
                        <label htmlFor="time-of-the-intervention" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                            Time of the intervention
                        </label>
                        <input 
                            type="text" 
                            id="time-of-the-intervention" 
                            name="time-of-the-intervention" 
                            placeholder="" 
                            className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                        />
                    </div>
                </div>
                <h3 className='font-semibold text-xl leading-8 text-charcoal mb-6'>Number of hours needed</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 mb-10 border-b border-[#D9D9D9]">
                     
                    <div>
                        <label htmlFor="number-of-hours" className="block font-medium text-base leading-6 text-neutral-700 mb-1">
                            Number of hours
                        </label>
                        <input 
                            type="text" 
                            id="number-of-hours" 
                            name="number-of-hours" 
                            placeholder="4 hours" 
                            className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                        />
                    </div>
                </div>

                <h3 className='font-semibold text-xl leading-8 text-charcoal mb-6'>Hourly</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 mb-10 border-b border-[#D9D9D9]">
                     
                    <div>
                        <label htmlFor="tarif-per-hour" className="block font-medium text-base leading-6 text-neutral-700 mb-1">                            
                            Tarif per hour
                        </label>
                        <input 
                            type="text" 
                            id="tarif-per-hour" 
                            name="tarif-per-hour" 
                            placeholder="110 EUR" 
                            className="mt-1 block w-full px-4 py-[11.5px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue"
                        />
                    </div>
                </div>

                <div className="sm:flex justify-end gap-6">
                    <button 
                    type="text" 
                    className="mb-6 sm:mb-0 border border-primary w-full sm:w-auto bg-transparent hover:bg-charcoal text-primary font-semibold text-[16px] py-[11px] px-7 rounded-[6px]"
                    >
                    View quote details
                    </button>
                    <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-7 rounded-[6px]"
                    >
                    Save
                    </button>
                </div>

            </div>


            <div className='rounded-xl bg-white max-w-1280px m-auto px-15 py-11 mt-10'>

            </div>

        </article>
    </section>




</>
);
}; 
export default ProfileTabs;             