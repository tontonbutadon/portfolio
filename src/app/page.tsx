import { HeaderSection } from '@/components/sections/HeaderSection';
import SkillSection from '@/components/sections/SkillSection';
import AboutSection from '@/components/sections/AboutSection';
import { HistorySection } from '@/components/sections/HistorySection';
import { TopPortfolioSection } from '@/components/sections/TopPortfolioSection';

export default function Home() {
  return (
    <div className="w-full">
      {/* <HeaderSection></HeaderSection> */}
      <AboutSection></AboutSection>
      <SkillSection></SkillSection>
      <TopPortfolioSection></TopPortfolioSection>
      <HistorySection></HistorySection>
    </div>
  );
}
