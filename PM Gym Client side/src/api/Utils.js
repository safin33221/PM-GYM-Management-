import axios from "axios"

export const imageUpload = async imgdata => {
    console.log(imgdata);
    const formData = new FormData()
    formData.append('image', imgdata)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api}`, formData)
    return data.data.url
}