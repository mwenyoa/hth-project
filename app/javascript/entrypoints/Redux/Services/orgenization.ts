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

export const createOrganization = createAsyncThunk(
    "organization/createOrganization",
    async (orgdata: any) => {
        console.log("Data posted: ", orgdata);
        try {
            const res = await axios.post("/api/v1/organizations",orgdata);
            console.log("response: ", res);
            
            const data =  await res.data;
            console.log(data);
            return data;
        } catch (e: any ) {
             console.log("Error OB: ", e);
    
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

