import CommonButton from "@/components/shared/CommonButton";
import { useState } from "react";

const BrandingPanel = () => {
  const [logo, setLogo] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("File size must be less than 2MB");
      return;
    }

    setLogo(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleRemove = () => {
    setLogo(null);
    setPreview(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
      <h3 className="font-bold text-text mb-1">Workspace Branding</h3>

      <div className="w-full h-px bg-gray-100 my-3" />

      <p className="text-sm text-gray-500 mb-5">
        Upload a logo and choose a color to personalize booking pages and
        dashboards.
      </p>

      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Logo
      </label>

      <div className="flex items-center gap-3 mb-2">
        <label className="cursor-pointer px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
          Choose file
          <input
            type="file"
            className="hidden"
            accept=".jpg,.jpeg,.png,.gif,.svg,.webp"
            onChange={handleFileChange}
          />
        </label>

        <span className="text-sm text-text">
          {logo ? logo.name : "No file chosen"}
        </span>
      </div>

      <p className="text-xs text-text mb-4">
        Upload a logo image (max 2MB, formats: JPEG, PNG, GIF, SVG, WebP)
      </p>

      <div className="w-24 h-10 bg-gray-100 rounded border border-dashed border-gray-300 flex items-center justify-center mb-5 relative">
        {preview ? (
          <>
            <img
              src={preview}
              alt="logo preview"
              className="w-full h-full object-contain rounded"
            />

            <button
              type="button"
              onClick={handleRemove}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full cursor-pointer"
            >
              ×
            </button>
          </>
        ) : (
          <span className="text-xs text-blue-500 p-1 w-full ">
            Logo preview
          </span>
        )}
      </div>

      <CommonButton className="!w-full">Update</CommonButton>
    </div>
  );
};

export default BrandingPanel;
