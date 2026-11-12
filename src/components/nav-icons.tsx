import type { Ref, SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { ref?: Ref<SVGSVGElement> };
const mk = (name: string, body: React.ReactNode) => {
  const C = ({ ref, ...p }: P) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>{body}</svg>
  );
  C.displayName = name;
  return C;
};
const x = { "data-extra": "" };

export const NewSaleIcon = mk("NewSale", <>
  <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  <path d="M13 9v5" /><path d="M10.5 11.5h5" /><path {...x} d="M1 9h2" /><path {...x} d="M1.5 13h3" />
</>);
export const InvoiceGavelIcon = mk("InvoiceGavel", <>
  <path d="M12 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8l6 6v3" /><path d="M14 2v6h6" />
  <path d="M8 10h2" /><path d="M8 14h4" /><path d="M8 18h2" />
  <path {...x} d="m15 13 3-3 4 4-3 3z" /><path {...x} d="m16.5 15.5-4.5 4.5" /><path {...x} d="M13 22h6" />
</>);
export const EmployeeIcon = mk("Employee", <>
  <circle cx="9" cy="7" r="4" /><path d="M2 21v-2a4 4 0 0 1 4-4h5" />
  <rect x="14" y="14" width="8" height="7" rx="1" />
  <path {...x} d="M16 14v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" /><path {...x} d="M14 17.5h8" />
</>);
export const OnlineOrderIcon = mk("OnlineOrder", <>
  <path d="M3 10v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10" /><path d="M3 10h18" /><path d="M15 14a3 3 0 0 1-6 0" />
  <path {...x} d="M6.5 10a5.5 5.5 0 0 1 11 0" /><path {...x} d="M12 4.5c-1.6 1.5-2.4 3.5-2.4 5.5" /><path {...x} d="M12 4.5c1.6 1.5 2.4 3.5 2.4 5.5" /><path {...x} d="M7.6 7.2h8.8" />
</>);
export const CashIcon = mk("Cash", <>
  <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  <path d="M21 10h-4a2 2 0 0 0 0 4h4" />
  <path {...x} d="M6 5 15 2l2 3" /><path {...x} d="M17 12h.01" />
</>);
export const PayableIcon = mk("Payable", <>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" />
  <path d="M13.5 12h-2a1 1 0 0 0 0 2h1a1 1 0 0 1 0 2h-2" /><path d="M12 11v6" />
  <circle {...x} cx="12" cy="14" r="4.5" />
</>);
