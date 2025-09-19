import { useState } from 'react';
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


const HelpCenterPage = () => {

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

<>

        <section className="shadow-[0px_0px_30px_rgba(0,0,0,0.08)]">
            <div className='container mx-auto px-6 pt-32 pb-15 sm:pb-20'>
                <h2 className="font-poppins font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-center text-charcoal mb-8">
                Search results
                </h2>

                <div className="">
                <div className="bg-[#F6F4F1] rounded-xl p-6  min-h-28 flex justify-center items-center max-w-[986px] m-auto">
                    <p className="font-poppins font-semibold text-2xl leading-8 text-center text-charcoal">
                    No search results
                    </p>
                </div>
                    <div className="space-y-6 max-w-[986px] m-auto mt-10">
                    <div className="bg-[#FBF8F4] rounded-xl px-8 py-6 md:flex items-center gap-8 shadow-sm">
                        <div className="flex-shrink-0 w-[115px] h-[115px] mb-2 md:mb-0">
                        <img src="/Help-center-thumb01.png" alt="Thumbnail" className="rounded-xl"/>  
                    </div>

                        <div className="flex-1">
                        <h3 className="font-poppins font-semibold text-[22px] leading-8 text-charcoal mb-2">
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
                        <h3 className="font-poppins font-semibold text-[22px] leading-8 text-charcoal  mb-2">
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
                        className="font-poppins font-semibold text-base leading-6 text-center tracking-[0.42em] text-charcoal w-6 h-6 flex items-center justify-center"
                    >
                        1
                    </a>
                    <a
                        href="#"
                        className="font-poppins font-semibold text-base leading-6 text-center tracking-[0.42em] text-charcoal w-6 h-6 flex items-center justify-center"
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
                        className="font-poppins font-semibold text-base leading-6 text-center tracking-[0.42em] text-charcoal w-6 h-6 flex items-center justify-center"
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
                <h2 className="font-poppins font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-center text-charcoal">
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
                            ${activeTab === faq.id ? 'bg-[#228EA9] text-white' : 'text-charcoal bg-[#E3EFF2] hover:bg-[#228EA9] hover:text-white'}`}
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
                                className="font-poppins font-semibold text-xl leading-8 text-charcoal pr-8 cursor-pointer flex items-center justify-between"
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
                                <p className="font-poppins font-normal text-base leading-6 text-charcoal mt-2">
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
                <h2 className="font-poppins font-semibold text-[34px] leading-[44px] md:text-[40px] md:leading-[50px] text-charcoal mb-4">
                Heading is over here
                </h2>
                <p className="font-poppins font-normal text-base leading-6 text-charcoal">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.<br/><br/>

            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.<br/><br/>

            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.<br/><br/>

            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.<br/><br/>

            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.<br/><br/>
                </p>
            </div>

                <div className="mb-8 border-b border-[#D9D9D9]">
                <h3 className="font-poppins font-semibold text-[22px] md:text-2xl leading-8 text-charcoal mb-4">
                Heading is over here
                </h3> 
                <p className="font-poppins font-normal text-base leading-6 text-charcoal">
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
                <h3 className="font-poppins font-semibold text-[22px] md:text-2xl leading-8 text-charcoal mb-4">
                Heading is over here
                </h3>
                <p className="font-poppins font-normal text-base leading-6 text-charcoal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus eu sapien vitae scelerisque. Cras vulputate nunc sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum rhoncus. Vivamus quis ligula id enim porta consectetur quis vitae lacus. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
            </div>

                <div className="mb-8">
                <h3 className="font-poppins font-semibold text-[22px] md:text-2xl leading-8 text-charcoal mb-4">
                Heading is over here
                </h3>
                <ul className="list-disc list-inside space-y-2 font-poppins font-normal text-base leading-6 text-charcoal">
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
                <h3 className="font-poppins font-semibold text-[22px] md:text-2xl leading-8 text-charcoal mb-4">
                    Heading is over here
                </h3>
                <p className="font-poppins font-normal text-base leading-6 text-charcoal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus eu sapien vitae scelerisque. Cras vulputate nunc sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum rhoncus. Vivamus quis ligula id enim porta consectetur quis vitae lacus. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
                </div>
            </div>
            </section>


              
                    </>
);
}; 

export default HelpCenterPage;           