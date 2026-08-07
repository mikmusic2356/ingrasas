"use client";

import { useEffect, useState } from "react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    };

    window.addEventListener("open-contact-modal", handleOpen);

    return () => {
      window.removeEventListener("open-contact-modal", handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = ""; // Restore scroll
  };

  const saveToDatabase = async (data: {
    nombre: string;
    empresa: string;
    email: string;
    telefono: string;
    ciudad: string;
    interes: string;
    cantidad: string;
    mensaje: string;
  }) => {
    try {
      const res = await fetch("/api/cotizaciones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return res.ok;
    } catch (err) {
      console.error("Error submitting to API:", err);
      return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={handleClose} aria-label="Cerrar formulario">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem", textTransform: "uppercase", fontFamily: "var(--font-primary)" }}>
          Solicite una Cotización
        </h2>
        <p style={{ color: "var(--color-text-medium)", fontSize: "0.85rem", marginBottom: "1.5rem", lineHeight: "1.5" }}>
          Complete el formulario y uno de nuestros asesores se pondrá en contacto con usted a la mayor brevedad.
        </p>

        {/* Modal Form */}
        <form className="contact-form" style={{ boxShadow: "none", padding: 0, border: "none" }} onSubmit={async (e) => {
          e.preventDefault();
          setIsSubmitting(true);
          
          const nombre = (document.getElementById("modal-nombre") as HTMLInputElement)?.value;
          const empresa = (document.getElementById("modal-empresa") as HTMLInputElement)?.value;
          const email = (document.getElementById("modal-email") as HTMLInputElement)?.value;
          const telefono = (document.getElementById("modal-telefono") as HTMLInputElement)?.value;
          const ciudad = (document.getElementById("modal-ciudad") as HTMLInputElement)?.value;
          const interes = (document.getElementById("modal-interes") as HTMLSelectElement)?.value;
          const cantidad = (document.getElementById("modal-cantidad") as HTMLInputElement)?.value;
          const mensaje = (document.getElementById("modal-mensaje") as HTMLTextAreaElement)?.value;

          const saved = await saveToDatabase({ nombre, empresa, email, telefono, ciudad, interes, cantidad, mensaje });
          setIsSubmitting(false);

          if (saved) {
            alert("Solicitud guardada con éxito. Un asesor se pondrá en contacto por correo.");
            handleClose();
          } else {
            alert("Hubo un error al guardar la cotización. Por favor intente de nuevo.");
          }
        }}>
          <div className="form-group">
            <label htmlFor="modal-nombre">Nombre completo</label>
            <input type="text" id="modal-nombre" name="nombre" required placeholder="Escriba su nombre y apellido" disabled={isSubmitting} />
          </div>

          <div className="form-group">
            <label htmlFor="modal-empresa">Empresa</label>
            <input type="text" id="modal-empresa" name="empresa" required placeholder="Nombre de su organización" disabled={isSubmitting} />
          </div>

          <div className="form-group">
            <label htmlFor="modal-email">Correo electrónico</label>
            <input type="email" id="modal-email" name="email" required placeholder="ejemplo@correo.com" disabled={isSubmitting} />
          </div>

          <div className="form-group">
            <label htmlFor="modal-telefono">Teléfono</label>
            <input type="tel" id="modal-telefono" name="telefono" required placeholder="+57 300 000 0000" disabled={isSubmitting} />
          </div>

          <div className="form-group">
            <label htmlFor="modal-ciudad">Ciudad / País</label>
            <input type="text" id="modal-ciudad" name="ciudad" required placeholder="Bogotá, Colombia" disabled={isSubmitting} />
          </div>

          <div className="form-group">
            <label htmlFor="modal-interes">Materia prima o solución de interés</label>
            <select id="modal-interes" name="interes" required disabled={isSubmitting}>
              <option value="">Seleccione una opción</option>
              <option value="aceite-pollo">Aceite de Pollo</option>
              <option value="soluciones-avicolas">Soluciones para la Industria Avícola</option>
              <option value="otro">Otro requerimiento</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="modal-cantidad">Cantidad requerida</label>
            <input type="text" id="modal-cantidad" name="cantidad" placeholder="Ej. 10 Toneladas mensuales" disabled={isSubmitting} />
          </div>

          <div className="form-group">
            <label htmlFor="modal-mensaje">Mensaje</label>
            <textarea id="modal-mensaje" name="mensaje" rows={4} placeholder="Detalle su solicitud aquí..." disabled={isSubmitting}></textarea>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <button type="submit" className="submit-btn" style={{ flex: 1, cursor: "pointer", margin: 0, padding: "0.85rem 1rem" }} disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "🟢 Enviar por Correo"}
            </button>
            <button 
              type="button" 
              className="submit-btn" 
              style={{ flex: 1, cursor: "pointer", backgroundColor: "#25d366", borderColor: "#25d366", color: "#ffffff", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", margin: 0, padding: "0.85rem 1rem" }}
              disabled={isSubmitting}
              onClick={async () => {
                // Get form inputs
                const nombreVal = (document.getElementById("modal-nombre") as HTMLInputElement)?.value;
                const empresaVal = (document.getElementById("modal-empresa") as HTMLInputElement)?.value;
                const emailVal = (document.getElementById("modal-email") as HTMLInputElement)?.value;
                const telefonoVal = (document.getElementById("modal-telefono") as HTMLInputElement)?.value;
                const ciudadVal = (document.getElementById("modal-ciudad") as HTMLInputElement)?.value;
                const interesVal = (document.getElementById("modal-interes") as HTMLSelectElement)?.value;
                const cantidadVal = (document.getElementById("modal-cantidad") as HTMLInputElement)?.value;
                const mensajeVal = (document.getElementById("modal-mensaje") as HTMLTextAreaElement)?.value;

                if (!nombreVal || !empresaVal || !emailVal || !telefonoVal || !ciudadVal || !interesVal) {
                  alert("Por favor complete todos los campos obligatorios del formulario antes de enviar por WhatsApp.");
                  // Trigger native validation UI
                  const form = document.querySelector(".contact-form") as HTMLFormElement;
                  form?.reportValidity();
                  return;
                }

                setIsSubmitting(true);
                // Save to database first
                const saved = await saveToDatabase({
                  nombre: nombreVal,
                  empresa: empresaVal,
                  email: emailVal,
                  telefono: telefonoVal,
                  ciudad: ciudadVal,
                  interes: interesVal,
                  cantidad: cantidadVal,
                  mensaje: mensajeVal
                });
                setIsSubmitting(false);

                if (!saved) {
                  alert("Error al registrar la solicitud. Verifique su conexión.");
                  return;
                }

                // Construct text
                const text = `*Nueva Solicitud de Cotización - INGRASAS S.A.S.*\n\n` +
                  `• *Nombre completo:* ${nombreVal}\n` +
                  `• *Empresa:* ${empresaVal}\n` +
                  `• *Correo:* ${emailVal}\n` +
                  `• *Teléfono:* ${telefonoVal}\n` +
                  `• *Ciudad/País:* ${ciudadVal}\n` +
                  `• *Interés:* ${interesVal === "aceite-pollo" ? "Aceite de Pollo" : interesVal === "soluciones-avicolas" ? "Soluciones para la Industria Avícola" : "Otro requerimiento"}\n` +
                  `• *Cantidad:* ${cantidadVal || "No especificada"}\n` +
                  `• *Mensaje:* ${mensajeVal || "Sin mensaje adicional"}`;

                const encoded = encodeURIComponent(text);
                window.open(`https://wa.me/573135100495?text=${encoded}`, "_blank");
                handleClose();
              }}
            >
              <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.167 1.455 4.743 1.456 5.485 0 9.948-4.614 9.951-10.28.002-2.744-1.058-5.324-2.986-7.255C16.428 1.143 13.856.082 11.123.082c-5.486 0-9.949 4.614-9.952 10.281-.001 1.785.466 3.529 1.353 5.068L1.442 21.65l6.205-1.63c1.513.826 3.013 1.256 4.6 1.256v-.004zm11.39-7.39c-.3-.15-1.77-.875-2.04-.975-.27-.1-.47-.15-.67.15-.2.3-.77.975-.94 1.175-.17.2-.34.225-.64.075-.3-.15-1.27-.47-2.42-1.493-.89-.79-1.5-1.76-1.67-2.06-.17-.3-.01-.46.14-.61.14-.13.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.075-.79.375-.27.3-1.04 1.02-1.04 2.487s1.07 2.87 1.22 3.075c.15.2 2.1 3.2 5.09 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/>
              </svg>
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
