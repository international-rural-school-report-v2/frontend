import React from 'react';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles **********************************************
 **************************************************************************************************/
const DivWrapper = styled.div``;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const LandingPage = props => {
  return (
    <DivWrapper>
      <div class="nav-underlay">
        <a href="##" class="nav-close-btn">X</a>
      </div>
      <nav>
        <a href="##" class="hamburger-button"><img src="./img/burger.png" /></a>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="./team.html">Team</a>
        <a href="https://irsr-frontend.netlify.com/">Login In / Sign Up</a>
      </nav>
      <div class="top-section" id="home">
        <div class="top-bg-overlay"></div>
        <div class="top-bg-img-container">
          <img class="top-bg-img" src="./img/header-collab.jpg" />
        </div>
        <div class="heading">
          <h1>International Rural Schools Report</h1>
          <p class="subhead">
            An efficient, user-friendly and accessible resource for schools to keep
            track of issues and equipment.
      </p>
          <a href="https://irsr-frontend.netlify.com/">GET STARTED</a>
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
            <a href="https://irsr-frontend.netlify.com/" class="button">SIGN UP!</a>
          </div>
        </div>
        <div class="section-img">
          <img src="./img/about-classroom.jpg" />
        </div>
      </section>
      <section id="contact">
        <div class="section-img" id="top-contact-img">
          <img src="./img/contact-teacher.jpg" />
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
                  <textarea
                    class="message"
                    type="message"
                    name="Message"
                  ></textarea>
                </div>
                <a href="#" class="button">Submit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="section-img hidden" id="bottom-contact-img">
          <img src="./img/contact-teacher.jpg" />
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
            <a href="team.html" class="button">Learn More</a>
          </div>
        </div>
        <div class="section-img">
          <img src="./img/team.jpg" />
        </div>
      </section>
      <footer><p>MIT Licensed - IRSR 2019</p></footer>
    </DivWrapper>
  );
}

export default LandingPage;