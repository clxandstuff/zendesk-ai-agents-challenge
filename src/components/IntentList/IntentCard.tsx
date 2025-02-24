import React from "react";
import { Card, CheckboxGroup, Flex, Text } from "@radix-ui/themes";

import { Intent } from "../../services/intents/types";
import IntentCardName from "./IntentCardName";

interface IntentCardProps {
  intent: Intent;
}

const IntentCard: React.FC<IntentCardProps> = ({ intent }) => {
  return (
    <Card className="hover:bg-gray-200">
      <label htmlFor={intent.id} className="flex flex-col">
        <Flex justify="between" align="center" mb="2">
          <Flex direction="column" align="start">
            <IntentCardName intent={intent} />
            <Text size="2" color="gray" mb="2">
              {intent.description}
            </Text>
            <Flex direction="column">
              <Text weight="medium" size="2">
                Example Expression:
              </Text>
              {intent.trainingData.expressions.length > 0 && (
                <Text className="italic">
                  - {intent.trainingData.expressions[0].text}
                </Text>
              )}
            </Flex>
          </Flex>
          <CheckboxGroup.Item value={intent.id} id={intent.id} />
        </Flex>
      </label>
    </Card>
  );
};

export default IntentCard;
