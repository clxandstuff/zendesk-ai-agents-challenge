import { Intent } from "../../services/intents/types";

const intents: Intent[] = [
  {
    id: "34d7831e137a4016a55f98926800a643",
    name: "Greeting",
    description: "The visitor says hello.",
    trainingData: {
      expressionCount: 145,
      expressions: [
        {
          id: "6399fd6989984c7b871c6301744b0af5",
          text: "Hello",
        },
      ],
    },
    reply: {
      id: "f35d7e0936a44102bac9cb96c81eec3b",
      text: "Hello :) How can I help you?",
    },
  },
  {
    id: "b6ec3deac5f94500aef55d9c410e37f7",
    name: "Goodbye",
    description: "The visitor says goodbye.",
    trainingData: {
      expressionCount: 86,
      expressions: [
        {
          id: "6bb364d2e3364e03b4ca30c6e46ea1dd",
          text: "Thanks, bye!",
        },
      ],
    },
    reply: {
      id: "9ba88034a89e4fdbb532bdb092717fa1",
      text: "Goodbye, have a nice day!",
    },
  },
];
export default intents;
