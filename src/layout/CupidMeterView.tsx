import { PrimaryButton } from '../components/common/PrimaryButton';
import { InputText } from '../components/common/InputText';
import { useEffect, useState } from 'react';
import AnotherTest from '../components/common/AnotherTest';
import { LoveIndicator } from '../components/common/LoveIndicator';

const CupidMeterView = () => {
  const [loading, setLoading] = useState(false);
  const [showMatch, setShowMatch] = useState(false);
  const [result, setResult] = useState(0);
  const [name, setName] = useState('');
  const [loversName, setLoversName] = useState('');

  useEffect(() => {
    setShowMatch(false);
  }, [name, loversName]);

  const handleShowMatch = (): void => {
    setLoading(true); // Start loading

    const randomNumber = Math.floor(Math.random() * 80);

    setTimeout(() => {
      if (name) {
        const femaleName = [
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
        const maleName = [
          'ray',
          'rayy',
          'rayyy',
          'apel',
          'apple',
          'nightray',
          'lein',
          'winlen',
          'winlen dodol',
          'winlen dodhol',
          'winlen dhodol',
          'winlen dhodhol',
          'wynlein',
          'priya',
          'priya bagus',
          'bagus',
          'priya bagus amanullah',
          'pba',
        ];

        const maleGuest = maleName.includes(name.toLowerCase());
        const femaleGuest = femaleName.includes(name.toLowerCase());
        const specialGuests = maleGuest || femaleGuest;

        if (specialGuests) {
          if (maleGuest && femaleName.includes(loversName.toLowerCase())) {
            setResult(100);
          } else if (
            femaleGuest &&
            maleName.includes(loversName.toLowerCase())
          ) {
            setResult(100);
          } else {
            setResult(randomNumber);
          }
        } else {
          setResult(randomNumber);
        }

        setShowMatch(true);
      }
      setLoading(false);
    }, 2000); // Simulated delay of 2 seconds
  };
  return (
    <div className="flex flex-col justify-between gap-3 py-4 mx-3">
      <div className="bg-slate-500/60 w-full p-3 rounded-lg flex flex-col gap-2 justify-between">
        <InputText
          label="Your Name"
          htmlFor="yourname"
          height={39}
          value={name}
          onChange={setName}
        />
        <InputText
          label="Your Lover's Name"
          htmlFor="yourloversname"
          height={39}
          value={loversName}
          onChange={setLoversName}
        />
        <PrimaryButton
          onClick={() => handleShowMatch()}
          label="Submit"
          loading={loading}
          height={52}
          width="auto"
          severity={loading ? 'secondary' : 'success'}
        />
        {showMatch && (
          <div className="flex flex-col justify-between gap-2">
            <span>Result:</span>
            <div className="grid grid-cols-[repeat(2,max-content)] gap-x-1">
              <span>Your Name:</span>
              <span>{name}</span>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] gap-x-1">
              <span>Your Lover:</span>
              <span>{loversName}</span>
            </div>
            <LoveIndicator result={result} />
          </div>
        )}
      </div>
      <AnotherTest />
    </div>
  );
};

export default CupidMeterView;
