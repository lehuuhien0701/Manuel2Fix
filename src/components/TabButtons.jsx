import PropTypes from 'prop-types';

const TabButtons = ({ tabs, activeTab, handleTabClick }) => {
  return (
    <div className='p-4 bg-white md:p-0 md:bg-transparent'>
        <div className="md:hidden flex items-center justify-between px-4 py-3 border border-[#D9D9D9] rounded-md transition-colors font-poppins font-semibold text-base leading-6 text-primary bg-[#ffffff] hover:bg-[#228EA9] hover:text-white">
          Personal information
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12L16 20L24 12" stroke="#228EA9" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
      <div className="hidden mt-2 md:mt-0 md:flex md:flex-col space-y-2 overflow-x-auto md:overflow-x-visible ">
        {tabs.map((tab) => (
          <button
    key={tab.id}
    onClick={() => handleTabClick(tab.id)}
    className={`
      block w-full mr-0 md:inline-block md:mr-0 font-medium md:w-full px-4 py-3 text-left rounded-lg transition-all
      ${
        activeTab === tab.id
          ? 'bg-[#E3EFF2] text-primary'
          : 'bg-white text-gray-500 hover:text-primary'
      }
    `}
  >
    {tab.label}
  </button>
        ))}
      </div>
    </div>
  );
};

TabButtons.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
};

export default TabButtons;