import PropTypes from 'prop-types';

const TabButtonQuote = ({ tabs, activeTab, handleTabClick }) => {
  return (
    <div className='w-full lg:w-[288px] flex flex-col'>
    <div className="mb-10 lg:flex-col overflow-x-auto whitespace-nowrap md:overflow-x-visible lg:whitespace-nowrap">
      {tabs.map((tab) => (
        <button
  key={tab.id}
  onClick={() => handleTabClick(tab.id)}
  className={`
    mr-3 font-medium px-6 py-2 text-left rounded-full transition-all
    ${
      activeTab === tab.id
        ? 'bg-charcoal text-white'
        : 'bg-[#FBF8F4] text-charcoal hover:text-primary'
    }
  `}
>
  {tab.label}
</button> 
      ))}
      <button className='mr-3 font-medium px-6 py-2 text-left rounded-full transition-all bg-[#FBF8F4] text-primary'>
          <span className='flex items-center gap-[10px]'>
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8346 5.25L7.1263 13.9583L3.16797 10" stroke="#228EA9" stroke-width="1.58333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Booking
          </span>
      </button>
    </div>
    </div>
  );
};

TabButtonQuote.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
};

export default TabButtonQuote;