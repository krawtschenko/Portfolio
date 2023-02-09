import React from 'react';
import styled from "styled-components";
import {Container} from "../common/Container";
import {Row} from "../common/Row";
import {Title} from "../common/Title";
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, SiTypescript} from "react-icons/si";

const SkillsMain = styled.section`
  animation: slideContent 1s ease;

  @keyframes slideContent {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 100%;
      transform: translateX(0%);
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
`

const Item = styled.div`
  background: var(--bg-black-100);
  border: 1px solid var(--bg-black-50);
  border-radius: 10px;
  padding: 30px 15px;
  text-align: center;
  transition: all 0.5s ease;
  min-height: 100%;

  h4 {
    font-size: 18px;
    margin-bottom: 15px;
    color: var(--text-black-900);
    font-weight: 700;
    text-transform: capitalize;
  }

  p {
    font-size: 16px;
    color: var(--text-black-700);
    line-height: 25px;
    text-align: center;
  }

  &:hover {
    box-shadow: var(--radii);

    & > div {
      background: var(--skin-color);
    }

    svg {
      font-size: 35px;
      color: #ffffff;
    }
  }
`

const Icon = styled.div<ColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin: 0 auto 30px;
  transition: all 0.3s ease;

  svg {
    font-size: 50px;
    line-height: 60px;
    color: ${({color}) => color};
  }
`

export const Skills = () => {
    return (
        <SkillsMain>
            <Container style={{paddingBottom: '40px'}}>
                <Row>
                    <Title>
                        <h2>Skills</h2>
                    </Title>
                </Row>
                <Wrapper>
                    <Item>
                        <Icon color='#E53D20'>
                            <SiHtml5/>
                        </Icon>
                        <h4>HTML5</h4>
                        <p>
                            It is what creates the framework of your site,
                            and the 5th version will allow you to create a more
                            SEO-optimized structure of your product
                        </p>
                    </Item>
                    <Item>
                        <Icon color='#4353AD'>
                            <SiCss3/>
                        </Icon>
                        <h4>CSS3</h4>
                        <p>
                            This style language allows you to create absolutely any look for
                            your site or application. Everything is limited only by your
                            imagination
                        </p>
                    </Item>
                    <Item>
                        <Icon color='#F7DF1E'>
                            <SiJavascript/>
                        </Icon>
                        <h4>JavaScript</h4>
                        <p>
                            This programming language allows you to bring anything to life:
                            sliders, windows, tooltips, tabs, receiving data from the
                            server, and much more
                        </p>
                    </Item>
                    <Item>
                        <Icon color='#007acc'>
                            <SiTypescript/>
                        </Icon>
                        <h4>TypeScript</h4>
                        <p>
                            TypeScript is a syntactic superset of JavaScript which adds
                            static typing. This basically means that TypeScript adds syntax
                            on top of JavaScript
                        </p>
                    </Item>
                    <Item>
                        <Icon color='#53C1DE'>
                            <SiReact/>
                        </Icon>
                        <h4>React</h4>
                        <p>
                            This library used for building interactive user interfaces and web applications
                            quickly and efficiently with significantly less code than with vanilla
                            JavaScript
                        </p>
                    </Item>
                    <Item>
                        <Icon color='#764abc'>
                            <SiRedux/>
                        </Icon>
                        <h4>Redux</h4>
                        <p>
                            Redux is an open-source JavaScript library used to manage
                            application state. React uses this library for building the user
                            interface
                        </p>
                    </Item>
                </Wrapper>
            </Container>
        </SkillsMain>
    );
};

interface ColorProps {
    color: string
}