import React from "react";
import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../styles/new-task.css";

const NewTask = () => {
  return (
    <>
      <Navbar />
      <Form className="new-task-form">
        <Form.Group className="mb-3">
          <Form.Label>Task Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Start Time</Form.Label>
          <Form.Control type="time" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Finish Time</Form.Label>
          <Form.Control type="time" />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="Task description">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button
          variant="primary"
          type="submit"
          className="mt-3"
          style={{ width: "100%", fontWeight: "bold" }}
        >
          Save
        </Button>
      </Form>
    </>
  );
};

export default NewTask;
