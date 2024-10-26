import { Container,Row , Col, Form, Button } from "react-bootstrap";

export default function Gasto() {
  return (
    <Container className="form-container py-5">
    <Row className="justify-content-center">
      <Col md={6}>
        <div className="form-box shadow p-4 rounded">
          <h3 className="text-center mb-4">Registrar Gasto</h3>
          <Form>
            <Form.Group controlId="formAmount">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingresa el monto"
              />
            </Form.Group>
            <Form.Group controlId="formDate" className="mt-3">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripción del gasto"
              />
            </Form.Group>
            <Form.Group controlId="formUserName" className="mt-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del usuario"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Registrar Gasto
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
  );
}
