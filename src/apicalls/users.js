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
export const allProfessionalData = async()=>{
  try {
    const response = await axiosInstance.get('/allProfessionalData')
    return response.data

  } catch (error) {
    return error.response.data
  }
}
export const allReviewsData = async(id)=>{
  try {
    const url = '/reviews/'+id.toString();
    const response = await axiosInstance.get(url)
    return response.data

  } catch (error) {
    return error.response.data
  }
}
export const professionalData = async(id)=>{
  try {
    const url = '/getProfessional/'+id.toString();
    const response = await axiosInstance.get(url)
    return response.data

  } catch (error) {
    return error.response.data
  }
}
export const appointmentsData = async(payload)=>{
  try {
    const response = await axiosInstance.post('/appointmentsData',payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}

export const appointmentsDataUpdate = async(id, payload)=>{
  try {
    const url = '/appointmentsData/'+id.toString();
    const response = await axiosInstance.put(url, payload)
    return response.data

  } catch (error) {
    return error.response.data
  }
}
