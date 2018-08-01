import React from "react";
import {
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";

const input = props => {
  return (
    <Col md={4}>
      <FormGroup validationState={props.isValid ? null : "error"}>
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl
          type="text"
          placeholder={props.placeholder}
          onChange={props.changed}
        />
        {props.isValid ? null : (
          <HelpBlock>{props.validationConfig.errorMessage}</HelpBlock>
        )}
      </FormGroup>
    </Col>
  );
};

export default input;
