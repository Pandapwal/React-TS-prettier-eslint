import React from 'react'
import GenerativeArtsRouter from './routers/GenerativeArtsRouter'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
    return (
        <Provider store={store}>
            <GenerativeArtsRouter />
        </Provider>
    )
}

export default App
