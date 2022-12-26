import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsbyCustomerID } from "../features/project/projectSlice";
import { getallCustomers } from "../features/customer/customerSlice";
import Container from "react-bootstrap/Container";
import CustomerViewDetails from "../components/CustomerViewDetails";
import ProjectViewDetails from "../components/ProjectViewDetails";
import { useState } from "react";

function CustomerOverview({ customerID }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [customerData, setcustomerData] = useState();

  const { user } = useSelector((state) => state.auth);
  const { projects, isLoadingProjects } = useSelector(
    (state) => state.projects
  );
  const { customers } = useSelector((state) => state.customers);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    dispatch(getProjectsbyCustomerID(customerID));
    dispatch(getallCustomers());
  }, [user, navigate]);

  return (
    <>
      <Container fluid className="mt-2 mb-5" style={{ backgroundColor: "" }}>
        {customers
          .filter((val) => {
            if (val._id == customerID) {
              return val;
            }
          })
          .map((val, key) => {
            return <CustomerViewDetails customer={val} />;
          })}
      </Container>
      {projects
        .filter((val) => {
          if (val.CustomerID == customerID) {
            return val;
          }
        })
        .map((val, key) => {
          return <ProjectViewDetails project={val}></ProjectViewDetails>;
        })}
    </>
  );
}

export default CustomerOverview;
