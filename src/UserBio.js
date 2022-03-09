import { useState } from "react";
import { FiEdit } from "react-icons/fi";

// the component declaration
// by convention, we name it with a capital first letter
function UserBio(props) {
  // this is the state of the name itself
  const [bio, setBio] = useState("");
  // this is a toggle between showing and hiding the input
  const [showInput, setShowInput] = useState(false);

  // you clicked ok!
  function ok() {
    props.setBio(bio);
    console.log("bio", bio)
    setShowInput(false);
  }

  if (showInput) {
    return (
      <div className="user-bio">
        <input
          className="bio-input"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        />
        <button className="bio-submit-button" onClick={ok}>
          OK
        </button>
      </div>
    );
  }
  return (
    <div className="user-bio">
      <span className="user-bio-bio">{bio || "Write a few words about yourself and your style!"}</span>
      <FiEdit size="24" onClick={() => setShowInput(true)} />
    </div>
  );
}

export default UserBio;