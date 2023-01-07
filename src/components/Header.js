import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/AuthSlice";
const Header = () => {
  const dispatch = useDispatch();
  const is_loggedInUser = useSelector((state) => {
    console.log(state.auth.isLoged_in);
    return state.auth.isLoged_in;
  });
  const logoutHandler = () => {
    console.log(is_loggedInUser);
    dispatch(authAction.isLoggedOut());
    console.log(is_loggedInUser);
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {is_loggedInUser && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
