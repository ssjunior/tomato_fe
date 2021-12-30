import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";

import { Routes } from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
