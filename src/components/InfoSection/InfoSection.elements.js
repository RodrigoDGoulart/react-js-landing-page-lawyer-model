import styled from "styled-components";
import config from "../../config.json";

const FLEX_STYLES = ["row", "row-reverse", "row"];

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ bg, bgImg }) => (bgImg ? `url(${bgImg})` : bg)};
  ${({ bgImg }) =>
    bgImg
      ? `
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `
      : ""}
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ index }) =>
    FLEX_STYLES[config.contents[index].style - 1]};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;

  align-items: center;
  flex-basis: 50%;

  @media (min-width: 480px) and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  ${({ styleInt }) =>
    styleInt === 3
      ? `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
  `
      : ""}

  @media (min-width: 480px) and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ index }) => (index === 3 ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.div`
  color: ${({ color }) => color};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  ${({ size }) =>
    size
      ? `
    width: ${size};
    height: auto;
  `
      : ""}
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ color }) => color};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ color }) => color};
`;
