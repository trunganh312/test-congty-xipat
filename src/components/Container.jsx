import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className='overflow-scroll'>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
