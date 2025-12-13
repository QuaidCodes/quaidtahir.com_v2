"use client";

import React, { useEffect, useRef, useState } from "react";
import GitHubCalendar, { Activity } from "react-github-calendar";
import { motion, AnimatePresence } from "framer-motion";

interface GithubContributionCalendarProps {
  year?: number;
}

interface TooltipData {
  date: string;
  count: number;
  visible: boolean;
  x: number;
  y: number;
}

export default function GithubContributionCalendar({
  year = new Date().getFullYear(),
}: GithubContributionCalendarProps) {
  const username = "quaidcodes"; // Hardcoded username
  const containerRef = useRef<HTMLDivElement>(null);

  const [tooltip, setTooltip] = useState<TooltipData>({
    date: "",
    count: 0,
    visible: false,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, []);

  // Filter contributions to only include days from the specified year
  const filterYearData = (data: Activity[]) =>
    data.filter((day) => new Date(day.date).getFullYear() === year);

  // Format tooltip text
  const formatTooltipText = (count: number, date: string) => {
    if (count === 0) return `No contributions on ${date}`;
    return `${count} contribution${count > 1 ? "s" : ""} on ${date}`;
  };

  // Show tooltip on hover
  const handleMouseEnter = (
    event: React.MouseEvent<SVGRectElement>,
    day: { date: string; count: number }
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      date: day.date,
      count: day.count,
      visible: true,
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  // Hide tooltip on mouse leave
  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 pt-8"
      >
        <h2 className="text-3xl font-extrabold mb-1 text-center tracking-tight text-white">
          GitHub Contributions
        </h2>
        <p className="text-center text-sm text-gray-400 mb-8">{year}</p>

        <div
          ref={containerRef}
          className="overflow-x-auto"
          style={{ userSelect: "none" }}
        >
          <GitHubCalendar
            username={username}
            blockSize={16}
            blockMargin={5}
            fontSize={14}
            transformData={filterYearData}
            style={{ width: "100%", minWidth: 320 }}
            renderBlock={(block, { date, count }) =>
              React.cloneElement(block, {
                onMouseEnter: (e) => handleMouseEnter(e, { date, count }),
                onMouseLeave: handleMouseLeave,
                ...block.props,
              })
            }
          />
        </div>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip.visible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="fixed pointer-events-none z-50 px-3 py-1 bg-gray-900 bg-opacity-90 text-gray-300 rounded-md text-sm font-medium shadow-lg select-none"
            style={{
              top: tooltip.y - 40,
              left: tooltip.x,
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
              userSelect: "none",
              willChange: "transform, opacity",
            }}
          >
            {formatTooltipText(tooltip.count, tooltip.date)}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
