"use client";

import Link from "next/link";
import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar d-flex">
      <div className="nav-container">
        <Link href="/" className="logo">
          Ashwini Upadhyay
        </Link>

        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
