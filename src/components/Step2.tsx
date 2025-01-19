import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { useStepData } from '../context/StepDataContext';

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onBack }) => {
  const { t } = useTranslation();
  const { stepData, setStepData } = useStepData();

  const weightNum = parseFloat(stepData.weight) || 0;
  const heightNum = parseFloat(stepData.height) || 1;
  const ratio = weightNum / heightNum;

  // Tüm günler
  const allDays = [
    { key: 'monday', label: t('monday') },
    { key: 'tuesday', label: t('tuesday') },
    { key: 'wednesday', label: t('wednesday') },
    { key: 'thursday', label: t('thursday') },
    { key: 'friday', label: t('friday') },
    { key: 'saturday', label: t('saturday') },
    { key: 'sunday', label: t('sunday') },
  ];

  // ratio>0.5 => Tuesday/Thursday disabled
  function isDayDisabled(dayKey: string) {
    if (ratio <= 0.5) return false;
    return dayKey === 'tuesday' || dayKey === 'thursday';
  }

  const handleDayToggle = (dayKey: string) => {
    setStepData((prev) => {
      const isSelected = prev.selectedDays.includes(dayKey);
      let updated = [...prev.selectedDays];
      if (isSelected) {
        updated = updated.filter((d) => d !== dayKey);
      } else {
        updated.push(dayKey);
      }
      return { ...prev, selectedDays: updated };
    });
  };

  const isFormValid = stepData.selectedDays.length > 0;

  return (
    <div className='step-card'>
      <h2 className='step-title'>{t('step2Title')}</h2>

      <div className='card-content'>
        <div className='days-list'>
          {allDays.map((day) => {
            const disabled = isDayDisabled(day.key);
            const selected = stepData.selectedDays.includes(day.key);

            const handleClick = () => {
              if (!disabled) handleDayToggle(day.key);
            };

            return (
              <div
                key={day.key}
                className={`day-row ${disabled ? 'disabled' : ''} ${
                  selected ? 'selected' : ''
                }`}
                onClick={handleClick}
              >
                <span>{day.label}</span>
                {selected && <span className='check-icon'>✔</span>}
              </div>
            );
          })}
        </div>
      </div>

      <div className='button-row'>
        <button onClick={onBack} className='back-btn'>
          {t('back')}
        </button>
        <button
          onClick={onNext}
          className={`next-btn ${!isFormValid ? 'disabled' : ''}`}
          disabled={!isFormValid}
        >
          {t('next')}
        </button>
      </div>
    </div>
  );
};

export default Step2;
