// app/portfolios/page.tsx
import { HeaderSection } from '@/components/sections/HeaderSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';

export default function Portfolio() {
  return (
    <div className="h-screen w-full">
      <HeaderSection />
      <PortfolioSection />
    </div>
  );
}
