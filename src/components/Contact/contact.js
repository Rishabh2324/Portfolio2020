import React, { Component } from "react"
import icon1 from "../../images/social/facebook.png"
import icon2 from "../../images/social/instagram.png"
import icon3 from "../../images/social/linkedin.png"
import icon4 from "../../images/social/twitter.png"
import logo2 from "../../images/contact.svg"
import M  from 'materialize-css'
 
class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  async componentDidMount() {

    M.Modal.init(this.Modal, {})
  }

  render() {
    return (
      <div className="container">
        <div
          className="row "
          style={{ paddingTop: "8.5rem", paddingBottom: "8.5rem" }}
        >
          <div className="col s12 m6 l6 xl6">
            <img className="boy" src={logo2} alt="contact goes here"/>
          </div>
          <div className="col s12 m6 l6 xl6 postion">
            <a 
              style={{ textDecoration: "underline", color: "white",backgroundColor:"rgb(0,0,0,0.6)" , borderRadius:"100px" , padding:"10px" }}
              class="waves-effect waves-light modal-trigger pulse text-bold"
              href="#modal1"
            >
              <i class="material-icons right">account_circle</i>Contact Me
            </a>
          </div>
        </div>
        <div id="modal1" class="modal bottom-sheet" ref={Modal => {
          this.Modal = Modal;
        }}>
          <div class="modal-content">
            <h4>Contact</h4>
            <ul class="collection">
              <li class="collection-item avatar">
                <a target="blank" href="https://www.instagram.com/riimac_24/">
                  {" "}
                  <img src={icon1} alt="instagram" class="circle" />
                  <span class="title">Instagram</span>
                </a>
              </li>
              <li class="collection-item avatar">
                <a target="blank" href="https://www.facebook.com/profile.php?id=100017437457286">
                  <img src={icon2} alt="facebook" class="circle" />
                  <span class="title">Facebook</span>
                </a>
              </li>
              <li class="collection-item avatar">
                <a target="blank" href="https://www.linkedin.com/in/rishabh-jain-83258b170/">
                  <img src={icon3} alt="linkedin" class="circle" />
                  <span class="title">Linkedin</span>
                </a>
              </li>
              <li class="collection-item avatar">
                <a target="blank" href="https://twitter.com/Rishabh89720365">
                  <img src={icon4} alt="twitter" class="circle" />
                  <span class="title">Twitter</span>
                </a>
              </li>
            </ul>
            <h5>Email</h5>
            <span>rishabh2401jain@gmail.com</span>
            <h5>Mobile No.</h5>
            <span>+91 7071344681 / 9653023443</span>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              <i class="material-icons">close</i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
