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
        <div className='flex items-center justify-center pb-0 px-6 relative'>    
            <div>
                <div className="max-w-[1280px] w-full m-auto relative">
                    <div className="flex flex-col md:flex-row justify-between space-y-12 lg:space-y-0 lg:space-x-12">
                    
                        <div className="w-full md:w-5/12 relative z-40 mt-32 md:pr-9 lg:pr-0">
                            <h1 className="poppins text-[35px] leading-[45px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] font-semibold text-gray-900 text-center md:text-left mb-4">
                                Your trusted home service partner in Luxembourg
                            </h1>
                            <p className='text-center md:text-left font-medium text-base leading-6 text-charcoal'>Verified providers · Fast booking · Secure payments</p>
                            <div className='mt-2 text-center md:text-left'>
                                <button className="mt-4 bg-primary hover:bg-charcoal text-white font-semibold text-[16px] py-3 px-9 rounded-[6px] w-full sm:w-auto mr-6">Book a service</button>
                                <button type="text" className="mt-4 mb-6 sm:mb-0 border border-primary w-full sm:w-auto bg-transparent hover:bg-charcoal text-primary font-semibold text-[16px] py-[11px] px-7 rounded-[6px]">Become a provider</button>
                            </div>
                        </div>
        
                        <div className="relative w-full md:w-7/12 flex justify-end">
                            <div className="relative bg-gray-100 rounded-lg md:rounded-2xl overflow-hidden z-10 m-auto"> 
                                <img src="banner-img01.png" alt="Main Thumbnail" className="w-[254px] :h-[306px] md:w-[401px] md:h-[483px] lg:w-[575px] lg:h-[692px] object-cover"/>
                            </div>

                        
                            <div className="absolute bottom-0 md:bottom-auto md:top-[350px] left-10 w-[130px] h-[86px] md:w-[239px] md:h-[200px] lg:w-[316px] lg:h-[319px] z-40">
                                <img src="banner-img04-v2.png" alt="Absolute Thumbnail 1" className="w-full h-full object-cover rounded-lg md:rounded-2xl"/>
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
                    className="min-h-[50px] md:min-h-0 absolute z-10 left-0 right-0 bottom-0 sm:pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden bg-custom-blue" 
                    style={{ backgroundImage: "url('/banner02-s.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
                > 
                
                </div>
                
            </div>
            
        </div> 
        <div className="bg-[#F2F7F8] pb-14 pt-15">
            <div className="container mx-auto">
            <h2 className="font-semibold text-[40px] leading-[50px] text-charcoal text-center mb-10">Find the right service for your needs</h2>   
            </div>  
            <div className="container mx-auto">
            <div className="flex-grow overflow-x-auto"> 
                <div className="flex flex-row overflow-x-auto space-x-3 w-full relative z-10 sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:space-x-0 sm:gap-3">
                
                    <div className="active bg-white group border border-white rounded-[12px_12px_0_0] p-6 text-center min-h-20 sm:min-h-40 hover:bg-white cursor-pointer">
                        <div className='border-b border-[#D9D9D9] w-full pb-5 mb-5'> 
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                                <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.1763 30.5202C40.874 28.2166 37.5279 27.4583 34.482 28.4742L28.5189 22.5077L34.482 16.5413C35.3543 16.8417 36.2695 16.9848 37.199 16.9848C39.4583 16.9848 41.589 16.0977 43.1906 14.4952C45.6502 12.0342 46.3509 8.51442 44.9924 5.32372C44.8637 5.03756 44.6063 4.82294 44.2917 4.76571C43.9771 4.70848 43.6625 4.80863 43.448 5.03756L40.1161 8.50012H37.4564V5.55265L40.7882 2.21887C41.017 1.98994 41.1028 1.67517 41.0456 1.3747C40.9884 1.07423 40.7739 0.816682 40.4879 0.687909C39.4297 0.244359 38.3143 0.0154305 37.1704 0.0154305C34.911 0.0154305 32.7803 0.90253 31.1787 2.49073C28.8764 4.79433 28.1042 8.14241 29.1338 11.19L23.1707 17.1565L17.2076 11.19C18.2372 8.14241 17.465 4.78002 15.1627 2.49073C12.7032 0.0297379 9.18537 -0.671357 5.99648 0.673601C5.71048 0.802374 5.49598 1.05992 5.43878 1.3747C5.38158 1.68947 5.48168 2.00425 5.71048 2.21887L9.17107 5.55265V8.48581H6.23958L2.90769 5.02325C2.69319 4.79433 2.3643 4.69417 2.064 4.7514C1.7494 4.80863 1.492 5.02325 1.3633 5.30942C0.0191053 8.48581 0.734103 12.1057 3.17939 14.5524C5.46738 16.8417 8.82787 17.6 11.8738 16.5556L17.8225 22.4934L11.8738 28.4456C11.0015 28.1451 10.0863 28.002 9.15677 28.002C6.89738 28.002 4.76669 28.8891 3.16509 30.4916C0.705502 32.9526 0.00480556 36.6012 1.349 39.8062C1.4777 40.0923 1.7351 40.307 2.0354 40.3642C2.35 40.4214 2.66459 40.3213 2.87909 40.1066L6.21098 36.7729H9.15677V39.4342L5.69618 42.7679C5.46738 42.9826 5.36728 43.3117 5.42448 43.6121C5.48168 43.9269 5.69618 44.1844 5.98218 44.3132C7.04038 44.7568 8.14147 44.9857 9.27117 44.9857C11.502 44.9857 13.604 44.0986 15.2056 42.5104C17.4793 40.2354 18.2229 36.873 17.179 33.8111L23.1421 27.8446L29.1052 33.8111C28.0756 36.8587 28.8478 40.2068 31.1501 42.5104C32.7803 44.1415 34.9253 45 37.1275 45C39.3296 45 39.3725 44.7711 40.4593 44.3275C40.7453 44.1988 40.9598 43.9412 41.017 43.6407C41.0742 43.326 40.9741 43.0112 40.7596 42.7966L37.4277 39.4628V36.8015H40.0875L43.4194 40.1353C43.6339 40.3499 43.9628 40.45 44.2631 40.3928C44.5777 40.3356 44.8351 40.121 44.9495 39.8348C46.308 36.6298 45.593 32.9812 43.1334 30.5202H43.1763Z" fill="#228EA9"/>
                                </svg>  
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                                <span className="font-semibold text-[22px] leading-[34px] text-center text-charcoal">DIY</span>                     
                            </button>
                        </div>
                        <p className='font-semibold text-base leading-5 text-[#228EA9]'>Discover more</p>
                    </div>
                    <div className="active bg-white group border border-white rounded-[12px_12px_0_0] p-6 text-center min-h-20 sm:min-h-40 hover:bg-white cursor-pointer">
                        <div className='border-b border-[#D9D9D9] w-full pb-5 mb-5'> 
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                                <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.0874 0.226906C44.9252 0.0646307 44.6892 -0.0238828 44.4532 0.00562173C44.3647 0.00562173 36.1055 0.935013 27.0793 3.70844C14.838 7.45551 7.09494 12.6336 4.05672 19.0803C1.68219 24.1256 2.30163 29.8642 5.88555 36.1339L0.576041 41.4447C0.26632 41.7545 0.26632 42.2413 0.576041 42.5511L2.78834 44.764C2.93582 44.9115 3.1423 45 3.34878 45C3.55526 45 3.747 44.9262 3.90924 44.764L9.24823 39.4236C12.9501 41.4742 16.4751 42.5216 19.764 42.5216C28.4067 42.5216 35.5745 35.2635 40.4858 21.5292C44.1435 11.3206 45.3234 0.97927 45.3381 0.876004C45.3676 0.639968 45.2791 0.403932 45.1169 0.241658L45.0874 0.226906ZM32.0054 17.2363H29.2031L22.935 23.506H28.8787C29.3064 23.506 29.6603 23.86 29.6603 24.2878C29.6603 24.7157 29.3064 25.0697 28.8787 25.0697H21.3716L15.1034 31.3394H22.6105C23.0382 31.3394 23.3922 31.6935 23.3922 32.1213C23.3922 32.5491 23.0382 32.9032 22.6105 32.9032H13.5401L3.36354 43.0822L2.25739 41.9758L12.4339 31.7967V22.7241C12.4339 22.2963 12.7879 21.9422 13.2156 21.9422C13.6433 21.9422 13.9973 22.2963 13.9973 22.7241V30.233L20.2655 23.9633V16.4544C20.2655 16.0266 20.6194 15.6725 21.0471 15.6725C21.4748 15.6725 21.8288 16.0266 21.8288 16.4544V22.3995L28.097 16.1298V13.3269C28.097 12.8991 28.451 12.545 28.8787 12.545C29.3064 12.545 29.6603 12.8991 29.6603 13.3269V15.6725H32.0054C32.4331 15.6725 32.7871 16.0266 32.7871 16.4544C32.7871 16.8822 32.4331 17.2363 32.0054 17.2363Z" fill="#228EA9"/>
                                </svg> 
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                                <span className="font-semibold text-[22px] leading-[34px] text-center text-charcoal">Gardening</span>                     
                            </button>
                        </div>
                        <p className='font-semibold text-base leading-5 text-[#228EA9]'>Discover more</p>
                    </div>
                    <div className="active bg-white group border border-white rounded-[12px_12px_0_0] p-6 text-center min-h-20 sm:min-h-40 hover:bg-white cursor-pointer">
                        <div className='border-b border-[#D9D9D9] w-full pb-5 mb-5'> 
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                                <svg width="36" height="45" viewBox="0 0 36 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4472 19.342H26.9551C27.374 19.342 27.7012 19.0062 27.7012 18.6059V8.23598C27.7012 7.82273 27.3609 7.49988 26.9551 7.49988H13.4472C13.0284 7.49988 12.7012 7.83564 12.7012 8.23598V18.6059C12.7012 19.0191 13.0415 19.342 13.4472 19.342ZM16.4577 14.8996H19.4551C19.8739 14.8996 20.2012 15.2353 20.2012 15.6357C20.2012 16.036 19.8609 16.3718 19.4551 16.3718H16.4577C16.0389 16.3718 15.7116 16.036 15.7116 15.6357C15.7116 15.2353 16.052 14.8996 16.4577 14.8996Z" fill="#228EA9"/>
                                <path d="M34.943 43.6922L31.9281 40.6975C31.7833 40.5536 31.599 40.4752 31.3884 40.4752H13.6283C13.8784 39.769 14.0232 39.0105 14.0232 38.2258C14.0232 37.4412 14.0101 37.7289 13.9837 37.4804H32.9024C33.3237 37.4804 33.6528 37.1404 33.6528 36.735V21.735C33.6528 21.3165 33.3105 20.9895 32.9024 20.9895H13.2728C12.8515 20.9895 12.5224 21.3296 12.5224 21.735V34.0017C11.7456 33.0471 10.6924 32.3017 9.5075 31.8832V0.745422C9.5075 0.326939 9.16521 0 8.75708 0H4.22819C3.80689 0 3.47776 0.340017 3.47776 0.745422C3.47776 1.15083 3.82006 1.49085 4.22819 1.49085H8.00665V31.5301C7.75651 31.5039 7.50636 31.4908 7.25622 31.4908C3.50409 31.4908 0.462891 34.5118 0.462891 38.2389C0.462891 41.966 3.50409 44.9869 7.25622 44.9869C11.0084 44.9869 11.6798 43.7969 12.9042 41.9922H31.0987L33.903 44.7777C34.0478 44.9215 34.2453 45 34.4427 45C34.6402 45 34.8245 44.9215 34.9825 44.7777C35.2721 44.49 35.2721 44.0061 34.9825 43.7184L34.943 43.6922ZM24.595 32.9817H29.8743C30.2956 32.9817 30.6248 33.3217 30.6248 33.7271C30.6248 34.1325 30.2825 34.4725 29.8743 34.4725H24.595C24.1737 34.4725 23.8446 34.1325 23.8446 33.7271C23.8446 33.3217 24.1869 32.9817 24.595 32.9817Z" fill="#228EA9"/>
                                </svg> 
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                                <span className="font-semibold text-[22px] leading-[34px] text-center text-charcoal">Moving</span>                     
                            </button>
                        </div>
                        <p className='font-semibold text-base leading-5 text-[#228EA9]'>Discover more</p>
                    </div>
                    <div className="active bg-white group border border-white rounded-[12px_12px_0_0] p-6 text-center min-h-20 sm:min-h-40 hover:bg-white cursor-pointer">
                        <div className='border-b border-[#D9D9D9] w-full pb-5 mb-5'> 
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                                <svg width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.7504 12.4347C39.9398 12.624 40.1848 12.7243 40.4409 12.7243C40.6971 12.7243 40.6971 12.702 40.8196 12.6463C41.1871 12.4904 41.421 12.134 41.421 11.7442V2.94578C41.421 2.41119 40.9867 1.9657 40.4409 1.9657H31.6425C31.2416 1.9657 30.8852 2.19958 30.7404 2.56711C30.5845 2.93464 30.6736 3.35785 30.952 3.63628L39.7504 12.4347Z" fill="#228EA9"/>
                                <path d="M6.20312 22.7366V45H19.902V31.3012H27.7315V45H41.4192V22.7366L23.8111 5.12866L6.20312 22.7366Z" fill="#228EA9"/>
                                <path d="M47.2113 23.1042C47.1668 23.004 47.0999 22.9037 47.022 22.8146C47.022 22.8146 47.0108 22.7923 46.9997 22.7812L24.5024 0.283999C24.1238 -0.0946665 23.4889 -0.0946665 23.1214 0.283999L6.20391 17.2015L0.624135 22.7812C0.523899 22.8814 0.457076 22.9817 0.412527 23.1042C0.367978 23.2156 0.345703 23.3381 0.345703 23.4717C0.345703 23.6054 0.367979 23.7279 0.423665 23.8392C0.468214 23.9395 0.535036 24.0397 0.612997 24.1288C0.612997 24.1288 0.624135 24.1511 0.635273 24.1622C1.0028 24.5298 1.62649 24.5298 2.00516 24.1622C2.00516 24.1622 2.00516 24.1622 2.01629 24.1622L6.21504 19.9635L23.8231 2.35552L41.4311 19.9635L45.6298 24.1622C45.6298 24.1622 45.6298 24.1622 45.641 24.1622C46.0085 24.5186 46.6322 24.5186 46.9997 24.1622C46.9997 24.1622 46.9997 24.1622 47.0108 24.1622C47.1111 24.062 47.1779 23.9618 47.2225 23.8392C47.267 23.7279 47.2893 23.6054 47.2893 23.4717C47.2893 23.3381 47.267 23.2156 47.2113 23.1042Z" fill="#228EA9"/>
                                </svg> 
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                                <span className="font-semibold text-[22px] leading-[34px] text-center text-charcoal">Housekeeping</span>                     
                            </button>
                        </div>
                        <p className='font-semibold text-base leading-5 text-[#228EA9]'>Discover more</p>
                    </div>
                    <div className="active bg-white group border border-white rounded-[12px_12px_0_0] p-6 text-center min-h-20 sm:min-h-40 hover:bg-white cursor-pointer">
                        <div className='border-b border-[#D9D9D9] w-full pb-5 mb-5'> 
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                                <svg width="42" height="45" viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.6575 1.93113C24.3885 -1.47123 30.1446 0.444304 32.3008 1.49329C46.4781 8.3801 43.3965 31.0017 26.6743 30.6368L29.9688 33.948C35.8729 30.9652 42.5729 37.104 38.3253 42.7503C35.6045 46.3716 28.6639 45.4594 27.6275 40.9625C27.3128 39.5851 27.9329 37.0949 27.7293 36.5659C27.5349 36.0551 25.1566 34.0483 24.7309 33.1909L21.2977 36.5659C21.964 40.1142 21.4735 43.2703 17.7348 44.5746C10.4981 47.1013 6.42628 37.6969 12.2934 34.1122C15.7729 31.9868 17.8921 34.3128 19.308 33.8294C19.8263 33.6561 22.9634 31.1841 22.3526 30.6368C14.9031 31.3209 8.84161 25.6656 8.12904 18.5142C7.9347 16.5987 8.62876 12.2477 7.66633 10.8977C6.57435 9.37436 2.19714 10.925 0.420352 9.74834C0.244524 8.96389 0.142728 7.61389 1.06814 7.31288C8.13829 6.26389 12.1731 8.22504 11.5716 15.7595H23.6482C24.2312 11.8098 22.8616 5.59801 23.6482 1.94025L23.6575 1.93113ZM15.3473 36.2284C12.608 36.6571 11.8399 40.8257 14.4774 41.601C19.7892 43.1426 19.3358 35.6081 15.3473 36.2284ZM35.6231 41.154C38.3067 38.6456 34.1239 34.2216 31.4124 37.2135C28.5714 40.3605 33.3836 43.252 35.6231 41.154Z" fill="#228EA9"/>
                                </svg> 
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                                <span className="font-semibold text-[22px] leading-[34px] text-center text-charcoal">Childcare</span>                     
                            </button>
                        </div>
                        <p className='font-semibold text-base leading-5 text-[#228EA9]'>Discover more</p>
                    </div>
                    <div className="active bg-white group border border-white rounded-[12px_12px_0_0] p-6 text-center min-h-20 sm:min-h-40 hover:bg-white cursor-pointer">
                        <div className='border-b border-[#D9D9D9] w-full pb-5 mb-5'> 
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                                <svg width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.5527 25.6483C32.6269 19.9177 27.1745 16.4682 21.8518 16.802C17.0485 17.0987 12.7088 20.4184 12.5419 25.4628C4.45592 28.189 4.9752 39.8913 13.5062 41.5418C15.4906 41.9127 18.0499 41.8942 20.0158 41.4677C20.6093 41.3378 22.0558 40.6702 22.3711 40.6702C22.742 40.6702 23.9475 41.3378 24.5039 41.4862C26.1915 41.9684 28.3985 42.0797 30.1603 41.9498C39.9525 41.208 41.5289 28.8937 32.5713 25.6483H32.5527Z" fill="#228EA9"/>
                                <path d="M40.4726 10.2918C34.4823 11.3304 33.4066 23.1996 39.8791 23.4221C47.353 23.6818 48.5029 8.90092 40.4726 10.2918Z" fill="#228EA9"/>
                                <path d="M29.0847 13.2223C36.5215 13.5376 37.8012 -1.29887 29.6967 0.092054C23.762 1.11206 22.6493 12.9442 29.0847 13.2223Z" fill="#228EA9"/>
                                <path d="M18.3281 12.7402C22.2041 10.7559 21.3881 4.2278 18.6433 1.61287C16.9 -0.0747827 14.3036 -0.631155 12.3007 0.982313C7.36753 4.96962 12.4676 15.7446 18.3095 12.7402H18.3281Z" fill="#228EA9"/>
                                <path d="M3.58486 10.2923C-2.33123 11.3123 -0.606477 23.8862 6.31108 23.4226C13.1545 22.959 11.1515 8.99413 3.58486 10.2923Z" fill="#228EA9"/>
                                </svg> 
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                                <span className="font-semibold text-[22px] leading-[34px] text-center text-charcoal">Pets</span>                     
                            </button>
                        </div>
                        <p className='font-semibold text-base leading-5 text-[#228EA9]'>Discover more</p>
                    </div>
                </div>
                
            </div>
            </div>
        </div> 
    </section>    
    <section className='pt-22 pb-12 relative'>
        <img src="v2-bg-dot5.svg" alt="" className="absolute top-0 right-0"/>
        <div className='container px-6 relative'>
            
            
            <div className='max-w-[992px] m-auto relative z-10'>
                <h2 className='font-semibold text-[40px] leading-[50px] text-center text-charcoal'>How it works</h2>
                <div className='mt-12'>
                    <div className='bg-[#FBF8F4] flex-col md:flex-row md:flex items-center justify-center rounded-xl mb-8'>
                        <div className='w-full md:w-[400px] md:mb-0'>
                            <img src="img25.jpg" alt="" className="w-full object-cover"/>
                        </div>
                        <div className='w-full md:w-[calc(100%-400px)] text-center py-6 md:px-0 px-6'> 
                            <img src="icon06.svg" alt="" className="object-cover block m-auto mb-6"/>
                            <h4 className='font-semibold text-xl leading-[26px] text-center text-charcoal'>Step 1</h4>
                            <h2 className='font-semibold text-3xl leading-10 text-center text-charcoal'>Choose a service</h2>
                        </div>
                    </div>
                    <div className='bg-[#FBF8F4] flex-col-reverse md:flex-row flex items-center justify-center rounded-xl mb-8'> 
                        <div className='w-full md:w-[calc(100%-400px)] text-center py-6 md:px-0 px-6'>
                            <img src="icon07.svg" alt="" className="object-cover block m-auto mb-6"/>
                            <h4 className='font-semibold text-xl leading-[26px] text-center text-charcoal'>Step 2</h4>
                            <h2 className='font-semibold text-3xl leading-10 text-center text-charcoal'>Compare providers</h2>
                        </div>
                        <div className='w-full md:w-[400px] md:mb-0'>
                            <img src="img26.jpg" alt="" className="w-full object-cover"/>
                        </div>
                    </div>
                    <div className='bg-[#FBF8F4] flex-col md:flex-row md:flex items-center justify-center rounded-xl mb-8'>
                        <div className='w-full md:w-[400px] md:mb-0'>
                            <img src="img27.jpg" alt="" className="w-full object-cover"/>
                        </div>
                        <div className='w-full md:w-[calc(100%-400px)] text-center py-6 md:px-0 px-6'>
                            <img src="icon08.svg" alt="" className="object-cover block m-auto mb-6"/>
                            <h4 className='font-semibold text-xl leading-[26px] text-center text-charcoal'>Step 3</h4>
                            <h2 className='font-semibold text-3xl leading-10 text-center text-charcoal'>Book & pay securely</h2>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <img src="v2-bg-dot6.svg" alt="" className="absolute bottom-0 left-0"/>
    </section>
    <section className='pt-12 pb-[120px] relative'> 
        <div className='container px-6 relative'>  
            <h2 className='font-semibold text-[40px] leading-[50px] text-center text-charcoal'>Trusted providers in your area</h2>
            <div className='flex gap-6 items-center justify-center flex-wrap mt-12 mb-8'>
                <button className="bg-[#E3EFF2] hover:bg-charcoal text-primary font-semibold text-[16px] py-3 px-9 rounded-full">Top rated this month</button>    
                <button className="bg-[#E3EFF2] hover:bg-charcoal text-primary font-semibold text-[16px] py-3 px-9 rounded-full">New providers near you</button>    
                <button className="bg-[#E3EFF2] hover:bg-charcoal text-primary font-semibold text-[16px] py-3 px-9 rounded-full">Verified professionals</button>    
            </div>  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
                <div className="bg-white rounded-xl overflow-hidden shadow-[0px_4px_30px_rgba(0,0,0,0.12)]">
                
                <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
                
                    <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                </div>

                <div className="px-4 pt-3 pb-6">
                    
                    <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-[22px] leading-8 text-charcoal">Jill</h3>
                    <span className="font-semibold text-base leading-normal text-charcoal">100EUR ph</span>
                    </div>

                
                    <div className="flex items-center space-x-1 text-yellow-400 mb-1"> 
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

                
                    <p className="font-normal text-base text-charcoal">Service type is right over here</p>

                
                    <div className="border-b border-[#D9D9D9] mt-3 mb-4"></div>

                    
                    <div className="flex flex-wrap gap-1 mt-2">
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2 mb-1">Punctual</span>
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2 mb-1">Reliable</span>
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2 mb-1">Calm & patient</span>
                    </div>

                    
                    <button className="w-full mt-6 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">
                    View provider profile
                    </button>
                </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-[0px_4px_30px_rgba(0,0,0,0.12)]">
                
                <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
                
                    <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                </div>

                <div className="px-4 pt-3 pb-6">
                    
                    <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-[22px] leading-8 text-charcoal">Jill</h3>
                    <span className="font-semibold text-base leading-normal text-charcoal">100EUR ph</span>
                    </div>

                
                    <div className="flex items-center space-x-1 text-yellow-400 mb-1">
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

                
                    <p className="font-normal text-base text-charcoal">Service type is right over here</p>

                
                    <div className="border-b border-[#D9D9D9] mt-3 mb-4"></div>

                    
                    <div className="flex flex-wrap gap-1 mt-2">
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Punctual</span>
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Reliable</span>
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Calm & patient</span>
                    </div>

                    
                    <button className="w-full mt-6 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">
                    View provider profile
                    </button>
                </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-[0px_4px_30px_rgba(0,0,0,0.12)]">
                
                <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
                
                    <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                </div>

                <div className="px-4 pt-3 pb-6">
                    
                    <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-[22px] leading-8 text-charcoal">Jill</h3>
                    <span className="font-semibold text-base leading-normal text-charcoal">100EUR ph</span>
                    </div>

                
                    <div className="flex items-center space-x-1 text-yellow-400 mb-1">
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

                
                    <p className="font-normal text-base text-charcoal">Service type is right over here</p>

                
                    <div className="border-b border-[#D9D9D9] mt-3 mb-4"></div>

                    
                    <div className="flex flex-wrap gap-1 mt-2">
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Punctual</span>
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Reliable</span>
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Calm & patient</span>
                    </div>

                    
                    <button className="w-full mt-6 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">
                    View provider profile
                    </button>
                </div>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-[0px_4px_30px_rgba(0,0,0,0.12)]"> 
                
                <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
                
                    <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                </div>

                <div className="px-4 pt-3 pb-6"> 
                    
                    <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-[22px] leading-8 text-charcoal">Jill</h3>
                    <span className="font-semibold text-base leading-normal text-charcoal">100EUR ph</span>
                    </div>

                
                    <div className="flex items-center space-x-1 text-yellow-400 mb-1">
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

                
                    <p className="font-normal text-base text-charcoal">Service type is right over here</p>

                
                    <div className="border-b border-[#D9D9D9] mt-3 mb-4"></div> 

                    
                    <div className="flex flex-wrap gap-1 mt-2">
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Punctual</span>
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Reliable</span>
                    <span className="font-medium text-base text-charcoal bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Calm & patient</span>
                    </div>

                    
                    <button className="w-full mt-6 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">
                    View provider profile
                    </button>
                </div>
                </div> 
            </div>
        </div>
    </section>        

    <section className="bg-[#F2F7F8]">
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
     </section>  

    <section className='relative'> 
        <div className='px-6 max-w-[1090px] m-auto relative z-10'>
            <div className='md:flex gap-15 items-center pb-12 pt-12 md:pt-20'>
                <div className='w-full md:w-1/2'> 
                    <img src="img-mobile01.png" alt="" className=""/>
                </div>
                <div className='w-full md:w-1/2'>
                    <h2 className='w-full sm:w-auto text-left font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal mb-8'>Book and manage your service on the go</h2>
                    <div className='flex gap-6'>
                        <a href="#"><img src="app01.png" alt="" className=""/></a>
                        <a href="#"><img src="app02.png" alt="" className=""/></a>
                    </div>
                </div>
            </div>
        </div>
        <div 
            className="absolute left-0 right-0 bottom-0 z-9 min-h-[350px] md:min-h-[450px] overflow-hidden bg-custom-blue" 
            style={{ backgroundImage: "url('/v2-bg-circle3.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
        > 
             
        </div>
    </section>


            


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
      <div className="mx-auto py-15 sm:py-20 px-0 md:px-5 lg:px-10 xl:px-20 container w-full">
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
                <h3 className='font-semibold text-[22px] leading-8 text-charcoal mb-6'>Intervention details</h3>
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