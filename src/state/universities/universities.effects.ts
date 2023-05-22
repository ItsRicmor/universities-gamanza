import { createAsyncThunk } from "@reduxjs/toolkit";
import environment from 'environment';
import { unionBy } from "lodash";
import HttpErrorResponseModel from "models/HttpErrorResponseModel";
import * as EffectUtility from '../../utils/EffectUtility';
import { UniversityModel } from "./models/University.model";

export interface UniversityRequest {
    country?: string;
    name?: string;
    unique?: boolean;
}

export const fetchUniversities = createAsyncThunk(
    'universities/fetchUniversities',
    async (payload: UniversityRequest = {}, thunkAPI) => {
        let endpointPaginated = (environment.api.universities as string);

        if (payload.country || payload.name) {
            endpointPaginated += "?"

            if (payload.country) {
                endpointPaginated += `country=${payload.country}&`
            }

            if (payload.name) {
                endpointPaginated += `name=${payload.name}`
            }
        }
        const response = await EffectUtility.getToModel<UniversityModel[]>(UniversityModel, endpointPaginated);

        if (response instanceof HttpErrorResponseModel) {
            return thunkAPI.rejectWithValue([]);
        }

        if (payload.unique) {
            return unionBy(response, (item) => item.alpha_two_code);
        }

        return response;
    }
)
