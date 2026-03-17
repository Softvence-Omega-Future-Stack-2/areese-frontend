const Badge = ({ connected }: { connected: boolean }) => {
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${
        connected ? "bg-emerald-500 text-white" : "bg-gray-200 text-text"
      }`}
    >
      {connected ? "Connected" : "Not Connected"}
    </span>
  );
};

export default Badge;
