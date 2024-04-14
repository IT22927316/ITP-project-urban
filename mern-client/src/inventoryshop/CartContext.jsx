import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  items: [],
};

// Define reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    // case 'ADD_TO_CART':
    //   const newItem = { ...action.payload, id: state.items.length + 1 }; // Assign a unique id
    //   return {
    //     ...state,
    //     items: [...state.items, newItem],
    //   };
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return {
          ...state,
          items: updatedItems,
        };
      } else {
        const newItem = { ...action.payload, id: state.items.length + 1 };
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }
      case 'UPDATE_QUANTITY':
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Create provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
