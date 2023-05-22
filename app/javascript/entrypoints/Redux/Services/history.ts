import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type historyProps = {
  organization_id?: number,
  historyData?: any,
  history_id?: number,
};

export const postHistory = createAsyncThunk(
  "Create/History",
  async ({ historyData, organization_id }: historyProps) => {
    console.log("History data posted: ", historyData);
    try {
      const res = await axios.post(
        `/api/v1/organizations/${organization_id}/histories`,
        historyData
      );
      const dt = await res.data;
      console.log("History data ", dt);
      return dt;
    } catch (e) {
      console.log("History eeror OB: ", e);
      throw new Error(e.response.data.error);
    }
  }
);

export const getHistories = createAsyncThunk(
  "Fetch/History",
  async ({ organization_id }: historyProps) => {
    try {
      const res = await axios.get(
        `/api/v1/organizations/${organization_id}/histories`
      );
      const dt = await res.data;
      console.log("History data ", dt);
      return dt;
    } catch (e) {
      console.log("History eeror OB: ", e);
      throw new Error(e.response.data.error);
    }
  }
);

export const deleteHistory = createAsyncThunk(
    "Delete/History",
    async ({ organization_id, history_id }: historyProps) => {
        try {
            const res = await axios.delete(
            `/api/v1/organizations/${organization_id}/histories/${history_id}`
            );
            const dt = await res.data;
            console.log("History data ", dt);
            return dt;
        } catch (e) {
            console.log("History eeror OB: ", e);
            throw new Error(e.response.data.error);
        }
        }
);

export const updateHistory = createAsyncThunk(
    "Update/History",
    async ({ organization_id, history_id, historyData }: historyProps) => {
        try {
            const res = await axios.patch(
            `/api/v1/organizations/${organization_id}/histories/${history_id}/`, historyData
            );
            const dt = await res.data;
            console.log("History data ", dt);
            return dt;
        } catch (e) {
            console.log("History eeror OB: ", e);
            throw new Error(e.response.data.error);
        }
        }
);

export const getHistory = createAsyncThunk(
    "Fetch/History",
    async ({ organization_id, history_id }: historyProps) => {
        try {
            const res = await axios.get(
            `/api/v1/organizations/${organization_id}/histories/${history_id}`
            );
            const dt = await res.data;
            console.log("History data ", dt);
            return dt;
        } catch (e) {
            console.log("History eeror OB: ", e);
            throw new Error(e.response.data.error);
        }
        }
);


