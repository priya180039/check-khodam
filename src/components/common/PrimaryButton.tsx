import { getSeverity } from '../../utils';
import { BiLoaderAlt } from 'react-icons/bi';

interface PrimaryButtonProps {
  height?: number | string;
  width?: number | string;
  severity?: 'primary' | 'danger' | 'success' | 'warning' | 'secondary';
  loading?: boolean;
  label: string;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  height,
  width,
  severity,
  label,
  loading,
  onClick,
}) => {
  const severityColor = getSeverity(severity);

  const buttonStyle = {
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
  };
  return (
    <button
      className={`${severityColor} text-slate px-4 rounded-lg !w-full md:w-auto text-lg`}
      style={buttonStyle}
      onClick={onClick}
    >
      <span className={`${loading ? 'text-2xl' : ''}`}>
        {loading ? <BiLoaderAlt className="animate-spin mx-auto" /> : label}
      </span>
    </button>
  );
};
