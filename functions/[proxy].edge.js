export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const url = new URL(request.url);
  console.log("[BLUE] Edge Function triggered for:", url.pathname);

  // Forward the request or modify as needed
  const response = await fetch(request);

  return response;
}