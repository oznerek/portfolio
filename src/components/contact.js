import React from "react";


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    changeHandler = this.changeHandler.bind(this);
    changeHandler(event) {
      let nameState = event.target.name;
      this.setState({ [nameState]: event.target.value });
    }
  
    sendMessage = this.sendMessage.bind(this);
    sendMessage() {
      let dataState = this.state;
      if (
        dataState.message === undefined ||
        dataState.name === undefined ||
        dataState.subject === undefined ||
        dataState.email === undefined
      ) {
        alert("Please complete all form before send Your message");
      } else {
        alert("Your message was send");
      }
    }
  
    render() {

      return (
          <section className="contact scrollspy" id="contact">
        <div className="page__title">
          <p className="page__title-number">04</p>
          <h2 className="page__title-text">Contact</h2>
        </div>            <div className="contact__content">
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
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="message__input"
                    onChange={this.changeHandler}
                  />
                </span>
  
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
              </div>
            </div>
          </section>

      );
    }
  }
  
  export default Contact;
  
