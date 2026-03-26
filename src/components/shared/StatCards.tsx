import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

export interface StatCard {
  id: string;
  label: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
}

interface StatCardsProps {
  stats: StatCard[];
}

export const brandColors = [
  "bg-brand",
  "bg-followup-bg",
  "bg-upcoming-bg",
  "bg-late-bg",
];
export const StatCards: React.FC<StatCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {stats.map((stat, i) => {
        const bgColor = brandColors[i % brandColors.length];
        return (
          <div
            key={stat.id}
            className={`group relative overflow-hidden rounded-xl border border-border ${bgColor}  p-6 transition-all `}
          >
            {/* Background decoration */}
            <div
              className={cn(
                "absolute right-0 top-0 h-24 w-24 rounded-full opacity-10 transition-transform",
                "group-hover:scale-110",
              )}
            />

            <div className="relative z-10">
              {/* Top section with icon and trend */}
              <div className="flex items-start justify-between">
                {stat.icon && (
                  <div
                    className={`rounded-lg p-3 ${stat.iconBg} ${stat.iconColor} `}
                  >
                    <div className={cn("h-5 w-5")}>{stat.icon}</div>
                  </div>
                )}
                {stat.trend && (
                  <div
                    className={cn(
                      "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-white",
                      stat.trend.isPositive ? "bg-green " : "bg-late-accent ",
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
                <p className="text-sm font-medium text-text">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold text-text">
                  {stat.value}
                </p>
              </div>

              {/* Footer text */}
              <p className="mt-4 text-xs text-text">vs. last month</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatCards;
