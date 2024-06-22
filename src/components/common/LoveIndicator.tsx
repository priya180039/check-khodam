interface LoveIndicatorProps {
  result: number;
}

export const LoveIndicator: React.FC<LoveIndicatorProps> = ({ result }) => {
  return (
    <div className="relative flex flex-col justify-between items-center">
      <img src="/heart.png" height={150} width={150} alt="indicator" />
      <span className="absolute top-[30%] text-3xl font-bold text-red-600 tracking-[2%]">
        {result}%
      </span>
    </div>
  );
};
