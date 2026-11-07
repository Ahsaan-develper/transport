import { Layers, Package, Route, Snowflake, Truck, Zap } from "lucide-react";
import type { ServiceItem } from "./types";

export const services: ServiceItem[] = [
  {
    title: "Full Truckload",
    description: "Dedicated trailer for your freight, pickup to delivery, with no shared space.",
    icon: Truck,
    points: ["Direct point-to-point", "Fewer touches, less damage risk"],
  },
  {
    title: "Less-than-Truckload",
    description: "Ship smaller loads and pay only for the trailer space you use.",
    icon: Package,
    points: ["Shared trailer space", "Cost-effective for partial loads"],
  },
  {
    title: "Reefer / Temperature Controlled",
    description: "Temperature-controlled trailers for food, pharma, and perishable freight.",
    icon: Snowflake,
    points: ["Set-point monitoring", "Pre-cooled trailers on request"],
  },
  {
    title: "Flatbed",
    description: "Open-deck trailers for steel, lumber, machinery, and oversized freight.",
    icon: Layers,
    points: ["Tarps and straps available", "Side and top loading"],
  },
  {
    title: "Expedited",
    description: "Time-critical freight moved fast with priority dispatch and direct routing.",
    icon: Zap,
    points: ["Priority carrier matching", "Direct, non-stop routing"],
  },
  {
    title: "Owner-Operator Dispatch",
    description: "Load booking, rate negotiation, and paperwork support for independent drivers.",
    icon: Route,
    points: ["Load board sourcing", "Rate negotiation and paperwork"],
  },
];
