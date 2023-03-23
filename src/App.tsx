import { ThemeProvider } from "@mui/material";

import { Header, Form } from "./components";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;
