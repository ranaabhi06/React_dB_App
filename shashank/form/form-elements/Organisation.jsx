import React, {useState} from "react";
const Organisation = (props) => {
    
  const [orgName, setOrgName] = useState("");
    const onInputChange = e => {
        setOrgName(e.target.value);
    };
props.saveOrgName(orgName);


    return (
        <div>
            <form>
                <label htmlFor ="textbox1">Organisation</label>
                <input className="ogClass"
                    type="text"  
                    id="textbox1"
                    size="22"
                     placeholder="Enter Your Company Name"
                     value={orgName}
                     onChange={ e => onInputChange(e)}
                />
            </form>

        </div>
    );
}

export default Organisation;