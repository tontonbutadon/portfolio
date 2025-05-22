import HeroSection from '@/components/sections/HeroSection';
import SkillSection from '@/components/sections/SkillSection';

export default function Home() {
  return (
    <div className="w-full">
      トップページ
      <HeroSection></HeroSection>
      <SkillSection></SkillSection>
    </div>
  );
}
