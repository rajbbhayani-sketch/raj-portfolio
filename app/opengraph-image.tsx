import { ImageResponse } from "next/og";

export const alt = "Raj Bharat Bhayani portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffffff",
          color: "#020617",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "56px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid #dbe3ef",
            borderRadius: "28px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "48px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#0071e3", fontSize: 24, fontWeight: 800, letterSpacing: 7 }}>
                PORTFOLIO
              </div>
              <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 0.94, marginTop: 28, maxWidth: 820 }}>
                Raj Bharat Bhayani
              </div>
            </div>
            <div
              style={{
                alignItems: "center",
                background: "#0071e3",
                borderRadius: "999px",
                color: "#ffffff",
                display: "flex",
                fontSize: 30,
                fontWeight: 900,
                height: 92,
                justifyContent: "center",
                width: 92,
              }}
            >
              RB
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ color: "#0f172a", fontSize: 38, fontWeight: 800 }}>
              Business Analyst - BI - Supply Chain - AI Decision Support
            </div>
            <div style={{ color: "#475569", display: "flex", fontSize: 27, fontWeight: 700, gap: 20 }}>
              <span>Berlin, Germany</span>
              <span style={{ color: "#0071e3" }}>Open across Europe</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
