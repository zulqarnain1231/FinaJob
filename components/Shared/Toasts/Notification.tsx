import { toast } from "react-toastify";

export const Toast = (message: string) => toast(message);
export const ToastInfo = (message: string) =>
  toast.info(message, {
    toastId: "customId",
  });
export const ToastError = (message: string) =>
  toast.error(message, {
    toastId: "customId",
  });
export const ToastWarning = (message: string) =>
  toast.warning(message, {
    toastId: "customId",
  });
export const ToastSuccess = (message: string) =>
  toast.success(message, {
    toastId: "customId",
  });
