export interface Kpi { name: string; value: number; }
export interface Service { id: string; name: string; owner: string; status: "Active" | "Maintenance"; }
export interface Alert { id: string; severity: "Critical" | "Warning" | "Info"; source: string; message: string; time: string; }
export interface Ticket { id: string; title: string; priority: "P1" | "P2" | "P3" | "P4"; status: "Open" | "In Progress" | "Closed"; }
export interface TopologyNode { id: string; role: "PE" | "P" | "CE" | string; site: string; status: "Up" | "Degraded" | "Down"; }
