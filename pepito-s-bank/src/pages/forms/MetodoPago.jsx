import { Container,Row , Col, Form, Button } from "react-bootstrap";

export default function MetodoPago() {
  return (
    <Container className="form-container py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="form-box shadow p-4 rounded">
            <h3 className="text-center mb-4">Registrar Método de Pago</h3>
            <Form>
              <Form.Group controlId="formPaymentMethodName">
                <Form.Label>Nombre del Método</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa el nombre del método de pago"
                />
              </Form.Group>
              <Form.Group controlId="formDescription" className="mt-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descripción del método de pago"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-4 w-100">
                Registrar Método
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
