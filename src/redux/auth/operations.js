import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../config/Api_auth";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authApi.post(`/users/signup`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
