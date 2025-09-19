import PropTypes from 'prop-types';

const TabButtons = ({ tabs, activeTab, handleTabClick }) => {
  return (
    <div className="flex flex-col space-y-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`
            font-medium w-full px-4 py-3 text-left rounded-lg transition-all
            ${
              activeTab === tab.id
                ? 'bg-[#E3EFF2] text-primary shadow-sm'
                : 'text-gray-500 hover:bg-white hover:text-primary'
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