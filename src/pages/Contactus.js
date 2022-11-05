import React from "react";
import "../css/contact.css";

export default function Contactus() {
  return (
    <div>
      <form class="form" action="http://localhost:8000/contactus" method="post">
        <input
          name="name"
          type="text"
          class="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          class="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          class="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
