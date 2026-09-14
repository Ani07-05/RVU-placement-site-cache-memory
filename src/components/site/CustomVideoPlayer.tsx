"use client";

import { useState } from "react";

const YOUTUBE_ID = "oV5zD2mh40A";

export function CustomVideoPlayer() {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-navy-700">
      {started ? (
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
          title="RV University | Placement Office Walkthrough"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setStarted(true)}
          aria-label="Play the RV University placement office walkthrough"
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 bg-navy-700/40" />
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative h-14 w-14 text-gold-300 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="relative font-display text-sm font-semibold tracking-wide text-paper uppercase">
            Placement Office Walkthrough
          </span>
        </button>
      )}
    </div>
  );
}
