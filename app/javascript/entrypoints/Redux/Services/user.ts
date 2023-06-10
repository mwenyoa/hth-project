import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Props = {
  userData?: any;
  user_id?: number;
  porder?: {};
};

export const createUser = createAsyncThunk(
  "Users/Create",
  async ({ userData }: Props) => {
    try {
      const res = await axios.post("/api/v1/participants/", userData);
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "Users/Fetch User",
  async ({ user_id }: Props) => {
    try {
      const res = await axios.get(`/api/v1/participants/${user_id}/`);
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const fetchUsers = createAsyncThunk(
  "Users/Fetch Users",
  async ({ porder }: Props) => {
    try {
      const res = await axios.get(`api/v1/participants/`);
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "Users/Delete User",
  async ({ user_id }: Props) => {
    try {
      const res = await axios.delete(`/api/v1/participants/${user_id}`);
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const editUser = createAsyncThunk(
  "Users/Update User",
  async ({ user_id }: Props) => {
    try {
      const res = await axios.patch(`/api/v1/participants/${user_id}`);
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "Users/Login",
  async ({ userData }: Props) => {
    try {
      const res = await axios.post("/api/v1/login/", userData);
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);
