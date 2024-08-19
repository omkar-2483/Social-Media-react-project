import "./Share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {DarkModeContext} from "../../context/DarkModeContext";

const Share = () => {

  const {currUser} = useContext(AuthContext)
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={`share share-${darkMode && "dark"}`}>
      <div className="container">
        <div className="top">
          <img
            src={currUser.profilePic}
            alt=""
          />
          <input type="text" placeholder={`What's on your mind ${currUser.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;