import "./styles.css";
import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./component/Folder";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  // console.log(explorerData)
  return (
    <div className="App">
      <h1>hello</h1>
      <Folder explorer={explorerData} />
      {/* passing Explorer datat as prop to folder */}
    </div>
  );
}
