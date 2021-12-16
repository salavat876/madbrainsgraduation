import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    openUserModal: false,
    openVolModal: false,
    count: 0,
    todos: [],
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    toggleUserModal(state) {
      state.openUserModal = !state.openUserModal;
    },
    toggleVolModal(state) {
      state.openVolModal = !state.openVolModal;
    },
  },
});

export default toolkitSlice.reducer;
export const {
  increment,
  decrement,
  showUserModal,
  hideUserModal,
  toggleUserModal,
} = toolkitSlice.actions;
