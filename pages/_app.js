import { Provider } from 'react-redux'
import 'react-notifications/lib/notifications.css'
import { store } from '../redux/configureStore'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default App
