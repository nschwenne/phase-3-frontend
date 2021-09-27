import {useState, useEffect} from "react";

function WeaponEditor() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/weapons")
    .then((r) => r.json())
    .then((data) => {
      setWeapons(data);
    });
   }, []);

   
  function ShowReadFunction() {
    let x = document.getElementById("readDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  return (
    <div>
    <div>
      <h1 className="header">Weapons</h1>
      <button>Create</button>
      <span>&nbsp;&nbsp;&nbsp;</span>
      
      <button>Update</button>
      <span>&nbsp;&nbsp;&nbsp;</span>
    </div>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <div id="readDiv">
        {weapons.map((a)  => {
  return (
    <div>
        <h1>Weapon: {a.name}</h1>
        <div>
          <p>Characters</p>
          <ul>
          {a.characters.map(weaponUsers =>
            <li>
              <p>Name: {weaponUsers.name}</p>
              <p>Level: {weaponUsers.level}</p>
            </li>)}
            </ul>
          </div>
    </div>
    
    )
})}
    </div>
    </div>
  )
}



export default WeaponEditor