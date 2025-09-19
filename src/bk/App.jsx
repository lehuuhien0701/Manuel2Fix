//import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestPage from './01-nextimmo/page.jsx'
import HelpCenterPage from './help-center/page.jsx';

// Import component chứa trang đăng nhập của bạn (từ ảnh chụp màn hình ban đầu)
import DatePickerComponent from './DatePickerComponent.jsx';
import { useState } from 'react';
import './index.css'; // Đảm bảo bạn đã import file CSS của Tailwind

const faqsData = [
  {
    id: 1,
    tabTitle: 'Service is here',
    content: [
      {
        id: 'faq1-1', // Thêm ID duy nhất cho mỗi item FAQ con
        title: 'Advantage is over here 1',
        description: 'Description for tab 1, content 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      },
      {
        id: 'faq1-2',
        title: 'Advantage is over here 2',
        description: 'Description for tab 1, content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      },
    ],
  },
  {
    id: 2,
    tabTitle: 'Another Service',
    content: [
      {
        id: 'faq2-1',
        title: 'Another Advantage is here 3',
        description: 'This is the content for the second tab, item 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      },
      {
        id: 'faq2-2',
        title: 'Another Advantage is here 4',
        description: 'This is the content for the second tab, item 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      },
    ],
  },
  // Thêm các tab khác tại đây
];


const App = () => {

const [activeTab, setActiveTab] = useState(faqsData[0].id);
  // State để quản lý item FAQ con nào đang mở/đóng.
  // Sử dụng object để lưu trữ trạng thái của nhiều FAQ con, key là id của FAQ con
  const [openFaqItems, setOpenFaqItems] = useState({});

  const handleTabClick = (id) => {
    setActiveTab(id);
    // Khi đổi tab, đóng tất cả các item FAQ con của tab cũ
    setOpenFaqItems({}); 
  };
  
  // Hàm xử lý click vào tiêu đề FAQ con để toggle hiển thị nội dung
  const handleFaqItemToggle = (faqItemId) => {
    setOpenFaqItems(prevState => ({
      ...prevState,
      [faqItemId]: !prevState[faqItemId] // Đảo ngược trạng thái của item FAQ đó
    }));
  };

  const currentTabContent = faqsData.find(faq => faq.id === activeTab);

  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<main className="relative">
              <section className="flex justify-center items-center min-h-screen bg-light-beige relative pb-96">
                <div className="bg-white px-6 md:px-10 pt-5 pb-10 max-w-[580px] w-full relative z-10">
                
                  <div className="flex items-center justify-center mb-10 sm:mb-22">
                    <img src="/v2-logo.png" alt="Manuel2Fix Logo" className="h-[42px] w-[39px] sm:h-16 sm:w-16 mb-2" />
                    <h1 className="font-jakarta font-extrabold text-[12px] leading-[18px] sm:text-[21.95px] sm:leading-8 text-secondary ml-4">Manuel2Fix</h1>
                  </div>
                  
                
                  <h2 className="font-poppins font-semibold text-[40px] leading-[45px] md:text-[65px] md:leading-[78px] text-center text-secondary mb-12">Login</h2>
                  
              
                  <form> 
                  
                    <div className="mb-8">
                      <label htmlFor="email" className="block font-poppins font-medium text-base text-secondary mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="email@example.com"
                        className="w-full px-4 py-[11px] border border-[#D9D9D9] rounded-[6px] focus:outline-none focus:ring-2 focus:ring-custom-blue" 
                      />
                    </div>
                    
                    
                    <div className="mb-1">
                      <label htmlFor="password" className="block font-poppins font-medium text-base text-secondary mb-1">Password</label>
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
                        <button type="submit" className="w-full sm:w-auto bg-primary hover:bg-secondary text-white font-semibold text-[16px] py-3 px-7 rounded-[6px]"> 
                          Login
                        </button> 
                        <div className="ml-0 sm:ml-8 mt-4 sm:mt-0 text-center font-poppins font-medium text-base text-secondary">
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
                  style={{ backgroundImage: "url('/v2-bg-circle3.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
                > 
                  <div className="container mx-auto relative z-10">
                    <div className="flex flex-col items-center justify-center">
                    
                    </div>
                  </div>
                </div>
              </section>


              <section className="bg-white relative pt-5"> 
                <div className="absolute top-0 right-0 z-10">
                    <img 
                      src="/v2-bg-dot4.svg" 
                      alt=""
                      className="w-full h-full"
                    /> 
                </div>
                <div className="relative z-10 flex items-center justify-center mb-20 sm:mb-25">
                    <img src="/v2-logo.png" alt="Manuel2Fix Logo" className="h-[42px] w-[39px] sm:h-16 sm:w-16 mb-2" />
                    <h1 className="font-jakarta font-extrabold text-[12px] leading-[18px] sm:text-[21.95px] sm:leading-8 text-secondary ml-4">Manuel2Fix</h1>
                  </div>
                <div 
                  className="relative pb-14 md:pb-16 bg-custom-blue" 
                  style={{ backgroundImage: "url('/v2-bg-circle3.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
                > 
                  
                  <div className="container mx-auto relative z-10">
                    <div className="flex flex-col items-center justify-center">
                      <h2 className="font-poppins font-semibold text-[40px] leading-[45px] md:text-[65px] md:leading-[78px] text-center text-secondary mt-[-30px]">Sign up</h2>   
                    </div>
                  </div>
                </div>

                
                <div className="bg-white"> 
                  <div className="container mx-auto">
                    <div className="pt-[50px] pb-[80px] sm:pb-[110px] relative z-10">

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="px-11 py-5 flex items-center justify-center min-h-52 group bg-white border border-[#EEEEEE] shadow-[0px_14px_22px_rgba(0,0,0,0.07)] rounded-xl">
                          <div className="w-full flex flex-col items-center text-center">
                          <span className="font-semibold text-[22px] leading-8 text-secondary group-hover:text-primary">Create an account as 
          a provider</span>
                          <button className="w-full sm:w-auto mt-4 bg-primary hover:bg-secondary text-white font-semibold text-[16px] py-3 px-9 rounded-[6px]">Create account</button>
                          </div>
                        </div>

                        <div className="px-11 py-5 flex items-center justify-center min-h-52 group bg-white border border-[#EEEEEE] shadow-[0px_14px_22px_rgba(0,0,0,0.07)] rounded-xl">
                          <div className="w-full flex flex-col items-center text-center">
                          <span className="font-semibold text-[22px] leading-8 text-secondary group-hover:text-primary">Create an account as 
          a client</span>
                          <button className="w-full sm:w-auto mt-4 bg-primary hover:bg-secondary text-white font-semibold text-[16px] py-3 px-9 rounded-[6px]">Create account</button>
                          </div>
                        </div>

                        <div className="px-11 py-5 flex items-center justify-center min-h-52 group bg-white border border-[#EEEEEE] shadow-[0px_14px_22px_rgba(0,0,0,0.07)] rounded-xl">
                          <div className="w-full flex flex-col items-center text-center">
                          <span className="font-semibold text-[22px] leading-8 text-secondary group-hover:text-primary">Access an existing account (client or provider)</span>
                          <button className="w-full sm:w-auto mt-4 bg-primary hover:bg-secondary text-white font-semibold text-[16px] py-3 px-9 rounded-[6px]">Login</button>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="bg-white pb-32">
                        <div className="mx-auto block md:flex items-center">
                        
                          <h2 className="text-center md:text-left mb-6 md:mb-0 font-poppins font-semibold text-[22px] leading-8 text-secondary md:mr-10">Partners:</h2>

                      
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



              
              <section className="pt-20 pb-15 sm:py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                  <h2 className="font-poppins font-semibold text-[40px] leading-[45px] md:text-[65px] md:leading-[78px] text-center text-secondary mb-4 sm:mb-8">Activity overview</h2> 
                  <button className="w-full sm:w-auto bg-primary hover:bg-secondary text-white font-semibold text-[16px] py-3 px-9 rounded-[6px]"> 
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

              <section className="bg-white relative overflow-hidden"> 
                
                <div 
                  className="relative pb-15 sm:pb-20 overflow-hidden bg-custom-blue" 
                  style={{ backgroundImage: "url('/v2-bg-circle2.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
                > 
                  <div className="container mx-auto relative z-10">
                    <div className="flex flex-col items-center justify-center">
                    
                    </div>
                  </div>
                </div>

                
                <div className="bg-[#F2F7F8]">
                  <div className="container mx-auto">
                    <h2 className="font-semibold text-[40px] leading-[50px] text-secondary text-center mb-10">Providers</h2>   
                  </div>  
                  <div className="container mx-auto">
                    <div className="flex-grow overflow-x-auto"> 
                      <div className="flex flex-row overflow-x-auto space-x-3 w-full relative z-10 sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 sm:space-x-0 sm:gap-3">
                        
                        <div className="active bg-white group border border-white rounded-[12px_12px_0_0] p-4 text-center min-h-20 sm:min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                          <div> 
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                              <svg className="w-[30px] h-[38px] sm:w-11 sm:h-12" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_din_452_615)">
                              <path d="M35.1918 10.6708C34.7518 10.6708 34.3203 10.7148 33.8888 10.7941C32.4504 5.57173 27.7882 1.86414 22.4999 1.86414C18.557 1.86414 14.9525 3.86324 12.7356 7.23618C7.09195 6.44358 2.19287 11.0671 2.19287 16.8354C2.19287 22.181 6.36428 26.5227 11.5003 26.5227C13.3448 26.5227 15.1132 25.9679 16.6447 24.9023C17.9393 25.6684 19.3523 26.1704 20.8077 26.3906V43.2553C20.8077 43.7397 21.1884 44.1359 21.6538 44.1359C22.1192 44.1359 22.4999 43.7397 22.4999 43.2553V37.4517L25.8675 33.9467C26.3667 34.2549 26.9505 34.4487 27.5767 34.4487C29.4466 34.4487 30.9612 32.8723 30.9612 30.926C30.9612 28.9797 29.4466 27.4034 27.5767 27.4034C25.7067 27.4034 24.1922 28.9797 24.1922 30.926C24.1922 31.5777 24.3783 32.1765 24.6745 32.7049L22.4999 34.9682V26.5227C25.0806 26.5227 27.5851 25.642 29.6412 24.0128C31.0796 25.6156 33.0511 26.5227 35.1918 26.5227C39.3886 26.5227 42.807 22.9648 42.807 18.5967C42.807 14.2286 39.3886 10.6708 35.1918 10.6708Z" fill="url(#paint0_linear_452_615)"/>
                              </g>
                              <defs>
                              <filter id="filter0_din_452_615" x="0.192871" y="-0.135864" width="44.614" height="47.2719" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="1"/>
                              <feGaussianBlur stdDeviation="1"/>
                              <feComposite in2="hardAlpha" operator="out"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_452_615"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                              <feOffset dy="-3"/>
                              <feGaussianBlur stdDeviation="1"/>
                              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_452_615"/>
                              <feTurbulence type="fractalNoise" baseFrequency="5 5" stitchTiles="stitch" numOctaves="3" result="noise" seed="37" />
                              <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                              <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
                              </feComponentTransfer>
                              <feComposite operator="in" in2="effect2_innerShadow_452_615" in="coloredNoise1" result="noise1Clipped" />
                              <feFlood flood-color="rgba(0, 0, 0, 0.1)" result="color1Flood" />
                              <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                              <feMerge result="effect3_noise_452_615">
                              <feMergeNode in="effect2_innerShadow_452_615" />
                              <feMergeNode in="color1" />
                              </feMerge>
                              <feBlend mode="normal" in="effect3_noise_452_615" in2="effect1_dropShadow_452_615" result="effect3_noise_452_615"/>
                              </filter>
                              <linearGradient id="paint0_linear_452_615" x1="22.4999" y1="-75.2198" x2="22.4999" y2="44.136" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FF5E00"/>
                              <stop offset="1" stop-color="#E25300"/>
                              </linearGradient>
                              </defs>
                              </svg>

                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                              <span className="font-semibold text-xl leading-relaxed text-center text-secondary">Gardening</span>                     
                            </button>
                          </div>
                        </div>
                        <div className="bg-[rgb(255_255_255/50%)] group border border-white rounded-[12px_12px_0_0] p-4 text-center min-h-20 sm:min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                          <div>
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                              <svg className="w-[30px] h-[38px] sm:w-11 sm:h-12" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M36 20H25.95C25.62 20 25.31 19.84 25.12 19.56C24.93 19.29 24.9 18.94 25.02 18.63C25.67 17.01 25.99 15.31 25.99 13.57V6C25.99 2.69 23.3 0 19.99 0C16.68 0 13.99 2.69 13.99 6V13.57C13.99 15.31 14.32 17.01 14.96 18.63C15.08 18.94 15.05 19.29 14.86 19.56C14.67 19.84 14.36 20 14.03 20H4C1.79 20 0 21.79 0 24V29H40V24C40 21.79 38.21 20 36 20ZM20 8C18.9 8 18 7.1 18 6C18 4.9 18.9 4 20 4C21.1 4 22 4.9 22 6C22 7.1 21.1 8 20 8Z" fill="#228EA9"/>
                              <path d="M37 31H3C2.45 31 2 31.45 2 32V47C2 47.55 2.45 48 3 48H8C8.38 48 8.73 47.79 8.89 47.45L11 43.24V47C11 47.55 11.45 48 12 48H24V42.79C24 42.24 24.45 41.79 25 41.79C25.55 41.79 26 42.24 26 42.79V48H28V39.32C28 38.77 28.45 38.32 29 38.32C29.55 38.32 30 38.77 30 39.32V48H32V37C32 36.45 32.45 36 33 36C33.55 36 34 36.45 34 37V48H37C37.55 48 38 47.55 38 47V32C38 31.45 37.55 31 37 31Z" fill="url(#paint0_linear_452_620)"/>
                              <defs>
                              <linearGradient id="paint0_linear_452_620" x1="20" y1="8.41477e-08" x2="20" y2="48" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FF5E00"/>
                              <stop offset="1" stop-color="#E25300"/>
                              </linearGradient>
                              </defs>
                              </svg> 
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                              <span className="font-semibold text-xl leading-relaxed text-center text-secondary">Gardening</span>                     
                            </button>
                          </div>
                        </div>
                        <div className="bg-[rgb(255_255_255/50%)] group border border-white rounded-[12px_12px_0_0] p-4 text-center min-h-20 sm:min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                          <div>
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                              <svg className="w-[30px] h-[38px] sm:w-11 sm:h-12" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M36 20H25.95C25.62 20 25.31 19.84 25.12 19.56C24.93 19.29 24.9 18.94 25.02 18.63C25.67 17.01 25.99 15.31 25.99 13.57V6C25.99 2.69 23.3 0 19.99 0C16.68 0 13.99 2.69 13.99 6V13.57C13.99 15.31 14.32 17.01 14.96 18.63C15.08 18.94 15.05 19.29 14.86 19.56C14.67 19.84 14.36 20 14.03 20H4C1.79 20 0 21.79 0 24V29H40V24C40 21.79 38.21 20 36 20ZM20 8C18.9 8 18 7.1 18 6C18 4.9 18.9 4 20 4C21.1 4 22 4.9 22 6C22 7.1 21.1 8 20 8Z" fill="#228EA9"/>
                              <path d="M37 31H3C2.45 31 2 31.45 2 32V47C2 47.55 2.45 48 3 48H8C8.38 48 8.73 47.79 8.89 47.45L11 43.24V47C11 47.55 11.45 48 12 48H24V42.79C24 42.24 24.45 41.79 25 41.79C25.55 41.79 26 42.24 26 42.79V48H28V39.32C28 38.77 28.45 38.32 29 38.32C29.55 38.32 30 38.77 30 39.32V48H32V37C32 36.45 32.45 36 33 36C33.55 36 34 36.45 34 37V48H37C37.55 48 38 47.55 38 47V32C38 31.45 37.55 31 37 31Z" fill="url(#paint0_linear_452_620)"/>
                              <defs>
                              <linearGradient id="paint0_linear_452_620" x1="20" y1="8.41477e-08" x2="20" y2="48" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FF5E00"/>
                              <stop offset="1" stop-color="#E25300"/>
                              </linearGradient>
                              </defs>
                              </svg> 
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                              <span className="font-semibold text-xl leading-relaxed text-center text-secondary">Gardening</span>                     
                            </button>
                          </div>
                        </div> 
                        <div className="bg-[rgb(255_255_255/50%)] group border border-white rounded-[12px_12px_0_0] p-4 text-center min-h-20 sm:min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                          <div>
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                              <svg className="w-[30px] h-[38px] sm:w-11 sm:h-12" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M36 20H25.95C25.62 20 25.31 19.84 25.12 19.56C24.93 19.29 24.9 18.94 25.02 18.63C25.67 17.01 25.99 15.31 25.99 13.57V6C25.99 2.69 23.3 0 19.99 0C16.68 0 13.99 2.69 13.99 6V13.57C13.99 15.31 14.32 17.01 14.96 18.63C15.08 18.94 15.05 19.29 14.86 19.56C14.67 19.84 14.36 20 14.03 20H4C1.79 20 0 21.79 0 24V29H40V24C40 21.79 38.21 20 36 20ZM20 8C18.9 8 18 7.1 18 6C18 4.9 18.9 4 20 4C21.1 4 22 4.9 22 6C22 7.1 21.1 8 20 8Z" fill="#228EA9"/>
                              <path d="M37 31H3C2.45 31 2 31.45 2 32V47C2 47.55 2.45 48 3 48H8C8.38 48 8.73 47.79 8.89 47.45L11 43.24V47C11 47.55 11.45 48 12 48H24V42.79C24 42.24 24.45 41.79 25 41.79C25.55 41.79 26 42.24 26 42.79V48H28V39.32C28 38.77 28.45 38.32 29 38.32C29.55 38.32 30 38.77 30 39.32V48H32V37C32 36.45 32.45 36 33 36C33.55 36 34 36.45 34 37V48H37C37.55 48 38 47.55 38 47V32C38 31.45 37.55 31 37 31Z" fill="url(#paint0_linear_452_620)"/>
                              <defs>
                              <linearGradient id="paint0_linear_452_620" x1="20" y1="8.41477e-08" x2="20" y2="48" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FF5E00"/>
                              <stop offset="1" stop-color="#E25300"/>
                              </linearGradient>
                              </defs>
                              </svg> 
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                              <span className="font-semibold text-xl leading-relaxed text-center text-secondary">Gardening</span>                     
                            </button>
                          </div>
                        </div> 
                        <div className="bg-[rgb(255_255_255/50%)] group border border-white rounded-[12px_12px_0_0] p-4 text-center min-h-20 sm:min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                          <div>
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                              <svg className="w-[30px] h-[38px] sm:w-11 sm:h-12" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M36 20H25.95C25.62 20 25.31 19.84 25.12 19.56C24.93 19.29 24.9 18.94 25.02 18.63C25.67 17.01 25.99 15.31 25.99 13.57V6C25.99 2.69 23.3 0 19.99 0C16.68 0 13.99 2.69 13.99 6V13.57C13.99 15.31 14.32 17.01 14.96 18.63C15.08 18.94 15.05 19.29 14.86 19.56C14.67 19.84 14.36 20 14.03 20H4C1.79 20 0 21.79 0 24V29H40V24C40 21.79 38.21 20 36 20ZM20 8C18.9 8 18 7.1 18 6C18 4.9 18.9 4 20 4C21.1 4 22 4.9 22 6C22 7.1 21.1 8 20 8Z" fill="#228EA9"/>
                              <path d="M37 31H3C2.45 31 2 31.45 2 32V47C2 47.55 2.45 48 3 48H8C8.38 48 8.73 47.79 8.89 47.45L11 43.24V47C11 47.55 11.45 48 12 48H24V42.79C24 42.24 24.45 41.79 25 41.79C25.55 41.79 26 42.24 26 42.79V48H28V39.32C28 38.77 28.45 38.32 29 38.32C29.55 38.32 30 38.77 30 39.32V48H32V37C32 36.45 32.45 36 33 36C33.55 36 34 36.45 34 37V48H37C37.55 48 38 47.55 38 47V32C38 31.45 37.55 31 37 31Z" fill="url(#paint0_linear_452_620)"/>
                              <defs>
                              <linearGradient id="paint0_linear_452_620" x1="20" y1="8.41477e-08" x2="20" y2="48" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FF5E00"/>
                              <stop offset="1" stop-color="#E25300"/>
                              </linearGradient>
                              </defs>
                              </svg> 
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                              <span className="font-semibold text-xl leading-relaxed text-center text-secondary">Gardening</span>                     
                            </button>
                          </div>
                        </div> 
                        <div className="bg-[rgb(255_255_255/50%)] group border border-white rounded-[12px_12px_0_0] p-4 text-center min-h-20 sm:min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                          <div>
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                              <svg className="w-[30px] h-[38px] sm:w-11 sm:h-12" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M36 20H25.95C25.62 20 25.31 19.84 25.12 19.56C24.93 19.29 24.9 18.94 25.02 18.63C25.67 17.01 25.99 15.31 25.99 13.57V6C25.99 2.69 23.3 0 19.99 0C16.68 0 13.99 2.69 13.99 6V13.57C13.99 15.31 14.32 17.01 14.96 18.63C15.08 18.94 15.05 19.29 14.86 19.56C14.67 19.84 14.36 20 14.03 20H4C1.79 20 0 21.79 0 24V29H40V24C40 21.79 38.21 20 36 20ZM20 8C18.9 8 18 7.1 18 6C18 4.9 18.9 4 20 4C21.1 4 22 4.9 22 6C22 7.1 21.1 8 20 8Z" fill="#228EA9"/>
                              <path d="M37 31H3C2.45 31 2 31.45 2 32V47C2 47.55 2.45 48 3 48H8C8.38 48 8.73 47.79 8.89 47.45L11 43.24V47C11 47.55 11.45 48 12 48H24V42.79C24 42.24 24.45 41.79 25 41.79C25.55 41.79 26 42.24 26 42.79V48H28V39.32C28 38.77 28.45 38.32 29 38.32C29.55 38.32 30 38.77 30 39.32V48H32V37C32 36.45 32.45 36 33 36C33.55 36 34 36.45 34 37V48H37C37.55 48 38 47.55 38 47V32C38 31.45 37.55 31 37 31Z" fill="url(#paint0_linear_452_620)"/>
                              <defs>
                              <linearGradient id="paint0_linear_452_620" x1="20" y1="8.41477e-08" x2="20" y2="48" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FF5E00"/>
                              <stop offset="1" stop-color="#E25300"/>
                              </linearGradient>
                              </defs>
                              </svg> 
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                              <span className="font-semibold text-xl leading-relaxed text-center text-secondary">Gardening</span>                     
                            </button>
                          </div>
                        </div> 
                        <div className="bg-[rgb(255_255_255/50%)] group border border-white rounded-[12px_12px_0_0] p-4 text-center min-h-20 sm:min-h-40 flex justify-center items-center hover:bg-white cursor-pointer">
                          <div>
                            <div className="flex justify-center items-center mb-0 sm:mb-2">
                              <svg className="w-[30px] h-[38px] sm:w-11 sm:h-12" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M36 20H25.95C25.62 20 25.31 19.84 25.12 19.56C24.93 19.29 24.9 18.94 25.02 18.63C25.67 17.01 25.99 15.31 25.99 13.57V6C25.99 2.69 23.3 0 19.99 0C16.68 0 13.99 2.69 13.99 6V13.57C13.99 15.31 14.32 17.01 14.96 18.63C15.08 18.94 15.05 19.29 14.86 19.56C14.67 19.84 14.36 20 14.03 20H4C1.79 20 0 21.79 0 24V29H40V24C40 21.79 38.21 20 36 20ZM20 8C18.9 8 18 7.1 18 6C18 4.9 18.9 4 20 4C21.1 4 22 4.9 22 6C22 7.1 21.1 8 20 8Z" fill="#228EA9"/>
                              <path d="M37 31H3C2.45 31 2 31.45 2 32V47C2 47.55 2.45 48 3 48H8C8.38 48 8.73 47.79 8.89 47.45L11 43.24V47C11 47.55 11.45 48 12 48H24V42.79C24 42.24 24.45 41.79 25 41.79C25.55 41.79 26 42.24 26 42.79V48H28V39.32C28 38.77 28.45 38.32 29 38.32C29.55 38.32 30 38.77 30 39.32V48H32V37C32 36.45 32.45 36 33 36C33.55 36 34 36.45 34 37V48H37C37.55 48 38 47.55 38 47V32C38 31.45 37.55 31 37 31Z" fill="url(#paint0_linear_452_620)"/>
                              <defs>
                              <linearGradient id="paint0_linear_452_620" x1="20" y1="8.41477e-08" x2="20" y2="48" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FF5E00"/>
                              <stop offset="1" stop-color="#E25300"/>
                              </linearGradient>
                              </defs>
                              </svg> 
                            </div>
            
                            <button className="flex items-center justify-center mt-2text-custom-blue w-full">
                              <span className="font-semibold text-xl leading-relaxed text-center text-secondary">Gardening</span>                     
                            </button>
                          </div>
                        </div>  
                      
                      </div>
                      
                    </div>
                  </div>
                </div>

                
                <div className="mx-auto pt-5 sm:pt-14 pb-10 container">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">  
                      <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#D9D9D9]"> 
                          <div className="h-[198px] bg-gray-200 rounded-t-lg overflow-hidden"> 
                            <img src="/v2-img02.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                          </div> 
                          <div className="px-6 py-4"> 
                            <button className="flex items-center justify-between text-custom-blue w-full">
                              <h3 className="group-hover:text-primary font-semibold text-[22px] leading-8 text-secondary">Lawn care</h3>
                              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 13L7.5 7L1.5 1" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg> 
                            </button> 
                          </div>
                      </div>
                      <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#D9D9D9]"> 
                          <div className="h-[198px] bg-gray-200 rounded-t-lg overflow-hidden"> 
                            <img src="/v2-img02.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                          </div> 
                          <div className="px-6 py-4"> 
                            <button className="flex items-center justify-between text-custom-blue w-full">
                              <h3 className="group-hover:text-primary font-semibold text-[22px] leading-8 text-secondary">Lawn care</h3>
                              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 13L7.5 7L1.5 1" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg> 
                            </button> 
                          </div>
                      </div>
                      <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#D9D9D9]"> 
                          <div className="h-[198px] bg-gray-200 rounded-t-lg overflow-hidden"> 
                            <img src="/v2-img02.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                          </div> 
                          <div className="px-6 py-4"> 
                            <button className="flex items-center justify-between text-custom-blue w-full">
                              <h3 className="group-hover:text-primary font-semibold text-[22px] leading-8 text-secondary">Lawn care</h3>
                              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 13L7.5 7L1.5 1" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg> 
                            </button> 
                          </div>
                      </div>
                      <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#D9D9D9]"> 
                          <div className="h-[198px] bg-gray-200 rounded-t-lg overflow-hidden"> 
                            <img src="/v2-img02.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                          </div> 
                          <div className="px-6 py-4"> 
                            <button className="flex items-center justify-between text-custom-blue w-full">
                              <h3 className="group-hover:text-primary font-semibold text-[22px] leading-8 text-secondary">Lawn care</h3>
                              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 13L7.5 7L1.5 1" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg> 
                            </button> 
                          </div>
                      </div>
                      <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#D9D9D9]"> 
                          <div className="h-[198px] bg-gray-200 rounded-t-lg overflow-hidden"> 
                            <img src="/v2-img02.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                          </div> 
                          <div className="px-6 py-4"> 
                            <button className="flex items-center justify-between text-custom-blue w-full">
                              <h3 className="group-hover:text-primary font-semibold text-[22px] leading-8 text-secondary">Lawn care</h3>
                              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 13L7.5 7L1.5 1" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg> 
                            </button> 
                          </div>
                      </div>
                  </div>
                </div>
                <div className="mx-auto pt-0 pb-16 container flex flex-col-reverse sm:flex-row align-center justify-between">
                  <div className="box-left text-center sm:text-left">
                      <button className="bg-primary hover:bg-secondary text-white font-semibold text-[16px] py-3 px-9 rounded-[6px] w-full sm:w-auto">More about this service</button>
                  </div>
                  <div className="box-right flex justify-center sm:block mb-6 sm:mb-0">
                      <div className="box-arrow flex align-center">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25 10L15 20L25 30" stroke="#228EA9" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg> 
                          <svg className="ml-6" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 30L25 20L15 10" stroke="#228EA9" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg> 
                      </div>
                  </div>
                </div> 

              </section>



              <section className="bg-[#FBF8F4] py-12 md:py-20 font-[Poppins] text-secondary shadow-[10px_16px_0px_#272727] relative overflow-hidden mb-5">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                 
                  <h1 className="mb-11 font-poppins font-semibold text-[34px] leading-[40px] sm:text-[40px] sm:leading-[50px] text-center text-secondary">
                    Complete the details here
                  </h1>

                   <div className="bg-white p-6 sm:p-10 md:p-12 rounded-xl max-w-[1279px] w-full mx-auto">
                    <form className="space-y-8">
                       <div className=''>
                        <label className="block text-[22px] font-semibold mb-6 leading-8">
                          How many hours of services will be needed?
                        </label>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 mb-10 border-b border-[#D9D9D9]">
                           <div>
                            <label className="block text-base font-medium mb-1">Hours</label>
                            <div className="sm:flex sm:space-x-2">
                              <label className="mb-3 sm:mb-0 sm:w-[33.33%] flex items-center space-x-1 px-4 py-[11px] border border-[#D9D9D9] rounded-md cursor-pointer transition-colors has-[:checked]:border-[#228EA9]">
                                <input type="radio" name="hours" className="mr-1 w-5 h-5 accent-[#228EA9]" />
                                <span>1 hour</span>
                              </label>
                              <label className="mb-3 sm:mb-0 sm:w-[33.33%] flex items-center space-x-1 px-4 py-[11px] border border-[#D9D9D9] rounded-md cursor-pointer transition-colors has-[:checked]:border-[#228EA9]">
                                <input type="radio" name="hours" className="mr-1 w-5 h-5 accent-[#228EA9]" />
                                <span>2 hours</span> 
                              </label>
                              <label className="mb-3 sm:mb-0 sm:w-[33.33%] flex items-center space-x-1 px-4 py-[11px] border border-[#D9D9D9] rounded-md cursor-pointer transition-colors has-[:checked]:border-[#228EA9]">
                                <input type="radio" name="hours" className="mr-1 w-5 h-5 accent-[#228EA9]" />
                                <span>3 hours</span> 
                              </label>
                            </div>
                          </div>

                           <div>
                            <label className="block text-base font-medium mb-1">Custom hours</label>
                            <input type="text" placeholder="4 hours" className="w-full px-4 py-[11px] border rounded-md transition-colors border-[#D9D9D9] focus:border-[#228EA9] focus:outline-none" />
                          </div>
                        </div>



                      </div>

                       <div className='pb-10 mb-10 border-b border-[#D9D9D9]'>
                        <label className="block text-xl md:text-[22px] font-semibold mb-6 leading-8">
                          Which day is best for you?
                        </label>
                        

                        <DatePickerComponent /> 
                        
                    




                      </div>

                       <div className='pb-10 mb-10 border-b border-[#D9D9D9]'>
                        <label className="block text-xl md:text-[22px] font-semibold mb-6 mt-10 leading-8">
                          Which time is best for you?
                        </label>
                        <label className="block text-base font-medium mb-1">Select a timeslot</label> 
                        <div className="flex flex-wrap gap-3">
                         <label className="w-full sm:w-auto flex items-center px-6 py-[11px] border rounded-lg cursor-pointer transition-all duration-200 border-[#D9D9D9] hover:border-[#228EA9] has-[:checked]:border-[#228EA9]">
                          <input type="radio" name="timeslot" value="08:00 - 10:00" className="mr-1 w-5 h-5 accent-[#228EA9]" />
                          <span>08:00 - 10:00</span>
                        </label>

                         <label className="w-full sm:w-auto flex items-center px-6 py-[11px] border rounded-lg cursor-pointer transition-all duration-200 border-[#D9D9D9] hover:border-[#228EA9] has-[:checked]:border-[#228EA9]">
                          <input type="radio" name="timeslot" value="10:00 - 12:00" className="mr-1 w-5 h-5 accent-[#228EA9]" defaultChecked />
                          <span>10:00 - 12:00</span>
                        </label>

                         <label className="w-full sm:w-auto flex items-center px-6 py-[11px] border rounded-lg cursor-pointer transition-all duration-200 border-[#D9D9D9] hover:border-[#228EA9] has-[:checked]:border-[#228EA9]">
                          <input type="radio" name="timeslot" value="12:00 - 14:00" className="mr-1 w-5 h-5 accent-[#228EA9]" />
                          <span>12:00 - 14:00</span>
                        </label>

                         <label className="w-full sm:w-auto flex items-center px-6 py-[11px] border rounded-lg cursor-pointer transition-all duration-200 border-[#D9D9D9] hover:border-[#228EA9] has-[:checked]:border-[#228EA9]">
                          <input type="radio" name="timeslot" value="14:00 - 16:00" className="mr-1 w-5 h-5 accent-[#228EA9]" />
                          <span>14:00 - 16:00</span>
                        </label>
                      </div>
                      </div>

                       <div className='mt-10 pb-10 mb-10 border-b border-[#D9D9D9]'>
                        <label className="mt-10 block text-xl md:text-[22px] font-semibold mb-4 leading-8">
                          Which is the address for the service?
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                          <div className=''>
                            <label className="block text-base font-medium text-gray-700 mb-1">Address</label>
                            <input type="text" placeholder="Address" className="w-full px-4 py-[11px] border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228EA9]"/>
                          </div>
                          <div>
                            <label className="block text-base font-medium text-gray-700 mb-1">Address</label>
                            <input type="text" placeholder="Address" className="w-full px-4 py-[11px] border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228EA9]"/>
                          </div>
                        </div>
                      </div>

                       <div className='mt-10 pb-10 mb-10 border-b border-[#D9D9D9]'>
                        <label className="block text-xl md:text-[22px] font-semibold mb-4 mt-10 leading-8">
                          On what phone number can the service provider reach you?
                        </label>
                        <div className='mt-6'>
                          <label className="block text-base font-medium text-gray-700 mb-1">Enter a phone number</label>
                          <input type="tel" placeholder="021 444 4432" className="w-full px-4 py-3 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228EA9]"/>
                        </div>
                      </div>

                       <div className='mt-10 pb-10 mb-10 border-b border-[#D9D9D9]'>
                        <label className="block text-xl md:text-[22px] font-semibold mb-4 mt-10 leading-8">
                          Would you like to add photos?
                        </label>
                        <p className="text-sm text-gray-600 mt-8 mb-1">Upload 3 photos maximum</p>
                        <div className="border-2 border-dashed border-[#D9D9D9] rounded-lg p-8 text-center bg-gray-50 md:min-h-80 lg:min-h-56 flex items-center justify-center">
                           <div>
                          <svg className='mx-auto h-12 w-12 text-[#9CA3AF] mb-4' width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1.1" y="0.6" width="46.8" height="46.8" rx="9" fill="white"/>
                          <rect x="1.1" y="0.6" width="46.8" height="46.8" rx="9" stroke="#272727" stroke-width="1.2"/>
                          <path d="M33.5 27V28.2C33.5 29.8802 33.5 30.7202 33.173 31.362C32.8854 31.9265 32.4265 32.3854 31.862 32.673C31.2202 33 30.3802 33 28.7 33H20.3C18.6198 33 17.7798 33 17.138 32.673C16.5735 32.3854 16.1146 31.9265 15.827 31.362C15.5 30.7202 15.5 29.8802 15.5 28.2V27M29.5 20L24.5 15M24.5 15L19.5 20M24.5 15V27" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>

                          <div className="flex text-sm text-[#4B5563] justify-center">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#228EA9] hover:text-[#196B81] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#228EA9]">
                              <span>Click to upload</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple accept="image/*,application/pdf" />
                            </label>
                            <p className="pl-1">or drag and drop your files here</p>
                          </div>
                          <p className="text-xs text-[#6B7280] mt-1">PDF, PNG, JPG (max 162mb)</p>
                          </div> 
                        </div>
                      </div>

                       <div>
                        <label className="block text-xl md:text-[22px] font-semibold mt-10 mb-4 leading-8">
                          Do you have any additional information?
                        </label>
                        <div className="space-y-4">
                          <div className=''>
                            <label className="block text-base font-medium text-gray-700 mt-7 mb-1">Title</label>
                            <input type="text" placeholder="Title" className="w-full px-4 py-3 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228EA9]"/>
                          </div>
                          <div className='mt-12 pb-9 mb-9 border-b border-[#D9D9D9]'>
                            <label className="block text-base font-medium text-gray-700 mb-1">Description</label>
                            <textarea placeholder="Description" rows="5" className="w-full px-4 py-3 border border-[#D9D9D9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228EA9]"></textarea>
                          </div>
                        </div>
                      </div>

                       <div className="pt-4 text-right">
                        <button type="submit" className="bg-[#228EA9] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </section> 





              <section className="bg-[#F1EDE6]">
                  <article className="mx-auto py-15 sm:py-20 container">
                  
                    <div className="flex justify-between items-center mb-10">
                      <h2 className="text-center w-full sm:w-auto sm:text-left font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-secondary">Providers</h2> 
                      <button className="hidden sm:block bg-primary hover:bg-secondary text-white font-semibold text-[16px] py-3 px-8 rounded-[6px]"> 
                        View all providers
                      </button>
                    </div>

                  
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    
                      <div className="bg-white rounded-xl overflow-hidden">
                      
                        <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
                        
                          <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                        </div>

                        <div className="px-4 pt-3 pb-6">
                          
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-[22px] leading-8 text-secondary">Jill</h3>
                            <span className="font-semibold text-base leading-normal text-secondary">100EUR ph</span>
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

                        
                          <p className="font-normal text-base text-secondary">Service type is right over here</p>

                        
                          <div className="border-b border-[#D9D9D9] mt-3 mb-4"></div>

                          
                          <div className="flex flex-wrap gap-1 mt-2">
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2 mb-1">Punctual</span>
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2 mb-1">Reliable</span>
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2 mb-1">Calm & patient</span>
                          </div>

                          
                          <button className="w-full mt-6 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">
                            View provider profile
                          </button>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl overflow-hidden">
                      
                        <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
                        
                          <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                        </div>

                        <div className="px-4 pt-3 pb-6">
                          
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-[22px] leading-8 text-secondary">Jill</h3>
                            <span className="font-semibold text-base leading-normal text-secondary">100EUR ph</span>
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

                        
                          <p className="font-normal text-base text-secondary">Service type is right over here</p>

                        
                          <div className="border-b border-[#D9D9D9] mt-3 mb-4"></div>

                          
                          <div className="flex flex-wrap gap-1 mt-2">
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Punctual</span>
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Reliable</span>
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Calm & patient</span>
                          </div>

                          
                          <button className="w-full mt-6 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">
                            View provider profile
                          </button>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl overflow-hidden">
                      
                        <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
                        
                          <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                        </div>

                        <div className="px-4 pt-3 pb-6">
                          
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-[22px] leading-8 text-secondary">Jill</h3>
                            <span className="font-semibold text-base leading-normal text-secondary">100EUR ph</span>
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

                        
                          <p className="font-normal text-base text-secondary">Service type is right over here</p>

                        
                          <div className="border-b border-[#D9D9D9] mt-3 mb-4"></div>

                          
                          <div className="flex flex-wrap gap-1 mt-2">
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Punctual</span>
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Reliable</span>
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Calm & patient</span>
                          </div>

                          
                          <button className="w-full mt-6 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">
                            View provider profile
                          </button>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl overflow-hidden"> 
                      
                        <div className="h-[141px] bg-gray-200 rounded-t-lg overflow-hidden">
                        
                          <img src="/v2-img01.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                        </div>

                        <div className="px-4 pt-3 pb-6"> 
                          
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-[22px] leading-8 text-secondary">Jill</h3>
                            <span className="font-semibold text-base leading-normal text-secondary">100EUR ph</span>
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

                        
                          <p className="font-normal text-base text-secondary">Service type is right over here</p>

                        
                          <div className="border-b border-[#D9D9D9] mt-3 mb-4"></div> 

                          
                          <div className="flex flex-wrap gap-1 mt-2">
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Punctual</span>
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Reliable</span>
                            <span className="font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-[2px] rounded-[999px] mr-2">Calm & patient</span>
                          </div>

                          
                          <button className="w-full mt-6 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">
                            View provider profile
                          </button>
                        </div>
                      </div>
                    

                    </div>
                    <button className="block sm:hidden w-full sm:w-auto mt-6 sm:mt-0 bg-primary hover:bg-secondary text-white font-semibold text-[16px] py-3 px-8 rounded-[6px]"> 
                      View all providers
                    </button>
                  </article>
              </section>
              <section className="bg-[#F1EDE6] shadow-[10px_16px_0px_#272727] relative overflow-hidden mb-5"> 
                <div className="w-full md:w-7/12 lg:w-1/3 absolute top-48 left-0"> 
                    <img 
                      src="/v2-bg-dot2.svg" 
                      alt=""
                      className=""
                    /> 
                  </div>
                <div 
                  className="relative pb-20 sm:pb-44 overflow-hidden bg-custom-blue" 
                  style={{ backgroundImage: "url('/v2-bg-circle.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundSize: "cover" }}
                > 
                  <div className="container mx-auto relative z-10">
                    <div className="flex flex-col items-center justify-center">
                    
                    </div>
                  </div>
                </div>

                
                <div className="bg-primary pb-12 sm:pb-32"> 
                  <div className="container mx-auto">
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
                  <h2 className="font-poppins font-semibold text-[40px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[65px] lg:leading-[78px] text-center text-secondary">
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
                     <h3 className="font-poppins font-semibold text-base leading-6 text-secondary pb-4 border-b border-[#D9D9D9] mb-4">
                      Gardening
                    </h3>

                     <div className="flex justify-between items-start mb-3">
                      <h4 className="font-poppins font-semibold text-2xl leading-8 text-secondary">
                        Mowing the lawn
                      </h4>
                      <span className="font-poppins font-semibold text-2xl leading-8 text-secondary">
                        14EUR p/h
                      </span>
                    </div>

                     <p className="font-poppins font-normal text-base leading-6 text-secondary mb-6">
                      Description is here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>

                     <div className="flex flex-wrap">
                       <span className="flex items-center space-x-2 font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 mb-4">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75 2V6M16.75 2V6M3.75 10H21.75M5.75 4H19.75C20.8546 4 21.75 4.89543 21.75 6V20C21.75 21.1046 20.8546 22 19.75 22H5.75C4.64543 22 3.75 21.1046 3.75 20V6C3.75 4.89543 4.64543 4 5.75 4Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                        <span>02/11/2025</span>
                      </span>
                      
                       <span className="flex items-center space-x-2 font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 mb-4">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.75 2H14.75M12.75 14L15.75 11M20.75 14C20.75 18.4183 17.1683 22 12.75 22C8.33172 22 4.75 18.4183 4.75 14C4.75 9.58172 8.33172 6 12.75 6C17.1683 6 20.75 9.58172 20.75 14Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                        <span>10:00-12:00am (2 hours)</span>
                      </span>

                       <span className="flex items-center space-x-2 font-medium text-base text-secondary bg-[#F2F7F8] px-[10px] py-2 rounded-[999px] mr-2 mb-4">
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
                  <h2 className="font-poppins font-semibold text-[34px] leading-[40px] md:text-[40px] md:leading-[50px] text-center text-secondary">
                    Public chat
                  </h2>
                </div>

                 <div className="container mx-auto border-t border-[#D9D9D9] pt-[40px]">
                   <div className="flex items-end space-x-4 mb-6">
                     <div className="w-[47px] h-[47px] sm:w-[72px] sm:h-[72px] bg-[#D9D9D9] rounded-full flex-shrink-0"></div>
                    
                     <div className="flex-1"> 
                      <div className="bg-white px-4 py-5 rounded-xl shadow-sm max-w-2xl">
                        <div className="flex items-center space-x-2 mb-2 font-poppins font-medium text-base leading-6 text-secondary">
                          <p className=" ">
                            Name Surname
                          </p>
                          <span className=" ">
                            09:34am
                          </span>
                        </div>
                        <p className="font-poppins font-normal text-base leading-6 text-secondary">
                          Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>

                   <div className="flex items-end justify-end space-x-4 mb-8">
                     <div className="flex-1 flex justify-end">
                      <div className="bg-[#E3EFF2] p-4 rounded-xl shadow-sm max-w-2xl">
                        <div className="flex items-center space-x-2 mb-2 font-poppins font-medium text-base leading-6 text-secondary">
                          <span className="">
                            09:34am
                          </span>
                        </div>  
                        <p className="font-poppins font-normal text-base leading-6 text-secondary">
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
                        <div className="flex items-center space-x-2 mb-2 font-poppins font-medium text-base leading-6 text-secondary">
                          <p className="">
                            Name Surname
                          </p>
                          <span className="">
                            09:34am
                          </span>
                        </div>  
                        <p className="font-poppins font-normal text-base leading-6 text-secondary"> 
                          Comment is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
       {/* Top: Title */}
              <section className="shadow-[0px_0px_30px_rgba(0,0,0,0.08)]">
                <div className='container mx-auto px-6 pt-32 pb-15 sm:pb-20'>
                  <h2 className="font-poppins font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-center text-secondary mb-8">
                    Search results
                  </h2>

                  <div className="">
                    <div className="bg-[#F6F4F1] rounded-xl p-6  min-h-28 flex justify-center items-center max-w-[986px] m-auto">
                      <p className="font-poppins font-semibold text-2xl leading-8 text-center text-secondary">
                        No search results
                      </p>
                    </div>
                     <div className="space-y-6 max-w-[986px] m-auto mt-10">
                       <div className="bg-[#FBF8F4] rounded-xl px-8 py-6 md:flex items-center gap-8 shadow-sm">
                         <div className="flex-shrink-0 w-[115px] h-[115px] mb-2 md:mb-0">
                          <img src="/Help-center-thumb01.png" alt="Thumbnail" className="rounded-xl"/>  
                        </div>

                         <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-[22px] leading-8 text-secondary mb-2">
                            Title is over here.
                          </h3>
                          <p className="font-poppins font-normal text-base leading-6 text-[#4B5563] line-clamp-3">
                            Description is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </p>
                        </div>

                         <div className="flex-shrink-0 w-[140px] pl-0 md:pl-4 mt-2 md:mt-0">
                          <a href="#" className="text-left md:text-right font-poppins font-semibold text-base leading-5 text-[#228EA9] flex items-center justify-start md:justify-end space-x-1">
                            <span>Read more</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 17.9999L15 11.9999L9 5.99988" stroke="#228EA9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </div>
                      </div>

                       <div className="bg-[#FBF8F4] rounded-xl px-8 py-6 md:flex items-center gap-4 shadow-sm">
                         <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-[22px] leading-8 text-secondary  mb-2">
                            Title is over here.
                          </h3>
                          <p className="font-poppins font-normal text-base leading-6 text-[#4B5563] line-clamp-3">
                            Description is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </p>
                        </div>

                         <div className="flex-shrink-0 w-[140px] md:pl-4 mt-2 md:mt-0">
                          <a href="#" className="text-left md:text-right  font-poppins font-semibold text-base leading-5 text-[#228EA9] flex items-center justify-start md:justify-end space-x-1">
                            <span>Read more</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 17.9999L15 11.9999L9 5.99988" stroke="#228EA9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    <nav className="flex items-center justify-center space-x-6 mt-12">
                       <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center text-[#228EA9]"
                      >
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.125 6.25L9.875 12.5L16.125 18.75" stroke="#228EA9" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                       <div className="flex items-center space-x-4">
                        <a
                          href="#"
                          className="font-poppins font-semibold text-base leading-6 text-center tracking-[0.42em] text-secondary w-6 h-6 flex items-center justify-center"
                        >
                          1
                        </a>
                        <a
                          href="#"
                          className="font-poppins font-semibold text-base leading-6 text-center tracking-[0.42em] text-secondary w-6 h-6 flex items-center justify-center"
                        >
                          2
                        </a>
                         <a
                          href="#"
                          className="font-poppins font-semibold text-base leading-6 text-center tracking-[0.42em] text-[#228EA9] w-6 h-6 flex items-center justify-center"
                        >
                          3
                        </a>
                        <a
                          href="#"
                          className="font-poppins font-semibold text-base leading-6 text-center tracking-[0.42em] text-secondary w-6 h-6 flex items-center justify-center"
                        >
                          4
                        </a>
                      </div>

                       <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center text-[#228EA9]"
                      >
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.875 18.75L16.125 12.5L9.875 6.25" stroke="#228EA9" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </nav>




                  </div>
                </div>
              </section>

              <section className="bg-white py-[60px] md:py-[80px] px-6 sm:px-6 lg:px-8 relative">
                <div className="absolute top-0 left-0 right-0 pb-15 sm:pb-20"> 
                  <img src="/Help-center-bg01.png" alt="Thumbnail" className="w-full h-[550px] object-cover"/>   
                </div>
                <img alt="" src="/Help-center-bg-dot-01.svg" className='absolute top-0 right-0'/>
                
                
                <div className='relative z-10'>
                  <div className="text-center mb-12">
                    <h2 className="font-poppins font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-center text-secondary">
                      FAQs
                    </h2>
                  </div>
                  
                  <div className="max-w-[936px] mx-auto flex flex-col md:flex-row gap-6">
                     <div className="md:w-3/12">
                       <ul className="md:hidden space-y-3">
                        <li>
                          <div 
                            className="flex items-center justify-between px-4 py-3 border border-[#228EA9] rounded-md transition-colors font-poppins font-semibold text-base leading-6 text-primary bg-[#E3EFF2] hover:bg-[#228EA9] hover:text-white"
                          >
                            {currentTabContent?.tabTitle || 'Select Service'}  
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 12L16 20L24 12" stroke="#228EA9" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </li>
                      </ul>
                       <ul className="hidden md:block space-y-3">
                        {faqsData.map(faq => (
                          <li key={faq.id}>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleTabClick(faq.id);
                              }}
                              className={`block px-4 py-3 rounded-md transition-colors font-poppins font-semibold text-base leading-6
                                ${activeTab === faq.id ? 'bg-[#228EA9] text-white' : 'text-secondary bg-[#E3EFF2] hover:bg-[#228EA9] hover:text-white'}`}
                            >
                              {faq.tabTitle}
                            </a>
                          </li>
                        ))}
                      </ul>
                     
                    </div>
                    
                     <div className="md:w-9/12">
                      {currentTabContent && (
                        <div className="bg-white px-8 py-2 rounded-2xl shadow-[0px_0px_30px_rgba(0,0,0,0.08)]">
                          {currentTabContent.content.map((item, index) => {
                            const isOpen = openFaqItems[item.id];  
                            return (
                              <div key={item.id} className={`py-6 ${index > 0 ? 'border-t border-[#D9D9D9]' : ''}`}>
                                <div className="relative">
                                  <h4 
                                    className="font-poppins font-semibold text-xl leading-8 text-secondary pr-8 cursor-pointer flex items-center justify-between"
                                    onClick={() => handleFaqItemToggle(item.id)} 
                                  >
                                    {item.title}
                                    <span className="absolute top-0 right-0">
                                       <svg 
                                        width="32" 
                                        height="32" 
                                        viewBox="0 0 32 32" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                      >
                                        <path d="M8 12L16 20L24 12" stroke="#272727" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </span>
                                  </h4>
                                   <div className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out overflow-hidden`}>
                                    <p className="font-poppins font-normal text-base leading-6 text-secondary mt-2">
                                      {item.description}
                                    </p>
                                    <a href="#" className="font-poppins font-semibold text-base leading-5 text-[#228EA9] mt-2 inline-flex items-center space-x-1">
                                      <span>Read more</span>
                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 17.9999L15 11.9999L9 5.99988" stroke="#228EA9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                
                    
                </div>
              </section>

               <section className="max-w-[724px] m-auto py-[60px] px-6 sm:px-6 lg:px-8">
                <div className="mb-8 border-b border-[#D9D9D9]">
                  <h2 className="font-poppins font-semibold text-[34px] leading-[44px] md:text-[40px] md:leading-[50px] text-secondary mb-4">
                    Heading is over here
                  </h2>
                  <p className="font-poppins font-normal text-base leading-6 text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.<br/><br/>

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.<br/><br/>

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.<br/><br/>

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.<br/><br/>

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.<br/><br/>
                  </p>
                </div>

                 <div className="mb-8 border-b border-[#D9D9D9]">
                  <h3 className="font-poppins font-semibold text-[22px] md:text-2xl leading-8 text-secondary mb-4">
                    Heading is over here
                  </h3> 
                  <p className="font-poppins font-normal text-base leading-6 text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus eu sapien vitae scelerisque. Cras vulputate nunc sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum rhoncus. Vivamus quis ligula id enim porta consectetur quis vitae lacus. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                  </p>
                  <div className="bg-[#EFEAE4] rounded-xl p-4 mt-10 mb-10">
                    <div className="bg-gray-300 w-full h-48 rounded-md flex items-center justify-center text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  
                </div>
                
                 <div className="mb-8">
                  <h3 className="font-poppins font-semibold text-[22px] md:text-2xl leading-8 text-secondary mb-4">
                    Heading is over here
                  </h3>
                  <p className="font-poppins font-normal text-base leading-6 text-secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus eu sapien vitae scelerisque. Cras vulputate nunc sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum rhoncus. Vivamus quis ligula id enim porta consectetur quis vitae lacus. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                  </p>
                </div>

                 <div className="mb-8">
                  <h3 className="font-poppins font-semibold text-[22px] md:text-2xl leading-8 text-secondary mb-4">
                    Heading is over here
                  </h3>
                  <ul className="list-disc list-inside space-y-2 font-poppins font-normal text-base leading-6 text-secondary">
                    <li>Lorem ipsum dolor sit amet consectetur adipiscing elit.</li>
                    <li>Quisque faucibus ex sapien vitae pellentesque sem placerat.</li>
                    <li>In id cursus mi pretium tellus duis convallis.</li>
                    <li>Tempus leo eu aenean sed diam urna tempor.</li>
                    <li>Pulvinar vivamus fringilla lacus nec metus bibendum egestas.</li>
                    <li>Iaculis massa nisl malesuada lacinia integer nunc posuere.</li>
                    <li>Ut hendrerit semper vel class aptent taciti sociosqu.</li>
                    <li>Ad litora torquent per conubia nostra inceptos himenaeos.</li>
                  </ul>
                </div> 
                 <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/2">
                    <div className="bg-[#EFEAE4] rounded-xl p-4">
                      <div className="bg-gray-300 w-full h-48 rounded-md flex items-center justify-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="font-poppins font-semibold text-[22px] md:text-2xl leading-8 text-secondary mb-4">
                      Heading is over here
                    </h3>
                    <p className="font-poppins font-normal text-base leading-6 text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus eu sapien vitae scelerisque. Cras vulputate nunc sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum rhoncus. Vivamus quis ligula id enim porta consectetur quis vitae lacus. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                  </div>
                </div>
              </section>


              <section className="bg-white relative overflow-hidden">  
                <div className="">
                  <div className="container mx-auto">
                     <h2 className="font-semibold text-[34px] leading-[44px] md:text-[40px] md:leading-[50px] text-secondary text-center">Sub-Services</h2>   
                  </div>   
                </div> 
                <div className="mx-auto pt-5 sm:pt-10 pb-10 container">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">  
                    <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#D9D9D9]"> 
                      <div className="h-[198px] bg-gray-200 rounded-t-lg overflow-hidden"> 
                      <img src="/v2-img02.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                      </div> 
                      <div className="px-6 pt-4 pb-5">  
                        <h3 className="text-center group-hover:text-primary font-semibold text-[22px] leading-8 text-secondary">Lawn care</h3>  
                        <button className="w-full mt-3 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">View provider profile</button>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#D9D9D9]"> 
                      <div className="h-[198px] bg-gray-200 rounded-t-lg overflow-hidden"> 
                      <img src="/v2-img02.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                      </div> 
                      <div className="px-6 pt-4 pb-5">  
                        <h3 className="text-center group-hover:text-primary font-semibold text-[22px] leading-8 text-secondary">Lawn care</h3>  
                        <button className="w-full mt-3 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">View provider profile</button>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#D9D9D9]"> 
                      <div className="h-[198px] bg-gray-200 rounded-t-lg overflow-hidden"> 
                      <img src="/v2-img02.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                      </div> 
                      <div className="px-6 pt-4 pb-5">  
                        <h3 className="text-center group-hover:text-primary font-semibold text-[22px] leading-8 text-secondary">Lawn care</h3>  
                        <button className="w-full mt-3 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">View provider profile</button>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl overflow-hidden border border-solid border-[#D9D9D9]"> 
                      <div className="h-[198px] bg-gray-200 rounded-t-lg overflow-hidden"> 
                      <img src="/v2-img02.jpg" alt="rovider thumbnail" className="w-full h-full object-cover"/>
                      </div> 
                      <div className="px-6 pt-4 pb-5">  
                        <h3 className="text-center group-hover:text-primary font-semibold text-[22px] leading-8 text-secondary">Lawn care</h3>  
                        <button className="w-full mt-3 bg-transparent text-teal-600 border border-primary py-[11px] rounded-[6px] hover:bg-primary hover:text-white font-semibold">View provider profile</button>
                      </div>
                    </div> 
                  </div>
                </div>
                <div className="mx-auto pt-0 pb-16 container flex flex-col-reverse sm:flex-row align-center justify-between">
                  <div className="box-left text-center sm:text-left">
                    <button className="bg-primary hover:bg-secondary text-white font-semibold text-[16px] py-3 px-9 rounded-[6px] w-full sm:w-auto">More about this service</button>
                  </div>
                  <div className="box-right flex justify-center sm:block mb-6 sm:mb-0">
                    <div className="box-arrow flex align-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25 10L15 20L25 30" stroke="#228EA9" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg> 
                      <svg className="ml-6" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 30L25 20L15 10" stroke="#228EA9" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg> 
                    </div>
                  </div>
                </div>  
              </section>
              <section className='max-w-[1280px] m-auto px-6 pt-4'>
                <div className="bg-white pb-2 pt-10 px-6 md:py-16 sm:px-6 lg:p-16 shadow-[0px_0px_30px_rgba(0,0,0,0.08)] mb-24">
                  <div className="text-center mb-12">
                    <h2 className="font-poppins font-semibold text-[34px] leading-[44px] md:text-[40px] md:leading-[50px] text-center text-[#272727]">
                      Advantages to request a service on Manual2Fix
                    </h2>
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div className="md:w-7/12">
                      <img
                        src="service-img01.jpg"  
                        alt="Advantages thumbnail"
                        className="md:h-[540px] lg:h-full object-cover rounded-xl"
                      />
                    </div>

                    <div className="md:w-5/12 flex flex-col md:flex-col-reverse">
                      <div className="flex items-start gap-7 py-8 border-t border-[#D9D9D9]">
                        <div className="">
                          <svg width="36" height="50" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_103_14845)">
                          <path d="M12.8857 49.5314C13.0868 49.823 13.4151 50.0001 13.7645 50.0001H30.7057C31.2139 50.0001 31.6586 49.6355 31.7433 49.1459L33.8504 37.7397C34.4433 35.198 33.6068 32.1772 30.8645 31.3126L22.2245 28.4272V16.6772C22.2245 14.3751 20.3292 12.5105 17.9892 12.5105C15.6492 12.5105 13.7539 14.3751 13.7539 16.6772V36.2605C10.6304 32.1563 8.58685 31.2605 6.34214 31.2605C5.28332 31.2605 4.43626 31.7397 3.95979 32.5938C3.21861 33.9376 3.63155 35.8855 4.39391 37.0418L12.8645 49.5418L12.8857 49.5314Z" fill="#FF5E00"/>
                          <path d="M36.0003 14.5833C36.0003 13.4375 35.0474 12.5 33.8827 12.5H27.5298C26.3651 12.5 25.4121 13.4375 25.4121 14.5833C25.4121 15.7292 26.3651 16.6667 27.5298 16.6667H33.8827C35.0474 16.6667 36.0003 15.7292 36.0003 14.5833Z" fill="#FF5E00"/>
                          <path d="M26.9049 10.8438L31.1402 6.67716C31.9661 5.86466 31.9661 4.54175 31.1402 3.72925C30.3144 2.91675 28.9696 2.91675 28.1438 3.72925L23.9085 7.89591C23.0826 8.70841 23.0826 10.0313 23.9085 10.8438C24.3214 11.2501 24.8614 11.4584 25.4014 11.4584C25.9414 11.4584 26.4814 11.2501 26.8944 10.8438H26.9049Z" fill="#FF5E00"/>
                          <path d="M20.1181 8.33334V2.08333C20.1181 0.9375 19.1652 0 18.0005 0C16.8358 0 15.8828 0.9375 15.8828 2.08333V8.33334C15.8828 9.47917 16.8358 10.4167 18.0005 10.4167C19.1652 10.4167 20.1181 9.47917 20.1181 8.33334Z" fill="#FF5E00"/>
                          <path d="M10.5887 11.4584C11.1287 11.4584 11.6687 11.2501 12.0816 10.8438C12.9075 10.0313 12.9075 8.70841 12.0816 7.89591L7.84635 3.72925C7.02047 2.91675 5.67576 2.91675 4.84988 3.72925C4.024 4.54175 4.024 5.86466 4.84988 6.67716L9.08517 10.8438C9.49811 11.2501 10.0381 11.4584 10.5781 11.4584H10.5887Z" fill="#FF5E00"/>
                          <path d="M0 14.5833C0 15.7292 0.952941 16.6667 2.11765 16.6667H8.47059C9.63529 16.6667 10.5882 15.7292 10.5882 14.5833C10.5882 13.4375 9.63529 12.5 8.47059 12.5H2.11765C0.952941 12.5 0 13.4375 0 14.5833Z" fill="#FF5E00"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_103_14845">
                          <rect width="36" height="50" fill="white"/>
                          </clipPath>
                          </defs>
                          </svg> 
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-2xl leading-8 text-secondary mb-2">
                            Advantage is over here
                          </h3>
                          <p className="font-poppins font-normal text-base leading-6 text-secondary">
                            Description is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-7  py-8 border-t border-[#D9D9D9]">
                        <div className="">
                          <svg width="36" height="50" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_103_14845)">
                          <path d="M12.8857 49.5314C13.0868 49.823 13.4151 50.0001 13.7645 50.0001H30.7057C31.2139 50.0001 31.6586 49.6355 31.7433 49.1459L33.8504 37.7397C34.4433 35.198 33.6068 32.1772 30.8645 31.3126L22.2245 28.4272V16.6772C22.2245 14.3751 20.3292 12.5105 17.9892 12.5105C15.6492 12.5105 13.7539 14.3751 13.7539 16.6772V36.2605C10.6304 32.1563 8.58685 31.2605 6.34214 31.2605C5.28332 31.2605 4.43626 31.7397 3.95979 32.5938C3.21861 33.9376 3.63155 35.8855 4.39391 37.0418L12.8645 49.5418L12.8857 49.5314Z" fill="#FF5E00"/>
                          <path d="M36.0003 14.5833C36.0003 13.4375 35.0474 12.5 33.8827 12.5H27.5298C26.3651 12.5 25.4121 13.4375 25.4121 14.5833C25.4121 15.7292 26.3651 16.6667 27.5298 16.6667H33.8827C35.0474 16.6667 36.0003 15.7292 36.0003 14.5833Z" fill="#FF5E00"/>
                          <path d="M26.9049 10.8438L31.1402 6.67716C31.9661 5.86466 31.9661 4.54175 31.1402 3.72925C30.3144 2.91675 28.9696 2.91675 28.1438 3.72925L23.9085 7.89591C23.0826 8.70841 23.0826 10.0313 23.9085 10.8438C24.3214 11.2501 24.8614 11.4584 25.4014 11.4584C25.9414 11.4584 26.4814 11.2501 26.8944 10.8438H26.9049Z" fill="#FF5E00"/>
                          <path d="M20.1181 8.33334V2.08333C20.1181 0.9375 19.1652 0 18.0005 0C16.8358 0 15.8828 0.9375 15.8828 2.08333V8.33334C15.8828 9.47917 16.8358 10.4167 18.0005 10.4167C19.1652 10.4167 20.1181 9.47917 20.1181 8.33334Z" fill="#FF5E00"/>
                          <path d="M10.5887 11.4584C11.1287 11.4584 11.6687 11.2501 12.0816 10.8438C12.9075 10.0313 12.9075 8.70841 12.0816 7.89591L7.84635 3.72925C7.02047 2.91675 5.67576 2.91675 4.84988 3.72925C4.024 4.54175 4.024 5.86466 4.84988 6.67716L9.08517 10.8438C9.49811 11.2501 10.0381 11.4584 10.5781 11.4584H10.5887Z" fill="#FF5E00"/>
                          <path d="M0 14.5833C0 15.7292 0.952941 16.6667 2.11765 16.6667H8.47059C9.63529 16.6667 10.5882 15.7292 10.5882 14.5833C10.5882 13.4375 9.63529 12.5 8.47059 12.5H2.11765C0.952941 12.5 0 13.4375 0 14.5833Z" fill="#FF5E00"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_103_14845">
                          <rect width="36" height="50" fill="white"/>
                          </clipPath>
                          </defs>
                          </svg>

                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-2xl leading-8 text-secondary mb-2">
                            Advantage is over here
                          </h3>
                          <p className="font-poppins font-normal text-base leading-6 text-secondary">
                            Description is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-7 py-8 border-t border-b-0 md:border-b border-[#D9D9D9]">
                        <div className="">
                          <svg width="36" height="50" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_103_14845)">
                          <path d="M12.8857 49.5314C13.0868 49.823 13.4151 50.0001 13.7645 50.0001H30.7057C31.2139 50.0001 31.6586 49.6355 31.7433 49.1459L33.8504 37.7397C34.4433 35.198 33.6068 32.1772 30.8645 31.3126L22.2245 28.4272V16.6772C22.2245 14.3751 20.3292 12.5105 17.9892 12.5105C15.6492 12.5105 13.7539 14.3751 13.7539 16.6772V36.2605C10.6304 32.1563 8.58685 31.2605 6.34214 31.2605C5.28332 31.2605 4.43626 31.7397 3.95979 32.5938C3.21861 33.9376 3.63155 35.8855 4.39391 37.0418L12.8645 49.5418L12.8857 49.5314Z" fill="#FF5E00"/>
                          <path d="M36.0003 14.5833C36.0003 13.4375 35.0474 12.5 33.8827 12.5H27.5298C26.3651 12.5 25.4121 13.4375 25.4121 14.5833C25.4121 15.7292 26.3651 16.6667 27.5298 16.6667H33.8827C35.0474 16.6667 36.0003 15.7292 36.0003 14.5833Z" fill="#FF5E00"/>
                          <path d="M26.9049 10.8438L31.1402 6.67716C31.9661 5.86466 31.9661 4.54175 31.1402 3.72925C30.3144 2.91675 28.9696 2.91675 28.1438 3.72925L23.9085 7.89591C23.0826 8.70841 23.0826 10.0313 23.9085 10.8438C24.3214 11.2501 24.8614 11.4584 25.4014 11.4584C25.9414 11.4584 26.4814 11.2501 26.8944 10.8438H26.9049Z" fill="#FF5E00"/>
                          <path d="M20.1181 8.33334V2.08333C20.1181 0.9375 19.1652 0 18.0005 0C16.8358 0 15.8828 0.9375 15.8828 2.08333V8.33334C15.8828 9.47917 16.8358 10.4167 18.0005 10.4167C19.1652 10.4167 20.1181 9.47917 20.1181 8.33334Z" fill="#FF5E00"/>
                          <path d="M10.5887 11.4584C11.1287 11.4584 11.6687 11.2501 12.0816 10.8438C12.9075 10.0313 12.9075 8.70841 12.0816 7.89591L7.84635 3.72925C7.02047 2.91675 5.67576 2.91675 4.84988 3.72925C4.024 4.54175 4.024 5.86466 4.84988 6.67716L9.08517 10.8438C9.49811 11.2501 10.0381 11.4584 10.5781 11.4584H10.5887Z" fill="#FF5E00"/>
                          <path d="M0 14.5833C0 15.7292 0.952941 16.6667 2.11765 16.6667H8.47059C9.63529 16.6667 10.5882 15.7292 10.5882 14.5833C10.5882 13.4375 9.63529 12.5 8.47059 12.5H2.11765C0.952941 12.5 0 13.4375 0 14.5833Z" fill="#FF5E00"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_103_14845">
                          <rect width="36" height="50" fill="white"/>
                          </clipPath>
                          </defs>
                          </svg>

                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-2xl leading-8 text-secondary mb-3">
                            Advantage is over here
                          </h3>
                          <p className="font-poppins font-normal text-base leading-6 text-secondary">
                            Description is over here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
              </section>    






          
              </main>} />
           <Route path="/01-nextimmo" element={<TestPage />} /> 
           <Route path="/help-center" element={<HelpCenterPage />} /> 
           
      </Routes>
    </BrowserRouter>

     


  );
}; 

 

export default App; 