import React, { FC } from 'react';
import BenefitsSection from '../../containers/BenefitsSection/BenefitsSection';
import ServicesSection from '../../containers/ServicesSection/ServicesSection';
import StepOneSection from '../../containers/StepOneSection/StepOneSection';
import WelcomeSection from '../../containers/WelcomeSection/WelcomeSection';

const MainPage: FC = () => {
  return (
    <main>
      <WelcomeSection />
      <BenefitsSection />
      <ServicesSection />
      <StepOneSection />
    </main>
  );
};

export default MainPage;
