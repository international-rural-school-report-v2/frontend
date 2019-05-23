import React from 'react';
import { Modal, Button, ModalBody } from 'reactstrap';
import AddIssueForm from './AddIssueForm';


class AddIssueModal extends React.Component {
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
      <Button color="primary" onClick={this.toggle}>Add Issue</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>  */}
        <ModalBody>
          <AddIssueForm 
          {...this.props} 
          issues={this.props.issues}
          toggle={this.toggle}
          />
        </ModalBody>
         {/* <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
      </div>
    )
  }
}

export default AddIssueModal;