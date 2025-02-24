import React from "react";
import { Theme } from "@radix-ui/themes";

import IntentsPage from "./pages/IntentsPage";
import "./index.css";

const App: React.FC = () => {
  return (
    <Theme>
      <IntentsPage />
    </Theme>
  );
};

export default App;
