import React, { useState } from "react";

function Records(props) {
  const { dbData } = props;
  console.log(dbData);

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
                    const id = info.id;
                    console.log(id);
                    return {id};
                    

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
