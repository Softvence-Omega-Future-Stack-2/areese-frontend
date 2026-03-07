interface checkRowProps {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}
import { GiCheckMark } from "react-icons/gi";

const CheckRow: React.FC<checkRowProps> = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div
      onClick={() => onChange(!checked)}
      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
        checked ? "bg-info border-info" : "border-border"
      }`}
    >
      {checked && <GiCheckMark className="text-white" />}
    </div>
    <span className="text-sm text-info group-hover:text-info transition-colors">
      {label}
    </span>
  </label>
);
export default CheckRow;
