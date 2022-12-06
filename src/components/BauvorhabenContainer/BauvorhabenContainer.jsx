import { Link} from "react-router-dom"

function BauvorhabenContainer() {
  return (
    <div className="customer-bvh-box">
      <div className="customer-bvh-box-nav">
      <button className="btn"><Link className="btn-w-link" to="/newproject">Neues Projekt</Link></button>
      
      </div>
        Bauvorhaben anzeigen
    </div>
  )
}

export default BauvorhabenContainer