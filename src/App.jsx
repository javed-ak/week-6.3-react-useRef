import { useEffect, useRef, useState } from "react"

function App() {
  const [income, setIncome] = useState(1000)
  const changeRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      changeRef.current.innerHTML = Math.random();
      setIncome(Math.random())
    }, 5000)
  }, [income])

  return (
    <>
      Hello, Harkirat. Your Income is <span ref={changeRef}>{income}</span>
    </>
  )
}

export default App
