import React, { PropsWithChildren } from "react";
import { SWRConfig } from "swr";

const TestSwrConfig: React.FC<PropsWithChildren> = ({ children }) => (
  <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
);

export default TestSwrConfig;
