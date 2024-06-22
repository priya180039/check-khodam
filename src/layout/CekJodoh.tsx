import { PrimaryButton } from '../components/common/PrimaryButton';
import { InputText } from '../components/common/InputText';
import { useEffect, useState } from 'react';
import AnotherTest from '../components/common/AnotherTest';
import { faker } from '@faker-js/faker/locale/id_ID';

const CekJodohView = () => {
  const [loading, setLoading] = useState(false);
  const [showSoulMate, setShowSoulMate] = useState(false);
  const [name, setName] = useState('');
  const [soulMate, setSoulMate] = useState('');

  useEffect(() => {
    setShowSoulMate(false);
  }, [name]);

  const handleShowSoulMate = (): void => {
    setLoading(true); // Start loading

    setTimeout(() => {
      if (name) {
        const randomName = faker.person.fullName();

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
          'winlen',
          'wynlein',
          'apel',
          'apple',
          'nightray',
          'lein',
          'priya',
          'priya bagus',
          'bagus',
          'priya bagus amanullah',
          'pba',
        ];
        const maleGuest = maleName.includes(name.toLowerCase());
        const femaleGuest = femaleName.includes(name.toLowerCase());

        if (maleGuest) {
          setSoulMate('Ryni Widya Ningrum');
        } else if (femaleGuest) {
          setSoulMate('Priya Bagus Amanullah');
        } else {
          setSoulMate(randomName);
        }
        setShowSoulMate(true);
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
          onClick={() => handleShowSoulMate()}
          label="Submit"
          loading={loading}
          height={52}
          width="auto"
          severity={loading ? 'secondary' : 'success'}
        />
        {showSoulMate && (
          <div className="flex flex-col justify-between gap-2">
            <span>Result:</span>
            <div className="grid grid-cols-[repeat(2,max-content)] gap-x-1">
              <span>Name:</span>
              <span>{name}</span>
            </div>
            <div className="grid grid-cols-[repeat(2,max-content)] gap-x-1">
              <span>Soulmate:</span>
              <span>{soulMate}</span>
            </div>
          </div>
        )}
      </div>
      <AnotherTest />
    </div>
  );
};

export default CekJodohView;
