import axios from 'axios'

export const getAllProducts = () => async (dispatch) => {
    try {
      dispatch({
        type: "getAllProductsRequest"
      })
      const { data } = await axios.get("/api/getAllProducts")
      dispatch({
        type: "getAllProductsSuccess",
        payload: data.products
      })
    } catch (error) {
      dispatch({
        type: "getAllProductsFailure",
        payload: error.response.data.message
      })
    }
  }

export const getProduct=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"getProductRequest"
        })
    
        const {data}=await axios.get(`/api/product/${id}`)
        
        dispatch({
            type:"getProductSuccess",
            payload:data.product,
        })
        
    } catch (error) {
        dispatch({
            type: "getProductFailure",
            payload: error.response.data.message
          })
    }
}
  