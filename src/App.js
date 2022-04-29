import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
import Main from "./pages/Main/Main";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
