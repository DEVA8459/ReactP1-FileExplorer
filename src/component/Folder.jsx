import { useState } from "react";
function Folder({ explorer }) {
  // reciving props here we can pass props as a argument and then destructur eor we can directly destrcture ({name of Prop here -explorer})

  const [expand, setExpand] = useState(false);
  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>
          {/* use win and ; (semicolon)for icons */}
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => {
            return (
              // <span>{exp.name}</span>
              // it render just once
              // to render it infinitely
              // known as recursively rendering the ui
              <Folder explorer={exp} />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
}

export default Folder;
