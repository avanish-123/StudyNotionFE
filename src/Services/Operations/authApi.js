import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { endpoints } from "../apilist";

export function resetPassword(token,state) {
  return async () => {
    try {
      toast.loading('Loading...')
      await apiConnector(
        "POST",
        endpoints.RESETPASSWORD_API,
        state,
        "",
        {token}
      );
      toast.dismiss();
      toast.success('Password changed successfully')
    } catch (error) {
      toast.dismiss();
      toast.error(error.response.data.message);
    }
  };
}

export function getResetPasswordToken(email, setEmailSent) {
  return async () => {
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
