// import hands from "/assets/hands.png";
import { Route, Routes } from "react-router-dom";
import Card from "./Components/Card";
import Greetings from "./Components/Greetings";
import FreelanceWork from "./Components/FreelanceWork";

function App() {
  return (
    <Card>
      <div className='border-r-2 border-[#525034] p-8 pr-14'>
        <Routes>
          <Route path='/' Component={Greetings} />
          <Route path='/freelance-work' Component={FreelanceWork} />
          <Route path='/education' Component={FreelanceWork} />
          <Route path='/professional-work' Component={FreelanceWork} />
          <Route path='/personal-projects' Component={FreelanceWork} />
          {/* <Route
              path='/open-source-contributions'
              Component={FreelanceWork}
            /> */}
          <Route
            path='/achievement-and-certificates'
            Component={FreelanceWork}
          />
        </Routes>
      </div>
    </Card>
  );
}

export default App;
