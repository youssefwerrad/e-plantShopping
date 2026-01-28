import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log('addItem action payload:', action.payload);
      
      // Validate payload
      if (!action.payload || !action.payload.name) {
        console.error('Invalid payload for addItem:', action.payload);
        return;
      }

      const { name, image, cost } = action.payload;
      
      // Check if the item already exists in the cart by comparing names
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        // If item already exists in the cart, increase its quantity
        existingItem.quantity++;
        console.log(`Increased quantity for ${name} to ${existingItem.quantity}`);
      } else {
        // If item does not exist, add it to the cart with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
        console.log(`Added new item ${name} to cart`);
      }
    },
    
    removeItem: (state, action) => {
      console.log('removeItem action payload:', action.payload);
      
      // Remove item from cart based on its name
      const itemName = action.payload;
      state.items = state.items.filter(item => item.name !== itemName);
      console.log(`Removed ${itemName} from cart`);
    },
    
    updateQuantity: (state, action) => {
      console.log('updateQuantity action payload:', action.payload);
      
      const { name, quantity } = action.payload;
      
      // Find the item in the cart that matches the given name
      const itemToUpdate = state.items.find(item => item.name === name);
      
      if (itemToUpdate) {
        // If the item is found, update its quantity to the new value
        itemToUpdate.quantity = quantity;
        console.log(`Updated quantity for ${name} to ${quantity}`);
      } else {
        console.warn(`Item ${name} not found in cart`);
      }
    }
  }
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export reducer as default
export default cartSlice.reducer;