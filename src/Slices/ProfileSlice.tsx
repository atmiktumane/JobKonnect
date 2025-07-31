import { createSlice } from "@reduxjs/toolkit";
import { updateProfileAPI } from "../Components/services/ProfileService";

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {},
  reducers: {
    changeProfile: (state, action) => {
      state = updateProfileAPI(action.payload); // Update Profile API Call
      return action.payload;
    },

    setProfile: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeProfile, setProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
