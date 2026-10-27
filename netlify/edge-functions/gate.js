export default async (request) => {
  const h = request.headers;
  const isBrowser =
    h.has("sec-fetch-mode") ||
    h.has("sec-fetch-dest") ||
    h.has("upgrade-insecure-requests") ||
    (h.get("accept") || "").includes("text/html");

  if (isBrowser) {
    return new Response(
      `<!DOCTYPE html><html><head><meta charset="utf-8"><title></title></head><body style="background:#fff"></body></html>`,
      { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } }
    );
  }

  return new Response(`print("Helloooooo")`, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
  });
};

export const config = { path: "/*" };