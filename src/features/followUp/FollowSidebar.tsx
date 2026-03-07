// FollowSidebar.tsx
import React from "react";

export interface SidebarItem {
  id: number | string;
  label: string;
  count?: number;
}

interface FollowSidebarProps {
  items: SidebarItem[];
  activeId: number | string;
  onChange: (id: number | string) => void;
}

const FollowSidebar: React.FC<FollowSidebarProps> = ({
  items,
  activeId,
  onChange,
}) => {
  return (
    <aside className="flex-shrink-0 w-60">
      <div className="bg-white rounded-[16px] border-[1.5px] border-[#EBEBED] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#7C6FE0] to-[#5B4FCF] px-4 py-3">
          <span className="text-white font-bold text-xs tracking-wider">
            TASKS WITH NOTES
          </span>
        </div>

        {/* Items */}
        <div className="p-2">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => onChange(item.id)}
                className={`flex items-center justify-between p-2.5 mb-0.5 rounded-lg cursor-pointer ${
                  isActive ? "bg-[#EEEDF9]" : "bg-transparent"
                }`}
              >
                <div className="flex items-center gap-2">
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C6FE0] animate-pulse" />
                  )}
                  <span
                    className={`text-sm ${
                      isActive
                        ? "text-[#5B4FCF] font-semibold"
                        : "text-[#52525B] font-medium"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                {item.count && item.count > 0 && (
                  <span
                    className={`min-w-[22px] text-[0.7rem] font-bold rounded-full px-2 py-[2px] text-center ${
                      isActive
                        ? "bg-[#5B4FCF] text-white"
                        : "bg-[#E4E4E7] text-[#71717A]"
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default FollowSidebar;
