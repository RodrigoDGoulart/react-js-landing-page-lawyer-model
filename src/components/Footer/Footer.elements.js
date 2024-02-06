import styled from "styled-components";

import config from "../../config.json";

export const FooterContainer = styled.div`
  background-color: ${config.footer.colors.background};
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: ${config.footer.colors.font};
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid ${config.footer.email_submit.input.colors.border};
  background-color: ${config.footer.email_submit.input.colors.background};
  color: ${config.footer.email_submit.input.colors.font};

  &::placeholder {
    color: ${config.footer.email_submit.input.colors.placeholder};
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: ${config.footer.colors.font};
  width: 200px;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin: auto;
  margin-bottom: 16px;
  text-align: center;
`;

export const FooterLink = styled('a')`
  color: ${config.footer.colors.font};
  text-decoration: none;
  margin: auto;
  margin-bottom: 0.5rem;
  transition: 0.3s ease-out;
  text-align: center;
  &:hover {
    ${({href}) => href ? `
      color: ${config.footer.colors.font_hover}; 
    ` : `
      cursor: default;
    `}
  }
`
;
export const FooterNoLink = styled('span')`
  color: ${config.footer.colors.font};
  text-decoration: none;
  margin: auto;
  margin-bottom: 0.5rem;
  transition: 0.3s ease-out;
  text-align: center;
  &:hover {
    ${({href}) => href ? `
      color: ${config.footer.colors.font_hover}; 
    ` : `
      cursor: default;
    `}
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: ${config.footer.socialMedia.facebook ||
  config.footer.socialMedia.instagram ||
  config.footer.socialMedia.linkedin ||
  config.footer.socialMedia.x ||
  config.footer.socialMedia.youtube
    ? "space-between"
    : "center"};
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled('a')`
  color: ${config.footer.colors.font};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled("img")`
  margin-right: 10px;
  height: 42px;
`;

export const WebsiteRights = styled.small`
  color: ${config.footer.colors.font};
  margin-top: 24px;
  margin-bottom: 6px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: "space-between";
  align-items: center;
  gap: 12px;
`;

export const SocialIconLink = styled.a`
  color: ${config.footer.colors.font};
  font-size: 24px;

  &:hover {
    color: ${config.footer.colors.font_hover};
    transition: 0.3s ease-out;
  }
`;
