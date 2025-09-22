import { createServer } from "./index.js";

const PORT = process.env.PORT || 8080;

const app = createServer();

if (import.meta.url === `file://${process.argv[1]}` || process.env.NODE_ENV === "production") {
  app.listen(PORT, () => {
    // Use console.log so this is visible in production logs
    console.log(`Server listening on port ${PORT}`);
  });
}

export default app;
