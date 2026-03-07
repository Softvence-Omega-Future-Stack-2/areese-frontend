"use client";

import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

interface StatCard {
  id: string;
  label: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  color?: "blue" | "green" | "orange" | "red" | "purple" | "pink";
}

interface StatCardsProps {
  stats: StatCard[];
}

const getColorStyles = (color: string) => {
  const colors: Record<string, { bg: string; icon: string; badge: string }> = {
    blue: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
      badge: "bg-blue-100 text-blue-800",
    },
    green: {
      bg: "bg-green-50",
      icon: "text-green-600",
      badge: "bg-green-100 text-green-800",
    },
    orange: {
      bg: "bg-orange-50",
      icon: "text-orange-600",
      badge: "bg-orange-100 text-orange-800",
    },
    red: {
      bg: "bg-red-50",
      icon: "text-red-600",
      badge: "bg-red-100 text-red-800",
    },
    purple: {
      bg: "bg-purple-50",
      icon: "text-purple-600",
      badge: "bg-purple-100 text-purple-800",
    },
    pink: {
      bg: "bg-pink-50",
      icon: "text-pink-600",
      badge: "bg-pink-100 text-pink-800",
    },
  };
  return colors[color] || colors.blue;
};

export const StatCards: React.FC<StatCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const styles = getColorStyles(stat.color || "blue");
        return (
          <div
            key={stat.id}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-md hover:border-gray-300"
          >
            {/* Background decoration */}
            <div
              className={cn(
                "absolute right-0 top-0 h-24 w-24 rounded-full opacity-10 transition-transform",
                "group-hover:scale-110",
                styles.bg,
              )}
            />

            <div className="relative z-10">
              {/* Top section with icon and trend */}
              <div className="flex items-start justify-between">
                {stat.icon && (
                  <div className={cn("rounded-lg p-3", styles.bg)}>
                    <div className={cn("h-5 w-5", styles.icon)}>
                      {stat.icon}
                    </div>
                  </div>
                )}
                {stat.trend && (
                  <div
                    className={cn(
                      "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                      stat.trend.isPositive
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800",
                    )}
                  >
                    {stat.trend.isPositive ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {Math.abs(stat.trend.value)}%
                  </div>
                )}
              </div>

              {/* Value and label */}
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>

              {/* Footer text */}
              <p className="mt-4 text-xs text-gray-500">vs. last month</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatCards;
