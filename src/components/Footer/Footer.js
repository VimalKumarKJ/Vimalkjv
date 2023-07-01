import React from 'react';
import { AiFillContacts, AiFillDribbbleSquare, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillQuestionCircle, AiFillRedditCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href ="mailto:vimalkaruna29@gmail.com">vimalkaruna29@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Connect</LinkTitle>
          <LinkItem href ="https://discord.gg/zQ7nj2sW">DISCORD</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Stay Connected</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://www.quora.com/profile/KRAZE-TUBER">
        <AiFillQuestionCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/karuna-vimal-4bba611b6/">
        <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.reddit.com">
        <AiFillRedditCircle size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
