import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { FindJobsPage } from "./Pages/FindJobsPage";
import { FindTalentsPage } from "./Pages/FindTalentsPage";
import { TalentProfilePage } from "./Pages/TalentProfilePage";

const App = () => {
  // Mantine Theme Color
  const theme = createTheme({
    colors: {
      brightSun: [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
        "#461902",
      ],

      mineShaft: [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
    },
    fontFamily: "poppins, sans-serif",
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Header />

      <Routes>
        <Route path="/find-job" element={<FindJobsPage />} />
        <Route path="/find-talent" element={<FindTalentsPage />} />
        <Route path="/talent-profile" element={<TalentProfilePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />
    </MantineProvider>
  );
};

export default App;
