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

const DivTeamMembers = styled.div`
  width: 70%!important;
  display: flex!important;
  flex-flow: row wrap!important;
  justify-content: center!important;
  margin: 1rem 2rem!important;
  align-items: center!important;
`;

const DivMember = styled.div`
  display: flex!important;
  text-align: center!important;
  width: 150px!important;
  height: 350px!important;
  justify-content: space-between!important;
  margin: 1rem 2rem!important;
  flex-direction: column!important;
  align-items: center!important;

  p {
    margin: 2rem 0!important;
  }

  a {
    height: 30px!important;
  }

  .button {
    align-items: center!important;
    justify-content: center!important;
    text-decoration: none!important;
    color: dodgerblue!important;
    font-weight: bold!important;
    border: 1px solid black!important;
    min-height: 40px!important;
    height: 30px!important;
    width: 48%!important;
    border-radius: 3px!important;
    transition: background-color 0.5s;
  }
`;

const DivImg = styled.div`
  display: block!important;
  object-fit: contain!important;
  margin: 0 auto!important;
  object-fit: contain!important;
  border-radius: 50%!important;
  width: 150px!important;
  height: 150px!important;

  img {
    object-fit: contain!important;
    border-radius: 50%!important;
    width: 150px!important;
    height: 150px!important;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const TeamPage = props => {
  return (
    <DivWrapper>
      <div className="nav-underlay">
        <a href="##" className="nav-close-btn">X</a>
      </div>
      <nav>
        <a href="##" className="hamburger-button"><img src={require("../assets/burger.png")} /></a>
        <Link to={`${frontEnd}#home`}>Home</Link>
        <Link to={`${frontEnd}#about`}>About</Link>
        <Link to={`${frontEnd}#contact`}>Contact</Link>
        <NavLink to={frontEndTeam}>Team</NavLink>
        <NavLink to={`${frontEnd}login`}>Login In / Sign Up</NavLink>
      </nav>
      <section id="team">
        <div>
          <div className="article">
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
          </div>
        </div>
        <DivTeamMembers>
          <DivMember>
            <DivImg>
              <img src={require("../assets/team/team-james.png")} alt="" />
            </DivImg>
            <h3>James Page</h3>
            <p>Team Lead</p>
            <a href="https://github.com/jamespagedev" className="button" target="blank">GitHub</a>
          </DivMember>
          <DivMember>
            <DivImg>
              <img src={require("../assets/team/coverPhoto.jpg")} alt="" />
            </DivImg>
            <h3>Mohammad Tourjoman</h3>
            <p>UI Developer</p>
            <a href="https://github.com/mtourj" className="button" target="blank">GitHub</a>
          </DivMember>
          <DivMember>
            <DivImg>
              <img src={require("../assets/team/team-michael.png")} alt="" />
            </DivImg>
            <h3>Michael Hart</h3>
            <p>UI Developer</p>
            <a href="https://github.com/fromthehart" className="button" target="blank">GitHub</a>
          </DivMember>
          <DivMember>
            <DivImg>
              <img src={require("../assets/team/team-ken.jpeg")} alt="" />
            </DivImg>
            <h3>Kenneth Ridenour</h3>
            <p>Frontend/React</p>
            <a href="https://github.com/ken1286" className="button" target="blank">GitHub</a>
          </DivMember>
          <DivMember>
            <DivImg>
              <img src={require("../assets/team/team-matt.png")} alt="" />
            </DivImg>
            <h3>Matt Poloni</h3>
            <p>Backend Developer</p>
            <a href="https://github.com/matt-poloni" className="button" target="blank">GitHub</a>
          </DivMember>
        </DivTeamMembers>
      </section>
    </DivWrapper>
  );
}

export default TeamPage;