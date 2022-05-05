import React, { FC } from 'react';
import BenefitsSection from '../../containers/BenefitsSection/BenefitsSection';
import ServicesSection from '../../containers/ServicesSection/ServicesSection';
import WelcomeSection from '../../containers/WelcomeSection/WelcomeSection';

const MainPage: FC = () => {
  return (
    <main>
      <WelcomeSection />
      <BenefitsSection />
      <ServicesSection />
    </main>
  );
};

export default MainPage;
