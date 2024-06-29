import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../store/features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../util/localStorage";

function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectUserLoggedInStatus = useSelector(
    (state) => state.user.isLoggedIn
  );

  useEffect(() => {
    const user = getUser();
    dispatch(authenticate(user));
    if (selectUserLoggedInStatus) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, selectUserLoggedInStatus]);
}
export default useAuth;
