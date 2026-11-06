import Header from "./Header";
import Slideshow from "./Slideshow";
import MissionVision from "./MissionVision";
import Team from "./Team";
import History from "./History";
import Project from "./Project";
import Donations from "./Donations"

function App(){
  return(
    <div>
      <Header/>
      <Slideshow/>
      <MissionVision/>
      <Team/>
      <History/>
      <Project/>
      <Donations/>
    </div>
  );
}
export default App;