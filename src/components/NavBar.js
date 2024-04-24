import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  return <nav>{links.map((linkObject)=><a key={linkObject} href={`#${linkObject}`}>{linkObject}</a>)}</nav>;
  
}

export default NavBar;
