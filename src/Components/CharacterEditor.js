import {useState, useEffect} from "react";

function CharacterEditor() {
    const [characters, setCharacters] = useState([]);
    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const [alignment, setAlignment] = useState("");
    const [background, setBackground] = useState("");
    const [klass, setKlass] = useState("");
    const [level, setLevel] = useState("");
    const [weapon_id, setWeapon_id] = useState("");
    const [user_id, setUser_id] = useState("");
    

    useEffect(() => {
      fetch("http://localhost:9292/characters")
      .then((r) => r.json())
      .then((data) => {
        setCharacters(data);
      });
     }, []);

    
     function showCreate() {
      let x = document.getElementById("createCharacterForm");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    function createCharacter() {
      fetch("http://localhost:9292/characters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, 
          race: race, 
          alignment: alignment, 
          background: background, 
          klass: klass, 
          level: level, 
          weapon_id: weapon_id,
          user_id: user_id}) 
    })
    .then(r => r.json())
    .then((data) => {
      setCharacters([...characters, data])
    })
    }
   


    function handleCharacterCreate(e) {
      e.preventDefault();
      createCharacter()
      setName("");
      setRace("");
      setAlignment("");
      setKlass("");
      setLevel("");
      setUser_id("");
      setWeapon_id("");
      setBackground("");
    }


    return (
      <div>
      <div>
        <h1 className="header">Characters</h1>
      </div>
      <button onClick={showCreate}>Character Creator</button>
      <div id="createCharacterForm">
      <form onSubmit={handleCharacterCreate}>
        <div>
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
          </div>
          <div>
            <label htmlFor="race">Race: </label>
         <input
         id="race" 
         name="race" 
         type="text" 
         value={race}
         onChange={(e) => {
             setRace(e.target.value);
         }}
     /> 
          </div>
          <div>
                    <label htmlFor="alignment">Alignment: </label>
                    <input 
                        id="alignment" 
                        name="alignment" 
                        type="text" 
                        value={alignment}
                        onChange={(e) => {
                            setAlignment(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="background">Background: </label>
                    <input 
                        id="background" 
                        name="background" 
                        type="text" 
                        value={background}
                        onChange={(e) => {
                            setBackground(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="klass">Class: </label>
                    <input 
                        id="klass" 
                        name="klass" 
                        type="text" 
                        value={klass}
                        onChange={(e) => {
                            setKlass(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="level">Level: </label>
                    <input 
                        id="level" 
                        name="level" 
                        type="number" 
                        value={level}
                        onChange={(e) => {
                            setLevel(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="weapon_id">Weapon Id: </label>
                    <input 
                        id="weapon_id" 
                        name="weapon_id" 
                        type="number" 
                        value={weapon_id}
                        onChange={(e) => {
                            setWeapon_id(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="user_id">User Id: </label>
                    <input 
                        id="user_id" 
                        name="user_id" 
                        type="number" 
                        value={user_id}
                        onChange={(e) => {
                            setUser_id(e.target.value);
                        }}
                    />
                </div>
                <input type='submit' value="Create Character!"/>
      </form>
      </div>
      <div>
      {characters.map((a)  => {
        return (
          <div id={a.id}>
            <p>Name: {a.name}</p>
            <p>Race: {a.race}</p>
            <p>Alignment: {a.alignment}</p>
            <p>Background: {a.background}</p>
            <p>Class: {a.klass}</p>
            <p>Level: {a.level}</p>
          </div>
          )
      })}
  
      </div>
      </div>
    )

}


export default CharacterEditor