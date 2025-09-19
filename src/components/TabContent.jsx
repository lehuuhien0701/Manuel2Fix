import PropTypes from 'prop-types';

const TabContent = ({ children }) => {
  return (
    <div className="">
      {children}
    </div>
  );
};

TabContent.propTypes = {
  children: PropTypes.node
};

export default TabContent;