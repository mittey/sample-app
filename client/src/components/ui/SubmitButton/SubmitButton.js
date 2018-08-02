import React from "react";

import { FormGroup, Button } from "react-bootstrap";

const submitButton = props => {
  return (
    <FormGroup>
      <Button
        className="pull-right btn-success"
        type="submit"
        disabled={props.disabled}
      >
        Save
      </Button>
    </FormGroup>
  );
};

export default submitButton;
