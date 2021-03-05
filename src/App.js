import logo from "./logo.svg";
import { RedocStandalone } from "redoc";
import "./App.css";
import swagger from "./swagger.json";

function App() {
  return (
    <div className="App">
      <RedocStandalone
        specUrl={swagger}
        options={{
          nativeScrollbars: true,
          theme: { colors: { primary: { main: "#dd5522" } } },
        }}
      />
    </div>
  );
}

export default App;
