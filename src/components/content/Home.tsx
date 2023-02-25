import styled from "styled-components";
import {Container} from "../common/Container";
import {Row} from "../common/Row";
import photo from "../../img/main.jpg";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-tilt";
import CV from "../../img/KravchenkoCV.pdf"

const HomeMain = styled.section`
  min-height: 100vh;
  display: flex;
  color: var(--text-black-900);
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
`;

const Info = styled.div`
  padding: 0 15px 0 15px;
  flex: 0 0 55%;
  max-width: 55%;

  @media (max-width: 991px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  p {
    margin-bottom: 70px;
    font-size: 20px;
    color: var(--text-black-700);
  }

  @media (max-width: 464px) {
    padding: 50px 15px 50px 15px;
  }
`;

const Hello = styled.h3`
  font-size: 28px;
  margin: 15px 0;

  span {
    font-family: "Lobster", cursive;
    font-size: 35px;
    font-weight: 400;
    color: var(--skin-color);
  }
`;

const Profession = styled.h3`
  font-size: 30px;
  margin: 15px 0;

  span {
    color: var(--skin-color);
  }
`;

const Photo = styled.div`
  padding: 0 15px 0 15px;
  flex: 0 0 45%;
  max-width: 45%;
  text-align: center;
  position: relative;

  @media (max-width: 991px) {
    display: none;
  }

  img {
    margin: auto;
    height: 400px;
    border: 5px solid var(--skin-color);
  }

  &:before {
    content: "";
    position: absolute;
    height: 440px;
    width: 300px;
    border: 5px solid var(--skin-color);
    right: 55px;
    top: -20px;
    z-index: -1;
  }
`;

const Button = styled.a`
  font-size: 16px;
  font-weight: 500;
  padding: 12px 35px;
  color: #ffffff;
  border-radius: 40px;
  border: 2px solid var(--skin-color);
  display: inline-block;
  white-space: nowrap;
  background: var(--skin-color);
  transition: all 0.5s ease;

  &:hover {
    color: var(--skin-color);
    background: none;
  }
`

export const Home = () => {
    return (
        <HomeMain>
            <Container style={{padding: "0"}}>
                <Row>
                    <Info>
                        <Hello>
                            Hello, my name is <span>Yevhenii Kravchenko</span>
                        </Hello>
                        <Profession>
                            I'm a{" "}
                            <span>
                <ReactTypingEffect
                    speed={100}
                    eraseSpeed={100}
                    eraseDelay={1000}
                    typingDelay={1000}
                    text={["Programmer", "Frontend Developer", "React Developer"]}
                />
              </span>
                        </Profession>
                        <p>
                            I'm a Developer using web technologies to build
                            products and focusing on solving problems for different niches and
                            different industries using the power of technology
                        </p>
                        <Button href={CV} download>Download CV</Button>
                    </Info>
                    <Photo>
                        <Tilt options={{max: 20, scale: 1}}>
                            <img src={photo} alt="main"/>
                        </Tilt>
                    </Photo>
                </Row>
            </Container>
        </HomeMain>
    );
};
