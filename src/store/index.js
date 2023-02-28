import { configureStore } from '@reduxjs/toolkit'
import digitsCounter from './features/digitsCounter'

export default configureStore({
  reducer: {
    digitsCounter
  },
})