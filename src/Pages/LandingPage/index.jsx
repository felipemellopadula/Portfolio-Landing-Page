import { Header } from "../../components/Header";
import { BannerSection } from "../../components/sections/BannerSection";
import { AboutMeSection } from "../../components/sections/AboutMeSection";
import { Footer } from "../../components/Footer";
import { TecnologySection } from "../../components/sections/TecnologySection";
import { ProjectsSection } from "../../components/sections/ProjectsSection";
import { DefaultTemplate } from "../../components/DefaultTemplate";

export const LandingPage = () => {
  return (
    <>
      <DefaultTemplate>
        <BannerSection />
        <AboutMeSection />
        <TecnologySection />
        <ProjectsSection />
      </DefaultTemplate>
    </>
  );
};
