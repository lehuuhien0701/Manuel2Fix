import { useState } from 'react';
 


const Gardening = () => {
 

  
  return (

<>

            <section className="bg-white relative overflow-hidden">  
                <div className="pt-20">
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
                    </>
);
}; 

export default Gardening;           