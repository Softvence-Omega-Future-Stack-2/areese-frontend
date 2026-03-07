import { FaPlus } from "react-icons/fa6";
import ButtonWithIcon from "./ButtonWithIcon";
import CommonHeader from "./CommonHeader";

interface ManagementHeaderProps {
  title: string;
  description?: string;
  className?: string;
  buttonText?: string;
  action?: () => void;
  descriptionClassName?: string;
}

const DashboardTopSection: React.FC<ManagementHeaderProps> = ({
  title,
  description,
  className,
  buttonText,
  descriptionClassName,
  action,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-6  ${className} `}
    >
      <div className="space-y-1 ">
        {title && <CommonHeader size="3xl">{title}</CommonHeader>}
        {description && (
          <div className="w-full ">
            <CommonHeader
              size="md"
              className={`${descriptionClassName} !text-gray-400`}
            >
              {description}
            </CommonHeader>
          </div>
        )}
      </div>

      <div className="flex gap-4.5 items-center">
        {buttonText && (
          <ButtonWithIcon
            icon={FaPlus}
            className="w-full lg:w-auto flex justify-center  shrink-0 "
          >
            <p onClick={action}>{buttonText}</p>
          </ButtonWithIcon>
        )}
      </div>
    </div>
  );
};
export default DashboardTopSection;
