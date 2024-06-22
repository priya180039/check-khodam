import { PrimaryButton } from '../components/common/PrimaryButton';
import { InputText } from '../components/common/InputText';
import { useEffect, useState } from 'react';
import AnotherTest from '../components/common/AnotherTest';

const CekKhodamView = () => {
  const [loading, setLoading] = useState(false);
  const [showKhodam, setShowKhodam] = useState(false);
  const [name, setName] = useState('');
  const [khodam, setKhodam] = useState('');

  useEffect(() => {
    setShowKhodam(false);
  }, [name]);

  const handleShowKhodam = (): void => {
    setLoading(true); // Start loading

    const khodamList = [
      'Sendal Jepit',
      'Pipa Paralon',
      'Pintu Rusak',
      'Kipas Angin',
      'Gerobak Sampah',
      'Ga punya khodam (bayar dulu)',
      'Kunti Bogel',
      'Macan Polkadot',
      'Lontong Sayur',
    ];

    const randomIndex = Math.floor(Math.random() * khodamList.length);

    setTimeout(() => {
      if (name) {
        const specialName = [
          'niw',
          'ryni widya ningrum',
          'rini widya ningrum',
          'ningrum',
          'widya ningrum',
          'rini',
          'rini widya',
          'ryni',
          'niww',
          'niwww',
          'ryni widya',
          'widya',
          'wid',
          'widd',
          'widdd',
        ];
        setKhodam(
          specialName.includes(name.toLowerCase())
            ? 'Apple'
            : khodamList[randomIndex]
        );
        setShowKhodam(true);
      }
      setLoading(false);
    }, 2000); // Simulated delay of 2 seconds
  };
  return (
    <div className="flex flex-col justify-between gap-3 py-4 mx-3">
      <div className="bg-slate-500/60 w-full p-3 rounded-lg flex flex-col gap-2 justify-between">
        <InputText
          label="Name"
          htmlFor="name"
          height={39}
          value={name}
          onChange={setName}
        />
        <PrimaryButton
          onClick={() => handleShowKhodam()}
          label="Submit"
          loading={loading}
          height={52}
          width="auto"
          severity={loading ? 'secondary' : 'success'}
        />
        {showKhodam && (
          <div className="flex flex-col justify-between gap-2">
            <span>Result:</span>
            <div className="grid grid-cols-[repeat(2,max-content)] gap-x-1">
              <span>Name:</span>
              <span>{name}</span>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] gap-x-1">
              <span>Khodam:</span>
              <span>{khodam}</span>
            </div>
          </div>
        )}
      </div>
      <AnotherTest />
    </div>
  );
};

export default CekKhodamView;
