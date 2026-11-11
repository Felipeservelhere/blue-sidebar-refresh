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
  <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
  <path d="M12 7v6" /><path d="M9 10h6" /><path {...x} d="M8 16h8" />
</>);
export const InvoiceGavelIcon = mk("InvoiceGavel", <>
  <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" /><path d="m16 16 6-6" />
  <path d="m21.5 10.5-8-8" /><path d="m8 8 6-6" /><path d="m8.5 7.5 8 8" /><path {...x} d="M14 22h8" />
</>);
export const EmployeeIcon = mk("Employee", <>
  <circle cx="9" cy="7" r="4" /><path d="M2 21v-2a4 4 0 0 1 4-4h5" />
  <rect x="14" y="14" width="8" height="7" rx="1" />
  <path {...x} d="M16 14v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" /><path {...x} d="M14 17.5h8" />
</>);
export const OnlineOrderIcon = mk("OnlineOrder", <>
  <circle cx="12" cy="12" r="10" /><path {...x} d="M2 12h20" />
  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
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
