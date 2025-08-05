import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rutas públicas que no requieren autenticación
  const publicRoutes = ["/login", "/register", "/landing"];
  const isPublicRoute = publicRoutes.includes(pathname);

  // Si está en una ruta pública, permitir acceso
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Para todas las demás rutas, permitir acceso (la autenticación se maneja en las páginas)
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
