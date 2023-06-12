import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { localStore } from "../../utils";

type Props = {
  id?: number;
  user?: {};
};

export const createAdmin = createAsyncThunk(
  "Admin/Create",
  async ({ user }: Props) => {
    try {
      const res = await axios.post(`users`, user);
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data);
    }
  }
);

export const getAdmin = createAsyncThunk(
  "Admin/Fetch",
  async (id: number) => {
    try {
      const res = await axios.get(`api/v1/users/${id}`);
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data);
    }
  }
);

export const getAdmins = createAsyncThunk(
  "Admin/Fetch",
  async () => {
    try {
      const res = await axios.get(`api/v1/users`);
      const dt = await res.data;;
      return dt;
    } catch (e) {
      throw new Error(e.response.data);
    }
  }
);

export const loginAdmin = createAsyncThunk(
  "Admin/Login",
  async ({ user }: Props) => {
    try {
      const res = await axios.post("users/sign_in", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dt = res.data;
      if (dt) {
        localStore.setUser(res.headers.authorization!);
      }
      return dt;
    } catch (e) {
      throw new Error(e.response.data);
    }
  }
);

export const updateAdmin = createAsyncThunk(
  "Admin/Update",
  async ({ id }: Props) => {
    try {
      const res = await axios.patch(`api/v1/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStore.getUser}`,
        },
      });
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data);
    }
  }
);

export const deleteAdmin = createAsyncThunk(
  "Admin/Delete",
  async ({ id }: Props) => {
    try {
      const res = await axios.delete(`api/v1/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStore.getUser}`,
        },
      });
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data);
    }
  }
);
