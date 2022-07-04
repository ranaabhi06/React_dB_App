import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Save = (props)=>{
    
    let navigate = useNavigate();

    let data = props.filledData;

    const submitHandler= async e =>{
        e.preventDefault();
        await axios.post("http://localhost:4000/users", data);
        // console.log(data);
    
        navigate ("/");
    };
    // function refreshPage() {
    //     window.location.reload(false);
    //   }
    let [flag,setflag] = useState(1);
    const saveHandler = () => {
        setflag(flag = flag+1);
        props.fla(flag);
    }
    return(
        <form onSubmit={e => submitHandler(e)}>
            <button type="submit" onClick={saveHandler }  >Save</button>
            </form>
    )  ;


}
export default Save;