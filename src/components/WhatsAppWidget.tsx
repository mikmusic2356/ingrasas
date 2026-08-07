"use client";

import { useState } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    let message = "";
    if (option === "cotizacion") {
      message = "Hola INGRASAS S.A.S., me gustaría solicitar una cotización de Aceite de Pollo para mi empresa.";
    } else if (option === "planta") {
      message = "Hola INGRASAS S.A.S., me interesa recibir información sobre sus soluciones para la gestión y valorización de materiales grasos en plantas avícolas.";
    } else if (option === "asesor") {
      message = "Hola, me gustaría comunicarme con un asesor comercial de INGRASAS S.A.S.";
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/573135100495?text=${encoded}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* 1. Launcher Floating Button */}
      <button 
        onClick={toggleWidget} 
        className="wa-floating-launcher"
        aria-label="Abrir chat de WhatsApp"
      >
        <div className="wa-icon-container">
          <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.167 1.455 4.743 1.456 5.485 0 9.948-4.614 9.951-10.28.002-2.744-1.058-5.324-2.986-7.255C16.428 1.143 13.856.082 11.123.082c-5.486 0-9.949 4.614-9.952 10.281-.001 1.785.466 3.529 1.353 5.068L1.442 21.65l6.205-1.63c1.513.826 3.013 1.256 4.6 1.256v-.004zm11.39-7.39c-.3-.15-1.77-.875-2.04-.975-.27-.1-.47-.15-.67.15-.2.3-.77.975-.94 1.175-.17.2-.34.225-.64.075-.3-.15-1.27-.47-2.42-1.493-.89-.79-1.5-1.76-1.67-2.06-.17-.3-.01-.46.14-.61.14-.13.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.075-.79.375-.27.3-1.04 1.02-1.04 2.487s1.07 2.87 1.22 3.075c.15.2 2.1 3.2 5.09 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/>
          </svg>
        </div>
        <span>WHATSAPP COMERCIAL</span>
      </button>

      {/* 2. Chat Popover Widget */}
      {isOpen && (
        <div className="wa-popover-card">
          {/* Header */}
          <div className="wa-popover-header">
            <div className="wa-popover-header-left">
              <div className="wa-popover-avatar">
                <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28" style={{ color: "#00c278" }}>
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.167 1.455 4.743 1.456 5.485 0 9.948-4.614 9.951-10.28.002-2.744-1.058-5.324-2.986-7.255C16.428 1.143 13.856.082 11.123.082c-5.486 0-9.949 4.614-9.952 10.281-.001 1.785.466 3.529 1.353 5.068L1.442 21.65l6.205-1.63c1.513.826 3.013 1.256 4.6 1.256v-.004zm11.39-7.39c-.3-.15-1.77-.875-2.04-.975-.27-.1-.47-.15-.67.15-.2.3-.77.975-.94 1.175-.17.2-.34.225-.64.075-.3-.15-1.27-.47-2.42-1.493-.89-.79-1.5-1.76-1.67-2.06-.17-.3-.01-.46.14-.61.14-.13.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.075-.79.375-.27.3-1.04 1.02-1.04 2.487s1.07 2.87 1.22 3.075c.15.2 2.1 3.2 5.09 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/>
                </svg>
              </div>
              <div className="wa-popover-header-text">
                <span className="wa-popover-brand">INGRASAS S.A.S.</span>
                <span className="wa-popover-status">Atención Comercial en Vivo</span>
              </div>
            </div>
            <button className="wa-popover-close" onClick={toggleWidget} aria-label="Cerrar ventana">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="wa-popover-body">
            {/* Welcome Bubble */}
            <div className="wa-popover-welcome">
              <p>¡Hola! 👋 Bienvenido a INGRASAS S.A.S. ¿En qué podemos asesorar a su empresa hoy?</p>
            </div>

            <span className="wa-popover-options-title">SELECCIONE UNA OPCIÓN DE CONTACTO:</span>

            {/* Options list */}
            <div className="wa-popover-options">
              <button onClick={() => handleOptionClick("cotizacion")} className="wa-popover-option-btn">
                <span style={{ fontSize: "1.1rem" }}>🟢</span>
                <span className="wa-popover-option-text">Solicitar Cotización de Aceite de Pollo</span>
              </button>

              <button onClick={() => handleOptionClick("planta")} className="wa-popover-option-btn">
                <span style={{ fontSize: "1.1rem" }}>🐔</span>
                <span className="wa-popover-option-text">Solución para Planta Avícola</span>
              </button>

              <button onClick={() => handleOptionClick("asesor")} className="wa-popover-option-btn">
                <span style={{ fontSize: "1.1rem" }}>📞</span>
                <span className="wa-popover-option-text">Hablar con un Asesor Comercial</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="wa-popover-footer">
            <a 
              href="https://wa.me/573135100495" 
              target="_blank" 
              rel="noopener noreferrer"
              className="wa-popover-footer-link"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.167 1.455 4.743 1.456 5.485 0 9.948-4.614 9.951-10.28.002-2.744-1.058-5.324-2.986-7.255C16.428 1.143 13.856.082 11.123.082c-5.486 0-9.949 4.614-9.952 10.281-.001 1.785.466 3.529 1.353 5.068L1.442 21.65l6.205-1.63c1.513.826 3.013 1.256 4.6 1.256v-.004zm11.39-7.39c-.3-.15-1.77-.875-2.04-.975-.27-.1-.47-.15-.67.15-.2.3-.77.975-.94 1.175-.17.2-.34.225-.64.075-.3-.15-1.27-.47-2.42-1.493-.89-.79-1.5-1.76-1.67-2.06-.17-.3-.01-.46.14-.61.14-.13.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.075-.79.375-.27.3-1.04 1.02-1.04 2.487s1.07 2.87 1.22 3.075c.15.2 2.1 3.2 5.09 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/>
              </svg>
              <span>Abrir WhatsApp (+57 313 510 0495)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
