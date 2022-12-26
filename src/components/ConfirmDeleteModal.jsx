import { Button, Modal } from "react-bootstrap";

function ConfirmDeleteModal({ show, onConfirm, onCancel }) {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sind Sie sicher?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Möchten Sie den Kunden wirklich löschen? Dieser Vorgang kann nicht
        rückgängig gemacht werden.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Abbrechen
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Ja, löschen
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDeleteModal;
