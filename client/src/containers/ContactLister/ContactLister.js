import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import { Col, Panel, Button } from "react-bootstrap";

import * as actions from "../../store/actions/contact";

import "react-table/react-table.css";

class ContactLister extends Component {
  componentDidMount = () => {
    this.props.onGetContacts();
  };

  createContactClickHandler = () => {
    this.props.history.push("/create-contact");
  };

  render = () => {
    const columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "E-Mail",
        accessor: "email"
      },
      {
        Header: "Phone number",
        accessor: "phone"
      },
      {
        Header: "Gender",
        accessor: "gender"
      }
    ];

    return (
      <Col md={10} mdOffset={1}>
        <Panel>
          <Panel.Body>
            <Button onClick={this.createContactClickHandler} bsStyle="primary">
              Create Contact
            </Button>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading style={{ fontSize: "12pt" }}>
            View Contacts
          </Panel.Heading>
          <Panel.Body>
            <ReactTable
              data={this.props.contacts}
              columns={columns}
              defaultPageSize={10}
              showPageSizeOptions={false}
            />
          </Panel.Body>
        </Panel>
      </Col>
    );
  };
}

const mapStateToProps = state => {
  return { contacts: state.contact.contacts };
};

const mapDispatchToProps = dispatch => {
  return { onGetContacts: () => dispatch(actions.getContacts()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactLister);
