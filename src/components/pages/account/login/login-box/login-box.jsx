import styles from "./login-box.module.scss";

const LoginBox = () => {
  return (
    <div className={styles.login_box}>
      <div className={styles.head}>Login</div>
      <div className={styles.body}>
        <div className={styles.controls}>
          <input placeholder="Username" />
          <input placeholder="Password" />
        </div>

        <div>
          <input type="radio" id="student" name="fav_language" value="HTML" />
          &nbsp;
          <label for="html">Student</label>
          {/* <br /> */}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <input type="radio" id="css" name="fav_language" value="CSS" />
          &nbsp;
          <label for="css">Staff</label>
        </div>
        <button >Login</button>
      </div>
    </div>
  );
};

export default LoginBox;
