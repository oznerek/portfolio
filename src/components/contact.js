import React from "react";
import $ from "jquery";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validateMessage: "",
      validateEmail: false,
      name: false, 
      message: false, 
      subject: false, 
      email: false, 
      addClass: false
    };
  }
  onFocus = event => {
    $(event.target).parent().addClass('active');
  }
  onBlur = event => {
    if(!event.target.value){
      $(event.target).parent().removeClass('active');
    }
  }

  changeHandler = event => {
    let nameState = event.target.name;
    if(event.target.value){
      this.setState({[nameState]: true})
    } else{
      this.setState({[nameState]: false})
    }
  };
  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  sendMessage = () => {
    let field = this.state;
    if (field.name && field.email && field.message && field.subject){
      if(this.validateEmail($('input[type=email').val())){
        $(".validate").css({ color: "green", display: "block" });
        return this.setState({
          validateMessage: "Your message was send"
        });
      }else {
        $(".validate").css({ color: "red", display: "block" });
        return this.setState({
          validateMessage: "Invalid email "
        });
      }
    } else {
      $(".validate").css({ color: "red", display: "block" });
      return this.setState({
        validateMessage: "Please complete all form before sending Your message"
      });
    }
  };

  render() {
    return (
      <section className="contact scrollspy" id="contact">
        <div className="contact__container">
          <div className="page__title">
            <h2 className="page__title-text">Contact</h2>
          </div>{" "}
          <div className="contact__header">Feel free to contact me</div>
          <div className="contact__content">
            <div className="contacts">
              <div className="contacts__row">
                <p className="contacts__title">Phone number</p>
                <p className="contacts__fill">xxx-xxx-xxx</p>
              </div>
              <div className="contacts__row">
                <p className="contacts__title">Email</p>
                <a href="mailto:oznerek@gmail.com" className="contacts__fill link">oznerek@gmail.com</a>
              </div>
              <div className="contacts__row">
                <p className="contacts__title">Address</p>
                <p className="contacts__fill">Silesia</p>
              </div>
              <div className="contacts__row">
                <p className="contacts__title">GitHub</p>
                <a className="contacts__fill link" href="http://github.com/oznerek" target="blank">github.com/oznerek</a>
              </div>
              <div className="contacts__row">
                <p className="contacts__title">Linkedin</p>
                <a className="contacts__fill link" href="https://www.linkedin.com/in/micha%C5%82-oznerek/" target="blank">Michał Oznerek</a>
              </div>
            </div>

            <div className="message">
              <span className="message__row">
                <span className="message__field">
                  <span className="message__label">Name</span>
                  <input
                    type="text"
                    name="name"
                    className="message__input"
                    onChange={this.changeHandler}
                    onFocus={this.onFocus}
                    onBlur ={this.onBlur}
                  />
                </span>
                <span className= "message__field" >
                  <span className="message__label">Email</span>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="message__input"
                    onChange={this.changeHandler}
                    onFocus={this.onFocus}
                    onBlur ={this.onBlur}
                  />
                </span>
              </span>
              <span className="message__field">
                <span className="message__label">Subject</span>
                <input
                  type="text"
                  name="subject"
                  className="message__input"
                  onChange={this.changeHandler}
                  onFocus={this.onFocus}
                  onBlur ={this.onBlur}
                />
              </span>
              <span className="message__field">
                <span className="message__label">Message</span>
                <textarea
                  type="text"
                  name="message"
                  className="message__input message__input-message"
                  onChange={this.changeHandler}
                  onFocus={this.onFocus}
                  onBlur ={this.onBlur}
                />
              </span>
              <div className="validate"> {this.state.validateMessage} </div>
              <div className="btn message__btn" onClick={this.sendMessage}>
                Send Message
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
