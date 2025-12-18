import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
function page() {
  return (
    <Container className='h-100'>
      <Row className='h-100'>
        <Col md={6} className='d-flex justify-conetent-center align-items-center' >
          <div className='lh-lg'>
            <h6 className='text-uppercase'>
              <span>W</span>
              <span>e</span>
              <span>l</span>
              <span>c</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>&nbsp;
              <span>t</span>
              <span>o</span>&nbsp;
              <span>m</span>
              <span>y</span>&nbsp;
              <span>w</span>
              <span>o</span>
              <span>r</span>
              <span>l</span>
              <span>d</span>
            </h6>
            <div>
              <span className='fs-1 me-1'>Hi,</span>
              <span>I'</span>
              <span>m</span>&nbsp;
              <span>A</span>
              <span>s</span>
              <span>h</span>
              <span>w</span>
              <span>i</span>
              <span>n</span>
              <span>i</span>&nbsp;
              <span>U</span>
              <span>p</span>
              <span>a</span>
              <span>d</span>
              <span>h</span>
              <span>y</span>
              <span>a</span>
              <span>y</span>
            </div>  
            <h1 className='text-uppercase'>
              <span>w</span>
              <span>e</span>
              <span>b</span>&nbsp;
              <span>d</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
            </h1>
            <p>
              a passionate software developer specializing in React.js <br />and modern web development.
            </p>
            <button className='button outline me-1'>My Projects</button>
            <button className='button ms-1' style={{backfround:'rgb(14, 14, 85)'}}>Download CV</button>
          </div>
        </Col>
        <Col md={6} className='d-flex justify-conetent-center align-items-center' >
          <Image src='/demonSlayer-Photoroom.png' width={700} height={700} alt='..' placeholder='blur' blurDataURL='data ...' className='img-fluid' />
        </Col>
      </Row>
    </Container>
  )
}

export default page