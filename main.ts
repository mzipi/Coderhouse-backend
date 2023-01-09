import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

serve(() => new Response("Hello world!"));