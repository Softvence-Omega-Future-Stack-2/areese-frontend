import CardAction from "@/components/shared/CardAction";
import CommonHeader from "@/components/shared/CommonHeader";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Clock } from "lucide-react";
import React from "react";
import { LuCalendarDays, LuDot } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export interface Activity {
  id: string;
  type: "Due Today" | "late" | "Upcoming" | "Follow Up" | "Completed";
  title: string;
  description: string[];
  timestamp: Date;
  icon?: React.ReactNode;
}

interface ActivityFeedProps {
  activities: Activity[];
  title?: string;
}

const typeColors: Record<Activity["type"], string> = {
  "Due Today": "bg-cta text-white",
  late: "bg-danger text-white",
  Upcoming: "bg-upcoming text-white",
  "Follow Up": "bg-info text-white ",
  Completed: "bg-green text-white ",
};

const iconColors: Record<Activity["type"], string> = {
  "Due Today": "bg-cta text-white",
  late: "bg-danger text-white",
  Upcoming: "bg-upcoming text-white",
  "Follow Up": "bg-info text-white ",
  Completed: "bg-green text-white ",
};

export const TaskCard: React.FC<ActivityFeedProps> = ({ activities }) => {
  const navigate = useNavigate();
  const handleDetails = (id: string) => {
    navigate(`/create-task/${id}`);
  };
  return (
    <div>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {activities.length > 0 ? (
          activities.map((activity) => {
            return (
              <div
                key={activity.id}
                className={cn(
                  "rounded-lg p-4 transition-all border border-border bg-white h-full",
                )}
                onClick={() => handleDetails(activity.id)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "mt-1 flex-shrink-0 p-2 rounded-md flex items-center justify-center",
                      iconColors[activity.type],
                    )}
                  >
                    {activity.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <CommonHeader size="md">
                            {activity.title}
                          </CommonHeader>
                          <CardAction
                            onEdit={() => {}}
                            onDelete={() => {}}
                            onDetails={() => handleDetails(activity.id)}
                          />
                        </div>
                        <div className="py-4">
                          {activity.description.map((item, index) => (
                            <CommonHeader key={index} size="sm">
                              <span className="text-2xl">
                                <LuDot />
                              </span>
                              {item}
                            </CommonHeader>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center flex-shrink-0 gap-1 text-right">
                    <span>
                      <LuCalendarDays className="text-xl" />
                    </span>
                    <p className="text-xs font-medium text-gray-500">
                      {format(activity.timestamp, "MMM dd, yyyy")}
                    </p>
                  </div>
                  <Badge
                    className={cn(
                      "text-xs font-medium border",
                      typeColors[activity.type],
                    )}
                  >
                    {activity.type}
                  </Badge>
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-8 text-center">
            <Clock className="mx-auto h-12 w-12 text-gray-300" />
            <p className="mt-2 text-sm text-gray-500">No activity yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
