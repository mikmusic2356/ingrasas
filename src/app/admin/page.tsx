"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Cotizacion {
  id: number;
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  ciudad: string;
  interes: string;
  cantidad: string;
  mensaje: string;
  fecha_hora: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cotizaciones, setCotizaciones] = useState<Cotizacion[]>([]);
  const [fetchingData, setFetchingData] = useState(false);
  
  // Filtering and Modal States
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedCotizacion, setSelectedCotizacion] = useState<Cotizacion | null>(null);

  // Check if already authenticated on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/cotizaciones");
      if (res.ok) {
        const data = await res.json();
        setCotizaciones(data);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        setFetchingData(true);
        const dataRes = await fetch("/api/cotizaciones");
        if (dataRes.ok) {
          const data = await dataRes.json();
          setCotizaciones(data);
        }
        setFetchingData(false);
      } else {
        const errData = await res.json();
        setError(errData.error || "Credenciales incorrectas");
      }
    } catch (err) {
      setError("Error de conexión al servidor");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      setIsAuthenticated(false);
      setCotizaciones([]);
      setUsername("");
      setPassword("");
      setStartDate("");
      setEndDate("");
    } catch (err) {
      console.error("Error logging out", err);
    }
  };

  // Date Parsing Helper
  const parseRecordDate = (dateStr: string): Date | null => {
    try {
      // Formats like "DD/MM/YYYY, HH:MM:SS" or "D/M/YY, H:MM:SS"
      const clean = dateStr.split(",")[0].trim();
      const parts = clean.split("/");
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // 0-indexed month
        let year = parseInt(parts[2], 10);
        if (year < 100) {
          year += 2000; // handle 2-digit year (e.g. 26 -> 2026)
        }
        return new Date(year, month, day);
      }
      const parsed = new Date(dateStr);
      return isNaN(parsed.getTime()) ? null : parsed;
    } catch (e) {
      return null;
    }
  };

  // Filter Cotizaciones based on Date Range
  const filteredCotizaciones = cotizaciones.filter((cot) => {
    if (!startDate && !endDate) return true;

    const recordDate = parseRecordDate(cot.fecha_hora);
    if (!recordDate) return true; // If parsing fails, display the record

    // Normalize input dates (set to local midnight)
    if (startDate) {
      const start = new Date(startDate + "T00:00:00");
      if (recordDate < start) return false;
    }

    if (endDate) {
      const end = new Date(endDate + "T23:59:59");
      if (recordDate > end) return false;
    }

    return true;
  });

  const clearFilters = () => {
    setStartDate("");
    setEndDate("");
  };

  // Show loading state while checking auth
  if (isAuthenticated === null) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f7fafc" }}>
        <div className="spinner" style={{ width: "50px", height: "50px", border: "5px solid var(--color-divider)", borderTopColor: "var(--color-orange-primary)", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
        <style jsx global>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Login view
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#0b192e", padding: "2rem", fontFamily: "var(--font-secondary)" }}>
        <div style={{ width: "100%", maxWidth: "420px", backgroundColor: "#112240", borderRadius: "12px", padding: "2.5rem", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ color: "#ffffff", fontSize: "1.8rem", marginBottom: "0.5rem", fontFamily: "var(--font-primary)" }}>ADMINISTRACIÓN</h1>
            <p style={{ color: "#8892b0", fontSize: "0.85rem" }}>Ingresa tus credenciales para ver las cotizaciones</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label htmlFor="username" style={{ color: "#a8b2d1", fontSize: "0.8rem", fontWeight: "600", textTransform: "uppercase" }}>Usuario</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ padding: "0.75rem 1rem", borderRadius: "6px", border: "1px solid #233554", backgroundColor: "#0a192f", color: "#ffffff", fontSize: "0.95rem", outline: "none" }}
                placeholder="Usuario admin"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label htmlFor="password" style={{ color: "#a8b2d1", fontSize: "0.8rem", fontWeight: "600", textTransform: "uppercase" }}>Contraseña</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ padding: "0.75rem 1rem", borderRadius: "6px", border: "1px solid #233554", backgroundColor: "#0a192f", color: "#ffffff", fontSize: "0.95rem", outline: "none" }}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div style={{ color: "#ff4d4d", fontSize: "0.85rem", textAlign: "center", backgroundColor: "rgba(255, 77, 77, 0.1)", padding: "0.5rem 1rem", borderRadius: "6px" }}>
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: "0.5rem",
                padding: "0.85rem 1rem",
                borderRadius: "6px",
                border: "none",
                backgroundColor: loading ? "#d49400" : "var(--color-orange-primary)",
                color: "#000000",
                fontWeight: "700",
                fontSize: "0.9rem",
                cursor: loading ? "not-allowed" : "pointer",
                textTransform: "uppercase",
                transition: "all 0.2s ease",
              }}
            >
              {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard view
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f4f7f6", paddingTop: "var(--header-height)", fontFamily: "var(--font-secondary)" }}>
      {/* Dashboard Sub-Header */}
      <div style={{ backgroundColor: "var(--color-blue-dark)", color: "#ffffff", padding: "2.5rem 0", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <h1 style={{ color: "#ffffff", fontSize: "2rem", fontFamily: "var(--font-primary)", marginBottom: "0.25rem" }}>REGISTROS DE COTIZACIONES</h1>
            <p style={{ color: "#a0aec0", fontSize: "0.9rem" }}>Lista de solicitudes recibidas en tiempo real desde la web de INGRASAS S.A.S.</p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: "0.6rem 1.25rem",
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "transparent",
              color: "#ffffff",
              fontWeight: "600",
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
              textTransform: "uppercase",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Main dashboard content */}
      <main className="container" style={{ padding: "3rem 1.5rem" }}>
        
        {/* Filters Section */}
        <div style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.02)", border: "1px solid var(--color-divider)", marginBottom: "2rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-text-medium)" }}>Filtrar por Rango de Fechas:</span>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.7rem", color: "var(--color-text-medium)", marginBottom: "0.25rem" }}>Desde</span>
                <input 
                  type="date" 
                  value={startDate} 
                  onChange={(e) => setStartDate(e.target.value)}
                  style={{ padding: "0.5rem 0.75rem", borderRadius: "4px", border: "1px solid var(--color-divider)", outline: "none", fontSize: "0.85rem", color: "var(--color-text-dark)" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.7rem", color: "var(--color-text-medium)", marginBottom: "0.25rem" }}>Hasta</span>
                <input 
                  type="date" 
                  value={endDate} 
                  onChange={(e) => setEndDate(e.target.value)}
                  style={{ padding: "0.5rem 0.75rem", borderRadius: "4px", border: "1px solid var(--color-divider)", outline: "none", fontSize: "0.85rem", color: "var(--color-text-dark)" }}
                />
              </div>
            </div>
          </div>
          {(startDate || endDate) && (
            <button 
              onClick={clearFilters}
              style={{ padding: "0.55rem 1rem", borderRadius: "4px", border: "1px solid var(--color-divider)", backgroundColor: "#f3f4f6", color: "var(--color-text-dark)", fontSize: "0.8rem", fontWeight: "600", cursor: "pointer", transition: "background-color 0.2s" }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#e5e7eb"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
            >
              Limpiar Filtros
            </button>
          )}
          <div style={{ marginLeft: "auto", fontSize: "0.85rem", color: "var(--color-text-medium)", fontWeight: "500" }}>
            Mostrando <strong>{filteredCotizaciones.length}</strong> de {cotizaciones.length} registros
          </div>
        </div>

        {fetchingData ? (
          <div style={{ textAlign: "center", padding: "3rem" }}>
            <p style={{ color: "var(--color-text-medium)" }}>Actualizando cotizaciones...</p>
          </div>
        ) : filteredCotizaciones.length === 0 ? (
          <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", padding: "4rem 2rem", textAlign: "center", boxShadow: "0 4px 15px rgba(0,0,0,0.02)", border: "1px solid var(--color-divider)" }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="1.5" style={{ marginBottom: "1.5rem" }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <h3 style={{ fontSize: "1.25rem", color: "var(--color-blue-dark)", marginBottom: "0.5rem" }}>No hay registros coincidentes</h3>
            <p style={{ color: "var(--color-text-medium)", fontSize: "0.9rem" }}>Ajusta los filtros de fecha o verifica que se hayan enviado cotizaciones.</p>
          </div>
        ) : (
          <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", border: "1px solid var(--color-divider)", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px", textAlign: "left" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f8fafc", borderBottom: "2px solid var(--color-divider)" }}>
                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-text-dark)" }}>Fecha / Hora</th>
                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-text-dark)" }}>Nombre</th>
                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-text-dark)" }}>Empresa</th>
                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-text-dark)" }}>Contacto</th>
                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-text-dark)" }}>Ciudad / País</th>
                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-text-dark)" }}>Interés</th>
                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-text-dark)" }}>Cantidad</th>
                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-text-dark)" }}>Mensaje</th>
                    <th style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-text-dark)", textAlign: "center" }}>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCotizaciones.map((cot, index) => (
                    <tr 
                      key={cot.id} 
                      style={{ 
                        borderBottom: "1px solid var(--color-divider)", 
                        backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb",
                        transition: "background-color 0.15s ease" 
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#f1f5f9";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#ffffff" : "#f9fafb";
                      }}
                    >
                      <td style={{ padding: "1.25rem", fontSize: "0.85rem", color: "var(--color-text-dark)", fontWeight: "600", whiteSpace: "nowrap" }}>
                        {cot.fecha_hora}
                      </td>
                      <td style={{ padding: "1.25rem", fontSize: "0.85rem", color: "var(--color-text-dark)", fontWeight: "500" }}>
                        {cot.nombre}
                      </td>
                      <td style={{ padding: "1.25rem", fontSize: "0.85rem", color: "var(--color-text-dark)" }}>
                        {cot.empresa}
                      </td>
                      <td style={{ padding: "1.25rem", fontSize: "0.85rem", color: "var(--color-text-medium)" }}>
                        <div style={{ fontWeight: "500", color: "var(--color-text-dark)" }}>{cot.email}</div>
                        <div>{cot.telefono}</div>
                      </td>
                      <td style={{ padding: "1.25rem", fontSize: "0.85rem", color: "var(--color-text-medium)" }}>
                        {cot.ciudad}
                      </td>
                      <td style={{ padding: "1.25rem", fontSize: "0.85rem", color: "var(--color-text-dark)" }}>
                        <span style={{ 
                          display: "inline-block", 
                          padding: "0.25rem 0.5rem", 
                          borderRadius: "4px", 
                          fontSize: "0.75rem", 
                          fontWeight: "600",
                          backgroundColor: cot.interes === "aceite-pollo" ? "#e0f2fe" : cot.interes === "soluciones-avicolas" ? "#dcfce7" : "#f3f4f6",
                          color: cot.interes === "aceite-pollo" ? "#0369a1" : cot.interes === "soluciones-avicolas" ? "#15803d" : "#4b5563"
                        }}>
                          {cot.interes === "aceite-pollo" ? "Aceite de Pollo" : cot.interes === "soluciones-avicolas" ? "Soluciones Avícolas" : "Otro"}
                        </span>
                      </td>
                      <td style={{ padding: "1.25rem", fontSize: "0.85rem", color: "var(--color-text-dark)" }}>
                        {cot.cantidad || "N/A"}
                      </td>
                      <td 
                        style={{ padding: "1.25rem", fontSize: "0.85rem", color: "var(--color-text-medium)", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", cursor: "pointer" }} 
                        title="Haga clic para ver el mensaje completo"
                        onClick={() => setSelectedCotizacion(cot)}
                      >
                        {cot.mensaje ? `${cot.mensaje.substring(0, 30)}${cot.mensaje.length > 30 ? "..." : ""}` : "Sin mensaje"}
                      </td>
                      <td style={{ padding: "1.25rem", textAlign: "center" }}>
                        <button
                          onClick={() => setSelectedCotizacion(cot)}
                          style={{ padding: "0.35rem 0.75rem", borderRadius: "4px", border: "1px solid var(--color-orange-primary)", backgroundColor: "transparent", color: "var(--color-orange-primary)", fontSize: "0.75rem", fontWeight: "700", cursor: "pointer", transition: "all 0.2s" }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--color-orange-primary)";
                            e.currentTarget.style.color = "#000000";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "var(--color-orange-primary)";
                          }}
                        >
                          Ver Detalles
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Details Modal */}
      {selectedCotizacion && (
        <div 
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000, padding: "1.5rem" }}
          onClick={() => setSelectedCotizacion(null)}
        >
          <div 
            style={{ width: "100%", maxWidth: "600px", backgroundColor: "#ffffff", borderRadius: "8px", padding: "2rem", boxShadow: "0 10px 25px rgba(0,0,0,0.2)", position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedCotizacion(null)}
              style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "none", border: "none", cursor: "pointer", color: "var(--color-text-medium)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-primary)", color: "var(--color-blue-dark)", borderBottom: "1px solid var(--color-divider)", paddingBottom: "0.75rem", marginBottom: "1.5rem", textTransform: "uppercase" }}>
              Detalle de la Cotización
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-medium)", fontWeight: "600", textTransform: "uppercase" }}>Fecha y Hora</span>
                <span style={{ fontSize: "0.9rem", color: "var(--color-text-dark)", fontWeight: "600" }}>{selectedCotizacion.fecha_hora}</span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-medium)", fontWeight: "600", textTransform: "uppercase" }}>Interés</span>
                <span style={{ 
                  display: "inline-block", 
                  padding: "0.15rem 0.4rem", 
                  borderRadius: "4px", 
                  fontSize: "0.8rem", 
                  fontWeight: "600",
                  backgroundColor: selectedCotizacion.interes === "aceite-pollo" ? "#e0f2fe" : selectedCotizacion.interes === "soluciones-avicolas" ? "#dcfce7" : "#f3f4f6",
                  color: selectedCotizacion.interes === "aceite-pollo" ? "#0369a1" : selectedCotizacion.interes === "soluciones-avicolas" ? "#15803d" : "#4b5563"
                }}>
                  {selectedCotizacion.interes === "aceite-pollo" ? "Aceite de Pollo" : selectedCotizacion.interes === "soluciones-avicolas" ? "Soluciones Avícolas" : "Otro"}
                </span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-medium)", fontWeight: "600", textTransform: "uppercase" }}>Nombre del Cliente</span>
                <span style={{ fontSize: "0.9rem", color: "var(--color-text-dark)" }}>{selectedCotizacion.nombre}</span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-medium)", fontWeight: "600", textTransform: "uppercase" }}>Empresa</span>
                <span style={{ fontSize: "0.9rem", color: "var(--color-text-dark)" }}>{selectedCotizacion.empresa}</span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-medium)", fontWeight: "600", textTransform: "uppercase" }}>Correo Electrónico</span>
                <span style={{ fontSize: "0.9rem", color: "var(--color-text-dark)" }}>{selectedCotizacion.email}</span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-medium)", fontWeight: "600", textTransform: "uppercase" }}>Teléfono</span>
                <span style={{ fontSize: "0.9rem", color: "var(--color-text-dark)" }}>{selectedCotizacion.telefono}</span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-medium)", fontWeight: "600", textTransform: "uppercase" }}>Ciudad / País</span>
                <span style={{ fontSize: "0.9rem", color: "var(--color-text-dark)" }}>{selectedCotizacion.ciudad}</span>
              </div>
              <div>
                <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-medium)", fontWeight: "600", textTransform: "uppercase" }}>Cantidad Requerida</span>
                <span style={{ fontSize: "0.9rem", color: "var(--color-text-dark)" }}>{selectedCotizacion.cantidad || "No especificada"}</span>
              </div>
            </div>

            <div style={{ borderTop: "1px solid var(--color-divider)", paddingTop: "1.25rem" }}>
              <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-text-medium)", fontWeight: "600", textTransform: "uppercase", marginBottom: "0.5rem" }}>Mensaje del Cliente</span>
              <div style={{ fontSize: "0.9rem", color: "var(--color-text-dark)", padding: "1rem", backgroundColor: "#f8fafc", borderRadius: "6px", border: "1px solid var(--color-divider)", whiteSpace: "pre-wrap", maxHeight: "150px", overflowY: "auto" }}>
                {selectedCotizacion.mensaje || "Sin mensaje adicional"}
              </div>
            </div>
            
            <button
              onClick={() => setSelectedCotizacion(null)}
              style={{ width: "100%", marginTop: "1.5rem", padding: "0.75rem", borderRadius: "6px", border: "none", backgroundColor: "var(--color-blue-dark)", color: "#ffffff", fontWeight: "700", cursor: "pointer", textTransform: "uppercase", transition: "background-color 0.2s" }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#001a35"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "var(--color-blue-dark)"}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
