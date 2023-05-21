import { ToastStatusEnum } from "../constants/ToastStatusEnum";
import { IPayload } from "./IPayload";

export interface IToast extends IPayload {
    id: string;
    type: ToastStatusEnum
}