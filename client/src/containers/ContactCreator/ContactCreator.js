import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Panel } from "react-bootstrap";

import Input from "../../components/ui/Input/Input";
import SubmitButton from "../../components/ui/SubmitButton/SubmitButton";
import * as actions from "../../store/actions/contact";

class ContactCreator extends Component {
  state = {
    contactForm: {
      name: {
        label: "Name",
        placeholder: "Enter your Name",
        validationConfig: {
          errorMessage: "You should enter your Name",
          required: true
        },
        isValid: true,
        isTouched: false
      },
      email: {
        label: "E-Mail",
        placeholder: "Enter your E-Mail",
        validationConfig: {},
        isValid: true,
        isTouched: false
      },
      phone: {
        label: "Phone number",
        placeholder: "Enter your Phone number",
        validationConfig: {},
        isValid: true,
        isTouched: false
      }
    }
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const value = event.target.value;

    this.props.onInputChange(value, inputIdentifier);
  };

  submitHanler = event => {
    event.preventDefault();
    console.log(this.props.contactData);

    this.props.onSubmit(this.props.contactData);
  };

  render = () => {
    const formControls = [];

    for (let key in this.state.contactForm) {
      formControls.push(
        <Input
          key={key}
          label={this.state.contactForm[key].label}
          placeholder={this.state.contactForm[key].placeholder}
          validationConfig={this.state.contactForm[key].validationConfig}
          isValid={this.state.contactForm[key].isValid}
          changed={event => this.inputChangedHandler(event, key)}
        />
      );
    }

    return (
      <form onSubmit={this.submitHanler}>
        <Row style={{ marginTop: "50px" }}>
          <Col md={10} mdOffset={1}>
            <Panel>
              <Panel.Heading style={{ fontSize: "12pt" }}>
                Create a contact
              </Panel.Heading>
              <Panel.Body>
                {formControls}
                <SubmitButton />
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </form>
    );
  };
}

const mapStateToProps = state => {
  return { contactData: state.contact.contactData };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: (value, key) => dispatch(actions.setFormData(value, key)),
    onSubmit: contactData => dispatch(actions.createContact(contactData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactCreator);
