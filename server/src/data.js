export const dashboard = {
  kpis: [
    { name: "Services", value: 128 },
    { name: "Active Tickets", value: 7 },
    { name: "Critical Alerts", value: 3 },
    { name: "Sites", value: 24 }
  ]
};

export const serviceInventory = [
  { id: "svc-1001", name: "L3VPN-West", owner: "Ops", status: "Active" },
  { id: "svc-1002", name: "E-Line-Dallas", owner: "NOC", status: "Active" },
  { id: "svc-1003", name: "MPLS-Core", owner: "Core", status: "Maintenance" }
];

export const alerts = [
  { id: "al-9001", severity: "Critical", source: "Router-R1", message: "BGP down", time: "2025-10-24T12:05:00Z" },
  { id: "al-9002", severity: "Warning", source: "Switch-S3", message: "High CPU", time: "2025-10-24T11:40:00Z" }
];

export const tickets = [
  { id: "t-45001", title: "Packet loss at EQ-DFW", priority: "P2", status: "Open" },
  { id: "t-45002", title: "NNI VLAN mismatch", priority: "P3", status: "In Progress" }
];

export const topology = [
  { id: "node-1", role: "PE", site: "DFW-01", status: "Up" },
  { id: "node-2", role: "P", site: "DFW-02", status: "Up" },
  { id: "node-3", role: "CE", site: "Customer-A", status: "Degraded" }
];
