"use client";

import React from "react";

interface Certification {
  id: string;
  name: string;
  sub: string;
  color: string;
}

const certifications: Certification[] = [
  { id: "1", name: "CAR", sub: "Negocios Verdes", color: "#10b981" },
  { id: "2", name: "ISO 9001", sub: "Calidad", color: "#3b82f6" },
  { id: "3", name: "ISCC", sub: "CORSIA", color: "#f59e0b" },
  { id: "4", name: "ISO 14001", sub: "Ambiental", color: "#10b981" },
  { id: "5", name: "ISCC", sub: "Sostenibilidad", color: "#ef4444" },
  { id: "6", name: "ISO 14064", sub: "Huella Carbono", color: "#06b6d4" },
  { id: "7", name: "SMETA", sub: "Responsabilidad", color: "#8b5cf6" },
];

export default function CertificationCarousel() {
  // Duplicate list to achieve infinite scrolling loop
  const duplicatedItems = [...certifications, ...certifications, ...certifications];

  return (
    <div className="carousel-viewport">
      <div className="carousel-track">
        {duplicatedItems.map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`} 
            className="carousel-item"
            style={{ borderLeft: `4px solid ${item.color}` }}
          >
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <span style={{ 
                fontFamily: "var(--font-primary)", 
                fontWeight: "900", 
                fontSize: "1.1rem", 
                color: "var(--color-text-dark)",
                letterSpacing: "-0.02em"
              }}>
                {item.name}
              </span>
              <span style={{ 
                fontSize: "0.7rem", 
                color: "var(--color-gray-medium)",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}>
                {item.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
