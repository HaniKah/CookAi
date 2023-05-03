import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Creators() {
  const { creators } = useContext(DataContext);

  return (
    <div>
      <h1>This is creator page</h1>
      {/* {console.log(creators)} */}
    </div>
  );
}
