import { useState } from "react";

export default function AddRecord({addEntity, nextId}) {
  const [entityData, setEntityData] = useState({ id: nextId, EntityName: "", Country: "" });
  const [mandatoryWarning, setMandatoryWarning] = useState(false);


  const handleChange = (e) => {

    if(e.target.value){
        setMandatoryWarning(false);
    }
    setEntityData({
        ...entityData,
        [e.target.name]: e.target.value
    });
  }

  const handleAdd = () => {
    if(entityData.EntityName && entityData.Country ){
        addEntity(entityData);
        setEntityData({ ...entityData, id: ++nextId, EntityName: "", Country: "" });  
      }else{
        setMandatoryWarning(true);
      }
    
  }


  return (
    <>
      <div className="columns" style={{margin:'5px'}}>
        <div className="column">
          <input
            name="EntityName"
            className={mandatoryWarning ? "input is-danger": "input is-normal"}
            type="text"
            placeholder="Enter Entity Name"
            value={entityData.EntityName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="column">
          <input
            name="Country"
            className={mandatoryWarning ? "input is-danger": "input is-normal"}
            type="text"
            placeholder="Enter Country"
            value={entityData.Country}
            onChange={handleChange}
          ></input>
        </div>
        <div className="column">
          <button 
          className="button is-success"
          onClick={handleAdd}>Add</button>
        </div>
      </div>
    </>
  );
}
