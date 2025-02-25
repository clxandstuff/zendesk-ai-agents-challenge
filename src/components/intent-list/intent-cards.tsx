import React, { useCallback } from "react";
import { Button, CheckboxGroup, Grid } from "@radix-ui/themes";

import { Intent } from "../../services/intents/types";
import IntentCard from "./intent-card";

interface IntentCardsProps {
  intents: Intent[];
  defaultSelectedIntents?: string[];
  selectAll?: boolean;
  onValueChange?: (value: string[]) => void;
}

const IntentCards: React.FC<IntentCardsProps> = ({
  intents,
  defaultSelectedIntents = [],
  selectAll = true,
  onValueChange = () => {},
}) => {
  const [selectedIntents, setSelectedIntents] = React.useState(
    defaultSelectedIntents,
  );
  const allSelected = intents.length === selectedIntents.length;

  const toggleSelectIntent = useCallback((values: string[]) => {
    setSelectedIntents(values);
    onValueChange(values);
  }, []);

  const toggleSelectAll = useCallback(() => {
    if (allSelected) {
      toggleSelectIntent([]);
    } else {
      toggleSelectIntent(intents.map((intent) => intent.id));
    }
  }, [toggleSelectIntent, allSelected]);

  return (
    <div>
      {selectAll ? (
        <Button onClick={toggleSelectAll} my="4">
          {allSelected ? "Unselect All" : "Select All"}
        </Button>
      ) : null}
      <CheckboxGroup.Root
        onValueChange={toggleSelectIntent}
        value={selectedIntents}
      >
        <Grid columns="3" gap="3" rows="repeat(2,)" width="auto">
          {intents.map((intent) => (
            <IntentCard key={intent.id} intent={intent} />
          ))}
        </Grid>
      </CheckboxGroup.Root>
    </div>
  );
};

export default IntentCards;
