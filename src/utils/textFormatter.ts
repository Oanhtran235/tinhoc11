/**
 * Utility function to split text into distinct idea lines
 * Breaks onto a new line:
 * - When preceded by a semicolon (;)
 * - When preceded by a period (.) [preserving decimals like 3.5, abbreviations like tr.9, and ellipsis]
 * - When preceded by a question mark (?) or exclamation mark (!)
 * - When preceded by a colon (:) introducing a list of sub-items
 */
export function splitContentIntoIdeas(text: string | null | undefined): string[] {
  if (!text || typeof text !== 'string') return [];

  let str = text.trim();
  if (!str) return [];

  // 1) Semicolon: after ; (and optional closing quote/bracket/parenthesis)
  str = str.replace(/;([\)""\x27\x22\u201D\u2019\u00BB]?)\s*/g, ';$1\n');

  // 2) Period, exclamation, question mark:
  // Must NOT match:
  // - Abbreviations: tr., v.v., vd., gs., ts., tp., ths., e.g., i.e.
  // - Decimal numbers: 3.5, 1.2
  // - Ellipsis: ... or ..
  str = str.replace(/(?<!\btr|\bvd|\bv\.v|\bv|\be\.g|\bi\.e|\bts|\bgs|\btp|\bths)[\.?!](?!\d|\.)([\)""\x27\x22\u201D\u2019\u00BB]?)\s+/gi, (match) => {
    return match.trim() + '\n';
  });

  // 3) Colon followed by numbered or bulleted list item like ": 1)", ": -", ": a)"
  str = str.replace(/:\s+((?:[0-9]+[\)\.]|[a-zA-Z][\)\.]|[\-\–\—\•])\s+)/g, ':\n$1');

  // Split by newlines, trim, and filter out empty lines
  return str
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}
