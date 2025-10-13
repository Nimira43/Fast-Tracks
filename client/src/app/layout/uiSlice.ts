import { createSlice } from '@reduxjs/toolkit'

const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkMode')
  return storedDarkMode ? JSON.parse(storedDarkMode) : true
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true
    },
    stopLoading: (state) => {
      state.isLoading = false
    }
  }
})

export const { startLoading, stopLoading } = uiSlice.actions