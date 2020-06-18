import React from "react";
import Joi from 'joi-browser';
import Form from './common/form';

class Contact extends Form {
    state = {
      contact: [
        {title: 'Phone number', fill: 'xxx-xxx-xxx'},
        {title: 'Email', fill: 'oznerek@gmail.com', link: 'mailto:oznerek@gmail.com'},
        {title: 'Address', fill: 'Silesia'},
        {title: 'GitHub', fill: 'github.com/oznerek', link: 'http://github.com/oznerek'},
        {title: 'Linkedin', fill: 'Michał Oznerek', link: 'https://www.linkedin.com/in/micha%C5%82-oznerek/'},
      ],
      data: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      errors: {},
      sendMessage: ""
    };

    schema = {
      name: Joi.string().required().label('Name'),
      email: Joi.string().required().email().label("Email"),
      subject: Joi.string().required().label("Subject"),
      message: Joi.string().required().label("Message"),
    }

    doSubmit = (data) => {
      this.setState({sendMessage: "Success, Your message was send"});
    }

  render() {
    const { contact, sendMessage } = this.state;
    return (
      <section className="contact scrollspy" id="contact">
        <div className="contact__container">
          <div className="page__title">
            <h2 className="page__title-text">Contact</h2>
          </div>{" "}
          <div className="contact__header">Feel free to contact me</div>
          <div className="contact__content">
            <div className="contacts">
              { contact.map(item => (
                <div key={item.title} className="contacts__row">
                  <p className="contacts__title">{item.title}</p>
                  {(item.link) ? <a href={item.link} target="blank" className="contacts__fill link">{item.fill}</a> : <p className="contacts__fill">{item.fill}</p> }
                </div>
              ))}
            </div>

            <form className="message" onSubmit={this.handleSubmit}>
              <span className="message__row">
                {this.renderInput("name", "Name")}
                {this.renderInput("email", "Email",'email')}
              </span>
              {this.renderInput("subject", "Subject")}
              {this.renderTextarea("message", "Message")}
              {this.renderButton("Send Message")}
              {sendMessage && <div className="validate__success">{sendMessage}</div>}
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
