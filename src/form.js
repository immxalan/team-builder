import React, {useState} from "react";

const TeamForm = props => {
    const [teammate, setTeammate] = useState({
        name: "",
        email: "",
        role: ""
    })

const handleChanges = element=>{
        setTeammate({...teammate, [element.target.name]: element.target.value});
        console.log(teammate)
    }
const submitTeammate = element => {
    element.preventDefault();
    props.addNewTeammate(teammate);
    setTeammate({title: "", body: ""});
}
return(
    <form onSubmit={submitTeammate}>
         <label htmlFor="email">Name</label>
      <input
        id="title"
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="name"
        value={teammate.name}
      />
        <label htmlFor="email">Email</label>
      <input
        id="title"
        type="text"
        name="email"
        onChange={handleChanges}
        placeholder="email"
        value={teammate.email}
      />
         <label htmlFor="title">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        placeholder="role"
        value={teammate.role}
      />
        <button type="submit">Add Teammate</button>
    </form>
)
}
export default TeamForm;