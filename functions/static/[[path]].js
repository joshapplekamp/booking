export async function onRequest(context) {
  return new Response("test", {
    headers: {
      "Set-Cookie": "test_session=abc123; path=/",
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain"
    }
  });
}
