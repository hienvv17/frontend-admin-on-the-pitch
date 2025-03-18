import { ToastType } from "@/types/common";
import  PropTypes from "prop-types";
import { toast } from "react-toastify";

const ToastMessage = ({
  type,
  message,
}: {
  type: ToastType;
  message: string;
}) => toast[type](message);

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;

