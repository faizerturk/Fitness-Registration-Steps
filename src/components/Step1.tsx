import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { useStepData } from '../context/StepDataContext';

interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const { t } = useTranslation();
  const { stepData, setStepData } = useStepData();

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepData((prev) => ({ ...prev, height: e.target.value }));
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepData((prev) => ({ ...prev, weight: e.target.value }));
  };

  const isFormValid =
    stepData.height.trim() !== '' &&
    stepData.weight.trim() !== '' &&
    parseFloat(stepData.height) > 0 &&
    parseFloat(stepData.weight) > 0;

  const handleNext = () => {
    if (!isFormValid) return;
    onNext();
  };

  return (
    <div className='step-card'>
      <h2 className='step-title'>{t('step1Title')}</h2>

      {/* Ortadaki içerik */}
      <div className='card-content'>
        <div className='input-group'>
          <input
            className='text-input'
            type='number'
            placeholder={t('yourHeight')}
            value={stepData.height}
            onChange={handleHeightChange}
          />
        </div>
        <div className='input-group'>
          <input
            className='text-input'
            type='number'
            placeholder={t('yourWeight')}
            value={stepData.weight}
            onChange={handleWeightChange}
          />
        </div>
      </div>

      <div className='button-row'>
        {/* Step1'de Back butonu disabled */}
        <button className='back-btn disabled' disabled>
          {t('back')}
        </button>
        <button
          onClick={handleNext}
          disabled={!isFormValid}
          className={`next-btn ${!isFormValid ? 'disabled' : ''}`}
        >
          {t('next')}
        </button>
      </div>
    </div>
  );
};

export default Step1;
