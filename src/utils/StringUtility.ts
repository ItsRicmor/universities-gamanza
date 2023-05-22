import { capitalize } from "lodash";


export const capitalizeToSlug = (s: string) => s.toLowerCase().replaceAll(' ', '-');

export const slugToCapitalize = (s: string) => capitalize(s.replaceAll('-', ' '));