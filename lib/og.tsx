import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const OG_SIZE = { width: 1200, height: 630 };

const fontDir = join(process.cwd(), "node_modules/@fontsource/plus-jakarta-sans/files");

/**
 * The social preview card for every page, in the site's own palette and font,
 * so a shared link already looks like the portfolio.
 */
export async function renderOgImage({
  eyebrow,
  title,
  highlight,
  tags = [],
  photo = false,
}: {
  eyebrow: string;
  title: string;
  /** Optional ending, set in burgundy on its own line. */
  highlight?: string;
  tags?: string[];
  /** Show the headshot on the right (used for the homepage card). */
  photo?: boolean;
}) {
  const [bold, extraBold, headshot] = await Promise.all([
    readFile(join(fontDir, "plus-jakarta-sans-latin-700-normal.woff")),
    readFile(join(fontDir, "plus-jakarta-sans-latin-800-normal.woff")),
    photo ? readFile(join(process.cwd(), "public/images/about/headshot.jpg")) : null,
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#fcf9f7",
        color: "#2a1a1f",
        fontFamily: "Plus Jakarta Sans",
        // A faint dotted grid, like the site's hero areas.
        backgroundImage: "radial-gradient(#ecc9d2 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, fontWeight: 700, color: "#8c1d40" }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#8c1d40" }} />
          <span>{photo ? site.name : eyebrow}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: photo ? 68 : 76,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          {/* Non-breaking hyphens keep words like "sign-ups" on one line. */}
          <span>{title.replace(/-/g, "‑")}</span>
          {highlight && <span style={{ color: "#8c1d40" }}>{highlight}</span>}
        </div>

        <div style={{ display: "flex", gap: 12, fontSize: 22, fontWeight: 700 }}>
          {(photo ? ["Software", "AI", "UX & Design", "Marketing"] : [site.name, ...tags]).map((tag, i) => (
            <span
              key={tag}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                background: i === 0 && !photo ? "#8c1d40" : "#f8e7eb",
                color: i === 0 && !photo ? "#ffffff" : "#8c1d40",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {headshot && (
        // eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img>
        <img
          src={`data:image/jpeg;base64,${headshot.toString("base64")}`}
          alt=""
          width={420}
          height={630}
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
        />
      )}
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        { name: "Plus Jakarta Sans", data: bold, style: "normal", weight: 700 },
        { name: "Plus Jakarta Sans", data: extraBold, style: "normal", weight: 800 },
      ],
    },
  );
}
