import { useState } from 'react'; 
import DatePickerComponent from '../DatePickerComponent.jsx';
import TabContent from '../components/TabContent'; 
import TabButtonQuote from '../components/TabButtonQuote';  
import Booking from '../components/Booking';  
import Validation from '../components/Validation';   
import QualityCheck from '../components/QualityCheck';   
import RateTheService from '../components/RateTheService';   
import Extras from '../components/Extras';   

 




 
const ProfileTabs = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('tab1');

  // Tab data
  const tabs = [
    { id: 'tab1', label: 'Booking' },
    { id: 'tab2', label: 'Validation' },
    { id: 'tab3', label: 'Quality check' },
    { id: 'tab4', label: 'Rate the service' },
    { id: 'tab5', label: 'Extras' }, 
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); 
  }; 


 

 
  
  return (

<>

    

    <section className="bg-[#F1EDE6] shadow-[10px_16px_0px_#272727] relative overflow-hidden mb-5">
        <article className=""> 
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-center w-full font-semibold text-[34px] leading-[44px] sm:text-[40px] sm:leading-[50px] text-charcoal">Offers / Quotes</h2>                       
            </div> 
            <div className='px-6'>    
                <div className='rounded-xl bg-white py-6 sm:py-20 container px-6 xl:px-20 mx-auto'>
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
            </div>

            <div className='px-6'>
                <div className='rounded-xl bg-white py-6 sm:py-20 container px-6 xl:px-20 mx-auto mt-10'>
                    <div className="lg:space-y-0"> 
                        <div className="w-full flex flex-col space-y-4">
                            <TabButtonQuote tabs={tabs} activeTab={activeTab} handleTabClick={handleTabClick} /> 
                        </div>

                        
                        <div className="w-full bg-white px-6 md:px-0">
                            <TabContent activeTab={activeTab}>
                                {activeTab === 'tab1' && <Booking/>}   
                                {activeTab === 'tab2' && <Validation/>}   
                                {activeTab === 'tab3' && <QualityCheck/>}   
                                {activeTab === 'tab4' && <RateTheService/>}   
                                {activeTab === 'tab5' && <Extras/>}   

                                
                                
                            </TabContent>
                        </div>
                        </div>
                </div>
            </div>    

        </article>
    </section>




</>
);
}; 
export default ProfileTabs;             