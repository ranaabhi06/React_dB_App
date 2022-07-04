import React, {useState} from "react";

const DateOfJoining = (props) => {
    const minday= "1958-01-01";
    let today = new Date();
    let aaj = `${("0"+today.getFullYear()).slice(-4)}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;
    
    const [doj, setDoj] = useState("");

    const onInputChange = e => {
        setDoj(e.target.value);
    }; 
props.saveDoj(doj);


    return (
        <div>
            <label htmlFor="date2">Date of Joining</label>
            <input 
                type="date" 
                id="date2" 
                min={minday} 
                max={aaj}
                value= {doj}
                onChange={ e => onInputChange(e)}
                />
        </div>
    );
};

export default DateOfJoining;