import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = count
  }, [count])
  
  return (
    <div className="App">
      <button onClick={() => setCount((count) + 1 )}>
      count is {count}
      </button>

    </div>
  )
}

export default App
