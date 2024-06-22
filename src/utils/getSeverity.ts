const getSeverity = (
  severity?: 'primary' | 'danger' | 'success' | 'warning' | 'secondary'
): string => {
  switch (severity) {
    case 'primary':
      return 'bg-sky-600 hover:bg-sky-700 text-gray-200';
    case 'danger':
      return 'bg-red-600 hover:bg-red-700 text-gray-200';
    case 'success':
      return 'bg-green-600 hover:bg-green-700 text-gray-200';
    case 'warning':
      return 'bg-yellow-600 hover:bg-yellow-700 text-gray-200';
    default:
      return 'bg-slate-600 hover:bg-slate-700 text-gray-200';
  }
};

export default getSeverity;
