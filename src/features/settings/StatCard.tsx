interface StatCardProps {
  label: string;
  value: number;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, color }) => {
  const colorMap: Record<string, string> = {
    black: "text-gray-900",
    green: "text-emerald-500",
    blue: "text-blue-500",
    red: "text-red-500",
    purple: "text-purple-500",
  };
  return (
    <div className="bg-gray-50 rounded-xl border border-border p-4">
      <p className="text-xs text-gray-500 mb-2">{label}</p>
      <p className={`text-2xl font-bold ${colorMap[color] ?? "text-gray-900"}`}>
        {value}
      </p>
    </div>
  );
};

export default StatCard;
