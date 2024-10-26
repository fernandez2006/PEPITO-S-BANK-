import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function Categoria() {
  return (
    <Container className="form-container py-5">
    <Row className="justify-content-center">
      <Col md={6}>
        <div className="form-box shadow p-4 rounded">
          <h3 className="text-center mb-4">Registrar Categoría</h3>
          <Form>
            <Form.Group controlId="formCategoryName">
              <Form.Label>Nombre de la Categoría</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre de la categoría"
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mt-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripción de la categoría"
              />
            </Form.Group>
            <Form.Group controlId="formIcon" className="mt-3">
              <Form.Label>Icono</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Registrar Categoría
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
  );
}
