// import hands from "/assets/hands.png";
import { Route, Routes } from "react-router-dom";
import Card from "./Components/Card/Card";

import nav from "./Data/Navigation";

function App() {
  return (
    <Card>
      <div className='border-r-2 border-[#525034] p-8 pr-14'>
        <Routes>
          {nav.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              Component={item.component}
            />
          ))}
        </Routes>
      </div>
    </Card>
  );
}

export default App;
