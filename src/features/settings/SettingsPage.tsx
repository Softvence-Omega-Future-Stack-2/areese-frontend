import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import AccountPanel from "./AccountPanel";
import AnalyticsPanel from "./AnalyticsPanel";
import BookingCapsPanel from "./BookingCapsPanel";
import BrandingPanel from "./BrandingPanel";
import IntegrationsPanel from "./IntegrationsPanel";
import NotificationsPanel from "./NotificationsPanel";

type Section =
  | "integrations"
  | "notifications"
  | "analytics"
  | "branding"
  | "booking-caps"
  | "account";

const navItems: { id: Section; label: string }[] = [
  { id: "integrations", label: "Integrations" },
  { id: "notifications", label: "Notifications" },
  { id: "analytics", label: "Analytics" },
  { id: "branding", label: "Branding" },
  { id: "booking-caps", label: "Booking Caps" },
  { id: "account", label: "Account" },
];

const panelMap: Record<Section, React.ReactNode> = {
  integrations: <IntegrationsPanel />,
  notifications: <NotificationsPanel />,
  analytics: <AnalyticsPanel />,
  branding: <BrandingPanel />,
  "booking-caps": <BookingCapsPanel />,
  account: <AccountPanel />,
};

const titleMap: Record<Section, string> = {
  integrations: "Integrations",
  notifications: "Notifications",
  analytics: "Analytics",
  branding: "Branding",
  "booking-caps": "Booking Caps",
  account: "Account",
};

const SettingsPage = () => {
  const [active, setActive] = useState<Section>("integrations");

  return (
    <div className="">
      <div className="flex items-start gap-6  w-full pb-6">
        <nav className="w-52 shrink-0 bg-white border-r border-border m pt-6 px-3 rounded-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors mb-0.5 ${
                active === item.id
                  ? "text-today-accent font-semibold border-l-2  border-today-accent pl-2.5 bg-orange-50"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Main content */}
        <main className="flex-1 ">
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-5 flex items-center gap-2">
              <IoSettingsOutline className="text-2xl" />
              <h2 className="text-lg font-bold text-gray-800">
                {titleMap[active]}
              </h2>
            </div>
            <div className="px-6 pb-4 bg-blue-50 border-t border-blue-100">
              <p className="text-sm text-gray-600 py-3">
                Configure your workspace. Changes are saved automatically.
              </p>
            </div>
          </div>

          {panelMap[active]}
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
