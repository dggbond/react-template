import * as React from 'react'
import { renderRoutes } from 'react-router-config'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

import routes from '~/routes'

import 'antd/dist/antd.css'
import './App.less'
import globalCtx from '~/context/global'

const App: React.FC<{}> = () => {
  const history = useHistory()
  const { user, setUser } = React.useContext(globalCtx)

  setTimeout(() => {
    setUser({
      id: 1,
      name: 'whatever',
    })
  }, 2000)

  if (!user) return <>'no User'</>

  return <>
    {renderRoutes(routes)}
    <div>
      <Button onClick={() => history.push('/pageA')}>to pageAAA</Button>
      <Button onClick={() => history.push('/pageB')}>to pageB</Button>
    </div>
  </>
}

export default App
