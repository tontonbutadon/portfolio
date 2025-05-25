import HeroSection from '@/components/sections/HeroSection';
import SkillSection from '@/components/sections/SkillSection';
import AboutSection from '@/components/sections/AboutSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';

export default function Home() {
  return (
    <div className="w-full">
      トップページ
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillSection></SkillSection>
      <PortfolioSection></PortfolioSection>
    </div>
  );
}
