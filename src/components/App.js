import "bulma/css/bulma.css";
import AddRecord from "./AddRecord";
import RecordList from "./RecordList";
import { useState } from "react";

let nextId = 0;

function App() {
  const [entityList, setEntityList] = useState([]);

  const addEntity = (entity) => {
    setEntityList([...entityList, entity]);
  };

  const editEntity = (entity) => {
    setEntityList(
      entityList.map((e) => {
        if (e.id === entity.id) {
          return entity;
        } else {
          return e;
        }
      })
    );
  };

  const deleteEntity = (id) => {
    setEntityList(entityList.filter((e) => e.id !== id));
  };

  return (
    <div style={{display:'flex', flexDirection:'column'}}>

      <h3 className="title is-3" style={{margin:'5px auto'}}>Entities</h3>

      <AddRecord addEntity={addEntity} nextId={nextId++} />
      <RecordList
        entityList={entityList}
        editEntity={editEntity}
        deleteEntity={deleteEntity}
      />
    </div>
  );
}

export default App;
