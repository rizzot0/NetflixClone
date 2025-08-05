import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/login-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-8">
          <div className="text-red-600 text-4xl font-bold">RIZZOFLIX</div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-8">
          <div className="bg-black/80 p-8 rounded-lg max-w-md w-full text-center">
            <h1 className="text-3xl font-bold text-white mb-6">
              Películas, series y mucho más
            </h1>
            <p className="text-white text-lg mb-6">
              Disfruta donde quieras. Cancela cuando quieras.
            </p>
            <p className="text-white text-lg mb-8">
              ¿Listo para ver? Ingresa tu email para crear una cuenta o reiniciar tu membresía.
            </p>
            
            <div className="flex flex-col gap-4">
              <Link href="/register">
                <Button className="w-full py-3 text-lg font-semibold bg-red-600 hover:bg-red-700 text-white">
                  Comenzar
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="w-full py-3 text-lg font-semibold border-white text-white hover:bg-white hover:text-black">
                  Ya tengo cuenta
                </Button>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-8 text-center text-gray-400">
          <p>© 2024 Netflix Clone. Creado con Next.js y TypeScript.</p>
        </footer>
      </div>
    </div>
  );
} 