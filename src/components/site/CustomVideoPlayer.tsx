"use client";

import { useEffect, useRef, useState } from "react";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

export function CustomVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => setCurrent(video.currentTime);
    const onLoaded = () => setDuration(video.duration);
    const onEnded = () => setPlaying(false);

    video.addEventListener("timeupdate", onTime);
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!started) setStarted(true);
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    video.currentTime = ratio * duration;
    setCurrent(ratio * duration);
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const next = Number(e.target.value);
    setVolume(next);
    if (video) {
      video.volume = next;
      video.muted = next === 0;
    }
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-navy-700">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster="/video/poster.jpg"
        preload="metadata"
        playsInline
        onClick={togglePlay}
      >
        <source src="/video/walkthrough.mp4" type="video/mp4" />
      </video>

      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={started ? "Play" : "Play the RV University placement office walkthrough"}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-navy-700/30"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-14 w-14 text-gold-300 sm:h-16 sm:w-16"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          {!started && (
            <span className="font-display text-sm font-semibold tracking-wide text-paper uppercase">
              Placement Office Walkthrough
            </span>
          )}
        </button>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-navy-700/95 to-transparent px-4 pt-10 pb-3 sm:px-5">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="flex h-6 w-6 shrink-0 items-center justify-center text-gold-300"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div
          onClick={seek}
          className="flex h-4 flex-1 cursor-pointer items-center"
        >
          <div className="h-1.5 w-full bg-paper/20">
            <div
              className="h-full bg-gold-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <span className="shrink-0 font-mono text-xs text-paper/70">
          {formatTime(current)} / {formatTime(duration)}
        </span>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4 shrink-0 text-gold-300"
        >
          <path d="M11 5 6 9H3v6h3l5 4V5Z" strokeLinejoin="round" />
          <path
            d="M15.5 8.5a5 5 0 0 1 0 7M18.5 6a9 9 0 0 1 0 12"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={volume}
          onChange={changeVolume}
          aria-label="Volume"
          className="h-1 w-16 shrink-0 cursor-pointer accent-gold-300"
        />
      </div>
    </div>
  );
}
