import { axiosInstance } from ".";

export const login = async(payload)=>{
  try {
    const response = await axiosInstance.post('/api/users/login',payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}

export const register = async(payload)=>{
  try {
    const response = await axiosInstance.post('/sendOtpApi.php',payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}

export const userInfo = async()=>{
  try {
    const response = await axiosInstance.get('/api/users/getuserinfo')
    return response.data

  } catch (error) {
    return error.response.data
  }
}

export const verify = async(payload)=>{
  try {
    const response = await axiosInstance.post('/verifyUserOtpApi.php',payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}
