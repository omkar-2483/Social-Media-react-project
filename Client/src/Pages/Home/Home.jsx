import "./Home.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Profile from "../Profile/Profile";
import Share from "../../components/share/Share";

function Home() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={`home home-${darkMode? "dark":""}`}>
      <Stories />
      <Share />
      <Posts />
    </div>
  );
}

export default Home;
