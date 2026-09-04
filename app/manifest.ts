import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Walnut Hills Instrumental Parents",
    short_name: "WHIP",
    description:
      "Supporting Walnut Hills High School student musicians in Cincinnati.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#101b34",
    icons: [
      {
        src: "/favicon-music.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
  };
}
