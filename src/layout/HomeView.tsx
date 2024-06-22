import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/common/PrimaryButton';

const HomeView = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string): void => {
    navigate(path);
  };
  return (
    <div className="flex flex-col justify-between items-center gap-3 pt-4 md:grid md:grid-cols-2 mx-3">
      <PrimaryButton
        onClick={() => handleNavigation('/cek-khodam')}
        label="Cek Khodam"
        height={52}
        width="auto"
        severity="primary"
      />
      <PrimaryButton
        onClick={() => handleNavigation('/cupid-meter')}
        label="Cek Tingkat Kecocokan Pasangan"
        height={52}
        width="auto"
        severity="primary"
      />
      <PrimaryButton
        onClick={() => handleNavigation('/cek-jodoh')}
        label="Cek Nama Jodoh"
        height={52}
        width="auto"
        severity="primary"
      />
    </div>
  );
};

export default HomeView;
