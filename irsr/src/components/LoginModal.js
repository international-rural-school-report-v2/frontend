// import LoginForm from './LoginForm';
// import { Modal } from 'reactstrap';

// const LoginModal = props => {
//   return (
//     <DivWrapper onClick={ev => props.closeLoginModal(ev)}>
//       <LoginForm
//         isLoggedIn={props.isLoggedIn}
//         closeLoginModal={props.closeLoginModal}
//       />
//     </DivWrapper>
//   );
// };

// export default LoginModal;
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Enter Account Information</ModalHeader>
          <ModalBody>
            {(this.props.buttonLabel === 'Login') && (
              <LoginForm />
            )}
            {(this.props.buttonLabel === 'Register') && (
              <RegisterForm />
            )}
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" 
              onClick={this.toggle}
              onClick={this.props.buttonSubmit}>
              {this.props.buttonSubmitMessage}
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

export default LoginModal;