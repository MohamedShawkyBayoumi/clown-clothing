import { addItemToCart, increaseOrDecreaseItem } from "../../utils/cart";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "TOGGLE_CART_HIDDEN":
            return {
                ...state,
                hidden: !state.hidden
            }
        case "ADD_ITEM":
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case "INCREASE_OR_DECREASE_ITEM":
            return {
                ...state,
                cartItems: increaseOrDecreaseItem(state.cartItems, action.payload)
            }
        case "CLEAR_ITEM_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id != action.payload.id)
            }
        case "CLEAR_CART":
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}

export default cartReducer;