import { NextResponse } from "next/server";
import { db, initDb } from "@/lib/db";
import { cookies } from "next/headers";

// POST: Save a new quotation request
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, ciudad, interes, cantidad, mensaje } = body;

    // Basic validation
    if (!nombre || !empresa || !email || !telefono || !ciudad || !interes) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Ensure table exists
    await initDb();

    // Get current date and time in Colombia's timezone (UTC-5)
    const now = new Date();
    const fechaHora = now.toLocaleString("es-CO", {
      timeZone: "America/Bogota",
      dateStyle: "short",
      timeStyle: "medium",
    });

    // Insert into database
    await db.execute({
      sql: `INSERT INTO cotizaciones (nombre, empresa, email, telefono, ciudad, interes, cantidad, mensaje, fecha_hora) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        nombre,
        empresa,
        email,
        telefono,
        ciudad,
        interes,
        cantidad || "",
        mensaje || "",
        fechaHora
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error saving cotizacion:", error);
    return NextResponse.json(
      { error: "Error interno del servidor", details: error.message },
      { status: 500 }
    );
  }
}

// GET: Retrieve all quotation requests (protected)
export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("admin_session")?.value;

    // Check if session token is valid
    if (sessionToken !== "authenticated_ingrasas_admin") {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    // Ensure table exists
    await initDb();

    // Fetch records ordered by id desc
    const result = await db.execute("SELECT * FROM cotizaciones ORDER BY id DESC");
    
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error("Error fetching cotizaciones:", error);
    return NextResponse.json(
      { error: "Error interno del servidor", details: error.message },
      { status: 500 }
    );
  }
}
