import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Table,
} from "react-bootstrap";
import { useState } from "react";
import EditCustomer from "./EditCustomer";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

function CustomerViewDetails({ customer }) {
  const [showColumn, setShowColumn] = useState(false);
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCopy = () => {
    setCopied(true);
    toast.info("Copied to clipboard!", { autoClose: 1000 });
  };

  const toggleColumn = () => {
    setShowColumn(!showColumn);
  };

  const birthday = new Date(customer.Birthday);
  const createdAt = new Date(customer.createdAt);

  return (
    <>
      <Row
        style={{
          border: "2px solid #B23850",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        <Col
          md="auto"
          className="d-flex align-items-center justify-content-center"
        >
          <RiUserSettingsLine size={35} onClick={handleShow} />
        </Col>
        <Col>
          <Form.Check
            style={{ float: "right" }}
            type="switch"
            onClick={toggleColumn}
            label="Details"
          />

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Kundennummer</th>
                <th>Name</th>
                <th>Geburtstag</th>
                <th>Telefonnummer</th>
                <th>Email</th>
                <th className={showColumn ? "" : "d-none"}>Angelegt am</th>
                <th className={showColumn ? "" : "d-none"}>Adresse</th>
              </tr>
            </thead>
            <tbody>
              <tr key={customer._id}>
                <td>
                  {customer.CustomerID}
                  <CopyToClipboard
                    style={{ float: "right" }}
                    className="pt-1"
                    text={customer.CustomerID}
                    onCopy={handleCopy}
                  >
                    <FaCopy size={20} />
                  </CopyToClipboard>
                </td>
                <td>
                  {customer.LastName} {customer.FirstName}
                  <CopyToClipboard
                    style={{ float: "right" }}
                    className="pt-1"
                    text={customer.LastName + " " + customer.FirstName}
                    onCopy={handleCopy}
                  >
                    <FaCopy size={20} />
                  </CopyToClipboard>
                </td>
                <td>{birthday.toLocaleDateString()}</td>
                <td>
                  {customer.TelNum}
                  <CopyToClipboard
                    style={{ float: "right" }}
                    className="pt-1"
                    text={customer.TelNum}
                    onCopy={handleCopy}
                  >
                    <FaCopy size={20} />
                  </CopyToClipboard>
                </td>
                <td>
                  {customer.Email}
                  <CopyToClipboard
                    style={{ float: "right" }}
                    className="pt-1"
                    text={customer.Email}
                    onCopy={handleCopy}
                  >
                    <FaCopy size={20} />
                  </CopyToClipboard>
                </td>
                <td className={showColumn ? "" : "d-none"}>
                  {createdAt.toLocaleDateString()}
                </td>
                <td className={showColumn ? "" : "d-none"} width={"250px"}>
                  {customer.Adress +
                    ", " +
                    customer.PostalCode +
                    " " +
                    customer.City}
                  <CopyToClipboard
                    style={{ float: "right" }}
                    className="pt-1"
                    text={
                      customer.Adress +
                      ", " +
                      customer.PostalCode +
                      " " +
                      customer.City
                    }
                    onCopy={handleCopy}
                  >
                    <FaCopy size={20} />
                  </CopyToClipboard>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            {" "}
            Kundendaten bearbeiten
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditCustomer customerData={customer} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomerViewDetails;
