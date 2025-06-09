import { MantineProvider, Slider } from "@mantine/core";
import "@mantine/core/styles.css";

const App = () => {
  return (
    <MantineProvider>
      <h1 className="text-3xl font-bold text-red-300">Hello world</h1>

      <Slider
        color="violet"
        defaultValue={40}
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </MantineProvider>
  );
};

export default App;
