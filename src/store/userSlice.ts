import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  name: "",
  authenticated: false,
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        name: string
      }>
    ) => {
      state.authenticated = true
      state.name = action.payload.name
    },
  },
})

const userReducer = userSlice.reducer

const { login } = userSlice.actions

export { userReducer, login }
