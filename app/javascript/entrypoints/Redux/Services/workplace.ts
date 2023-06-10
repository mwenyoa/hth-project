import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Workplace = {
  id: number;
  workplaceData: {
    name: string;
    description: string;
    organization_id: string;
    quicknote: string;
  };
};

export const fetchWorkplace = createAsyncThunk(
  "workplace/fetchWorkplace",
  async (id: number) => {
    try {
      const res: any = await axios.get(`/api/v1/workplaces/${id}`);
        const dt: any = await res.data;
        return dt;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const updateWorkplace = createAsyncThunk(
  "workplace/updateWorkplace",
  async (workplace: Workplace) => {
    try {
      const res = await axios.patch(
        `/api/v1/workplaces/${workplace.id}`,
        workplace
      );
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const createWorkplace = createAsyncThunk(
  "workplace/createWorkplace",
  async (workplace: Workplace) => {
    try {
      const res = await axios.post(`/api/v1/workplaces`, workplace);
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const deleteWorkplace = createAsyncThunk(
  "workplace/deleteWorkplace",
  async (id: number) => {
    try {
      const res = await axios.delete(`/api/v1/workplaces/${id}`);
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);

export const fetchWorkplaces = createAsyncThunk(
  "workplace/fetchWorkplaces",
  async () => {
    try {
      const res = await axios.get(`/api/v1/workplaces`);
      const dt = await res.data;
      return dt;
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  }
);
