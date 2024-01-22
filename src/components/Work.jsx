import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
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

export default function Work() {
  return (
    <Element name={"Work"} id="Work">
      <StyledSection className="d-flex flex-column justify-content-center">
          <Container className="d-flex">
            <Title>
              <h2>Work Experience</h2>
              <div className="underline"></div>
            </Title>
        </Container>
        <Container>
          <VerticalTimeline >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="June 2020 - PRESENT"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<Icon icon="material-symbols-light:home-work" className="display-4" />}
              dateClassName="custom-date-color"
            >
              <h3 className="vertical-timeline-element-title">Full-Stack Developer</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{fontSize: '15px'}}>Provincial Government Office of Negros Occidental Philippines</h4>
              <p>
                Negros Occidental, Philippines
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="January 2020 - May 2020"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<Icon icon="material-symbols-light:home-work" className="display-4" />}
              dateClassName="custom-date-color"
            >
              <h2 className="vertical-timeline-element-title" style={{color: '#404040'}}>Project Coordinator Asst.</h2>
              <h4 className="vertical-timeline-element-subtitle" style={{color: '#404040', fontSize: '15px'}}>SERVIO TECHNOLOGY</h4>
              <p style={{color: '#404040'}}>
                Manila, Philippines
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="November 2017 - May 2019"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<Icon icon="material-symbols-light:home-work" className="display-4" />}
              dateClassName="custom-date-color"
            >
              <h3 className="vertical-timeline-element-title" style={{color: '#404040'}}>Freelance-Front-End Developer</h3><br></br>
              <h4 className="vertical-timeline-element-subtitle" style={{color: '#404040', fontSize: '15px'}}>Ze Inspired | Auckland, New Zealand</h4>
              <p>
                Negros Occidental, Philippines
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="July 2017 - September 2017"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<Icon icon="material-symbols-light:home-work" className="display-4" />}
              dateClassName="custom-date-color"
            >
              <h3 className="vertical-timeline-element-title" style={{color: '#404040'}}>Asst. Record Officer</h3><br></br>
              <h4 className="vertical-timeline-element-subtitle" style={{color: '#404040', fontSize: '15px'}}>Department of Agrarian Reform Regional Office XVIII(NIR)</h4>
              <p>
                Negros Occidental, Philippines
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<Icon icon="material-symbols:star" className="display-4" />}
            />
          </VerticalTimeline>
        </Container>
      </StyledSection>
    </Element>
  );
}
