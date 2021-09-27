import {useState, useEffect} from "react";

function UserEditor() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [nameEdit, setNameEdit] = useState([])

    
 useEffect(() => {
  fetch("http://localhost:9292/users")
  .then((r) => r.json())
  .then((data) => {
    setUsers(data);
  });
 }, []);


function createUser() {
        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name }) 
        })
        .then(r => r.json())
        .then((data) => {
          setUsers([...users, data])
        })
         
        
}

    function handleCreate(e) {
      e.preventDefault();
      createUser()
      setName("");
    }

    function deleteUser(id) {
      fetch((`http://localhost:9292/users/${id}`), 
      {
        method: "DELETE"
      }
      )
      window.location.reload()
    }

    return (
      <div>

        <div>
        <h1 className="header">Users</h1>
        </div>
        <div>
          <p>Create New User!</p>
          <form onSubmit={handleCreate}>
          <label htmlFor="name">Name: </label>
          <input
          id="name" 
          name="name" 
          type="text" 
          value={name}
          onChange={(e) => {
              setName(e.target.value);
          }}
          />
          <input type='submit' value="Create User!"/>
          </form>
        </div>
        <div>
          {users.map((a)  => {
            return (
              <div id={a.id}>
                <p> User {a.id}: {a.name}</p>
              <div>
                <button className="deleteButton" onClick = {() => {
                  deleteUser(a.id)
                }}>
                  Delete User
                </button>
                <div> 
                <ul>
                  <h1>Characters:</h1>
            {a.characters.map(userCharacters =>
              <li>
                Name: {userCharacters.name}
                <br></br>
                Level: {userCharacters.level}
              </li>
              )}
              </ul> 
        </div>
              </div>
              
              </div>
            )
          })}
          
        </div>


      </div>
       )
}


export default UserEditor