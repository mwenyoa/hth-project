import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrganization = createAsyncThunk(
  "organization/getOrganization",
  async (id: string) => {
    try {
      const response = await axios.get(`/api/v1/organizations/${id}`);
      const data = await response.data;
      return data;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const getOrganizations = createAsyncThunk(
  "Fetch/Organization",
  async () => {
    try {
      const res = await axios.get("/api/v1/organizations");
      const dt = await res.data;
      return dt;
    } catch (e: any) {
      throw new Error(e.response.data.error);
    }
  }
);

export const createOrganization = createAsyncThunk(
  "organization/createOrganization",
  async (orgdata: any) => {
    try {
      const res = await axios.post("/api/v1/organizations", orgdata);
      const data = await res.data;
      return data;
    } catch (e: any) {
      throw new Error(e.response.data.error);
    }
  }
);

export const updateOrganization = createAsyncThunk(
  "organization/updateOrganization",
  async (data: any) => {
    try {
      const response = await axios.put(
        `/api/v1/organizations/${data.id}`,
        data
      );
      const data = await response.data;
      return data;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const deleteOrganization = createAsyncThunk(
  "organization/deleteOrganization",
  async (id: string) => {
    try {
      const response = await axios.delete(`/api/v1/organizations/${id}`);
      const data = await response.data;
      return data;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);
