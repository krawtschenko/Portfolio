import React from 'react';
import styled from "styled-components";
import {Container} from "../common/Container";
import {Button} from "../common/Button";
import {FaCalendar} from "react-icons/fa";
import {Row} from "../common/Row"
import {Title} from "../common/Title";

const AboutMain = styled.section`
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

const Content = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 15px 0 15px;
`

const Text = styled.div`
  padding: 0 15px 0 15px;
  flex: 0 0 100%;
  max-width: 100%;

  h3 {
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
    color: var(--text-black-900);

    span {
      color: var(--skin-color);
    }
  }

  p {
    font-size: 16px;
    line-height: 25px;
    color: var(--text-black-700);
  }
`

const Info = styled.div`
  padding: 0 15px 0 15px;
  margin-top: 40px;
  flex: 0 0 100%;
  max-width: 100%;
`

const InfoItem = styled.div`
  padding: 0 15px 0 15px;
  flex: 0 0 50%;
  max-width: 50%;

  @media (max-width: 595px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  p {
    font-weight: 600;
    padding: 10px 0;
    font-size: 16px;
    color: var(--text-black-900);
    border-bottom: 1px solid var(--bg-black-50);

    @media (max-width: 1199px) {
      display: block;
      margin-left: 0;
    }

    span {
      font-weight: 300;
      color: var(--text-black-700);
      margin-left: 4px;
      display: inline-block;

      @media (max-width: 1429px) {
        display: block;
        margin-left: 0;
      }

      @media (max-width: 1199px) {
        display: block;
        margin-left: 0;
      }
    }
  }
`

const Buttons = styled.div`
  padding: 0 15px 0 15px;
  margin-top: 30px;

  a {
    margin-top: 10px;
  }
`

const Education = styled.div`
  padding: 0 15px 0 15px;
  flex: 0 0 50%;
  max-width: 50%;
  margin-top: 30px;

  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: 700;
    color: var(--text-black-900);
  }
`

const Experience = styled(Education)``

const Box = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 15px 0 15px;
`

const Timeline = styled.div`
  background: var(--bg-black-100);
  padding: 30px 15px;
  border: 1px solid var(--bg-black-50);
  border-radius: 10px;
  width: 100%;
  position: relative;
  box-shadow: var(--radii);
`

const TimelineItem = styled.div`
  position: relative;
  padding-left: 37px;
  padding-bottom: 50px;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    width: 1px;
    position: absolute;
    height: 100%;
    left: 7px;
    top: 0;
    background: var(--skin-color);
  }

  h3 {
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 12px;
    color: var(--text-black-700);

    svg {
      margin-right: 5px;
    }
  }

  h4 {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 15px;
    text-transform: capitalize;
    color: var(--text-black-900);
  }

  p {
    line-height: 25px;
    font-size: 16px;
    text-align: justify;
    color: var(--text-black-700);
  }
`

const CircleDot = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: var(--skin-color);
`

export const About = () => {
    return (
        <AboutMain>
            <Container>
                <Row>
                    <Title>
                        <h2>About Me</h2>
                    </Title>
                </Row>
                <Row>
                    <Content>
                        <Row>
                            <Text>
                                <h3>I'm Yevhenii Kravchenko <br/><span>A Web Developer</span></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa excepturi illo in,
                                    minus nostrum quisquam vero! Aliquid animi architecto, culpa cumque dolor dolore
                                    ducimus eaque esse expedita facilis hic impedit ipsa magnam modi nihil pariatur
                                    placeat praesentium, quia recusandae suscipit voluptatem, voluptates voluptatibus.
                                    Ab aspernatur atque eveniet facere iusto nisi quis quisquam sed veritatis
                                    voluptas!
                                </p>
                            </Text>
                        </Row>
                        <Row>
                            <Info><Row>
                                <InfoItem>
                                    <p>Birthday: <span>1 aug 1995</span></p>
                                </InfoItem>
                                <InfoItem>
                                    <p>Age: <span>27</span></p>
                                </InfoItem>
                                <InfoItem>
                                    <p>Website: <span>www.test.com</span></p>
                                </InfoItem>
                                <InfoItem>
                                    <p>Email: <span>eugenykravchenko@gmail.com</span></p>
                                </InfoItem>
                                <InfoItem>
                                    <p>Phone: <span>+48 792 665 039</span></p>
                                </InfoItem>
                                <InfoItem>
                                    <p>City: <span>Poznań</span></p>
                                </InfoItem>
                            </Row>
                                <Row>
                                    <Buttons>
                                        <Button to="/contact">Hire Me</Button>
                                    </Buttons>
                                </Row></Info>
                        </Row>
                        <Row>
                            <Education>
                                <h3>Education</h3>
                                <Row>
                                    <Box>
                                        <Timeline>
                                            <TimelineItem>
                                                <CircleDot></CircleDot>
                                                <h3>
                                                    <FaCalendar/>2013-2017
                                                </h3>
                                                <h4>Information Technology</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut ea
                                                    est et expedita, laborum nobis reprehenderit sequi, sint tempora,
                                                    ullam ut voluptatem! Aperiam consequuntur culpa deleniti dolore
                                                    exercitationem quo.
                                                </p>
                                            </TimelineItem>

                                            <TimelineItem>
                                                <CircleDot></CircleDot>
                                                <h3>
                                                    <FaCalendar/>2013-2017
                                                </h3>
                                                <h4>Information Technology</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut ea
                                                    est et expedita, laborum nobis reprehenderit sequi, sint tempora,
                                                    ullam ut voluptatem! Aperiam consequuntur culpa deleniti dolore
                                                    exercitationem quo.
                                                </p>
                                            </TimelineItem>

                                            <TimelineItem>
                                                <CircleDot></CircleDot>
                                                <h3>
                                                    <FaCalendar/>2013-2017
                                                </h3>
                                                <h4>Information Technology</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut ea
                                                    est et expedita, laborum nobis reprehenderit sequi, sint tempora,
                                                    ullam ut voluptatem! Aperiam consequuntur culpa deleniti dolore
                                                    exercitationem quo.
                                                </p>
                                            </TimelineItem>
                                        </Timeline>
                                    </Box>
                                </Row>
                            </Education>
                            <Experience>
                                <h3>Experience</h3>
                                <Row>
                                    <Box>
                                        <Timeline>
                                            <TimelineItem>
                                                <CircleDot></CircleDot>
                                                <h3>
                                                    <FaCalendar/>2013-2017
                                                </h3>
                                                <h4>Information Technology</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut ea
                                                    est et expedita, laborum nobis reprehenderit sequi, sint tempora,
                                                    ullam ut voluptatem! Aperiam consequuntur culpa deleniti dolore
                                                    exercitationem quo.
                                                </p>
                                            </TimelineItem>

                                            <TimelineItem>
                                                <CircleDot></CircleDot>
                                                <h3>
                                                    <FaCalendar/>2013-2017
                                                </h3>
                                                <h4>Information Technology</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut ea
                                                    est et expedita, laborum nobis reprehenderit sequi, sint tempora,
                                                    ullam ut voluptatem! Aperiam consequuntur culpa deleniti dolore
                                                    exercitationem quo.
                                                </p>
                                            </TimelineItem>

                                            <TimelineItem>
                                                <CircleDot></CircleDot>
                                                <h3>
                                                    <FaCalendar/>2013-2017
                                                </h3>
                                                <h4>Information Technology</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut ea
                                                    est et expedita, laborum nobis reprehenderit sequi, sint tempora,
                                                    ullam ut voluptatem! Aperiam consequuntur culpa deleniti dolore
                                                    exercitationem quo.
                                                </p>
                                            </TimelineItem>
                                        </Timeline>
                                    </Box>
                                </Row>
                            </Experience>
                        </Row>
                    </Content>
                </Row>
            </Container>
        </AboutMain>
    );
};