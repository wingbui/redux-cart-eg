import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from './actions';

const reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case DECREASE:
      let tempCart = state.cart.map((cartItem) => {
        if (action.payload.id === cartItem.id) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
      return { state, cart: tempCart };

    case INCREASE:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (action.payload.id === cartItem.id) {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          return cartItem;
        }),
      };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
      };
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotals, cartItem) => {
          const { price, amount } = cartItem;
          const totalPrice = amount * price;
          cartTotals.total += totalPrice;
          cartTotals.amount += amount;
          return cartTotals;
        },
        {
          amount: 0,
          total: 0,
        }
      );

      console.log(total);
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        amount,
        total,
      };

    default:
      return state;
  }
};

export default reducer;
