const Badge = ({ connected }: { connected: boolean }) => {
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${
        connected ? "bg-green " : "bg-cta"
      }`}
    >
      {connected ? "Connected" : "Not Connected"}
    </span>
  );
};

export default Badge;
