import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";

// import { crud } from "./tomato/crud";
import { Routes } from "./routes";

const loader = ({ response, getState }) => {
  console.log(getState());
  return response.forms;
};

const App = () => {
  // crud.getOne({
  //   slice: "task",
  //   url: "https://pokeapi.co/api/v2/pokemon",
  //   id: "bulbasaur",
  //   loader,
  // });

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
