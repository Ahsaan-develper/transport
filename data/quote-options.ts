import type { SelectOption } from "./types";

export const equipmentValues = [
  "dry-van",
  "reefer",
  "flatbed",
  "step-deck",
  "box-truck",
  "ltl",
  "expedited",
] as const;

export const equipmentOptions: SelectOption[] = [
  { value: "dry-van", label: "Dry Van" },
  { value: "reefer", label: "Reefer (Temperature Controlled)" },
  { value: "flatbed", label: "Flatbed" },
  { value: "step-deck", label: "Step Deck" },
  { value: "box-truck", label: "Box Truck" },
  { value: "ltl", label: "Less-than-Truckload (LTL)" },
  { value: "expedited", label: "Expedited" },
];
