import { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import Submit from "./components/Submit";
import axios from "axios";
import Records from "./components/Records";

function App() {
  const [formValues, setFormValues] = useState({});
  const [desValue, setdesValue] = useState({});

  const [stateValue, setStateValue] = useState({});
  const [districtValue, setDistValue] = useState({});

  const [dbData, setDbData] = useState([]);

  const [finalData, setFinalData] = useState({
    formValues: [],
    desValue: [],
    stateValue: [],
    districtValue: [],
  });

  // create new state for receiving data from GET request
  // run GET request in separate useEffect()
  // when data, set state with GET data

  // useEffect(() => {
  //   getToDB()
  //     .then((data) => {
  //       console.log(data);
  //       setDbData(data);
  //     })
  //     .catch(console.error);
  // }, []);

  useEffect(() => {
    setFinalData({
      ...finalData,
      formValues,
      desValue,
      stateValue,
      districtValue,
    });
  }, [formValues, desValue, stateValue, districtValue]);

  const handleSelected = (selected) => {
    // console.log(selected);
    setFormValues({ department: selected });
  };
  const handleSelected1 = (selected) => {
    // console.log(selected);
    setdesValue({ designation: selected });
  };

  const handleSelected2 = (selectedState) => {
    // console.log(selectedState);
    setStateValue({ States: selectedState });
  };
  const handleSelected3 = (districtValue) => {
    // console.log(districtValue);
    setDistValue({ districts: districtValue });
  };

  useEffect(() => {
    axios.get("http://localhost:9089/data").then((res) => {
      setDbData(res.data);
    });
  }, []);
  // const getToDB = async () => {
  //   // const res = await axios.get("http://localhost:9089/data");
  //   // setDbData(res.data);
  //
  // };
  // console.log(dbData);

  const postToDB = async () => {
    axios.get("http://localhost:9089/data").then((res) => {
      setDbData(res.data);
    });

    // console.log(finalData);
    let postDb = await axios.post("http://localhost:9089/data", {
      ...finalData,
      id: "IC" + Math.trunc(Math.random() * 99),
    });
    // console.log(postDb.data);
  };
  const deleteData = async ( id ) => {
    console.log(id);
    const del = axios.delete(`http://localhost:9089/data/${id}`);
    console.log(del.data);
    console.log({ id });
  };
  const editData = async () => {
    const edit = await axios.put("http://localhost:9089/data/IC54");
    console.log(edit.data);
  };

  return (
    <form>
      <Dropdown
        onSelect={handleSelected}
        onSelect1={handleSelected1}
        onSelect2={handleSelected2}
        onSelect3={handleSelected3}
      />
      <Submit
        // onFormSubmit={handleFormSubmit}
        // onFormSubmit1={handleFormSubmit1}
        // onFormSubmit2={handleFormSubmit2}
        // onFormSubmit3={handleFormSubmit3}
        // onFinSubmit={onFinalSubmit}
        // getDb={getToDB}
        postDB={postToDB}
        onClick={() => {}}
      />

      <Records dbData={dbData} />
      <input
        type="button"
        onClick={deleteData}
        style={{ padding: "5px", margin: "10px" }}
        value="Delete"
      />
      <input
        type="button"
        onClick={editData}
        style={{ padding: "5px" }}
        value="Edit"
      />
    </form>
  );
}

export default App;
