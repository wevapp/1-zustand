import { useStore } from '../store/useStore'

const Count = () => {

    const { count, increment } = useStore();

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Count