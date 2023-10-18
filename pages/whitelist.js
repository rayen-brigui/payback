import React from "react";

const whitelist = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScCAFJsPFiDBJOhbj0ravGmWYPulffQxBOwUiewK4A6Nq1hvA/viewform?embedded=true"
        width="1080"
        height="1080"
        frameborder="10"
        marginheight="0"
        marginwidth="0"
      >
        Chargement…
      </iframe>
    </div>
  );
};

export default whitelist;
