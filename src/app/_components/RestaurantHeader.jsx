import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./RestaurantHeader.scss";

const RestaurantHeader = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Image
          src="/path/to/logo.png"
          alt="Restaurant Logo"
          width={100}
          height={100}
        />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/restaurant">Login/Signup</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default RestaurantHeader;
