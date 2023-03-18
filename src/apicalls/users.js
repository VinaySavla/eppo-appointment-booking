import { axiosInstance } from ".";

export const userLogin = async(payload)=>{
  try {
    const response = await axiosInstance.post('/userLogin',payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}
export const professionalLogin = async(payload)=>{
  try {
    const response = await axiosInstance.post('/professionalLogin',payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}

export const register = async(payload)=>{
  try {
    const response = await axiosInstance.post('/sendOtp',payload)
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
    const response = await axiosInstance.post('/verifyUserOtp',payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}

export const verifyProfessional = async(payload)=>{
  try {
    const response = await axiosInstance.post('/verifyProfessionalOtp',payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}
