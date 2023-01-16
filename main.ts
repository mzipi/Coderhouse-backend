import { serveListener } from "https://deno.land/std@0.157.0/http/server.ts";

const listener = Deno.listen({ port: 8000 });

await serveListener(listener, (request) => {
  let body = "";

  if(request.url.endsWith('/') && request.method === 'GET') {
    body = "GET /"
  }

  return new Response(body, { status: 200 });
});