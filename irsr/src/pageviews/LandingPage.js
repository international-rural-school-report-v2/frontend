import React from 'react';
import styled from 'styled-components';
import '../styles/landing-page.css';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

// Link Variables
const frontEnd = "/";
const frontEndTeam = "/team";
// const frontEnd = "https://irsr-frontend.netlify.com/";
// const frontEndTeam = "https://irsr-frontend.netlify.com/team";

/***************************************************************************************************
 ********************************************** Styles **********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const LandingPage = props => {
  let hambClicked = false;
  console.log('hambClicked = ', hambClicked.toString());
  return (
    <DivWrapper id="home">
      <div class="nav-underlay">
        <a href={frontEnd} class="nav-close-btn">X</a>
      </div>
      <nav>
        <a href={frontEnd} class="hamburger-button"><img src={require("../assets/burger.png")} /></a>
        <Link to={`${frontEnd}#home`}>Home</Link>
        <Link to={`${frontEnd}#about`}>About</Link>
        <Link to={`${frontEnd}#contact`}>Contact</Link>
        <NavLink to={frontEndTeam}>Team</NavLink>
        <NavLink to={`${frontEnd}login`}>Login In / Sign Up</NavLink>
      </nav>
      <div class="top-section" id="home">
        <div class="top-bg-overlay"></div>
        <div class="top-bg-img-container">
          <img class="top-bg-img" src={require("../assets/header-collab.jpg")} />
        </div>
        <div class="heading">
          <h1>International Rural Schools Report</h1>
          <p class="subhead">
            An efficient, user-friendly and accessible resource for schools to keep
            track of issues and equipment.
      </p>
          <NavLink to={`${frontEnd}login`}>GET STARTED</NavLink>
        </div>
      </div>
      <section id="about">
        <div>
          <div class="article">
            <h2>About IRSR</h2>
            <p>
              Our mission is to provide a reliable tool for school administrators
              and board members alike to effectively communicate and resolve school
              issues. With the ability to track and schedule issues and their
              status, we provide a great mainstream workflow to benefit not only
              board members and school admins, but the students who attend those
              schools as well. With the ability to track individual issues, leave
              comments and log detailed information, we make it easy to keep track
              of all your equipment and see a big picture.
        </p>
            <NavLink to={`${frontEnd}login`} class="button">SIGN UP!</NavLink>
          </div>
        </div>
        <div class="section-img">
          <img src={require("../assets/about-classroom.jpg")} />
        </div>
      </section>
      <section id="contact">
        <div class="section-img" id="top-contact-img">
          <img src={require("../assets/contact-teacher.jpg")} />
        </div>
        <div>
          <div class="article">
            <h2>Contact Us</h2>
            <p>
              We are available 5 days a week, Monday through Friday 9AM-6PM. Expect
              a reply within less than an hour during those times!
        </p>
            <div class="form">
              <div class="form-row">
                <div class="field">
                  <label>First Name: </label>
                  <input type="text" name="First" />
                </div>
                <div class="field">
                  <label>Last Name: </label>
                  <input type="text" name="Last" />
                </div>
              </div>
              <div class="form-row">
                <div class="field">
                  <label>Email: </label>
                  <input type="email" name="email" />
                </div>
                <div class="field">
                  <label>Cellphone #: </label>
                  <input type="tel" name="tel" />
                </div>
              </div>
              <div class="form-row">
                <div class="field">
                  <label>Message: </label>
                  <textarea class="message" type="message" name="Message"></textarea>
                </div>
                <a href="#" class="button">Submit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="section-img hidden" id="bottom-contact-img">
          <img src={require("../assets/contact-teacher.jpg")} />
        </div>
      </section>
      <section>
        <div>
          <div class="article">
            <h2>The Team</h2>
            <p>
              Our team is made up of a group of driven, creative and self-motivated
              engineers from different places around the world. Our team consists of
              Lambda School students that are still going through the program as
              students, and we believe that we can demonstrate our ability through
              programming for good, which is why we have chosen this project. As
              programmers, we have the ability to create anything, so why not build
              applications that help our children and our communities? We hope that
              IRSR does just that!
        </p>
            <NavLink to={frontEndTeam} class="button">Learn More</NavLink>
          </div>
        </div>
        <div class="section-img">
          <img src={require("../assets/team.jpg")} />
        </div>
      </section>
    </DivWrapper >
  );
}

export default LandingPage;