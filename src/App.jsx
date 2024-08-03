// import hands from "/assets/hands.png";
import { Route, Routes } from "react-router-dom";
import Card from "./Components/Card/Card";

import nav from "./Data/Navigation";

function App() {
  return (
    <Card>
      <Routes>
        {nav.map((item) => (
          <Route key={item.path} path={item.path} Component={item.component} />
        ))}
      </Routes>
    </Card>
  );
}

export default App;
