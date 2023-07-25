import { useState } from "react";
import "./NavBar.css";

const NavBar = ({ totalNotes }) => {
  return (
    <section className="logo">
      <h1 className="nav_title">FireNote</h1>
      <p className="nav__note_total">
        Total Notes {totalNotes ? `- ${totalNotes}` : ""}
      </p>
    </section>
  );
};

export default NavBar;
