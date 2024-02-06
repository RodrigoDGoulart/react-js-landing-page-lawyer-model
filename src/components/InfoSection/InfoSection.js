import React, { useEffect, useState } from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { Container, Button } from "../../globalStyles";

const InfoSection = ({ content, index }) => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <InfoSec
        bg={content.colors.background}
        bgImg={
          content.colors.background_img
            ? require(`../../images/${content.colors.background_img}`)
            : ""
        }
        id={content.id}
      >
        <Container>
          <InfoRow index={index}>
            <InfoColumn>
              <TextWrapper styleInt={content.style}>
                <TopLine color={content.colors.subtitle}>
                  {content.subtitle}
                </TopLine>
                <Heading color={content.colors.title}>{content.title}</Heading>
                <Subtitle color={content.colors.description}>
                  {content.description}
                </Subtitle>
                {content.btn.visible ? (
                  <a href={content.btn.url} target={content.btn.target || '_self'}>
                    <Button
                      big
                      fontBig
                      bg={content.btn.colors.background}
                      bgHover={content.btn.colors.background_hover}
                      fontColor={content.btn.colors.font}
                      fontColorHover={content.btn.colors.font_hover}
                    >
                      {content.btn.label}
                    </Button>
                  </a>
                ) : (
                  <></>
                )}
              </TextWrapper>
            </InfoColumn>
            {content.img.src && !(content.img.dissappear_on_mobile && widthScreen < 1200) ? (
              <InfoColumn>
                <ImgWrapper index={index}>
                  <Img
                    src={require(`../../images/${content.img.src}`)}
                    alt={content.img.alt}
                    size={content.img.width}
                  />
                </ImgWrapper>
              </InfoColumn>
            ) : (
              <></>
            )}
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
