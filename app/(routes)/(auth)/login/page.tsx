import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

import { Checkbox } from "@/components/ui/checkbox";

import { Terms } from "../components/Terms";
import { LoginForm } from "./LoginForm";

export default async function LoginPage() {
  const session = await auth();

  // Si ya está logueado, redirigir a home
  if (session?.user) {
    return redirect("/");
  }

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
          <div className="bg-black/80 p-8 rounded-lg max-w-md w-full">
            <h1 className="text-3xl font-bold text-white mb-6">
              Iniciar sesión
            </h1>

            <LoginForm />

            <div className="mt-5 text-center">
              <Link href="/" className="hover:underline hover:opacity-70 text-white">
                ¿Has olvidado tu contraseña?
              </Link>
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <Checkbox id="terms" className="border-white" />
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">
                Recuérdame
              </label>
            </div>

            <div className="mt-4 flex gap-1">
              <p className="text-white opacity-70">¿Todavía sin Netflix?</p>
              <Link href="/register" className="opacity-1 text-white">
                Suscríbete ya
              </Link>
            </div>

            <Terms />
          </div>
        </main>
      </div>
    </div>
  );
}
