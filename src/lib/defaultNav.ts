import type { NavItem } from "./content";

// Mirrors the old site's hardcoded menu; used until the Navigation table is edited in the CMS.
export const defaultNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Business to Business", children: [
    { label: "Design Studio India", href: "/business-to-business/design-studio-india" },
    { label: "Design Studio Asia", href: "/business-to-business/design-studio-asia" } ] },
  { label: "Direct to Consumer", children: [
    { label: "Aneka", href: "/direct-to-consumer/aneka" },
    { label: "Unsaid", href: "/direct-to-consumer/unsaid" } ] },
  { label: "Our Story", href: "/our-story" },
  { label: "Creative Process", href: "/creative-process/design-and-craftmanship" },
  { label: "Responsibility", children: [{ label: "Responsibility", href: "/our-story/responsiblity" }] },
  { label: "People", children: [
    { label: "Careers", href: "/people" },
    { label: "Internships", href: "/people/internship" },
    { label: "Internal Mobility", href: "/people/mobility" },
    { label: "Young Leadership", href: "/people/young-leadership" },
    { label: "See openings", href: "/people/job-openings/design-lead" } ] },
  { label: "Contact Us", href: "/contact-us" },
];
