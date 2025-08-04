import { useSelector } from 'react-redux'
import { CounterState } from './counterReducer'

export default function ContactPage() {
  const data = useSelector((state: CounterState) => state.data)

  return (
    <div></div>
  )
}