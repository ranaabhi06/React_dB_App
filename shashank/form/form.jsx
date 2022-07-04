import React, {useState} from "react";
import './Form.css';
import DateOfBirth from "./form-elements/DateOfBirth";
import DateOfJoining from "./form-elements/DateOfJoining";
import Name from "./form-elements/Name";
import Organisation from "./form-elements/Organisation";
import Save from "./form-elements/save";

const Form = (props) => {

    let [name, setName] = useState("");
    const nameHandler = (enteredName) => {
        // console.log(enteredName);
        setName(enteredName);
        
    };
    
    let [companyName, SetCompanyName] = useState("");
    const orgNameHandler = (enteredOrgName) => {
        // console.log(enteredOrgName);
        SetCompanyName(enteredOrgName);
    };

    let [dateOfBirth, setDateOfBirth] = useState("");
    const dobHandler = (enteredDob) => {
        // console.log(enteredDob);
        setDateOfBirth(enteredDob);
    };

    let[dateOfJoining, setDateOfJoining] = useState("");
    const dojHandler = (enteredDoj) => {
        // console.log(enteredDoj);
        setDateOfJoining(enteredDoj);
    };

    let data = {name, dateOfBirth, companyName, dateOfJoining };
    // console.log(data);
    const flag = (fl) => {
        // console.log(fl);
        props.fla(fl);
    }
    return (
        <div className="Fields">
            <Name saveName = {nameHandler}/> <br/>
            <DateOfBirth saveDob = {dobHandler}/> <br/>
            <Organisation saveOrgName = {orgNameHandler}/> <br/>
            <DateOfJoining saveDoj = {dojHandler}/> <br/>
            <Save filledData = {data} fla = {flag} />

        </div>
    );
}

export default Form;