export const fetchIntents = async () => {
  const response = await fetch("intents.json");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
