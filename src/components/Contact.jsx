import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Button, Col, Container, Row } from "react-bootstrap";
// Components
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from "@iconify/react";
import './customStyle.css';
const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
`;

const FacebookButton = () => (
  <Button
  // variant="light"
    href="https://www.facebook.com/ariesdave.bantigue"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon icon="ic:baseline-facebook" className="display-1" />
  </Button>
);

const OutlookButton = () => (
  <Button
    // variant="light"
    href="mailto:ariesdave.bantigue@outlook.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon icon="file-icons:microsoft-outlook" className="display-1" />
  </Button>
);

const GitHubButton = () => (
  <Button
    // variant="dark"
    href="https://github.com/urbangrave"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon icon="fa-brands:github" className="display-1" />
  </Button>
);


export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>Contact Me</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <br></br>
        <Container>
          {/* <ContactForm /> */}
          <Row style={{textAlign: 'center'}}>
            <Col xs={4}>
              <FacebookButton />
            </Col>
            <Col xs={4}>
              <OutlookButton />
            </Col>
            <Col xs={4}>
              <GitHubButton />
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </Element>
  );
}
