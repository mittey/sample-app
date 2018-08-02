import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Panel } from "react-bootstrap";
import { Redirect } from "react-router";
import produce from "immer";

import Input from "../../components/ui/Input/Input";
import SubmitButton from "../../components/ui/SubmitButton/SubmitButton";
import GenderSelect from "../../components/ui/GenderSelect/GenderSelect";

import * as actions from "../../store/actions/contact";

class ContactCreator extends Component {
  state = {
    contactForm: {
      name: {
        label: "Name",
        placeholder: "Enter your Name",
        validationRules: {
          errorMessage: "You should enter your Name",
          required: true
        },
        isValid: true,
        isTouched: false
      },
      email: {
        label: "E-Mail",
        placeholder: "Enter your E-Mail",
        validationRules: {
          errorMessage: "You should enter a valid E-Mail",
          isEmail: true
        },
        isValid: true,
        isTouched: false
      },
      phone: {
        label: "Phone number",
        placeholder: "Enter your Phone number",
        validationRules: {
          errorMessage: "You should enter a valid phone number",
          isNumeric: true
        },
        isValid: true,
        isTouched: false
      }
    },
    canSave: false
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  canSave = () => {
    let canSave = true;

    for (let key in this.state.contactForm) {
      canSave = this.state.contactForm[key].isValid && canSave;
    }

    return canSave;
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const value = event.target.value;

    this.props.onInputChange(value, inputIdentifier);

    this.setState(
      produce(draft => {
        draft.contactForm[inputIdentifier].isTouched = true;
        draft.contactForm[inputIdentifier].isValid = this.checkValidity(
          value,
          this.state.contactForm[inputIdentifier].validationRules
        );
        draft.canSave = this.canSave();
      })
    );
  };

  selectChangedHandler = (event, inputIdentifier) => {
    const value = event.target.value;

    this.props.onInputChange(value, inputIdentifier);
  };

  submitHanler = event => {
    event.preventDefault();

    this.props.onSubmit(this.props.contactData);
  };

  render = () => {
    const formControls = [];
    let redirect = null;

    if (this.props.isCreated) {
      redirect = <Redirect to="/list-contacts" />;
    }

    for (let key in this.state.contactForm) {
      formControls.push(
        <Input
          key={key}
          label={this.state.contactForm[key].label}
          placeholder={this.state.contactForm[key].placeholder}
          errorMessage={
            this.state.contactForm[key].validationRules.errorMessage
          }
          isValid={this.state.contactForm[key].isValid}
          changed={event => this.inputChangedHandler(event, key)}
          isTouched={this.state.contactForm[key].isTouched}
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
                {redirect}
                {formControls}
                <GenderSelect
                  changed={event => this.selectChangedHandler(event, "gender")}
                />
                <SubmitButton disabled={!this.state.canSave} />
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </form>
    );
  };
}

const mapStateToProps = state => {
  return {
    contactData: state.contact.contactData,
    isCreated: state.contact.isCreated
  };
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
