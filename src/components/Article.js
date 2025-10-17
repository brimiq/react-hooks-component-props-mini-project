import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let minutesDisplay = "";

  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    minutesDisplay = "☕️".repeat(cups);
  } else {
    const bentos = Math.ceil(minutes / 10);
    minutesDisplay = "🍱".repeat(bentos);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {minutesDisplay} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
