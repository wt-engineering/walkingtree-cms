// Drop-in replacement for the old Sanity client: same `fetch(groq)` API, served from Supabase.
const client = {
  fetch: async (query, params) => (await import("./lib/legacy/server")).fetchGroq(query, params),
  config: () => ({}),
};
export default client;
