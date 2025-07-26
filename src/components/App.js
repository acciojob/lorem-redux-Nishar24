
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <Provider store={store}>
      <div className="App">
        <h1>Lorem Redux</h1>
        <LoremIpsum />
      </div>
    </Provider>
    </div>
  )
}

export default App
