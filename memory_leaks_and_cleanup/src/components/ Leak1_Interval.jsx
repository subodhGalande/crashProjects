import { useEffect } from "react";
const IntervalLeak = () => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick");
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <>Interval</>;
};

export default IntervalLeak;
