import React from "react";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Element } from "react-scroll";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Container } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import Carousel from 'react-bootstrap/Carousel';
import Hero from '../images/hero-dark.jpg';
import Light from '../images/hero-light.jpg';
import { Spin } from "./globalStyledComponents";
import Bms from "../images/BMS.png";
import Psds from "../images/Psds.png";
import Bookkeeping from "../images/Bookkeeping.png"
import Dts from "../images/Dts.png"

export default function Projects() {
  const isLoading = useSelector(selectIsLoading);

  

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Notable Major Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          <Container className="text-center mt-4">
            <Container>
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '100%' }}
                    src={Bms}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    {/* <h5>Provincial Budget Monitoring System</h5>
                    <p>A local system that I develop using React+React-redux + Adonisjs.</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '100%' }}
                    src={Psds}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    {/* <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '100%' }}
                    src={Dts}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    {/* <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ objectFit: 'cover', height: '100%' }}
                    src={Bookkeeping}
                    alt="Fourth slide"
                  />
                  <Carousel.Caption>
                    {/* <h5>Fourth slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Container>

          </Container>
        </Container>
      </section>
    </Element>
  );
}
