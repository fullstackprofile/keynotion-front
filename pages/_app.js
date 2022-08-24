import '../styles/globals.css'
import store from '../store/store'
import { Provider } from 'react-redux'
import InitialComponent from '../components/InitialComponent'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <InitialComponent />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
