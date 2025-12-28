import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa";

const AnimatedText = ({ text }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <span key={index} className="animated-letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
};

function HomePage() {
  return (
    <Container className="h-100 home">
      <Row className="h-100 align-items-center">
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="text-center text-md-start lh-lg">
            <h6 className="text-uppercase">
              <AnimatedText text="Welcome to my world" />
            </h6>
            <div className="my-4">
              <span className="fs-1 me-2">Hi, I&apos;m</span>
              <span className="fs-1 text-uppercase">
                <AnimatedText text="Ashwini Upadhyay" />
              </span>
            </div>
            <h1 className="text-uppercase">
              <AnimatedText text="web developer" />
            </h1>
            <p className="lead my-3">
              A passionate software developer specializing in React.js and
              modern web development.
            </p>
            <div className="my-3 d-flex justify-content-around col-md-6 social-icons">
              <a
                href="https://www.linkedin.com/in/ashwini-upadhyay-0924b6222?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/Ashwini-upadhyay-art"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={30} />
              </a>
              <a href="mailto:ashwini.upadhy@gmail.com" aria-label="Email">
                <SiGmail size={30} />
              </a>
              <a href="tel:+918839292406" aria-label="Phone">
                <FaPhone size={30} />
              </a>
            </div>
            <div className="d-flex justify-content-center justify-content-md-start">
              <button className="button outline me-3">My Projects</button>
              <a
                href="/Ashwini_Upadhyay_Resume_1-10-25.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button">Download CV</button>
              </a>
            </div>
          </div>
        </Col>
        <Col
          md={6}
          className="d-none d-md-flex justify-content-center align-items-center"
        >
          <Image
            src="/demonSlayer-Photoroom.png"
            width={600}
            height={600}
            alt="Demon Slayer"
            className="img-fluid DS"
            priority
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
