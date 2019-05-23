import React from 'react';
import { Modal, Button, ModalBody, ModalFooter } from 'reactstrap';


class DeleteIssueModal extends React.Component {
  constructor(props) {
    super();
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
      <Button color="danger" onClick={this.toggle}>Delete Issue</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalBody>Are you sure you want to delete this issue?</ModalBody>
         <ModalFooter>
          <Button color="danger" onClick={this.props.deleteIssue}>Delete</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
    )
  }
}

export default DeleteIssueModal;