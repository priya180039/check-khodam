import { useLocation } from 'react-router-dom';

const NavigateBar = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <div className=" border-stone-300 border-b-2 shadow-sm shadow-stone-300 pb-2">
        <div className="flex flex-col items-center justify-between text-xl py-1 md:py-4 mx-8 ">
          <div className="text-2xl md:text-3xl text-center shadow-xl">
            Cek Khodam dan Tingkat Kecocokan
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" border-stone-300 border-b-2 shadow-sm shadow-stone-300 pb-2">
      {/khodam/.test(location.pathname) ? (
        <div className="flex flex-col justify-between  text-xl py-1 md:py-4 mx-8">
          <div className="text-2xl md:text-3xl tracking-[5%] text-center">
            Cek Khodam Kamu Di sini!
          </div>
        </div>
      ) : (
        <div className="flex justify-between text-xl py-1 md:py-4 mx-8">
          <div className="text-2xl md:text-3xl tracking-[5%] text-center">
            Cek Kecocokan Kamu dan Pasangan Di sini!
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigateBar;
