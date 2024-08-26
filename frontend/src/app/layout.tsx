import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maintenance APP",
  description: "Design for General Maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-zinc-400 ${inter.className}`}>
        <div className="flex h-screen overflow-hidden">
          <aside className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 flex flex-col">
            <div className="mb-6 flex justify-center">
            </div>
            <nav>
              <ul className="space-y-4">
                <li>
                  <a href="/machines" className="text-lg hover:text-blue-400">Máquinas</a>
                </li>
                <li>
                  <a href="/maintenances" className="text-lg hover:text-blue-400">Manutenções</a>
                </li>
                <li>
                  <a href="/inventory" className="text-lg hover:text-blue-400">Estoque</a>
                </li>
                <li>
                  <a href="/teams" className="text-lg hover:text-blue-400">Equipes</a>
                </li>
                <li>
                  <a href="/users" className="text-lg hover:text-blue-400">Usuários</a>
                </li>
              </ul>
            </nav>
            <div className="mt-auto">
              <a href="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Home
              </a>
            </div>
          </aside>

          <main className="flex-1 ml-64 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
