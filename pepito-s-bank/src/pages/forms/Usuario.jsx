import { Form, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Usuario() {
  return (
    <Container className="form-container py-5">
    <Row className="justify-content-center">
      <Col md={6}>
        <div className="form-box shadow p-4 rounded">
          <h3 className="text-center mb-4">Regístrate</h3>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>
            <Form.Group controlId="formAge" className="mt-3">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" placeholder="Ingresa tu edad" />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="Ingresa tu teléfono" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo" />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group controlId="formDate" className="mt-3">
              <Form.Label>Fecha de registro</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="formCity" className="mt-3">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu ciudad" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Registrarse
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
  );
}
