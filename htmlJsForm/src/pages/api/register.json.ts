import type { APIRoute } from "astro";

export const prerender = false;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('Received request:', request);
    const data = await request.json();
    const { name, email, password } = data;
    
    console.log('Received data:', name, email, password);

    await sleep(1000);

    return new Response(
      JSON.stringify({
        message: "Success",
        data: data,
      }),
      {
        status: 200,
      }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: "Error",
        error: e,
      }),
      {
        status: 500,
      }
    );
  }
};
