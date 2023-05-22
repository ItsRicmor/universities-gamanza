import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastStatusEnum } from "constants/ToastStatusEnum";
import environment from 'environment';
import HttpErrorResponseModel from "models/HttpErrorResponseModel";
import { IUniversity } from "models/IUniversity";
import { v4 as uuidv4 } from 'uuid';
import * as EffectUtility from '../../utils/EffectUtility';
import { addToast } from "../toasts/reducer.slices";
import { UniversityModel } from "./models/University.model";
import { unionBy } from "lodash";

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
            thunkAPI.dispatch(addToast({ id: uuidv4(), error: response.message, type: ToastStatusEnum.Error }));
            return thunkAPI.rejectWithValue([]);
        }

        if (payload.unique) {
            return unionBy(response, (item) => item.alpha_two_code);
        }

        return response;
    }
)
