import {FaUserTie} from 'react-icons/fa'

function CustomerViewItem({id, name, email, phonenumber}) {
  return (
    <div className="customer-view-item bgc-2 brd white-font">
        <FaUserTie className='customer-view-item-icon'/>
        <h4>{name}</h4>
        <ul>
            <li>{email}</li>
            <li>{phonenumber}</li>
            <li>{id}</li>
        </ul>
    </div>
  )
}

export default CustomerViewItem