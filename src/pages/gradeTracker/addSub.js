import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import cs2019data from '../../components/cs2019.json';


function AddSubj()
{
 const[subjectid, setSubjectid]=useState('');
 const[course, setCourse]=useState([]);
 const[courseid, setStateid]= useState('');

  const handleSubject=(e)=>{
    const getsubjectId= e.target.value;
    const getcoursedata= cs2019data.find(subject=>subject.subject_id===getsubjectId).course;
    setState(getStatedata);
    setCountryid(getsubjectId);
  //console.log(getsubjectId);
  }

  const handlecourse = (e)=>{
    const courseid= e.target.value;
    //console.log(courseid);
    setStateid(courseid);

  }
const handleSubmit=(e)=>{
e.preventDefault();
alert("Get Country id"+subjectid+ " And "+ courseid);
}

return(<React.Fragment>
         <Container className="content">
        <div className="row">
          <div className="col-sm-12">
         <h3 className='mt-3'>Select Country and State from JSON file in React js</h3>
         <form className="row g-3" onSubmit={handleSubmit}>

              <div className="col-md-3">
                <label  className="form-label"> Country</label>            
                    <div className="text-dark"> 
                       <select name='subject' className='form-control' onChange={(e)=>handlecounty(e)}>
                        <option value="">--Select Country--</option>
                        {
                        cs2019data.map( (getcountry,index)=>(
                          <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option> 
                        ))

                        }
                  
                    
                        </select>           
                    </div>
                    </div>
                    <div className="col-md-3">
                <label  className="form-label"> State</label>            
                    <div className="text-dark"> 
                    <select name='states' className='form-control' onChange={(e)=>handlestate(e)}>
                        <option value="">--Select State--</option>
                        {
                          state.map((getstate, index)=>(
                            <option value={getstate.state_id} key={index}>{ getstate.state_name }</option>
                          ))
                        }
                       
                       
                        </select>          
                    </div>
                    </div>

            
                    <div className="col-md-2" style={{padding:'9px'}}>
                      <label  className="form-label"> </label>            
                    <div className="text-dark"> 
                      <button name='submit' className='btn btn-success'>Submit</button>
                     </div>
                    </div>

        </form>
        </div>
        </div>
        </Container>
       
    </React.Fragment>);
}

export default AddSubj;



