import PropTypes from 'prop-types';

const TabButtons = ({ tabs, activeTab, handleTabClick }) => {
  return (
    <div className="md:flex md:flex-col space-y-2 overflow-x-auto whitespace-nowrap md:overflow-x-visible md:whitespace-nowrap">
      {tabs.map((tab) => (
        <button
  key={tab.id}
  onClick={() => handleTabClick(tab.id)}
  className={`
    mr-3 md:mr-0 font-medium md:w-full px-4 py-3 text-left rounded-lg transition-all
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