import { useState } from 'react'
import PublicRoutes from './Routes/publicRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PublicRoutes/>
    </>
  )
}

export default App
