import { createTheme, Divider, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/tiptap/styles.css";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { FindJobsPage } from "./Pages/FindJobsPage";
import { FindTalentsPage } from "./Pages/FindTalentsPage";
import { TalentProfilePage } from "./Pages/TalentProfilePage";
import { PostJobPage } from "./Pages/PostJobPage";
import { JobDescPage } from "./Pages/JobDescPage";
import { ApplyJobPage } from "./Pages/ApplyJobPage";
import { CompanyPage } from "./Pages/CompanyPage";

const App = () => {
  // Mantine Theme Color
  const theme = createTheme({
    focusRing: "never",
    fontFamily: "Poppins, sans-serif",
    primaryColor: "brightSun",
    primaryShade: 4,
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
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Header />

      <Divider size="xs" />

      <Routes>
        <Route path="/find-job" element={<FindJobsPage />} />
        <Route path="/find-talent" element={<FindTalentsPage />} />
        <Route path="/post-job" element={<PostJobPage />} />
        <Route path="/job-desc" element={<JobDescPage />} />
        <Route path="/apply-job" element={<ApplyJobPage />} />
        <Route path="/talent-profile" element={<TalentProfilePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />
    </MantineProvider>
  );
};

export default App;
