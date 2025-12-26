"use client";

import { Card, Col, Container, Row } from "react-bootstrap";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const card = useRef();
  const heading = useRef();
  const con = useRef();
  const navigate = useRouter();
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(card.current.children, {
          y: -10,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "power1.inOut",
          stagger: 0.2,
        });
      },
    });
    tl.from(con.current, {
      duration: 0.5,
      opacity: 0,
    })
    .from(heading.current.children, {
      duration: 0.3,
      y: 10,
      opacity: 0,
      stagger: 0.1,
      ease: "power"
    }, "-=0.2")
    .from(card.current.children, {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "bounce"
    }, "-=0.2");
  }, []);
  return (
    <Container ref={con} className='home d-flex flex-column h-100 justify-content-center align-items-center'>
      <h4 ref={heading} className="mb-5" style={{ overflowY: 'clip' }}>
        <span>C</span>
        <span>h</span>
        <span>o</span>
        <span>o</span>
        <span>s</span>
        <span>e</span>&nbsp;
        <span>P</span>
        <span>r</span>
        <span>e</span>
        <span>f</span>
        <span>e</span>
        <span>r</span>
        <span>e</span>
        <span>d</span>&nbsp;
        <span>T</span>
        <span>h</span>
        <span>e</span>
        <span>a</span>
        <span>m</span>
        <span>e</span>
      </h4>
      <Row ref={card}>
        <Col sm={4}><Card onClick={() =>navigate.push('/home')}>Soft Theame</Card></Col>
        <Col sm={4}><Card>Mild Theame</Card></Col>
        <Col sm={4}><Card>Hard Theame</Card></Col>
      </Row>
    </Container>
  );
}
