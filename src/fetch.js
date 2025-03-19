// this is the boilerplate for fetching

export default function fetchWord() {
  async function fetchWordDefinition(word) {
    const url = `https://od-api-sandbox.oxforddictionaries.com/api/v2/words/en-gb?q=${word}`;

    const headers = {
      Accept: "application/json",
      app_id: "YOUR_APP_ID",
      app_key: "YOUR_APP_KEY",
    };

    try {
      const response = await fetch(url, { method: "GET", headers });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const definition =
        data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];

      document.getElementById("definition").innerText =
        `Definition: ${definition}`;
    } catch (error) {
      console.error("Error fetching word definition:", error);
    }
  }

  // Example usage:
  fetchWordDefinition("believe");
}
