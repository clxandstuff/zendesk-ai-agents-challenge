import React from "react";
import { Heading, Text } from "@radix-ui/themes";

import { useIntents } from "../services/intents/hooks";
import MainLayout from "../layouts/MainLayout";
import IntentCards from "../components/IntentList";

const IntentsPage: React.FC = () => {
  const { data: intents, error, isLoading } = useIntents();
  let mainContent = null;

  if (isLoading) {
    mainContent = <div>Loading intents...</div>;
  } else if (error) {
    mainContent = <div>Error fetching intents: {error.message}</div>;
  } else if (intents) {
    mainContent = <IntentCards intents={intents} />;
  }

  return (
    <MainLayout
      header={
        <>
          <Heading as="h1">Intents</Heading>
          <Text>Select pretrained intents:</Text>
        </>
      }
    >
      {mainContent}
    </MainLayout>
  );
};

export default IntentsPage;
