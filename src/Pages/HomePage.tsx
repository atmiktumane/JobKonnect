import Companies from "../Components/LandingPage/Companies";
import DreamJob from "../Components/LandingPage/DreamJob";
import JobCategories from "../Components/LandingPage/JobCategories";
import { Subscribe } from "../Components/LandingPage/Subscribe";
import { Testimonial } from "../Components/LandingPage/Testimonial";
import Working from "../Components/LandingPage/Working";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <DreamJob />
      <Companies />
      <JobCategories />
      <Working />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default HomePage;
