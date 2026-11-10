import { createFileRoute } from "@tanstack/react-router";
import { AppSidebar } from "@/components/AppSidebar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard | EMP" },
      { name: "description", content: "Painel de gestão de vendas, estoque e financeiro EMP." },
      { property: "og:title", content: "Dashboard | EMP" },
      { property: "og:description", content: "Painel de gestão de vendas, estoque e financeiro EMP." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen bg-muted font-sans">
      <AppSidebar />
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">Bem-vindo de volta!</p>
      </main>
    </div>
  );
}
