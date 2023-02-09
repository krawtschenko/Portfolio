import React from 'react';
import styled from "styled-components";
import {Container} from "../common/Container";
import {Row} from "../common/Row";
import {Title} from "../common/Title";
import portfolio_1 from "../../img/portfolio/portfolio-1.jpg"
import portfolio_2 from "../../img/portfolio/portfolio-2.jpg"
import portfolio_3 from "../../img/portfolio/portfolio-3.jpg"
import portfolio_4 from "../../img/portfolio/portfolio-4.jpg"
import portfolio_5 from "../../img/portfolio/portfolio-5.jpg"

const PortfolioMain = styled.section`
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

const Heading = styled.div`
  padding: 0 15px 0 15px;
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 40px;

  h2 {
    color: var(--text-black-900);
    font-weight: 500;
  }
`

const Item = styled.div`
  padding: 0 15px 0 15px;
  flex: 0 0 33.33%;
  max-width: 33.33%;
  margin-bottom: 30px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: 991px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`

const Inner = styled.div`
  box-shadow: var(--radii);
  border: 6px solid var(--bg-black-100);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`

const Img = styled.div`
  img {
    width: 100%;
    display: block;
  }
`

export const Portfolio = () => {
    return (
        <PortfolioMain>
            <Container style={{paddingBottom: '40px'}}>
                <Row>
                    <Title>
                        <h2>Portfolio</h2>
                    </Title>
                </Row>
                <Row>
                    <Heading>
                        <h2>My Projects:</h2>
                    </Heading>
                </Row>
                <Row>
                    <Item>
                        <Inner>
                            <Img>
                                <a href="https://krawtschenko.netlify.app" target="_blank" rel="noreferrer"><img
                                    src={portfolio_1} alt="portfolio_1"/></a>
                            </Img>
                        </Inner>
                    </Item>

                    <Item>
                        <Inner>
                            <Img>
                                <a href="https://krawtschenko.github.io/Counter" target="_blank" rel="noreferrer"><img
                                    src={portfolio_2} alt="portfolio_2"/></a>
                            </Img>
                        </Inner>
                    </Item>

                    <Item>
                        <Inner>
                            <Img>
                                <a href="https://github.com/krawtschenko/Samurai-Way" target="_blank"
                                   rel="noreferrer"><img src={portfolio_3} alt="portfolio_3"/></a>
                            </Img>
                        </Inner>
                    </Item>

                    <Item>
                        <Inner>
                            <Img>
                                <a href="https://github.com/krawtschenko/TodoList" target="_blank" rel="noreferrer"><img
                                    src={portfolio_4} alt="portfolio_4"/></a>
                            </Img>
                        </Inner>
                    </Item>

                    <Item>
                        <Inner>
                            <Img>
                                <a href="https://github.com/krawtschenko/Pulse" target="_blank" rel="noreferrer"><img
                                    src={portfolio_5} alt="portfolio_5"/></a>
                            </Img>
                        </Inner>
                    </Item>

                    <Item>
                        <Inner>
                            <Img>
                                <a href="/#" target="_blank" rel="noreferrer"><img src={portfolio_1} alt="test"/></a>
                            </Img>
                        </Inner>
                    </Item>
                </Row>
            </Container>
        </PortfolioMain>
    );
};