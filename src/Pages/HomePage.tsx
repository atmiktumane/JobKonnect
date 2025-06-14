import Header from "../Components/Header/Header";
import Companies from "../Components/LandingPage/Companies";
import DreamJob from "../Components/LandingPage/DreamJob";
import JobCategories from "../Components/LandingPage/JobCategories";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Header />
      <DreamJob />
      <Companies />
      <JobCategories />
    </div>
  );
};

export default HomePage;
