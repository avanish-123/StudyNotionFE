import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { endpoints } from "../apilist";

export function getResetPasswordToken(email, setEmailSent) {
  return async (dispatch) => {
    try {
      toast.loading("Sending email");
      await apiConnector("POST", endpoints.RESETPASSWORDTOKEN_API, { email });
      toast.dismiss();
      toast.success("Email sent successfully");
      setEmailSent(true);
    } catch (error) {
      toast.dismiss();
      toast.error(error.response.data.message);
    }
  };
}
