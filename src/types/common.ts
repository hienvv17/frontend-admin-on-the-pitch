import {  ToastEnum } from "@/enums/status";

export type ToastType = ToastEnum.ERROR | ToastEnum.INFO | ToastEnum.SUCCESS | ToastEnum.WARNING;

export interface CommonResponseType<T> {
    success: boolean;
    data: T;
    requestId?: string;
}

// export interface OptionType {
//     name: string;
//     value: number | string | boolean;
// }

// export interface DropdownOptionType {
//     value: number;
//     label: string;
// }
