export async function fetchGraphQL(query: any, variables = {}) {
  const response = await fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();

  if (json.errors) {
    throw new Error("Failed to fetch GraphQL data");
  }

  return json.data;
}
