import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Accomplistments Tracker App' },
  { number: 2, text: 'Social media platform App ', },
  { number: 3, text: 'Unity game devolepment', },
  { number: 4, text: 'AI devolepment using python', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Future Projects</SectionTitle>
    <SectionText>Projects that I am working on ;)</SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
