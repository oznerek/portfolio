import React from "react";
import $ from "jquery";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validateMessage: "",
      validateEmail: false,
      emptyField: { name: true, message: true, subject: true, email: true }
    };
  }

  changeHandler = event => {
    let nameState = event.target.name;
    this.setState({ [nameState]: event.target.value });
  };

  sendMessage = () => {
    let dataState = this.state;

    if (dataState.email === undefined || dataState.email === "") {
      $(".validate__email").css({
        display: "none",
        visibility: "hidden"
      });

      this.setState(prevState => ({
        emptyField: { ...prevState.emptyField, email: true }
      }));
    } else {
      $(".validate__email").css({
        color: "red",
        visibility: "visible",
        display: "inline-block"
      });

      this.setState(prevState => ({
        emptyField: { ...prevState.emptyField, email: false }
      }));
      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      let validate = () => {
        var $result = $("#email_label");
        var email = dataState.email;
        $result.text("");

        if (validateEmail(email)) {
          this.setState({ validateEmail: true });
        } else {
          this.setState({ validateEmail: false });
          $result.text("Incorrect email");
          $result.css("color", "red");
        }
        return false;
      };
      validate();
    }
    if (
      dataState.message === undefined ||
      dataState.name === undefined ||
      dataState.subject === undefined ||
      dataState.email === undefined ||
      dataState.message === "" ||
      dataState.name === "" ||
      dataState.subject === "" ||
      dataState.email === ""
    ) {
      $(".validate").css({ color: "red", visibility: "visible" });
      return this.setState({
        validateMessage: "Please complete all form before sending Your message"
      });
    } else {
      if (this.state.validateEmail === true) {
        console.log("za drugim razem");
        $(".validate").css({ color: "green", visibility: "visible" });
        // function sending this message {}
        return this.setState({ validateMessage: "Your message was sent" });
      } else {
        $(".validate").css({ color: "red", visibility: "hidden" });
      }
    }
  };

  render() {
    return (
      <section className="contact scrollspy" id="contact">
        <div className="page__title">
          <p className="page__title-number">04</p>
          <h2 className="page__title-text">Contact</h2>
        </div>{" "}
        <div className="contact__content">
          <div className="address">
            <div className="address__title">Feel free to contact me</div>
            <div>
              <p className="address__title">Phone number</p>
              <p className="address__code">xxx-xxx-xxx</p>
            </div>
            <div>
              <p className="address__title">Email</p>
              <p className="address__code">oznerek@gmail.com</p>
            </div>
            <div>
              <p className="address__title">Address</p>
              <p className="address__code">Silesia</p>
            </div>
          </div>
          <div className="message">
            <div>Send meaasge</div>
            <span className="message__line">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="message__input"
                onChange={this.changeHandler}
              />
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                className="message__input"
                onChange={this.changeHandler}
              />
            </span>
            <div className="validate__email" id="email_label" />

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="message__input"
              onChange={this.changeHandler}
            />
            <textarea
              type="text"
              placeholder="Message"
              name="message"
              className="message__input message__input-message"
              onChange={this.changeHandler}
            />
            <button className="btn message__btn" onClick={this.sendMessage}>
              Send Message
            </button>
            <div className="validate"> {this.state.validateMessage} </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
