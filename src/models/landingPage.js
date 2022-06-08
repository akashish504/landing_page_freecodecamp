import  '../styles/landingPage.css';

import * as React from "react";

import styled from 'styled-components';
import { FaFire,FaTruck,FaBatteryFull } from "react-icons/fa";

const app_bar = {
  'background-color': "#eee",
  'min-height': '75px',
  'padding': '0px 20px',
  'position': 'sticky',
  'top': '0',
  'display': 'flex',
  'flex-direction': 'row',
  'align-items': 'center',
  'align-content': 'space-around',
  'box-shadow': 'none',
}
const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 20px;
`;
const header_nav = {
  'width': '35vw',
  'display': 'flex',
  'flex-direction': 'row',
  'justify-content': 'space-around',
}
const section_one = {
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'text-align': 'center',
  'height': '200px',
}

const StyledButton = styled.button`
  width: 200px;
  height: 30px;
  margin: 15px 0;
  border: 0;
  background-color: #f1c40f;
`;
const ModFaFire = {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'height': '125px',
    'width': '200px',
    'color': 'darkorange',
};
const videoDiv = {
  'margin-top': '50px',
  'display': 'flex',
  'justify-content': 'center'
}
const videoFrame = {
  'margin': '0',
  'padding': '0',
  'box-sizing': 'border-box',
  'max-width': '560px',
  'width': '100%',
}
const displayContent = {
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'height': '125px',
    'width': '80vw',
    'padding': '5px',
}

const section_three = {
  'margin-top': '60px',
  'display': 'flex',
  'flex-direction': 'row',
  'justify-content': 'center',
}

const pricing_box = {
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'text-align': 'center',
  'width': '33%',
  'margin': '10px',
  'border': '1px solid #000',
  'border-radius': '3px',
}
const boxButtonStyle = {
  'margin': '15px 0',
  'background-color': '#f1c40f',
  'padding': '0 20px',
  'height': '40px',
  'font-size': '1em',
  'font-weight': '900',
  'text-transform': 'uppercase',
  'border': '3px black solid',
  'border-radius': '2px',
  'cursor': 'pointer',
}
const box_header = {
  'background-color': '#ddd',
  'color': 'black',
  'padding': '15px 0',
  'width': '100%',
  'text-transform': 'uppercase',
  'font-weight': '700'
}
const footer_style = {
  'margin-top': '30px',
  'background-color': '#ddd',
  'padding': '20px',
}
const span_style = {
  'margin-top': '5px',
  'display': 'flex',
  'justify-content': 'flex-end',
  'font-size': '0.9em',
  'color': '#444'
}
function LandingPage() {
    // console.log(styles.app_bar);
		return (
			<div>
				<header style={app_bar}>
          <div style={ {width:"60vw"}}>
            <Img src='https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png'></Img>
          </div>
          <ul style={header_nav}>
            <li style={{'list-style':'none'}}>
              <a style={{'color': '#000','text-decoration': 'none'}} href='#features'>Features</a>
            </li>
            <li style={{'list-style':'none'}}>
              <a style={{'color': '#000','text-decoration': 'none'}} href='#how-it-works'>How It Works</a>
            </li>
            <li style={{'list-style':'none'}}>
              <a style={{'color': '#000','text-decoration': 'none'}} href='#pricing'>Pricing</a>
            </li>
          </ul>
				</header>
        <section style={section_one}>
          <h2>Handcrafted, home-made masterpieces</h2>
          <form action="https://www.freecodecamp.com/email-submit">
            <input style={{'max-width': '275px', 'width': '100%','padding': '5px'}} placeholder="Enter your email address" type="email">
            </input>
            <StyledButton type="submit">Get Started</StyledButton>
          </form>
        </section>
        <div style={{'max-width': '1000px','width': '100%','margin': '0 auto'}}>
          <div>
            <section id='features'>
              <div style={{'display':'flex'}}>
                <div style={ModFaFire}>
                  <FaFire style={{'height': '48px', 'width': '36px'}}></FaFire>
                </div>
                <div style={displayContent}>
                  <h2 style={{'margin':0}}>Premium Materials</h2>
                  <p style={{'margin':0}}>Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</p>
                </div>
              </div>
              <div style={{'display':'flex'}}>
                <div style={ModFaFire}>
                  <FaTruck style={{'height': '48px', 'width': '36px'}}></FaTruck>
                </div>
                <div style={displayContent}>
                  <h2 style={{'margin':0}}>Fast Shipping</h2>
                  <p style={{'margin':0}}>We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
                </div>
              </div>
              <div style={{'display':'flex'}}>
                <div style={ModFaFire}>
                  <FaBatteryFull style={{'height': '48px', 'width': '36px'}}></FaBatteryFull>
                </div>
                <div style={displayContent}>
                  <h2 style={{'margin':0}}>Quality Assurance</h2>
                  <p style={{'margin':0}}>For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
                </div>
              </div>
            </section>
            <section id='how-it-works' style={videoDiv}>
              <iframe id='video' height="315" style={videoFrame} src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&controls=0&showinfo=0">
              </iframe>
            </section>
            <section id='pricing' style = {section_three}>
              <div style={pricing_box}>
                <div style={box_header}>Tenor Trombone</div>
                <h2>$600</h2>
                <ol style={{'padding':0}}>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                </ol>
                <button style={boxButtonStyle}>SELECT</button>
              </div>
              <div style={pricing_box}>
                <div style={box_header}>BASS TROMBONE</div>
                <h2>$600</h2>
                <ol style={{'padding':0}}>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                </ol>
                <button style={boxButtonStyle}>SELECT</button>
              </div>
              <div style={pricing_box}>
                <div style={box_header}>VALVE TROMBONE</div>
                <h2>$600</h2>
                <ol style={{'padding':0}}>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                  <li style={{'padding':'5px 0', 'list-style':'none'}}>Lorem Ipsum</li>
                </ol>
                <button style={boxButtonStyle}>SELECT</button>
              </div>
            </section>
          </div>
        </div>
        <footer style={footer_style}>
          <ul style={{'display': 'flex','justify-content': 'flex-end'}}>
            <li style={{'padding': '0 10px','list-style': 'none'}}>
              <a href='https://google.co.in' style={{'color': '#000','text-decoration': 'none'}}>Privacy</a>
            </li>
            <li style={{'padding': '0 10px','list-style': 'none'}}>
              <a href='https://google.co.in' style={{'color': '#000','text-decoration': 'none'}}>Terms</a>
            </li>
            <li style={{'padding': '0 10px','list-style': 'none'}}>
              <a href='https://google.co.in' style={{'color': '#000','text-decoration': 'none'}}>Contact</a>
            </li>
          </ul>
        </footer>
			</div>
		);
}
export default LandingPage;