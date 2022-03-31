import * as React from 'react'
import globalCtx from '~/context/global'

export default () => {
  const { theme, setTheme } = React.useContext(globalCtx)

  return <div>
    Theme: {theme}
    pageAFFF
    <br />
    <button onClick={() => setTheme('dark')}>set dark theme</button>
  </div>
}
