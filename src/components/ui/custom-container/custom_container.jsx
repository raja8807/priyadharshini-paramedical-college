import PropTypes from "prop-types";
const { Container } = require("react-bootstrap");

import styles from "./custom_container.module.scss";

const CustomContainer = (props) => {
  const { children, className = "" } = props;

  return (
    <Container className={`${styles.container} ${className}`}>
      {children}
    </Container>
  );
};

export default CustomContainer;

CustomContainer.propTypes = {
  className: PropTypes.string,
};
