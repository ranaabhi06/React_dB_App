import React, { useState } from "react";

function Records(props) {
  const { dbData } = props;
  console.log(dbData);

  // const [idsToDelete, setIdsToDelete] = useState([]);
  // console.log(idsToDelete);

  let arrayId = [];
  const setIdToDelete = (id) => {
    arrayId.push(id);
    props.onSetIdsToDelete(arrayId);
    
  };

  // setIdsToDelete(arrayId);
  // console.log(idsToDelete);
  ;

  //function for delete
  // const idToEdit=(id)=>{
  //   console.log(id);
  //   props.onEdit(id);
   
  // }
  // const editInfo=()=>{

  // }

  return (
    <>
      <div>
        <p>Records-</p>

        {dbData &&
          dbData.map((info) => {
            return (
              <p>
                <input
                  onChange={(event) => {
                    setIdToDelete(info.id);
                    // idToEdit(info.id);
                  }}
                  type="checkbox"
                />

                <br />

                <label htmlFor="">ID: </label>
                {info.id}
                <br />
                <label htmlFor="">Deparment: </label>
                {info.formValues.department}
                <br />
                <label htmlFor="">Designation: </label>
                {info.desValue.designation}
                <br />
                <label htmlFor="">State: </label>
                {info.stateValue.States}
                <br />
                <label htmlFor="">District: </label>
                {info.districtValue.districts}
                <br></br>
                <input 
              type="button"
               style={{ padding: "5px" }} value="Edit" />
              </p>
            );
          })}
      </div>
      <br />
      <br />
    </>
  );
}

export default Records;
