import {FaUserTie} from 'react-icons/fa'

function CustomerViewItem({id, firstname, lastname, email, phonenumber}) {
  return (
    <div className="customer-view-item">
        <FaUserTie className='customer-view-item-icon'/>
        <h4>{lastname} {firstname}</h4>
        <ul>
            <li>{email}</li>
            <li>{phonenumber}</li>
            <li>{id}</li>
        </ul>
    </div>
  )
}

export default CustomerViewItem