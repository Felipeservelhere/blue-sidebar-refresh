import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  ChevronsLeft, ChevronRight, Home, History, ArrowRightLeft, Box,
  BarChart3, Users, HandCoins, Settings, Package, FolderTree, Percent, Banknote, Landmark, Ticket, Building2, Activity, Plug, Building, FileText, Store, CreditCard, MessageCircle,
} from "lucide-react";
import { NewSaleIcon, InvoiceGavelIcon, EmployeeIcon, OnlineOrderIcon, CashIcon, PayableIcon } from "./nav-icons";
import logo from "@/assets/emp-logo.png.asset.json";

type NavIconType = React.ComponentType<React.SVGProps<SVGSVGElement> & { ref?: React.Ref<SVGSVGElement> }>;

type NavItem = { t: string; i: NavIconType; sub?: boolean; children?: { t: string; i: NavIconType }[] };
const groups: { label: string; dot: string; items: NavItem[] }[] = [
  { label: "Movimentações", dot: "bg-nav-active-edge", items: [
    { t: "Nova venda/cond.", i: NewSaleIcon }, { t: "Histórico vendas/cond.", i: History, sub: true },
    { t: "Notas Fiscais", i: InvoiceGavelIcon }, { t: "Entradas", i: ArrowRightLeft }, { t: "Estoque", i: Box },
    { t: "Relatórios", i: BarChart3 }, { t: "Funcionários", i: EmployeeIcon }, { t: "Pedidos online", i: OnlineOrderIcon },
  ]},
  { label: "Financeiro", dot: "bg-chart-2", items: [
    { t: "Caixa", i: CashIcon }, { t: "Contas a Receber", i: HandCoins }, { t: "Contas a Pagar", i: PayableIcon },
  ]},
  { label: "Cadastros", dot: "bg-chart-4", items: [
    { t: "Clientes/Fornecedores", i: Users }, { t: "Produtos", i: Package }, { t: "Grupos", i: FolderTree },
    { t: "Situações Tributárias", i: Percent }, { t: "Formas de Pagamento", i: Banknote },
    { t: "Contas Bancárias", i: Landmark }, { t: "Cupons", i: Ticket },
  ]},
  { label: "Administração", dot: "bg-chart-5", items: [
    { t: "Empresas (todas)", i: Building2 }, { t: "Telemetria", i: Activity },
  ]},
  { label: "Sistema", dot: "bg-chart-1", items: [
    { t: "Integrações", i: Plug, children: [{ t: "Marketplaces", i: Store }, { t: "Pagamentos", i: CreditCard }, { t: "WhatsApp", i: MessageCircle }] },
    { t: "Configurações", i: Settings, children: [{ t: "Minha Empresa", i: Building }, { t: "Fiscal", i: FileText }] },
  ]},
];

const EXTRAS: Record<string, string[]> = {
  Users: ["M16 3.128", "M22 21"], History: ["M12 7v5"], "FileText": ["M10 9H8", "M16 13H8", "M16 17H8"],
  ArrowRightLeft: ["m8 21", "M4 17h16"], ChartColumn: ["M18 17V9"],
  Receipt: ["M16 8h-6", "M12 17.5v-11"], Box: ["m3.3 7", "M12 22V12"], ShoppingBag: ["M16 10a4"],
  CreditCard: ["line"], HandCoins: ["circle"], Contact: ["circle", "M7 22v-2"], House: ["M15 21v-8"], Settings: ["circle"],
  Package: ["m7.5 4.27"], Banknote: ["M6 12h.01"],
  Landmark: ["M10 18v-7", "M14 18v-7"], Ticket: ["M13 5v2", "M13 17v2", "M13 11v2"], Plug: ["M12 22v-5"],
};
const iconName = (I: NavIconType) => ((I as { displayName?: string }).displayName ?? "").replace(/Icon$/, "");

function NavIcon({ Icon, on }: { Icon: NavIconType; on: boolean }) {
  const base = useRef<SVGSVGElement>(null);
  const draw = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const ex = EXTRAS[iconName(Icon)] ?? [];
    const isExtra = (el: Element) => el.hasAttribute("data-extra") || ex.some((k) => el.tagName === k || (el.getAttribute("d") ?? "").startsWith(k));
    const drawEls = Array.from(draw.current?.children ?? []);
    const any = drawEls.some(isExtra);
    drawEls.forEach((el) => { el.setAttribute("pathLength", "1");
      if (any && !isExtra(el)) el.setAttribute("display", "none");
      if (Icon === History && isExtra(el)) el.classList.add("clock-hands"); });
    if (any) Array.from(base.current?.children ?? []).forEach((el) => isExtra(el) && el.setAttribute("display", "none"));
  }, [Icon]);
  const c = on ? "text-nav-active-edge" : "";
  return (
    <span className="nav-icon relative h-5 w-5 shrink-0">
      <Icon ref={base} className={`nav-base absolute inset-0 h-5 w-5 ${c}`} />
      <Icon ref={draw} className={`nav-draw absolute inset-0 h-5 w-5 ${c}`} />
    </span>
  );
}

function Waves() {
  return (
    <svg viewBox="0 0 120 40" preserveAspectRatio="none" className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/3 text-nav-wave">
      <path d="M20 40 C50 40 55 15 85 12 C105 10 112 0 120 0 L120 40 Z" fill="currentColor" />
      <path d="M50 40 C75 38 80 22 100 20 C112 19 116 12 120 10 L120 40 Z" fill="currentColor" />
    </svg>
  );
}

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [fly, setFly] = useState<{ t: string; top: number; left: number } | null>(null);
  const item = (t: string, Icon: NavIconType, sub?: boolean, children?: { t: string; i: NavIconType }[]) => {
    const on = active === t || !!children?.some((c) => c.t === active);
    const btn = (
      <button key={t} title={t} data-active={on} onClick={() => setActive(t)}
        className={`group relative overflow-hidden flex w-full items-center gap-4 rounded-xl px-4 py-2.5 text-sm transition-colors ${on ? "bg-nav-active border-l-4 border-nav-active-edge font-semibold" : "text-nav-foreground hover:bg-nav-border"}`}>
        {on && <Waves />}
        <NavIcon Icon={Icon} on={on} />
        {!collapsed && <span className="relative flex-1 text-left">{t}</span>}
        {!collapsed && (sub || children) && <ChevronRight className={`relative h-4 w-4 transition-transform ${children ? "" : ""}`} />}
      </button>
    );
    if (!children) return btn;
    return (
      <div key={t} onMouseEnter={(e) => { const r = e.currentTarget.getBoundingClientRect(); setFly({ t, top: Math.min(r.top, window.innerHeight - (52 + children.length * 40) - 12), left: r.right }); }}
        onMouseLeave={() => setFly(null)}>
        {btn}
        {fly?.t === t && (
          <div className="fixed z-50 pl-3" style={{ top: fly.top, left: fly.left }}>
            <div className="animate-in fade-in slide-in-from-left-2 w-56 rounded-xl border border-nav-border bg-nav p-2 text-nav-foreground shadow-2xl">
              <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-widest text-nav-muted">{t}</p>
              {children.map((c) => (
                <button key={c.t} onClick={() => setActive(c.t)}
                  className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-nav-border ${active === c.t ? "font-semibold text-nav-active-edge" : ""}`}>
                  <NavIcon Icon={c.i} on={active === c.t} />{c.t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <aside className={`sticky top-0 flex h-screen shrink-0 flex-col bg-nav text-nav-foreground transition-all ${collapsed ? "w-20" : "w-72"}`}>
      <div className={`flex items-center px-5 pt-6 pb-4 ${collapsed ? "justify-center" : "justify-between"}`}>
        {!collapsed && <img src={logo.url} alt="EMP" className="h-12 w-auto" />}
        <button onClick={() => setCollapsed(!collapsed)} aria-label="Recolher menu"
          className="rounded-lg border border-nav-border p-2 hover:bg-nav-border">
          <ChevronsLeft className={`h-4 w-4 transition-transform ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-6">
        {!collapsed && <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-nav-muted">Meu Negócio</p>}
        {item("Dashboard", Home)}
        {groups.map((g) => (
          <div key={g.label} className="border-t border-nav-border pt-4 mt-4 first:mt-4">
            {!collapsed && (
              <p className="mb-2 flex items-center gap-2 px-3 text-xs font-semibold uppercase tracking-widest text-nav-muted">
                <span className={`h-2 w-2 rounded-full ${g.dot}`} />{g.label}
              </p>
            )}
            {g.items.map((x) => item(x.t, x.i, x.sub, x.children))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
