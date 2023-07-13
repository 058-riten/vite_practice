
const initialData = {
    cart_items: []
}

const cartReducer = (state = initialData, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            // Swal.fire({
            //     title: "Congrats",
            //     text: "Your item has been added to cart.",
            //     icon: "success",
            //     timer: 3000,
            //     showCloseButton: false,
            //     showConfirmButton: false
            //     position: "top-end"
            // })

            return {cart_items: [...state.cart_items, action.payload]}
        
        case "REMOVE_ITEM":
            return {
                cart_items: state.cart_items.filter(item=>item.cart_id != action.payload)
            }

        case "UPDATE_ITEM":
            let updatedItem = action.payload
            return{
                cart_items: state.cart_items.map(item => item.cart_id == updatedItem.cart_id ? updatedItem : item)
            }

        default:
            return state
    }
}

export default cartReducer