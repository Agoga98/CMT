import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomer } from "../features/customer/customerSlice";
import { FaUserPlus } from "react-icons/fa";
import { Button, Col, Row } from "react-bootstrap";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

function EditCustomer({ customerData }) {
  const [showConfirmDeleteModal, setshowConfirmDeleteModal] = useState(false);
  const [formCustomerData, setformCustomerData] = useState({
    CustomerID: customerData.CustomerID,
    LastName: customerData.LastName,
    Firstname: customerData.FirstName,
    Birthday: customerData.Birthday.substring(0, 10),
    Email: customerData.Email,
    TelNum: customerData.TelNum,
    Adress: customerData.Adress,
    PostalCode: customerData.PostalCode,
    City: customerData.City,
    Country: customerData.Country,
  });

  const handleDeleteButtonClick = () => {
    setshowConfirmDeleteModal(true);
  };

  const handleModalConfirm = async () => {
    //Kunden löschen
    console.log("Kunde mit der ID: würde gelöscht werden." + customerData._id);
    setshowConfirmDeleteModal(false);
  };

  const handleModalCancel = () => {
    setshowConfirmDeleteModal(false);
  };

  const {
    CustomerID,
    LastName,
    Firstname,
    Birthday,
    Email,
    TelNum,
    Adress,
    PostalCode,
    City,
    Country,
  } = formCustomerData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const onChange = (e) => {
    setformCustomerData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    const args = {
      id: customerData._id,
      formCustomerData,
    };

    console.log(args.id);
    console.log(formCustomerData);

    dispatch(updateCustomer(args));
  };

  const onDelete = (e) => {
    //dispatch löschen vom kunden
  };

  return (
    <>
      <section className="form">
        <form>
          <h4>Stammdaten</h4>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="LastName"
              name="LastName"
              value={LastName}
              placeholder="Bitte Nachnamen eingeben"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Firstname"
              name="Firstname"
              value={Firstname}
              placeholder="Bitte Vornamen eingeben"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Email"
              name="Email"
              value={Email}
              placeholder="Bitte Email eingeben"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              id="Birthday"
              name="Birthday"
              value={Birthday}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="TelNum"
              name="TelNum"
              placeholder="Bitte Telefonnummer eingeben"
              value={TelNum}
              onChange={onChange}
            />
          </div>
          <h4>Adresse</h4>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Adress"
              name="Adress"
              value={Adress}
              placeholder="Bitte Adresse und Hausnummer eingeben"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              min="0"
              max="99999"
              className="form-control"
              id="PostalCode"
              name="PostalCode"
              placeholder="Bitte Postleitzahl eingeben"
              value={PostalCode}
              onChange={onChange}
            />
            <input
              type="text"
              className="form-control"
              id="City"
              name="City"
              placeholder="Bitte Stadt/Dorf eingeben"
              value={City}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="Country"
              name="Country"
              value={Country}
              placeholder="Bitte Land eingeben"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <Row>
              <Col>
                <Button variant="danger" onClick={handleDeleteButtonClick}>
                  Kunde löschen
                </Button>
              </Col>
              <Col>
                <button
                  type="submit"
                  className="btn btn-block"
                  onClick={onSubmit}
                >
                  Speichern
                </button>
              </Col>
            </Row>
          </div>
        </form>
      </section>
      <ConfirmDeleteModal
        show={showConfirmDeleteModal}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
      />
    </>
  );
}

export default EditCustomer;
