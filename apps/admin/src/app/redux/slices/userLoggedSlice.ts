"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User, UserLogin, UserLogged } from "../../interfaces/IUserLogged";
import { setSession } from "@admin/utils/session";
const apiUrl = process.env.NEXT_PUBLIC_SELF_API;

interface UserState {
  user: User;
  logged: Boolean;
  authToken: string;
  externalLogin?: {};
  loading: boolean;
  error: string | null;
}

// Estado inicial
const initialState: UserState = {
  user: {
    name: '',
    email: ''
  },
  logged: false,
  authToken: '',
  loading: false,
  error: null,
};

// Acción asincrónica para obtener los productos desde una API
export const login: any = createAsyncThunk<UserLogged, UserLogin>(
  'users/login',
  async (user: UserLogin) => {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })

    const data = await response.json()
    return data;
  }
);

export const signup: any = createAsyncThunk<UserLogged, User>(
  'users/signup',
  async (user: Partial<User>) => {
    const response = await fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })

    if (!response.ok) throw new Error("Error with the response")
    const data = await response.json()
    return data;
  }
);

const handleAsyncActions = (builder: any, thunk: any, successCallback: any) => {
  builder
    .addCase(thunk.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(thunk.fulfilled, (state: any, action: any) => {
      state.loading = false;
      successCallback(state, action);
    })
    .addCase(thunk.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred';
    });
};


// Slice de Redux
const userLoggedSlice = createSlice({
  name: 'userLogged',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    handleAsyncActions(builder, signup, (state: any, action: any) => {

      state.loading = false;
      const { user, token } = action.payload;

      setSession({ user, token });
      state.user = user;
      state.authToken = token;
      state.logged = true;
    })

    handleAsyncActions(builder, login, (state: any, action: any) => {
      state.user = action.payload;
    });


  },
});

export default userLoggedSlice.reducer;