interface InputTextProps {
  height?: number | string;
  width?: number | string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  htmlFor: string;
  label: string;
}

export const InputText: React.FC<InputTextProps> = ({
  height,
  width,
  placeholder,
  htmlFor,
  onChange,
  label,
  value,
}) => {
  const buttonStyle = {
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
  };

  const placeholderText = placeholder ?? `Input ${label.toLowerCase()}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        onChange={handleChange}
        value={value}
        name={htmlFor}
        placeholder={placeholderText}
        className={`text-slate flex justify-between items-center px-4 rounded-lg !w-full md:w-auto text-lg`}
        style={buttonStyle}
      />
    </>
  );
};
