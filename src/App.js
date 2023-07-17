import { useState } from "react";
import "./App.css";

  function App() {
  const [userDetails, setUserDetails] = useState();

  function onInputChange(event) {
    const input = event.target.value;
    setTimeout(async () => {
      const userName = event.target.value;
      if (userName === input) {
        try {
          const data = await fetch(`https://api.github.com/users/${userName}`);
          const userDetails = await data.json();
          console.log(userDetails);
          setUserDetails(userDetails);
        } catch (error) {
          console.log(error);
        }
      }
    }, 1000);
  }

  return (
    <div className="App">
      <input onChange={onInputChange}></input>
      {userDetails && (
        <div>
          Result:
          {userDetails.name && <p>Name: {userDetails.name}</p>}
          {userDetails.company && <p>Company:{userDetails.company}</p>}
          {userDetails.email && <p>Email: {userDetails.email}</p>}
          {userDetails.gravatar_id && (
            <img src={userDetails.gravatar_id} alt="Img Not Avavilable"></img>
          )}
          {userDetails.followers && <p>Followers: {userDetails.followers}</p>}
          {userDetails.following && <p>Following: {userDetails.following}</p>}
        </div>
      )}
    </div>
  );
}
export default App;
