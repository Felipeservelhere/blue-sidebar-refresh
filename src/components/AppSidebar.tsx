import { useEffect, useRef, useState } from "react";
import {
  ChevronsLeft, ChevronRight, Home, Receipt, History, FileText, ArrowRightLeft, Box,
  BarChart3, Users, ShoppingBag, Wallet, HandCoins, CreditCard, Contact, Settings,
} from "lucide-react";
import logo from "@/assets/emp-logo.png.asset.json";

const groups = [
  { label: "Movimentações", dot: "bg-nav-active-edge", items: [
    { t: "Nova venda/cond.", i: Receipt }, { t: "Histórico vendas/cond.", i: History, sub: true },
    { t: "Notas Fiscais", i: FileText }, { t: "Entradas", i: ArrowRightLeft }, { t: "Estoque", i: Box },
    { t: "Relatórios", i: BarChart3 }, { t: "Funcionários", i: Users }, { t: "Pedidos online", i: ShoppingBag },
  ]},
  { label: "Financeiro", dot: "bg-chart-2", items: [
    { t: "Caixa", i: Wallet }, { t: "Contas a Receber", i: HandCoins }, { t: "Contas a Pagar", i: CreditCard },
  ]},
  { label: "Cadastros", dot: "bg-chart-4", items: [
    { t: "Clientes/Fornecedores", i: Contact }, { t: "Configurações", i: Settings },
  ]},
];

function NavIcon({ Icon, on }: { Icon: typeof Home; on: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => { ref.current?.querySelectorAll("*").forEach((el) => el.setAttribute("pathLength", "1"));
    if (Icon === History) ref.current?.lastElementChild?.classList.add("clock-hands"); }, [Icon]);
  return <Icon ref={ref} className={`nav-icon h-5 w-5 shrink-0 ${on ? "text-nav-active-edge" : ""}`} />;
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
  const item = (t: string, Icon: typeof Home, sub?: boolean) => {
    const on = active === t;
    return (
      <button key={t} title={t} data-active={on} onClick={() => setActive(t)}
        className={`group relative overflow-hidden flex w-full items-center gap-4 rounded-xl px-4 py-2.5 text-sm transition-colors ${on ? "bg-nav-active border-l-4 border-nav-active-edge font-semibold" : "text-nav-foreground hover:bg-nav-border"}`}>
        {on && <Waves />}
        <NavIcon Icon={Icon} on={on} />
        {!collapsed && <span className="relative flex-1 text-left">{t}</span>}
        {!collapsed && sub && <ChevronRight className="h-4 w-4" />}
      </button>
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
        {item("Dashboard", Home)}
        {groups.map((g) => (
          <div key={g.label} className="border-t border-nav-border pt-4 mt-4 first:mt-4">
            {!collapsed && (
              <p className="mb-2 flex items-center gap-2 px-3 text-xs font-semibold uppercase tracking-widest text-nav-muted">
                <span className={`h-2 w-2 rounded-full ${g.dot}`} />{g.label}
              </p>
            )}
            {g.items.map((x) => item(x.t, x.i, x.sub))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
