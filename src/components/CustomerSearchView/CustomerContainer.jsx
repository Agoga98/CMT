import {useState} from 'react' 
import CustomerViewItem from './CustomerViewItem'
import jsondata from '../../mock_data.json'

function CustomerContainer() {
  const [searchTerm, setSearchTerm] = useState("")

  return (    
    <div className="customer-searchbox">
      <input type="text" placeholder="Suchen..." onChange={event => {setSearchTerm(event.target.value)}}/>
      <div className='customer-item-container'>
        {
          jsondata.filter((val) => {
            if(searchTerm == ""){
              return val
            }
            else if(val.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    val.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    val.phonenumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.id.toLowerCase().includes(searchTerm.toLowerCase()))
            {
              return val
            }
          }).map((val, key) => {
            return <CustomerViewItem name={val.name} email={val.email} phonenumber={val.phonenumber} id={val.id}/>
          })
        }
      </div>
    </div>
  )
}

export default CustomerContainer