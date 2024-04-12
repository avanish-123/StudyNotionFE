const API_URL = process.env.REACT_APP_API_URL


export const endpoints = {
    SENDOTP_API:'',
    SIGNUP_API:'',
    LOGIN_API:'',
    RESETPASSWORDTOKEN_API:`${API_URL}/resetpasswordtoken`,
    RESETPASSWORD_API:`${API_URL}/resetpassword`
}
export const category= {
    CATEGORY_API: `${API_URL}/getallcategories`
}