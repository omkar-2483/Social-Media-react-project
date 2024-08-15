import "./Stories.scss";
import React, { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";

function Stories() {
    const {currUser}= useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currUser.profilePic} alt="" />
        <span>{currUser.name}</span>
      </div>

      {stories.map((story) => (
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
