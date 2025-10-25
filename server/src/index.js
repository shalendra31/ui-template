import express from "express";
import cors from "cors";
import { dashboard, serviceInventory, alerts, tickets, topology } from "./data.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

const list = (data) => (req, res) => res.json(data);
const detailById = (data, key = "id") => (req, res) => {
  const item = data.find(d => String(d[key]) === String(req.params.id));
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
};

app.get("/api/dashboard", (req, res) => res.json(dashboard));

app.get("/api/services", list(serviceInventory));
app.get("/api/services/:id", detailById(serviceInventory));

app.get("/api/alerts", list(alerts));
app.get("/api/alerts/:id", detailById(alerts));

app.get("/api/tickets", list(tickets));
app.get("/api/tickets/:id", detailById(tickets));

app.get("/api/topology", list(topology));
app.get("/api/topology/:id", detailById(topology));

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
