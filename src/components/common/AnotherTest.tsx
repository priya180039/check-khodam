import { useLocation, useNavigate } from 'react-router-dom';
import { PrimaryButton } from './PrimaryButton';

export const AnotherTest = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string): void => {
    navigate(path);
  };
  return (
    <div className="flex flex-col justify-between items-center gap-3 md:grid md:grid-cols-2">
      <span>Do Another Test:</span>
      {location.pathname !== '/cek-khodam' && (
        <PrimaryButton
          onClick={() => handleNavigation('/cek-khodam')}
          label="Cek Khodam"
          height={52}
          width="auto"
          severity="primary"
        />
      )}
      {location.pathname !== '/cupid-meter' && (
        <PrimaryButton
          onClick={() => handleNavigation('/cupid-meter')}
          label="Cek Tingkat Kecocokan Pasangan"
          height={52}
          width="auto"
          severity="primary"
        />
      )}
      {location.pathname !== '/cek-jodoh' && (
        <PrimaryButton
          onClick={() => handleNavigation('/cek-jodoh')}
          label="Cek Nama Jodoh"
          height={52}
          width="auto"
          severity="primary"
        />
      )}
      {location.pathname !== '/' && (
        <PrimaryButton
          onClick={() => handleNavigation('/')}
          label="Home"
          height={52}
          width="auto"
          severity="secondary"
        />
      )}
    </div>
  );
};

export default AnotherTest;
