import { ToastType } from "@/types/common";

export interface AppContextType {
    notify: (type: ToastType, msg: string) => void;
}
