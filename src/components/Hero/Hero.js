import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <leftSection>
      <SectionTitle main center>
        K J V I M A L K U M A R <br />
        Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        A young computer science engineering student aspiring to learn and self-learn about software research and devolepment. Documenting the entire process on my website.  
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Learn More</Button>
    </leftSection>
  </Section>
);

export default Hero;