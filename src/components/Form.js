import React from "react";

function Form (props){

    return(
      <form >
      <label>
          Project:
          <br />
          <input
            type="String"
            name="name"
            readOnly
            value={props.project}
          />
        </label>
        <br />
        <label>
          Description:
          <br />
          <textarea
            type="String"
            name="desc"
            readOnly
            value={props.desc}
          />
        </label>
        <br />
        <label>
          Technologies:
          <br />
          <textarea
            type="String"
            name="tech"
            readOnly
            value={props.tech}
          />
        </label>
        <br />
        <label>
          Duration:
          <br />
          <input
            type="String"
            name="duration"
            readOnly
            value={props.duration}
          />
        </label>
        <br />
        <label>
          Team:
          <br />
          <input
            type="String"
            name="team"
            value={props.team}
          />
        <br />
      </form>
    );

}

export default Form;
