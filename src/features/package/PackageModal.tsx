interface Package {
  id: number;
  name: string;
  price: number;
  duration: number;
}

interface PackageModalProps {
  data: Package | null;
  onClose: () => void;
}

const PackageModal = ({ data, onClose }: PackageModalProps) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Package Details</h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-text/50">Package Name</span>
            <span className="font-medium">{data.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-text/50">Price</span>
            <span className="font-medium">${data.price}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-text/50">Duration</span>
            <span className="font-medium">{data.duration} min</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-cta cursor-pointer text-white py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PackageModal;
