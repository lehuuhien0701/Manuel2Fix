import { useState } from 'react';
import TabContent from '../components/TabContent'; 
import TabButtons from '../components/TabButtons'; 
import SkillsForm from '../components/SkillsForm';
import JobTypesForm from '../components/JobTypesForm'; 
import ProfileDetails from '../components/ProfileDetails'; 
import Equipment from '../components/Equipment'; 



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
            <div className="max-w-[1280px] w-full m-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
                
                    <div className="w-full lg:w-5/12 flex items-center justify-center lg:justify-start relative z-10">
                        <h1 className="poppins text-[40px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[65px] lg:leading-[78px] font-semibold text-gray-900 text-center md:text-left">
                            Welcome to Manuel2Fix
                        </h1>
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

    <section className="bg-gray-50 py-20 poppins">
      <div className="mx-auto max-w-[1280px] w-full px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:space-y-0">
          {/* Left: Tab Buttons */}
          <div className="w-full lg:w-3/12 flex flex-col space-y-4 bg-[#F7F9F9] p-6 rounded-xl">
               <TabButtons tabs={tabs} activeTab={activeTab} handleTabClick={handleTabClick} />
          </div>

          {/* Right: Tab Content */}
          <div className="w-full lg:w-9/12 bg-white">
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




</>
);
}; 
export default ProfileTabs;         