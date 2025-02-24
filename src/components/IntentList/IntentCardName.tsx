import { Button, DataList, Dialog, Flex, Text } from "@radix-ui/themes";
import React from "react";

import { Intent } from "../../services/intents/types";

interface IntentCardNameProps {
  intent: Intent;
}

const IntentCardName: React.FC<IntentCardNameProps> = ({ intent }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="p-0">
          <Text size="4" weight="bold" color="blue" className="hover:underline">
            {intent.name}
          </Text>
        </button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <DataList.Root>
          <DataList.Item>
            <DataList.Label minWidth="88px">Name</DataList.Label>
            <DataList.Value>
              <Dialog.Title size="3" as="h4">
                {intent.name}
              </Dialog.Title>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Description</DataList.Label>
            <DataList.Value>
              <Dialog.Description size="2">
                {intent.description}
              </Dialog.Description>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Expressions count</DataList.Label>
            <DataList.Value>
              <Text>{intent.trainingData.expressionCount}</Text>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Expressions</DataList.Label>
            <DataList.Value>
              <Flex direction="column">
                {intent.trainingData.expressions.length > 0 &&
                  intent.trainingData.expressions.map((expression) => {
                    return (
                      <Text key={expression.id} className="italic">
                        - {expression.text}
                      </Text>
                    );
                  })}
              </Flex>
            </DataList.Value>
          </DataList.Item>
        </DataList.Root>
        <Flex justify="end" mt="4">
          <Dialog.Close>
            <Button>Close</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default IntentCardName;
