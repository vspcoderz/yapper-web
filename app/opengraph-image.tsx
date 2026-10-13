import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const alt = "Yapper, chat for people who talk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OG banner. Brand orange canvas, the controller pattern washed behind a
 * flat dark overlay, white type, thin wireframe rules.
 *
 * Satori (ImageResponse) supports flexbox only, so every row here is
 * display:flex and there is no grid anywhere.
 */
export default async function OpengraphImage() {
  const pattern = await readFile(
    path.join(process.cwd(), "public", "pattern.png"),
  );
  const logo = await readFile(
    path.join(process.cwd(), "public", "yapper-tile.svg"),
  );

  const patternData = `data:image/png;base64,${pattern.toString("base64")}`;
  const logoData = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fc6a39",
          padding: 72,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Pattern artwork */}
        <img
          src={patternData}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
          }}
        />

        {/* Flat dark wash, no gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(16,15,17,0.66)",
          }}
        />

        {/* Wireframe rules */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 40,
            width: 1,
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 40,
            width: 1,
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            right: 40,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.18)",
          }}
        />

        {/* Row 1: lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img
            src={logoData}
            style={{ width: 56, height: 56, borderRadius: 12 }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Yapper
          </div>
        </div>

        {/* Row 2: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              maxWidth: 940,
            }}
          >
            Your people, one voice away.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 880,
            }}
          >
            A free chat app for communities that talk.
          </div>
        </div>

        {/* Row 3: meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: 16 }}>
            {["Servers", "Voice", "Direct messages", "Plugins"].map((chip) => (
              <div
                key={chip}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.35)",
                  fontSize: 22,
                  color: "#ffffff",
                }}
              >
                {chip}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.7)" }}>
            yapper.website
          </div>
        </div>
      </div>
    ),
    size,
  );
}
