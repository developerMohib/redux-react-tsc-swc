import { IUsers } from "@/interface/taskInterface";
import { RootState } from "@/redux/store";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface IinitialState {
  users: IUsers[];
}

const initialState: IinitialState = {
  users: [
    {
        id: 'asdf asdf',
        name : "Mir bhai"
    }
  ],
};

type DrafUser = Pick<IUsers, "name">;
const createUser = (userData: DrafUser) => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUsers>): void => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state : RootState) => {
    return state.users.users
}
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
