import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

var _filename = fileURLToPath(import.meta.url);
var _dirname = path.dirname(_filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(_dirname, "public")
      : path.resolve(_dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3e3;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
