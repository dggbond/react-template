import styled from "styled-components"
import { useState, useEffect } from "react"

export const Button = styled.button`
  color: blue;
  font-size: 20px;
  padding: 4px 8px;

`

export const Title = styled.h2`
  color: purple;
`

export const Clock = () => {
  const [date, setDate] = useState(new Date())

  const timer = setInterval(() => {
    setDate(new Date())
  }, 1000)

  useEffect(() => {
    document.title = date.toString()
    return () => {
      clearInterval(timer)
    }
  })

  return (
    <Title>
      { date.toString() }
    </Title>
  )
}
