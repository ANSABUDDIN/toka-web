import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import ToogleBtn from "./ToogleBtn";
import {changelang} from '../../App';
import { useTranslation  } from "react-i18next";
export default function Header() {
  const {t} = useTranslation();
  const [mood, setmood] = useState('dark-mood');
  const themeMood = () => {
    mood == "light-mood" ? setmood("dark-mood") : setmood("light-mood");
  }
  useEffect(() => {
    document.body.className = mood;
  }, [mood]);
  return (
    <>
      <Navbar bg="transperent" className="py-lg-1 py-0 fixed-top my-nav-bg" expand="lg">
        <Container >
          <Link to="/">
            <Navbar.Brand>
              <img src="/assets/images/logo.png" className="logo" alt="" />
            </Navbar.Brand>
          </Link>
          <div className="d-lg-none align-items-center gap-2 d-flex justify-content-end">


            <Navbar.Toggle aria-controls="basic-navbar-nav" >
              <span>
                <img src="/assets/images/svgs/hum.svg" alt="" />
              </span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav className="me-auto ">

                <Nav.Link className='fw-500 my-nav  mx-lg-2 mx-0' >
                  <Link to="/login">
                    {/* Home */}
                    {t('home')}
                  </Link>
                </Nav.Link>
                <Nav.Link className='fw-500  my-nav mx-lg-2 mx-0' >
                  {/* About */}
                  {t('about')}
                  </Nav.Link>
                <Nav.Link className='fw-500  my-nav mx-lg-2 mx-0' >
                  {/* Pakages */}
                  {t('packages')}
                  </Nav.Link>
                <Nav.Link className='fw-500  my-nav mx-lg-2 mx-0'  >
                  {t('faq')}
                  </Nav.Link>
              </Nav>
              <Nav className="me-auto ">
                <NavDropdown
                  className=" text-light hello"
                  title="Pages"
                  id="basic-nav-dropdown"
                >

                  <NavDropdown.Item className="my-nav" >
                    <Link to="/Login">
                      Login
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="my-nav">
                    <Link to="/Register">
                      Register
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="my-nav">
                    <Link to="/Forget">
                      Forget
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="my-nav">
                    <Link to="/Dashboard">
                      Dahboard
                    </Link>
                  </NavDropdown.Item>

                </NavDropdown>
              </Nav>

            </Nav>

            <Nav className="ms-auto mt-lg-0 mt-3">
              <div className="  d-flex justify-content-start">
              <Nav className="me-auto ">
                <NavDropdown
                  className=" text-light mt-2 hello"
                  title="Language"
                  id="basic-nav-dropdown"
                >

                  <NavDropdown.Item className="my-nav" >
                  <span  onClick={changelang('en')} >English</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="my-nav">
                  <span  onClick={changelang('tu')} >Turkish</span>
                  </NavDropdown.Item>

                </NavDropdown>
              </Nav>
                
                <div onClick={()=>themeMood()}>
                  <ToogleBtn />
                </div>
                <Link to="/login">
                  <button className="btn-global-1  fs-7 mt-lg-0 mt-2">
                    {t('login')}
                  </button>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}