import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
}
