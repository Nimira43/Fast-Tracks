import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../../features/contact/counterReducer'
import { UseDispatch } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

export type useAppDispatch = useDispatch.withTypes<AppDispatch>
export type useAppSelector = useSelector.withTypes<RootState>