import { useState } from "react";





export default function RecordTile({ entity, editEntity, deleteEntity }) {

  const [isEditing, setIsEditing] = useState(false);
  const [localEntity, setLocalEntity] = useState(entity);

  const handleEdit = () => {
    editEntity(localEntity);
    setIsEditing(false);
    
  }

  const handleDelete = () => {
    deleteEntity(localEntity.id)
  }

  const handleChange = (e) => {
    setLocalEntity({...localEntity, 
      [e.target.name]: e.target.value
    })
  }

  let content;

  if(isEditing){
    content = <div className="columns" style={{margin:'7px', boxShadow: '0 0 3px rgba(0,0,0,0.6)', borderRadius:'4px'}}>
    <div className="column">
      <input
        name="EntityName"
        className="input is-normal"
        type="text"
        placeholder="Enter Entity Name"
        value={localEntity.EntityName}
        onChange={handleChange}
      ></input>
    </div>
    <div className="column">
      <input
        name="Country"
        className="input is-normal"
        type="text"
        placeholder="Enter Country"
        value={localEntity.Country}
        onChange={handleChange}
      ></input>
    </div>
    <div className="column">
      <button 
      className="button is-success"
      onClick={handleEdit}>Update</button>
    </div>
  </div>
  }else{
    content = <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{entity.EntityName}</p>
          <p className="subtitle is-6">{entity.Country}</p>
        </div>
      </div>

      <div className="buttons">
        {!isEditing && <button 
        className="button is-warning" 
        onClick={() => setIsEditing(true)}>Edit</button>}
        <button className="button is-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  </div>
  }


  return (
    <>
      {content}
    </>
  );
}
