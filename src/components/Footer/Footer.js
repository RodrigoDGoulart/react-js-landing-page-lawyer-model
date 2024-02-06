import React, { useState } from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";

import config from "../../config.json";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  return (
    <FooterContainer>
      {config.footer.email_submit.visible ? (
        <FooterSubscription>
          <FooterSubHeading>
            {config.footer.email_submit.title}
          </FooterSubHeading>
          <FooterSubText>{config.footer.email_submit.subtitle}</FooterSubText>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <FormInput
              name="email"
              type="email"
              placeholder={config.footer.email_submit.input.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              fontBig
              bg={config.footer.email_submit.input.btn.colors.background}
              bgHover={
                config.footer.email_submit.input.btn.colors.background_hover
              }
              fontColor={config.footer.email_submit.input.btn.colors.font}
              fontColorHover={
                config.footer.email_submit.input.btn.colors.font_hover
              }
            >
              {config.footer.email_submit.input.btn.label}
            </Button>
          </Form>
        </FooterSubscription>
      ) : (
        <></>
      )}
      <FooterLinksContainer>
        <FooterLinksWrapper>
          {config.footer.contents.map((content) => (
            <>
              <FooterLinkItems>
                <FooterLinkTitle>{content.title}</FooterLinkTitle>
                {content.links.map((link) => (
                  <FooterLink href={link.link} target="_blank">{link.label}</FooterLink>
                ))}
              </FooterLinkItems>
            </>
          ))}
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to={config.footer.logo.url}>
            <SocialIcon
              src={require(`../../images/${config.footer.logo.img}`)}
            />
            {config.footer.logo.label}
          </SocialLogo>
          <SocialIcons>
            {config.footer.socialMedia.facebook ? (
              <SocialIconLink
                href={config.footer.socialMedia.facebook}
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
            ) : (
              <></>
            )}
            {config.footer.socialMedia.instagram ? (
              <SocialIconLink
                href={config.footer.socialMedia.instagram}
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            ) : (
              <></>
            )}
            {config.footer.socialMedia.youtube ? (
              <SocialIconLink
                href={config.footer.socialMedia.youtube}
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
            ) : (
              <></>
            )}
            {config.footer.socialMedia.x ? (
              <SocialIconLink
                href={config.footer.socialMedia.x}
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            ) : (
              <></>
            )}
            {config.footer.socialMedia.x ? (
              <SocialIconLink
                href={config.footer.socialMedia.linkedin}
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            ) : (
              <></>
            )}
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
      <WebsiteRights>{config.footer.footer_text}</WebsiteRights>
    </FooterContainer>
  );
}

export default Footer;
