import { createClient } from "@libsql/client";

let url = process.env.TURSO_DATABASE_URL || "file:local.db";
const authToken = process.env.TURSO_AUTH_TOKEN || "";

// Verify the URL starts with a valid scheme to prevent build-time crashes with masked tokens (like '****')
const isValidUrl = url.startsWith("libsql://") || 
                   url.startsWith("https://") || 
                   url.startsWith("http://") || 
                   url.startsWith("file:") || 
                   url.startsWith("wss://") || 
                   url.startsWith("ws://");

if (!isValidUrl) {
  url = "file:local.db";
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
