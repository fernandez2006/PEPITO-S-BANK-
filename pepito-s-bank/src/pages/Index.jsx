import { Container, Row, Col, Carousel, Button, Card } from 'react-bootstrap';
import './Index.css'

function Index() {
  return (
    <div>
      <br /><br />
      {/* Slider/Carrusel */}
      <Carousel className="carousel-container mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Bienvenido a Tu Banco Confiable</h3>
            <p>Soluciones financieras que se adaptan a ti.</p>
            <Button variant="primary">Descubre más</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1398431/pexels-photo-1398431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Tus finanzas en buenas manos</h3>
            <p>Seguridad y confianza en cada transacción.</p>
            <Button variant="primary">Conoce más</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Planifica tu futuro financiero</h3>
            <p>Con nosotros, tus metas están más cerca.</p>
            <Button variant="primary">Empieza hoy</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Sección de servicios */}
      <Container>
        <h2 className="text-center mb-5">Nuestros Servicios</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-lg">
              <Card.Img variant="top" src="https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title>Créditos Personales</Card.Title>
                <Card.Text>
                  Ofrecemos soluciones de crédito adaptadas a tus necesidades, con tasas accesibles y aprobaciones rápidas.
                </Card.Text>
                <Button variant="primary">Solicitar Ahora</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-lg">
              <Card.Img variant="top" src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title>Cuentas Bancarias</Card.Title>
                <Card.Text>
                  Abre tu cuenta de ahorro o corriente de manera rápida y sin complicaciones.
                </Card.Text>
                <Button variant="primary">Abrir Cuenta</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-lg">
              <Card.Img variant="top" src="https://images.pexels.com/photos/158776/euro-money-currency-the-european-158776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <Card.Body>
                <Card.Title>Inversiones</Card.Title>
                <Card.Text>
                  Haz crecer tu dinero con nuestras opciones de inversión seguras y rentables.
                </Card.Text>
                <Button variant="primary">Invertir Ahora</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Sección de contacto */}
      <Container className="contact-section py-5 mt-5 text-white">
        <h2 className="text-center">Contáctanos</h2>
        <Row>
          <Col md={6}>
            <h4>Atención al Cliente</h4>
            <p>Teléfono: 555-5555</p>
            <p>Email: soporte@banco.com</p>
          </Col>
          <Col md={6}>
            <h4>Visítanos</h4>
            <p>Dirección: Calle Falsa 123, Ciudad Financiera</p>
            <h4>INTEGRANTES</h4>
            <p>JULIAN FERNANDEZ</p>
            <p>ISAAC VELEZ MURILLO</p>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default Index;
