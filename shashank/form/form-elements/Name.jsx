import React, {useState} from "react";

const Name = (props) => {

    const [name, setName] = useState("");
const onInputChange = e => {
    setName(e.target.value);
    // console.log(name);

};
props.saveName(name);
    return (
        // <h2>Okay but, i am textbox</h2>
        <div>
            <form>
                <label htmlFor ="textbox1">Name</label>
                <input
                    type="text" 
                    id="textbox1" 
                    placeholder="Enter Your Full Name"
                    name="name"
                    value={name}
                    onChange={ e => onInputChange(e)}
                 />
            </form>

        </div>
    );
}

export default Name;