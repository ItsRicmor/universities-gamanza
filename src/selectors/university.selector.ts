import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "state";

export const selectUniversities = (state: RootState) => state.universities

export const universityItemsSelector = createSelector(selectUniversities, (state) => state.items);

export const universityIsLoadingSelector = createSelector(selectUniversities, (state) => state.isLoading);

export const universitiesByCountryNameSelector = createSelector(
    universityItemsSelector,
    (_: any, filterConfig: { country: string, name: string }) => filterConfig,
    (state, { country, name }) => state.find(university => university.country === country && university.name.toLowerCase().replace(' ', '-') === name));