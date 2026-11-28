import { evaluate, parse } from "groq-js";
import { loadDataset } from "./dataset";

// Sanity's API lets explicit keys win over a trailing `...`; groq-js lets the splat overwrite them.
// Moving the splat first gives the Sanity behaviour: {"a": x, ...} -> {..., "a": x}
const splatFirst = (q: string) => q.replace(/\{([^{}]*?),\s*\.\.\.\s*\}/g, "{...,$1}");

export async function fetchGroq(rawQuery: string, params: Record<string, unknown> = {}) {
  const query = splatFirst(rawQuery);
  const dataset = await loadDataset();
  const result = await evaluate(parse(query, { params }), { dataset, params });
  return await result.get();
}
