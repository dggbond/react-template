import { useState, useEffect, useRef } from "react"
import { Button, Clock } from "comp/base"

const Me = (props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("effect count")
    if(count > 10) {
      setShowClock(false)
    }
  }, [count])

  const [showClock, setShowClock] = useState(true)

  return (
    <div>
      <div>Me: { count }</div>
      <Button onClick={ () => setCount(count + 1) }>
        click
      </Button>
      { showClock && <Clock /> }
    </div>
  )
}

export default Me
