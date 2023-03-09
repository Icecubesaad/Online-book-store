import React from "react";
import HeaderHomepage from "./HeaderHomepage";
import Options from "./Options";
export default function Homepage({children}) {
  return (
    <>
        <HeaderHomepage />
        <Options />
		{children}
    </>
  );
}
