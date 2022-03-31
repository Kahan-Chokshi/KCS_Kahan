import './App.css';
import Team from './Components/MyFirstClassComponent';
import TeamFun from './Components/MyFirstFunctionComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Team/>}></Route>
        <Route path="/TeamFun" element={<TeamFun/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
