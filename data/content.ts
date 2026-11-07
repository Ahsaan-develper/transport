import {
  CircleDollarSign,
  ClipboardList,
  Clock,
  Navigation,
  PackageCheck,
  Radio,
  Search,
  ShieldCheck,
} from "lucide-react";
import type {
  FleetItem,
  HubNode,
  StatItem,
  StepItem,
  TestimonialItem,
  WhyItem,
} from "./types";

// Sample figures: replace with your real numbers.
export const stats: StatItem[] = [
  { value: "250K+", label: "Loads moved" },
  { value: "98%", label: "On-time delivery", positive: true },
  { value: "3,500+", label: "Active carriers" },
  { value: "12", label: "Years in business" },
];

export const steps: StepItem[] = [
  {
    title: "Request",
    description: "Send pickup, drop-off, and equipment details. We reply with a rate.",
    icon: ClipboardList,
  },
  {
    title: "Match",
    description: "We match your load with a vetted carrier on your lane.",
    icon: Search,
  },
  {
    title: "Dispatch",
    description: "The driver is dispatched and you get pickup confirmation and updates.",
    icon: Radio,
  },
  {
    title: "Deliver",
    description: "Freight arrives on schedule and proof of delivery is sent to you.",
    icon: PackageCheck,
  },
];

// Typical equipment figures. Actual limits vary by trailer, state, and carrier.
export const fleet: FleetItem[] = [
  {
    name: "Dry Van",
    length: "53 ft",
    payload: "Up to ~45,000 lbs",
    capacity: "Up to 26 pallets",
    bestFor: "Boxed, palletized, and packaged goods",
  },
  {
    name: "Reefer",
    length: "53 ft",
    payload: "Up to ~43,000 lbs",
    capacity: "Up to 26 pallets",
    bestFor: "Food, pharma, and temperature-sensitive freight",
  },
  {
    name: "Flatbed",
    length: "48–53 ft",
    payload: "Up to ~48,000 lbs",
    capacity: "Open deck, side loading",
    bestFor: "Steel, lumber, and machinery",
  },
  {
    name: "Step Deck",
    length: "48 ft",
    payload: "Up to ~43,000 lbs",
    capacity: "Lower deck for taller freight",
    bestFor: "Tall equipment that exceeds flatbed height limits",
  },
  {
    name: "Box Truck",
    length: "16–26 ft",
    payload: "Up to ~10,000 lbs",
    capacity: "Up to 12 pallets",
    bestFor: "Local and regional deliveries, smaller loads",
  },
];

export const regions: string[] = [
  "West Coast",
  "Mountain West",
  "Midwest",
  "South",
  "Northeast",
];

export const hubs: HubNode[] = [
  { name: "Seattle", x: 60, y: 50, anchor: "start" },
  { name: "Los Angeles", x: 70, y: 250, anchor: "start" },
  { name: "Dallas", x: 270, y: 270, anchor: "start" },
  { name: "Chicago", x: 370, y: 110, anchor: "start" },
  { name: "Atlanta", x: 440, y: 250, anchor: "start" },
  { name: "New York", x: 545, y: 90, anchor: "end" },
];

export const routes: ReadonlyArray<readonly [string, string]> = [
  ["Seattle", "Chicago"],
  ["Seattle", "Los Angeles"],
  ["Los Angeles", "Dallas"],
  ["Dallas", "Chicago"],
  ["Dallas", "Atlanta"],
  ["Chicago", "New York"],
  ["Atlanta", "New York"],
  ["Chicago", "Atlanta"],
];

export const whyUs: WhyItem[] = [
  {
    title: "24/7 Dispatch",
    description: "A real person answers day or night, so problems get solved before they cost you.",
    icon: Clock,
  },
  {
    title: "Real-Time Updates",
    description: "Pickup, in-transit, and delivery updates without chasing anyone.",
    icon: Navigation,
  },
  {
    title: "Vetted Carriers",
    description: "Carriers are checked for authority, insurance, and safety record before they haul.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Rates",
    description: "The rate we quote is the rate you pay. No surprise fees on the invoice.",
    icon: CircleDollarSign,
  },
];

// Sample testimonials: replace with real customer feedback.
export const testimonials: TestimonialItem[] = [
  {
    quote: "They found us a reefer truck within hours and kept us updated until delivery.",
    name: "Sample Customer",
    role: "Logistics Manager",
    company: "Fresh Foods Co.",
  },
  {
    quote: "Fair rates and no games. Dispatch keeps my truck loaded on the lanes I want.",
    name: "Sample Driver",
    role: "Owner-Operator",
    company: "Independent Carrier",
  },
  {
    quote: "Our flatbed loads show up on schedule, and when plans change they call us first.",
    name: "Sample Customer",
    role: "Operations Lead",
    company: "Steel Supply Inc.",
  },
];
