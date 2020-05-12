import React, { Component } from "react"
import boy from "../../images/back.jpg"
import logo from "../../images/rishabh.jpeg"
import { Link } from "@reach/router" 
import M  from 'materialize-css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  async componentDidMount() {

    M.Sidenav.init(this.Navbar, {})
    M.Materialbox.init(this.materialboxed, {});
  }
  
    render() {
    return (
      <section>
        <ul
          id="slide-out"
          class="sidenav"
          style={{ backgroundColor: "rgb(255,255,255,0.8)" }}
          ref = {Navbar => {
            this.Navbar = Navbar
          }}
        >
          <li>
            <div class="user-view">
              <div class="background">
                <img src={boy} alt="goes here"/>
              </div>
              <a href="#user">
                <img class="circle materialboxed"  width="650" src={logo}  alt="goes here" ref = {materialboxed => {
                  this.materialboxed = materialboxed
                }}/>
              </a>
              <a href="#name">
                <span class="white-text name">Rishabh Jain</span>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rishabh2401jain@gmail.com" target="blank">
                <span class="white-text email">rishabh2401jain@gmail.com</span>
              </a>
            </div>
          </li>
          <li>
            <a class="modal-trigger "
              href="#modal1">
              <i class="material-icons">contacts</i>Contact
            </a>
          </li>
          <li>
            <a href="/">
              <i class="material-icons">Home</i>Home
            </a>
          </li>
          <li>
            <div class="divider"></div>
          </li>
          <li>
            <a href ="/" class="subheader">Explore</a>
          </li>
          <li>
            <a class="waves-effect" href="/gallery">
              <i class="material-icons">collections</i> Gallery
            </a>
          </li>
          <li>
            <Link class="waves-effect" to="/#skills">
              <i class="material-icons">code</i>Skills
            </Link>
          </li>
          <li>
            <Link class="waves-effect" to="/#aboutme">
              <i class="material-icons">person_pin</i>Hiii.This is Rishabh ...
            </Link>
          </li>
          <li>
            <Link class="waves-effect" to="/#project">
              <i class="material-icons">folder_open</i> Projects
            </Link>
          </li>
          <li>
            <Link class="waves-effect" to="/#experience">
              <i class="material-icons">sentiment_very_satisfied</i>Experience
            </Link>
          </li>
        </ul>
        <a class="left navBurger sidenav-trigger" href="/" data-target="slide-out">
          <i class="material-icons small">dehaze</i>
        </a>
      </section>
    )
  }
}

export default Navbar
