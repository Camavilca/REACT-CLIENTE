import React from "react";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {
  Col,
  Row,
  CardBody,
  Fa,
  Card,
  Input,
  Button,
  Container,
  ModalFooter
} from "mdbreact";
import Signup from '../signup/Signup';

class Login extends React.Component {
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
    const responseFacebook = (response) => {
        console.log(response);
      }
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
                      <Input 
                        label="Usuario" 
                        group type="email" 
                        icon="user"
                        validate error="wrong" 
                        success="right" />
                      <Input 
                        label="Contraseña" 
                        group type="password" 
                        validate 
                        icon="lock"
                        containerClass="mb-0" />
                      <div className="text-center mb-3">
                        <Button 
                            type="submit" 
                            gradient="blue" 
                            rounded 
                            className="z-depth-1a">
                            Inicia Sesion
                            </Button>
                      </div>
                      <div className="row my-3 d-flex justify-content-center">
                        <Button 
                            type="button" 
                            color="white"
                            rounded className="mr-md-3 z-depth-1a">
                            <Fa icon="facebook" className="blue-text text-center" />
                        </Button>
                        <Button 
                            type="button" 
                            color="white" 
                            rounded 
                            className="mr-md-3 z-depth-1a">
                            <Fa icon="twitter" className="blue-text" />
                        </Button>
                        <Button 
                            type="button" 
                            color="white" 
                            rounded 
                            className="z-depth-1a">
                            <Fa icon="google-plus" className="blue-text" />
                        </Button>
                        <FacebookLogin
                                appId="542628002825708"
                                autoLoad={true}
                                fields="name,email,picture"
                                
                                callback={responseFacebook} />
                      </div>
                    </form>
                  </CardBody>
                  <ModalFooter className="ml-5 pt-3 mb-1">
                    <Signup />
                  </ModalFooter>
                </Card>
              </Col>
            </Row>
          </section>
        </Container>
    );
  }
}

export default Login;
