// Defaults for the menu and footer. They mirror the original hardcoded site and are used
// until the Navigation / Settings documents are edited in the CMS. Plain JS so the browser can import it.

export const defaultNav = [
  { label: "Home", href: "/" },
  { label: "Business to Business", children: [
    { label: "Design Studio India", href: "/business-to-business/design-studio-india" },
    { label: "Design Studio Asia", href: "/business-to-business/design-studio-asia" } ] },
  { label: "Direct to Consumer", children: [
    { label: "Aneka", href: "/direct-to-consumer/aneka" },
    { label: "Unsaid", href: "/direct-to-consumer/unsaid" } ] },
  { label: "Our Story", href: "/our-story" },
  { label: "Creative Process", href: "/creative-process/design-and-craftmanship" },
  { label: "Sustainability", children: [
    { label: "Responsibility", href: "/our-story/responsiblity" },
    { label: "Compliance", href: "/Walking Tree Group -  Ethical Business Policies.pdf", download: true } ] },
  { label: "People", children: [
    { label: "Careers", href: "/people" },
    { label: "Internships", href: "/people/internship" },
    { label: "Internal Mobility", href: "/people/mobility" },
    { label: "Young Leadership", href: "/people/young-leadership" },
    { label: "See openings", href: "/people/job-openings/design-lead" } ] },
  { label: "Contact Us", href: "/contact-us" },
];

export const defaultFooter = {
  phone: "+91-022-6667 4100",
  email: "hello@walkingtree.co",
  columns: [
    { title: "Explore", links: [
      { label: "Design Studio India", href: "/business-to-business/design-studio-india" },
      { label: "Design Studio Asia", href: "/business-to-business/design-studio-asia" },
      { label: "Aneka", href: "/direct-to-consumer/aneka" },
      { label: "Unsaid", href: "/direct-to-consumer/unsaid" } ] },
    { title: "About", links: [
      { label: "Creative Process", href: "/creative-process/design-and-craftmanship" },
      { label: "The Group", href: "/our-story" },
      { label: "Careers", href: "/people" },
      { label: "Investor", href: "/investor" } ] },
    { title: "Support", links: [{ label: "Contact Us", href: "/contact-us" }] },
  ],
  offices: [
    { country: "Europe", address: "Walking Tree EU Bv,<br/>Unsaid De Burburestraat 20, 2000 Antwerp, Belgium" },
    { country: "India", address: "Walking Tree Ventures Pvt Ltd<br/> D-10, Road no. 21, MIDC,<br/> Andheri (E), Mumbai, India 400093 <br/> <br/> Walking Tree India Pvt. Ltd  <br/>  Plot No, 117, Rd Number 18, <br/> Marol MIDC Industry Estate, <br/> Andheri East, Mumbai, India 400093" },
    { country: "China", address: "Walking Tree Asia <br/>  Room 802，Cuizhu <br/> building，Cuizhu North Road,<br/> Luohu district, Shenzhen, China." },
  ],
};

/** CMS navigation shape -> the shape the original menu components expect */
export function toMenu(nav) {
  return (nav || []).map((it, i) => it.children && it.children.length
    ? { panelOneHeading: it.label, id: i + 1, dropdownItems: it.children.map((c) => ({ label: c.label, link: c.href, ...(c.download ? { download: true } : {}) })) }
    : { panelOneHeading: it.label, link: it.href || "#" });
}
