import { Provider } from "react-redux"
import MyRoutes from "./MyRoutes"
import { PersistGate } from 'redux-persist/integration/react'
import { myPersistor, myStore } from "./Redux/store"

function App() {

  return (
    <>
      <Provider store={myStore}>
        <PersistGate persistor={myPersistor}>
          <MyRoutes />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
