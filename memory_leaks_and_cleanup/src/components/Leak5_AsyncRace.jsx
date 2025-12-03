import { useEffect, useState } from "react";

function fakeSlowAPI(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data " + id), 1500),
  );
}

export default function Leak5_AsyncRace({ id }) {
  const [data, setData] = useState("");

  useEffect(() => {
    let isCancelled = false;

    fakeSlowAPI(id).then((res) => {
      if (!isCancelled) setData(res);
    });

    return () => {
      isCancelled = true;
    };
  }, [id]);

  return <p>{data}</p>;
}
