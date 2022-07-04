import React, { Fragment, useEffect, useState } from "react";
import State from "./State.json";
import Department from "./Department.json";
import Designation from "./Designation.json";


let Dropdown = (props) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [filtDist, setfiltDist] = useState([]);

  // console.log(props.onEditID);

  //  let editArray =[];
  //  editArray=props.onEditID;
  //  console.log(editArray);
  // // const[editStateVal,seteditStateVal]=useState([]);
  // seteditStateVal(editArray[1]);

  // const[editID,setEditId] =useState([]);
  // setEditId(props.onEditID);
  // console.log(editID);

  const getDistrict = () => {
    if (!selectedState) return;
    const ret = State.states.filter(({ state }) => selectedState === state);
    // console.log(ret[0].districts);
    return setfiltDist(ret[0].districts);
  };
  // render districts array as options in District dropdown

  useEffect(() => {
    getDistrict(selectedState);
    props.onSelect2(selectedState);
  }, [selectedState]);

  // useEffect(()=>{
  //   getDistrict()
  // },[]);

  return (
    <form>
  
      <div>
        <br></br>
        {/* State */}
        <tr>
          <td>
            <label>
              <b>Select State: </b>
            </label>
          </td>
          <td>
            <select
              required={true}
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
              }}
              id="test"
            >
              <option>-----------Select State------------</option>
              {State &&
                State.states.map(({ state }) => (
                  <option value={state}>{state}</option>
                ))}
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <b>Select District:</b>{" "}
            </label>
          </td>
          <td>
            <>
              <select
                required={true}
                value={selectedDistrict}
                onChange={(event) => {
                  const { value } = event.target;

                  setSelectedDistrict(value);
                  props.onSelect3(value);
                }}
              >
                <option selected disabled={false}>
                  ----------Select District-----------
                </option>
                {filtDist.length !== 0 &&
                  filtDist.map((dist) => (
                    <option key={Math.trunc(Math.random() * 1000000)}>
                      {dist}
                    </option>
                  ))}
              </select>
            </>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <b> Select Department:</b>{" "}
            </label>
          </td>
          <td>
            <select
              required={true}
              onChange={(event) => {
                props.onSelect(event.target.value);
              }}
            >
              <Fragment>
                <option selected disabled=" ">
                  -------Select Department-------
                </option>
                {Department.map((Department) => (
                  <option
                    key={Department.id}
                    name={Department.name}
                    value={Department.name}
                  >
                    {Department.name}
                  </option>
                ))}
              </Fragment>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <b>Select Designation: </b>
            </label>
          </td>
          <td>
            <select
              required={true}
              onChange={(event) => {
                props.onSelect1(event.target.value);
              }}
            >
              <Fragment>
                <option selected disabled=" ">
                  -------Select Designation-------
                </option>
                {Designation.map((Designation) => (
                  <option
                    key={Designation.id}
                    name={Designation.name}
                    value={Designation.name}
                  >
                    {Designation.name}
                  </option>
                ))}
              </Fragment>
            </select>
          </td>
        </tr>
      </div>
    </form>
  );
};

export default Dropdown;
