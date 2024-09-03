import AccessSection from '@/app/components/sections/AccessSection';
import BenefitsSection from '@/app/components/sections/BenefitsSection';
import ChooseNameSection from '@/app/components/sections/ChooseNameSection';

export default function Home() {
  return (
    <main>
      <AccessSection />
      <BenefitsSection />
      <ChooseNameSection />
    </main>
  );
}
