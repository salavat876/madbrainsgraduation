import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    openUserModal: false,
    isAdmin: false,
    adminLogin: "root",
    adminPass: "root",
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
    setAdmin(state) {
      state.isAdmin = !state.isAdmin;
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
  toggleVolModal,
  toggleModal,
  setAdmin,
} = toolkitSlice.actions;
