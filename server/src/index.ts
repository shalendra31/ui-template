import express, { Request, Response } from "express";
import cors from "cors";
import { dashboard, serviceInventory, alerts, tickets, topology } from "./data.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.get("/api/health", (_: Request, res: Response) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

const list = <T,>(data: T[]) => (_: Request, res: Response) => res.json(data);
const detailById = <T extends Record<string, unknown>>(data: T[], key: keyof T = "id") =>
  (req: Request, res: Response) => {
    const item = data.find(d => String(d[key]) === String(req.params.id));
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  };

app.get("/api/dashboard", (_: Request, res: Response) => res.json(dashboard));
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
