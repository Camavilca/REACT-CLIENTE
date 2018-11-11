import React from "react";
import {
  Col,
  Row,
  CardBody,
  Fa,
  Card,
  Input,
  Button,
  Container,
  ModalFooter,
  Modal,
  ModalHeader,
  ModalBody,
} from "mdbreact";

class SesionRegistro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal4: false,
    };
  }
  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  render() {
    return (
        <Container>
          <section className="form-elegant">
            <Row>
              <Col>
                <Card>
                  <CardBody className="mx-4">
                    <form>
                      <div className="text-center">
                        <h3 className="dark-grey-text mb-5  text-secondary"><strong>Inicia Sesion</strong></h3>
                      </div>
                      <Input label="usuario" group type="email" validate error="wrong" success="right" />
                      <Input label="Contraseña" group type="password" validate containerClass="mb-0" />
                      <div className="text-center mb-3">
                        <Button type="submit" gradient="blue" rounded className="btn-block z-depth-1a">Inicia Sesion</Button>
                      </div>
                      <div className="row my-3 d-flex justify-content-center">
                        <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="facebook" className="blue-text text-center" /></Button>
                        <Button type="button" color="white" rounded className="mr-md-3 z-depth-1a"><Fa icon="twitter" className="blue-text" /></Button>
                        <Button type="button" color="white" rounded className="z-depth-1a"><Fa icon="google-plus" className="blue-text" /></Button>
                      </div>
                    </form>
                  </CardBody>
                  <ModalFooter className="mx-5 pt-3 mb-1">
                    <Button rounded onClick={() => this.toggle(4)}>
                      Registrate
                    </Button>
                    <Modal isOpen={this.state.modal4} toggle={() => this.toggle(4)}>
                      <ModalHeader
                        className="text-center purple-text"
                        titleClass="w-100 font-weight-bold"
                        toggle={() => this.toggle(4)}
                      >
                        Registrate
                    </ModalHeader>
                      <ModalBody>
                        <form className="mx-3 grey-text">
                          <Input
                            label="Nombre"
                            icon="user"
                            group
                            type="text"
                            validate
                          />
                          <Input
                            label="Usuario"
                            icon="user-plus"
                            group
                            type="text"
                            validate
                          />
                          <Input
                            label="Email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                          />
                          <Input
                            label="Contraseña"
                            icon="lock"
                            group
                            type="password" />
                          <Button color="primary" type="submit" outline onClick={() => this.toggle(4)}>
                            Ok
                         <Fa icon="check" className="ml-2" />
                           </Button>
                        </form>
                      </ModalBody>
                    </Modal>
                  </ModalFooter>
                </Card>
              </Col>
            </Row>
          </section>
        </Container>
    );
  }
}

export default SesionRegistro;
