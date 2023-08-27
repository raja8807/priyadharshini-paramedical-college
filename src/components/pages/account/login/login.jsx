const {
  default: CustomContainer,
} = require("@/components/ui/custom-container/custom_container");

import LoginBox from "./login-box/login-box";
import styles from "./login.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.login_page}>
      <LoginBox/>
    </div>
  );
};

export default LoginPage;
