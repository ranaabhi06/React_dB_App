import React from "react";


const Submit = (props) => (
  <>
    <input
    required={true}
      type="submit"
      value="Submit"
      onClick={(event) => {
        event.preventDefault();
        // props.onFormSubmit(event);
        // props.onFormSubmit1(event);
        // props.onFormSubmit2(event);
        // props.onFormSubmit3(event);
        // props.onFinSubmit(event);

        // props.getDb();
        props.postDB(event);
      }}
    />
  </>
);

export default Submit;
