export default async (request) => {
  const h = request.headers;
  const isBrowser =
    h.has("sec-fetch-mode") ||
    h.has("sec-fetch-dest") ||
    h.has("upgrade-insecure-requests") ||
    (h.get("accept") || "").includes("text/html");

  if (isBrowser) {
    return new Response(
      `<html>
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>`,
      {
        status: 404,
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "no-store",
          "server": "nginx",
        },
      }
    );
  }

  return new Response(`print("Helloooooo")`, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
  });
};

export const config = { path: "/*" };