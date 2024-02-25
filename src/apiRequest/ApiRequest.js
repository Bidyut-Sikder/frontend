import axios from "axios"
import { hideLoader, showLoader } from "../redux/state-slice/setting-slice"
import store from "../redux/store"
import { setAllProduct, setTotal } from "../redux/state-slice/product-slice"
import toast from "react-hot-toast"
import { setEmail } from "../utlity/utility"
import Cookies from "js-cookie"








export const getAllProductList = async (pageNo, perPage, searchKeyword) => {

    // const url = `http://localhost:5000/api/v1/ProductList/${pageNo}/${perPage}/${searchKeyword}`
    // const url = `http://localhost:5000/api/v1/ProductList/`
    const url = `/api/v1/ProductList/`

    store.dispatch(showLoader())

    await axios.get(url)

        .then((res) => {

            store.dispatch(hideLoader())

            // console.log(res.data['data'].length)

            if (res.status === 200) {

                if (res.data['data'].length > 0) {
                    store.dispatch(setTotal(res.data['data'].length))
                } else {
                    store.dispatch(setTotal([{ count: 0 }]))
                    toast.error("no data found!")
                }

                store.dispatch(setAllProduct(res.data['data']))

                /////////////////////////////
                // if (res.data['data'][0]['Total'].length > 0) {
                //     store.dispatch(setTotal(res.data['data'][0]['Total']))
                // } else {
                //     store.dispatch(setTotal([{ count: 0 }]))
                //     toast.error("no data found!")
                // }

                // store.dispatch(setAllProduct(res.data['data'][0]['Data']))

            }
        })
        .catch(() => {
            store.dispatch(hideLoader())
        })



}



export const getProductListByBrand = async (brandName) => {

    store.dispatch(showLoader())

    //   await axios.get(`http://localhost:5000/api/v1/ProductByBrand/${brandName}`)
    await axios.get(`/api/v1/ProductByBrand/${brandName}`)

        .then((res) => {
            store.dispatch(hideLoader())
            if (res.status === 200) {

                if (res.data['data'].length > 0) {
                    store.dispatch(setTotal(res.data['data'].length))
                } else {
                    store.dispatch(setTotal([{ count: 0 }]))
                    toast.error("no data found!")
                }
                store.dispatch(setAllProduct(res.data['data']))
            }
        })
        .catch(() => {
            store.dispatch(hideLoader())
        })
}




export const getProductListByCategory = async (categoryName) => {

    store.dispatch(showLoader())

    // await axios.get(`http://localhost:5000/api/v1/ProductByCategory/${categoryName}`)
    await axios.get(`/api/v1/ProductByCategory/${categoryName}`)

        .then((res) => {

            store.dispatch(hideLoader())

            console.log(res.data['data'].length)

            if (res.status === 200) {

                if (res.data['data'].length > 0) {
                    store.dispatch(setTotal(res.data['data'].length))
                } else {
                    store.dispatch(setTotal([{ count: 0 }]))
                    toast.error("no data found!")
                }

                store.dispatch(setAllProduct(res.data['data']))


            }
        })
        .catch(() => {
            store.dispatch(hideLoader())
        })

}



export const getProductListBySearch = async (ProductName) => {


    store.dispatch(showLoader())

    await axios.get(`/api/v1/ProductBySearch/${ProductName}`)

        .then((res) => {

            store.dispatch(hideLoader())

            // console.log(res.data['data'].length)

            if (res.status === 200) {

                if (res.data['data'].length > 0) {
                    store.dispatch(setTotal(res.data['data'].length))
                } else {
                    store.dispatch(setTotal(0))
                    toast.error("no data found!")
                }

                store.dispatch(setAllProduct(res.data['data']))


            }
        })
        .catch(() => {
            store.dispatch(hideLoader())
        })

}












////////////////
//User apis calling 
////////////////



export const signUpUser = async (reqBody) => {

    store.dispatch(showLoader())



    try {



        const res = await axios.post(`http://localhost:5000/api/v1/SignUp`, reqBody)

        store.dispatch(hideLoader())
        return res.data

    } catch (error) {
        return false
    }



}





//verify otp 
export const VerifyUserOtp = async (email, otp) => {

    store.dispatch(showLoader())



    try {

        const res = await axios.post(`/api/v1/VerifyOtp/${email}/${otp}`)


        store.dispatch(hideLoader())
        return res.data.status === 'success'

    } catch (error) {
        return false
    }




}



export const Logout = async () => {

    // store.dispatch(showLoader())

    try {

        const res = await axios.post(`/api/v1/Logout`)


        // store.dispatch(hideLoader())
        return res.data.status === 'success'

    } catch (error) {
        return false
    }

}

export const LoginRequest = async (email, password) => {

     store.dispatch(showLoader())

    try {
        setEmail(email)
        const res = await axios.post(`/api/v1/Login/${email}/${password}`)


         store.dispatch(hideLoader())
        return res.data.status === 'success'

    } catch (error) {
        return false
    }

}





export const readUserProfile = async () => {

    // store.dispatch(showLoader())

    try {

        const res = await axios.get(`/api/v1/ReadUser`)

        // store.dispatch(hideLoader())
        if (res.data.status === 'success') {
            return res.data.data[0]

        }


    } catch (error) {
        return false
    }

}

export const UpdateUserProfile = async (reqBody) => {

    // store.dispatch(showLoader())

    try {

        const res = await axios.post(`/api/v1/UpdateUser`, reqBody)

        // store.dispatch(hideLoader())

        if (res.data.status === 'success') return true
        return false



    } catch (error) {
        return false
    }

}







export const createProduct = async (reqBody) => {

    // store.dispatch(showLoader())

    try {

        const res = await axios.post(`/api/v1/CreateProduct`, reqBody)

        // store.dispatch(hideLoader())

        if (res.data.status === 'success') return true
        return false



    } catch (error) {
        return false
    }

}




export const getProductByID = async (id) => {

    // store.dispatch(showLoader())

    try {

        const res = await axios.get(`/api/v1/ProductDetails/${id}`,)

        // store.dispatch(hideLoader())

        if (res.data.status === 'success') return res.data.data
        return false



    } catch (error) {
        return false
    }

}



export const updateProductByID = async (id, reqBody) => {

    // store.dispatch(showLoader())

    try {

        const res = await axios.post(`/api/v1/ProductUpdate/${id}`, reqBody)

        // store.dispatch(hideLoader())

        if (res.data.status === 'success') return true
        return false



    } catch (error) {
        return false
    }

}

export const deleteProductByID = async (id) => {

    // store.dispatch(showLoader())

    try {

        const res = await axios.post(`/api/v1/ProductDelete/${id}`)

        // store.dispatch(hideLoader())

        if (res.data.status === 'success') {

            return true
        }
        return false



    } catch (error) {
        return false
    }

}














































