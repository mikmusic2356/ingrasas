import { createClient } from "@libsql/client";

let clientInstance: any = null;

function getClient() {
  if (!clientInstance) {
    const url = process.env['TURSO_DATABASE_URL'];
    const authToken = process.env['TURSO_AUTH_TOKEN'];

    if (!url) {
      throw new Error("TURSO_DATABASE_URL no está definida. Por favor, configúrala en Netlify (Site configuration -> Environment variables) y activa todos los Scopes.");
    }

    const isValidUrl = url.startsWith("libsql://") || 
                       url.startsWith("https://") || 
                       url.startsWith("http://") || 
                       url.startsWith("file:") || 
                       url.startsWith("wss://") || 
                       url.startsWith("ws://");

    if (!isValidUrl) {
      throw new Error(`TURSO_DATABASE_URL tiene un formato inválido: "${url.substring(0, 10)}...". Debe comenzar con libsql:// o https://`);
    }

    clientInstance = createClient({
      url,
      authToken,
    });
  }
  return clientInstance;
}

// Proxy to dynamically delegate all operations to the live client instance at runtime
export const db = new Proxy({} as any, {
  get(target, prop) {
    const client = getClient();
    const value = client[prop];
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  }
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
