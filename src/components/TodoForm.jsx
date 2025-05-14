import React from "react";
import { Form, Button } from "react-bootstrap";

function TodoForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="hedefInput">
        <Form.Label>Hedef</Form.Label>
        <Form.Control type="text" placeholder="Bir hedef yaz..." />
      </Form.Group>

      <Button variant="primary" type="submit">
        Ekle
      </Button>
    </Form>
  );
}

export default TodoForm;
