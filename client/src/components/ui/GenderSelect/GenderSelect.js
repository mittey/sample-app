import React from "react";
import { FormGroup, ControlLabel, Col, FormControl } from "react-bootstrap";

const genderSelect = props => {
  return (
    <Col md={4}>
      <FormGroup>
        <ControlLabel>Select Gender</ControlLabel>
        <FormControl onChange={props.changed} componentClass="select">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </FormControl>
      </FormGroup>
    </Col>
  );
};

export default genderSelect;
