import React from 'react';
import styled from "styled-components";
import {Container} from "../common/Container";
import {Title} from "../common/Title";
import {Row} from "../common/Row";
import {FaEnvelope, FaGlobeEurope, FaMapMarkerAlt, FaPhone} from "react-icons/fa";

const ContactMain = styled.section`
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

const ContactTitle = styled.h3`
  color: var(--skin-color);
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
  padding: 0 15px 0 15px;
`

const ContactSubTitle = styled.h4`
  color: var(--text-black-900);
  text-align: center;
  font-size: 15px;
  margin-bottom: 60px;
  padding: 0 15px 0 15px;
`

const Item = styled.div`
  padding: 0 15px 0 15px;
  flex: 0 0 25%;
  max-width: 25%;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 991px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-black-900);
    text-transform: capitalize;
    margin: 15px 0 5px;
  }

  p {
    font-size: 16px;
    line-height: 25px;
    color: var(--text-black-700);
    font-weight: 300;
  }
`

const Icon = styled.div`
  display: inline-block;

  svg {
    font-size: 25px;
    color: var(--skin-color);
  }
`

const Form = styled.div`
  padding: 0 15px 0 15px;
  flex: 0 0 100%;
  max-width: 100%;
`

const FormItem = styled.div<FormItemType>`
  padding: 0 15px 0 15px;
  flex: 0 0 ${({width = '50%'}) => width};
  max-width: ${({width = '50%'}) => width};
  margin-bottom: 30px;

  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`

const FormGroup = styled.div``

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: var(--bg-black-100);
  border: 1px solid var(--bg-black-50);
  padding: 10px 25px;
  font-size: 16px;
  color: var(--text-black-700);
  transition: all 0.3s ease;
  
  &:focus {
    box-shadow: var(--radii);
  }
`

const Textarea = styled.textarea`
  width: 100%;
  height: 140px;
  border-radius: 25px;
  background: var(--bg-black-100);
  border: 1px solid var(--bg-black-50);
  padding: 10px 25px;
  font-size: 16px;
  color: var(--text-black-700);
  transition: all 0.3s ease;
  resize: none;

  &:focus {
    box-shadow: var(--radii);
  }
`

const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 0 50px;
  color: #ffffff;
  border-radius: 40px;
  border: none;
  display: inline-block;
  white-space: nowrap;
  background: var(--skin-color);
  transition: all 0.5s ease;
  height: 50px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    display: block;
    margin: 0 auto;
  }
`


export const Contact = () => {
    return (
        <ContactMain>
            <Container>
                <Row>
                    <Title>
                        <h2>Contact Me</h2>
                    </Title>
                </Row>
                <ContactTitle>Have You Any Questions?</ContactTitle>
                <ContactSubTitle>I'm At Your Services</ContactSubTitle>
                <Row>
                    <Item>
                        <Icon>
                            <FaPhone/>
                        </Icon>
                        <h4>Call Me On</h4>
                        <p>+48 792 665 039</p>
                    </Item>
                    <Item>
                        <Icon>
                            <FaMapMarkerAlt/>
                        </Icon>
                        <h4>Office</h4>
                        <p>Poznań</p>
                    </Item>
                    <Item>
                        <Icon>
                            <FaEnvelope/>
                        </Icon>
                        <h4>Email</h4>
                        <p>Eugenykravchenko@gmail.com</p>
                    </Item>
                    <Item>
                        <Icon>
                            <FaGlobeEurope/>
                        </Icon>
                        <h4>Website</h4>
                        <p>www.github.io</p>
                    </Item>
                </Row>
                <ContactTitle>Send Me An Email</ContactTitle>
                <ContactSubTitle>I'm Very Responsive To Message</ContactSubTitle>
                <Row>
                    <Form>
                        <Row>
                            <FormItem>
                                <FormGroup>
                                    <Input type="text" placeholder="Name"/>
                                </FormGroup>
                            </FormItem>
                            <FormItem>
                                <FormGroup>
                                    <Input type="email" placeholder="Email"/>
                                </FormGroup>
                            </FormItem>
                        </Row>
                        <Row>
                            <FormItem width='100%'>
                                <FormGroup>
                                    <Input type="text" placeholder="Subject"/>
                                </FormGroup>
                            </FormItem>
                        </Row>
                        <Row>
                            <FormItem width='100%'>
                                <FormGroup>
                                    <Textarea name="" placeholder="Message"/>
                                </FormGroup>
                            </FormItem>
                        </Row>
                        <Row>
                            <FormItem>
                                <Button type="submit">Send Message</Button>
                            </FormItem>
                        </Row>
                    </Form>
                </Row>
            </Container>
        </ContactMain>
    );
};

interface FormItemType {
    width?: string
}