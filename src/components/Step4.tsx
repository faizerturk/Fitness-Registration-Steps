import React, { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { useStepData } from '../context/StepDataContext';

interface Step4Props {
  onBack: () => void;
  onComplete: () => void;
}

const Step4: React.FC<Step4Props> = ({ onBack, onComplete }) => {
  const { t } = useTranslation();
  const { stepData, setStepData } = useStepData();
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, val: string) => {
    setStepData((prev) => ({ ...prev, [field]: val }));
  };

  const isFormValid =
    stepData.name.trim() !== '' &&
    stepData.surname.trim() !== '' &&
    stepData.email.trim() !== '' &&
    stepData.password.trim() !== '';

  const handleSave = async () => {
    if (!isFormValid) return;
    setLoading(true);
    try {
      console.log('Mock API =>', stepData);
      await new Promise((resolve) => setTimeout(resolve, 800));
      onComplete();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='step-card'>
      <h2 className='step-title'>{t('step4Title')}</h2>

      <div className='card-content'>
        <div className='input-group'>
          <input
            className='text-input'
            type='text'
            placeholder={t('name')}
            value={stepData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>
        <div className='input-group'>
          <input
            className='text-input'
            type='text'
            placeholder={t('surname')}
            value={stepData.surname}
            onChange={(e) => handleChange('surname', e.target.value)}
          />
        </div>
        <div className='input-group'>
          <input
            className='text-input'
            type='email'
            placeholder={t('email')}
            value={stepData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>
        <div className='input-group'>
          <input
            className='text-input'
            type='password'
            placeholder={t('password')}
            value={stepData.password}
            onChange={(e) => handleChange('password', e.target.value)}
          />
        </div>
      </div>

      <div className='button-row'>
        <button onClick={onBack} className='back-btn' disabled={loading}>
          {t('back')}
        </button>
        <button
          onClick={handleSave}
          className={`save-btn ${!isFormValid || loading ? 'disabled' : ''}`}
          disabled={!isFormValid || loading}
        >
          {loading ? 'Loading...' : t('save')}
        </button>
      </div>
    </div>
  );
};

export default Step4;
