export default async (request) => {
  const ua = (request.headers.get("user-agent") || "").toLowerCase();
  const isBrowser = /mozilla|chrome|safari|firefox|edg|opera/.test(ua);

  if (isBrowser) {
    return new Response(
      `<!DOCTYPE html><html><head><meta charset="utf-8"><title></title></head><body style="background:#fff"></body></html>`,
      { headers: { "content-type": "text/html; charset=utf-8" } }
    );
  }

  return new Response(`print("Helloooooo")`, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
  });
};

export const config = { path: "/*" };
