import { createTheme, Divider, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

import HomePage from "./Pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { FindJobsPage } from "./Pages/FindJobsPage";
import { FindTalentsPage } from "./Pages/FindTalentsPage";
import { TalentProfilePage } from "./Pages/TalentProfilePage";
import { PostJobPage } from "./Pages/PostJobPage";
import { JobDescPage } from "./Pages/JobDescPage";
import { ApplyJobPage } from "./Pages/ApplyJobPage";
import { CompanyPage } from "./Pages/CompanyPage";
import { PostedJobPage } from "./Pages/PostedJobPage";
import { JobHistoryPage } from "./Pages/JobHistoryPage";
import { SignupPage } from "./Pages/SignupPage";
import { LoginPage } from "./Pages/LoginPage";
import { ProfilePage } from "./Pages/ProfilePage";
import { Notifications } from "@mantine/notifications";
import { useSelector } from "react-redux";

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

  // Redux hook : to get value of user state for conditional auth routing
  const user = useSelector((state: any) => state.user);

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Notifications position="top-center" zIndex={10000} />
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
        <Route path="/posted-job" element={<PostedJobPage />} />
        <Route path="/job-history" element={<JobHistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignupPage />} // If User info is present, then Don't go to Signup Page
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />} // If User info is present, then Don't go to Login Page
        />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <div className="py-8 bg-mine-shaft-950">
        <Divider size="xs" />
      </div>

      <Footer />
    </MantineProvider>
  );
};

export default App;
