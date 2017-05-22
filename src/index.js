import "babel-polyfill"
import {Provider} from 'react-redux'
import {Router, useRouterHistory} from 'react-router'
import {createHashHistory} from 'history'
import configureStore from './store/configureStore'
import routes from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin'

const history = useRouterHistory(createHashHistory)()
const store = configureStore()

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
      <Router history={history} routes={routes}/>
  </Provider>, document.getElementById('root'))
