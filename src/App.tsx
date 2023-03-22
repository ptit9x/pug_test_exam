import { ThemeProvider } from "@mui/material";

import { Header } from "./components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <h1>app</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
