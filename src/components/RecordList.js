import RecordTile from "./RecordTile";

export default function RecordList({ entityList, editEntity, deleteEntity }) {
  let renderedList = entityList.map((entity) => {
    return (
      <li key={entity.id} style={{ margin: "10px 0px" }}>
        <RecordTile
          entity={entity}
          editEntity={editEntity}
          deleteEntity={deleteEntity}
        />
      </li>
    );
  });

  return (
    <>
      <ul>{renderedList}</ul>
    </>
  );
}
