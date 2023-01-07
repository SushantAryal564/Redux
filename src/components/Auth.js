import classes from "./Auth.module.css";
import { authAction } from "../store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
const Auth = () => {
  const dispatch = useDispatch();
  const is_loggedInUser = useSelector((state) => {
    console.log(state.auth.isLoged_in);
    return state.auth.isLoged_in;
  });
  console.log(is_loggedInUser);

  const loginHandler = () => {
    dispatch(authAction.isLogedIn());
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      {is_loggedInUser ? (
        <div></div>
      ) : (
        <main className={classes.auth}>
          <section>
            <form onSubmit={submitHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button onClick={loginHandler}>Login</button>
            </form>
          </section>
        </main>
      )}
    </Fragment>
  );
};

export default Auth;
