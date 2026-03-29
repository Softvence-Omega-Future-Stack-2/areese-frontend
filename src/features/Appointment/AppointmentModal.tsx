export interface Appointment {
  id: number;
  name: string;
  date: string;
  time: string;
  duration: string;
  status: string;
  link?: string;
}
interface AppointmentModalProps {
  appointment: Appointment | null;
  onClose: () => void;
}

const AppointmentModal = ({ appointment, onClose }: AppointmentModalProps) => {
  if (!appointment) return null;

  const statusColor = {
    Scheduled: "bg-blue-100 text-blue-600",
    Completed: "completed-bg-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Cancelled: "bg-red-100 text-red-600",
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[420px] rounded-xl shadow-xl p-6">
        <h2 className="text-lg font-semibold mb-5">Appointment Details</h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-text/50">Client</span>
            <span className="font-medium">{appointment.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-text/50">Date</span>
            <span>{appointment.date}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-text/50">Time</span>
            <span>{appointment.time}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-text/50">Duration</span>
            <span>{appointment.duration}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-text/50">Status</span>

            <span
              className={`px-2 py-1 rounded text-xs font-medium ${
                statusColor[appointment.status as keyof typeof statusColor]
              }`}
            >
              {appointment.status}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-text/50">Meeting Link</span>

            {appointment.link ? (
              <a
                href={appointment.link}
                target="_blank"
                className="text-blue-500 underline"
              >
                Join
              </a>
            ) : (
              <span className="text-gray-400">N/A</span>
            )}
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-cta text-white py-2 rounded-lg cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AppointmentModal;
