import React from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";

const Login = ({ user }) => {
    return (
        <form className={styles.container} action="" method="post">
            <div className={styles.container}>
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required />

                <button type="submit">Login</button>
                <label>
                <input type="checkbox" defaultChecked name="remember" /> Remember me
                </label>
            </div>
        </form>
    );
};

export default Login;

// function mapStateToProps(state) {
//  //   const { todos } = state
//     return { user: state.user }
// }
  
// export default connect(mapStateToProps)(Login)