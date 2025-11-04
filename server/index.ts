import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

var _filename = fileURLToPath(import.meta.url);
var _dirname = path.dirname(_filename);

const staticPath = path.resolve(_dirname, "dist");

app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;
