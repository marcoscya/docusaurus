import React from "react";
import OriginalLayout from "@theme-original/Layout";
import FloatingSidebar from "@site/src/components/SidebarFlotante/sidebar";

export default function Layout(props) {
  return (
    <div style={{ position: "relative" }}>
      <OriginalLayout {...props} />
      <FloatingSidebar />
    </div>
  );
}
