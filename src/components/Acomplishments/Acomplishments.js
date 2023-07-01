import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Flick - Image processing based nutrient app' },
  { number: 2, text: 'Mern stack web dev ', },
  { number: 3, text: 'React native app dev', },
  { number: 4, text: 'AI/ML projects(TBD)', }
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
