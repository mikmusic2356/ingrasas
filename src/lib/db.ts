import { createClient } from "@libsql/client";

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url) {
  throw new Error("TURSO_DATABASE_URL environment variable is not defined");
}

export const db = createClient({
  url,
  authToken,
});

// Initialize database table
export async function initDb() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS cotizaciones (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      empresa TEXT NOT NULL,
      email TEXT NOT NULL,
      telefono TEXT NOT NULL,
      ciudad TEXT NOT NULL,
      interes TEXT NOT NULL,
      cantidad TEXT,
      mensaje TEXT,
      fecha_hora TEXT NOT NULL
    );
  `);
}
