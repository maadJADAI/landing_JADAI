export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/** #RRGGBB → "r,g,b" para componer rgba() en canvas. */
export function hexToRgb(hex: string): string {
  const h = hex.trim().replace("#", "");
  const n = parseInt(
    h.length === 3 ? h.split("").map((c) => c + c).join("") : h,
    16,
  );
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}

/** Lee un token CSS (--var) resuelto sobre un elemento. */
export function readToken(el: Element, token: string): string {
  return getComputedStyle(el).getPropertyValue(token).trim();
}
