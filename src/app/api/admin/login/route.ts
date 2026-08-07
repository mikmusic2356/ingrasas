import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Check credentials
    if (username === "admin" && password === "Ingrasas2026") {
      const cookieStore = await cookies();
      
      // Set session cookie
      cookieStore.set("admin_session", "authenticated_ingrasas_admin", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Usuario o contraseña incorrectos" },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error en el servidor", details: error.message },
      { status: 500 }
    );
  }
}
