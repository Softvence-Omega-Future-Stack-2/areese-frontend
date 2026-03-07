import CommonButton from "@/components/shared/CommonButton";
import { useState } from "react";
import Badge from "./Badge";
import type { IntegrationName } from "./IntegrationModal";
import IntegrationModal from "./IntegrationModal";
interface Integration {
  name: IntegrationName;
  connected: boolean;
  description: string;
}
const integrations: Integration[] = [
  {
    name: "Zoom",
    connected: false,
    description:
      "Connect your own Zoom account. We do not provide this service.",
  },
  {
    name: "Google Meet",
    connected: true,
    description:
      "Connect your own Google Meet account. We do not provide this service.",
  },
  {
    name: "Stripe",
    connected: false,
    description:
      "Connect your own Stripe account. We do not provide this service.",
  },
  {
    name: "PayPal",
    connected: false,
    description:
      "Connect your own PayPal account. We do not provide this service.",
  },
];

const IntegrationsPanel = () => {
  const [items, setItems] = useState(integrations);
  const [activeModal, setActiveModal] = useState<IntegrationName | null>(null);

  const handleConnect = (name: IntegrationName, connected: boolean) => {
    if (connected) {
      // Disconnect immediately
      setItems((prev) =>
        prev.map((i) => (i.name === name ? { ...i, connected: false } : i)),
      );
    } else {
      // Open setup modal
      setActiveModal(name);
    }
  };

  const handleSave =
    (name: IntegrationName) => (_data: Record<string, string>) => {
      setItems((prev) =>
        prev.map((i) => (i.name === name ? { ...i, connected: true } : i)),
      );
    };

  return (
    <>
      {activeModal && (
        <IntegrationModal
          name={activeModal}
          onClose={() => setActiveModal(null)}
          onSave={handleSave(activeModal)}
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((integration) => (
          <div
            key={integration.name}
            className="bg-white rounded-2xl border border-border shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-800 text-base">
                {integration.name}
              </h3>
              <Badge connected={integration.connected} />
            </div>
            <div className="w-8 h-0.5 bg-gray-200 rounded" />
            <p className="text-sm text-gray-500 flex-1">
              {integration.description}
            </p>

            <CommonButton
              onClick={() =>
                handleConnect(integration.name, integration.connected)
              }
            >
              {integration.connected ? "Disconnect" : "Connect"}
            </CommonButton>
          </div>
        ))}
      </div>
    </>
  );
};

export default IntegrationsPanel;
