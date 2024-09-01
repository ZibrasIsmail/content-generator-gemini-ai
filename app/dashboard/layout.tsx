import NavBar from "@/components/nav/NavBar";
import Sidebar from "@/components/nav/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main className="flex-1 p-6 ml-16 pt-16 md:ml-64 overflow-y-auto">
        {children}
      </main>
    </>
  );
}
