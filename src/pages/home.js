import { Scrollbars } from "react-custom-scrollbars"
import { css } from "emotion"

const Home = () => {
  return (
    <Scrollbars style={{ height: 200, width: 100 }}>
      <div className={ css`height: 500px; width: 100px;` }>
        home
      </div>
    </Scrollbars>
  )
}

export default Home
