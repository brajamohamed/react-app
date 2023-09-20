import Home from "./Components/Home/home";
import "./App.css";

let users = [
  {
    category: "FREE",
    rate: 0,
    user: "Single User",
    upp: false,
    dps: false,
    fsd: false,
    msr: false,
  },
  {
    category: "PLUS",
    rate: 9,
    user: "5 Users",
    upp: true,
    dps: true,
    fsd: true,
    msr: false,
  },
  {
    category: "PRO",
    rate: 49,
    user: "Unlimited Users",
    upp: true,
    dps: true,
    fsd: true,
    msr: true,
  },
];

const App = () => {
  return (
    <div id="app-container">
      <Home users={users} />
    </div>
  );
};

export default App;
