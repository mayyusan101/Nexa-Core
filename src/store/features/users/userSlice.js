import { createSlice } from "@reduxjs/toolkit";
import { setUser } from "../../../util/localStorage";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    authenticate: (state, { payload }) => {
      const user = payload;
      if (user.email === process.env.REACT_APP_ADMIN_EMAIL) {
        if (user.password === process.env.REACT_APP_ADMIN_PASSWORD) {
          state.isLoggedIn = true;
          setUser(user); // set on localsotrage
        }
      } else {
        state.isLoggedIn = false;
        setUser({});
      }
    },
  },
});

export const { authenticate } = userSlice.actions;
export default userSlice.reducer;
