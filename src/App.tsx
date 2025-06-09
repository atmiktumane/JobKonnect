import { MantineProvider, Slider } from "@mantine/core";
import "@mantine/core/styles.css";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  );
};

export default App;
