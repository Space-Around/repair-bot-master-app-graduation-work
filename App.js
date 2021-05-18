import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import NavigationBottom from "./src/navigation/NavigationBottom";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationBottom />
    </Provider>
  );
};

export default App;