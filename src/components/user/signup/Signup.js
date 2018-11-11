import React from "react";
import {
    Fa,
    Input,
    Button,
    Container,
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
                    <Button rounded onClick={() => this.toggle(4)}>
                        Registrate
                    </Button>
                    <Modal isOpen={this.state.modal4} toggle={() => this.toggle(4)}>
                        <ModalHeader
                            className="text-center purple-text"
                            titleClass="w-100 font-weight-bold"
                            toggle={() => this.toggle(4)}>
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
                </section>
            </Container>
        );
    }
}

export default SesionRegistro;
