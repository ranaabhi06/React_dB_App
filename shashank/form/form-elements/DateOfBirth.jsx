import React, {useState} from "react";

const DateOfBirth = (props) => {
    // validation --> minimum 100 years back could be selected and maximum D.O.B. could be today
    const minday= "1922-01-01";
    let today = new Date();
    // let year = ("0"+today.getFullYear()).slice(-4);
    // let month = ("0" + (today.getMonth() + 1)).slice(-2);
    // let day = ("0" + today.getDate()).slice(-2);
    // let aaj = `${year}-${month}-${day}`;
    // instead of above 4 lines write below 1 line
    let aaj = `${("0"+today.getFullYear()).slice(-4)}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;
    
    const [dob, setDob] = useState("");
    const onInputChange = e => {
        setDob(e.target.value);
    };
props.saveDob(dob);


 return (
        <div>
            <label htmlFor="date1">Date of Birth</label>
            <input 
            type="date" 
            size="100"
            id="date1" 
            placeholder="dd-mm-yyyy"
            min={minday} 
            max={aaj}
            value = {dob}
            onChange={ e => onInputChange(e)}
            />
        </div>
    );
};

export default DateOfBirth;