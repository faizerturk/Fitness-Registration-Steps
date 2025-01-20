import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { useStepData } from '../context/StepDataContext';

import FireIcon from '../assets/IconFire.png';
import LevelIcon from '../assets/IconLevel.png';
import SmileIcon from '../assets/IconSmile.png';

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
}

const Step3: React.FC<Step3Props> = ({ onNext, onBack }) => {
  const { t } = useTranslation();
  const { stepData, setStepData } = useStepData();

  const options = [
    {
      value: 'loseWeight',
      label: t('loseWeight'),
      icon: FireIcon,
    },
    {
      value: 'buildMuscle',
      label: t('buildMuscle'),
      icon: LevelIcon,
    },
    {
      value: 'stayHealthy',
      label: t('stayHealthy'),
      icon: SmileIcon,
    },
  ];

  const handleChange = (val: string) => {
    setStepData((prev) => ({ ...prev, fitnessGoal: val }));
  };

  const isFormValid = stepData.fitnessGoal.trim() !== '';

  const handleNext = () => {
    if (!isFormValid) return;
    onNext();
  };

  return (
    <div className='step-card'>
      <h2 className='step-title'>{t('step3Title')}</h2>

      <div className='card-content'>
        <div className='fitness-goal-box'>
          {options.map((opt, idx) => {
            const selected = stepData.fitnessGoal === opt.value;
            const isLastItem = idx === options.length - 1;

            return (
              <label
                key={opt.value}
                className={`fitness-goal-item ${selected ? 'selected' : ''}`}
                onClick={() => handleChange(opt.value)}
              >
                <div className='left-part'>
                  <img src={opt.icon} alt='icon' className='goal-icon' />
                  <span className='goal-label'>{opt.label}</span>
                </div>

                <div className='radio-circle' />

                <input
                  type='radio'
                  name='fitnessGoal'
                  value={opt.value}
                  checked={selected}
                  onChange={() => handleChange(opt.value)}
                  style={{ display: 'none' }}
                />

                {!isLastItem && <div className='separator-line' />}
              </label>
            );
          })}
        </div>
      </div>

      <div className='button-row'>
        <button onClick={onBack} className='back-btn'>
          {t('back')}
        </button>
        <button
          onClick={handleNext}
          className={`next-btn ${!isFormValid ? 'disabled' : ''}`}
          disabled={!isFormValid}
        >
          {t('next')}
        </button>
      </div>
    </div>
  );
};

export default Step3;
