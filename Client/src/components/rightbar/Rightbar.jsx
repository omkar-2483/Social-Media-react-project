import {React, useContext} from "react";
import "./Rightbar.scss";
import { DarkModeContext } from '../../context/DarkModeContext';

function Rightbar() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={`Rightbar right-${darkMode? "dark":""}`}>
      <div className="container">
        <div className="item">
          <span>Suggested for you</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <span>Omkar Kasture</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <span>Omkar Kasture</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <span>Omkar Kasture</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <span>Omkar Kasture</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <span>Omkar Kasture</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <span>Omkar Kasture</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <p>
                <span>John Doe</span> Changed his profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <p>
                <span>John Doe</span> Changed his profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <p>
                <span>John Doe</span> Changed his profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <p>
                <span>John Doe</span> Changed his profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <p>
                <span>John Doe</span> Changed his profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <p>
                <span>John Doe</span> Changed his profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <p>
                <span>John Doe</span> Changed his profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" />
              <p>
                <span>John Doe</span> Changed his profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
