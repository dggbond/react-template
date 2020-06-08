// third party modules
import Axios from "axios"
import ReactDOM from "react-dom"
import App from "app"

// self modules
import * as util from "util"
import displayError from "error"

// css
import "normalize.css"
import "global.css"

window.axios = Axios
window._displayError = displayError
window._util = util
window._global = {
  isWechatBrowser: /micromessenger/i.test(window.navigator.userAgent),
}

ReactDOM.render(<App name="app" />, $("#root"))
