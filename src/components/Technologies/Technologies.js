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
      I have been practicing my software skills over several languages. Recently I have been working on full stack devolepment projects mainly using the MERN stack.
      <br />
      Softwares used in my projects will be listed and the tech's which am using and planing to use will all be updated ;)
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="3rem" />
        <ListContainer>
          <ListTitle>General Coding</ListTitle>
          <ListParagraph>
            C++<br />C<br />Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            SQL<br />MongoDB<br />Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
