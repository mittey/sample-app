import React from "react";

import { FormGroup, Button } from "react-bootstrap";

const submitButton = () => {
  return (
    <FormGroup>
      <Button className="pull-right btn-success" type="submit">
        Save
      </Button>
    </FormGroup>
  );
};

export default submitButton;
