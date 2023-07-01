import React from 'react';
import { DiCoda, DiCode, DiFirebase, DiMongodb, DiNodejs, DiReact, DiSqllite, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Software</SectionTitle>
    <SectionText>
      I have been working on Python and C++ programming languages mainly and started my web dev using React.js and moved upon to study more on Full-stack development and after a while started to work on mobile app dev using react native and android studio(java). Now having a glance over machine learning concepts using tensorflow.
      <br />
      Softwares used in my projects will be listed and the tech's which am using and planing to use will all be updated ;)
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js<br />HTML<br />CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>General Coding</ListTitle>
          <ListParagraph>
            C++<br />C<br />Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            SQL<br />Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
