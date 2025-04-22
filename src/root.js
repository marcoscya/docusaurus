import React from "react";
import FloatingSidebar from "@site/src/components/SidebarFlotante/sidebar";

export default function Root({ children }) {
  return (
    <div style={{ position: "relative" }}>
      {children}
      <FloatingSidebar />
    </div>
  );
}
