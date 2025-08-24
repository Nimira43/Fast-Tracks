import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../../features/contact/counterReducer'

// import { legacy_createStore } from '@reduxjs/toolkit'
// import counterReducer from '../../features/contact/counterReducer'

// export function configureTheStore() {
//   return legacy_createStore(counterReducer)
// }

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})