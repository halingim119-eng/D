export default async (request) => {
  const h = request.headers;
  const isBrowser =
    h.has("sec-fetch-mode") ||
    h.has("sec-fetch-dest") ||
    h.has("upgrade-insecure-requests") ||
    (h.get("accept") || "").includes("text/html");

  if (isBrowser) {
    const host = new URL(request.url).hostname;
    const page = `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
<title>${host}</title>
<style>
:root{color-scheme:light dark}
html,body{margin:0;height:100%}
body{background:#fff;color:#5f6368;font-family:Roboto,"Noto Sans KR","Segoe UI",Arial,sans-serif;font-size:100%}
@media (prefers-color-scheme:dark){body{background:#202124}h1{color:#e8eaed!important}p,.code{color:#9aa0a6!important}}
.wrap{padding:0 12.5%;max-width:600px;margin:0 auto;padding-top:64px}
.icon{width:72px;display:block;margin:0 0 40px}
h1{font-size:1.6em;font-weight:500;color:#202124;margin:0 0 16px}
p{font-size:1em;line-height:1.6;margin:0 0 20px;word-break:break-all;color:#5f6368}
.code{font-size:.8em;color:#5f6368;margin-top:24px}
.btns{margin-top:56px;text-align:right}
button{background:#1a73e8;color:#fff;border:0;border-radius:24px;padding:13px 24px;font-size:.9em;font-family:inherit;font-weight:500}
button:active{background:#185abc}
</style></head>
<body><div class="wrap">
<img class="icon" src="https://i.ibb.co/cWb1Mr5/Screenshot-20261027-160620-Chrome.png" alt="">
<h1>사이트에 연결할 수 없음</h1>
<p>${host}에 오타가 있는지 확인하세요.</p>
<div class="code">DNS_PROBE_FINISHED_NXDOMAIN</div>
<div class="btns"><button onclick="location.reload()">새로고침</button></div>
</div></body></html>`;

    return new Response(page, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  }

  return new Response(`print("Helloooooo")`, {
    headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
  });
};

export const config = { path: "/*" };