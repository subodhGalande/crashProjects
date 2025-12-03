import IntervalLeak from "./components/ Leak1_Interval";
import Leak2_EventListener from "./components/Leak2_EventListener";
import Leak3_Fetch from "./components/Leak3_Fetch";
import Leak4_Websocket from "./components/Leak4_Websocket";
import Leak5_AsyncRace from "./components/Leak5_AsyncRace";

import "./App.css";

function App() {
  return (
    <>
      <IntervalLeak />
      <Leak2_EventListener />
      <Leak3_Fetch />
      <Leak4_Websocket />
      <Leak5_AsyncRace id={5} />
    </>
  );
}

export default App;
