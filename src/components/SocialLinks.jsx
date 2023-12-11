import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { Icon } from '@iconify/react';
import { Button, Col, Container, Row } from "react-bootstrap";



const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);
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
  return (
    <StyledSocialLinks>
      <a
        href="https://www.facebook.com/ariesdave.bantigue"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <Icon icon="ic:baseline-facebook" className="display-5" />
      </a>

      <a
        href="mailto:ariesdave.bantigue@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message me at Outlook."
        className="link-icons"
      >
        <Icon icon="file-icons:microsoft-outlook" className="display-5" />
      </a>

      <a
        href="https://github.com/urbangrave"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Check my github."
        className="link-icons"
      >
        <Icon icon="fa-brands:github" className="display-5" />
      </a>
      
      {blog && (
        <a href={blog} aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )}
      
    </StyledSocialLinks>
  );
}
