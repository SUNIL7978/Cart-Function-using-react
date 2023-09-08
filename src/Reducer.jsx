import { CLEAR_CART, DECREASE, INCREASE, REMOVE_CART } from './action';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE_CART) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart); // first you have need to Map the state.cart details.
    const itemId = action.payload.id; // then get the item id.
    const item = newCart.get(itemId); //then get the item from newCart using get function.
    if (item.amount === 1) {
      // give the condition when the item of amount is equal to 1 then delete the item from new cart then return all state and and also return the newcart.
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }
    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }
  throw new Error(`No matching actin type:${action.type}`);
};

export default reducer;
