import React, { FC } from 'react';
import BenefitsSection from '../../containers/BenefitsSection/BenefitsSection';
import WelcomeSection from '../../containers/WelcomeSection/WelcomeSection';

const MainPage: FC = () => {
  return (
    <main>
      <WelcomeSection />
      {<BenefitsSection />}
    </main>
  );
};

export default MainPage;
