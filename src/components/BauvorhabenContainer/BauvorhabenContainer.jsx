import { Link} from "react-router-dom"
import React, {useEffect, navigate} from "react"
import BauvorhabenProjekt from "./BauvorhabenProjekt"
import  {useSelector, useDispatch} from "react-redux"
import {getProjects} from "../../features/project/projectSlice"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BauvorhabenContainer() {
  const {user} = useSelector((state) => state.auth)
  const {projects} = useSelector((state)=>{
    return state.projects
  })
  const dispatch=useDispatch()
  
  useEffect(() => {
    if(!user)
    {
      navigate('/login')
    }

    dispatch(getProjects())
  }, [user])

  
  return (
    <>
      <div className="customer-bvh-box-nav">
        <Navbar>
          <Nav>
            <Link className="btn-link " to="/newproject">
              <button className="btn">Neues Projekt</button>
            </Link>
        </Nav>
        <Nav class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" id="dropdownfilter">Filter
    <span class="caret"></span></button>
    <div class="dropdown-menu" aria-labelledby="dropdownfilter">
      <input class="text" id="myInput" type="text" placeholder="Search.."/>
      <option type="checkbox" aria-labelledby="myInput" >HTML</option>
           
    </div>
  </Nav>
        </Navbar>
        </div>
        <div className="all-bvh-containers">
        <div className="bvh-cards-box">
       {
        projects.map((val)=>{
          return (
          <> 
          <BauvorhabenProjekt project={val}/>
          </>
          )
        })
       } 
      </div>
      </div>
      </>
   
  )
}

export default BauvorhabenContainer