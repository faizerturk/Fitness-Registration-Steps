// src/App.tsx
import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import { useLanguage } from './context/LanguageContext';
import { useTranslation } from './i18n/useTranslation';
import './App.css';
import './Step.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  const handleNext = () => setCurrentStep((s) => s + 1);
  const handleBack = () => setCurrentStep((s) => s - 1);
  const handleComplete = () => {
    alert(t('registrationComplete'));
    setCurrentStep(1);
  };

  // Arapça => RTL, İngilizce => LTR
  const appDirection = language === 'ar' ? 'rtl' : 'ltr';
  const directionClass = language === 'ar' ? 'rtl' : 'ltr';

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={handleNext} />;
      case 2:
        return <Step2 onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Step3 onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <Step4 onBack={handleBack} onComplete={handleComplete} />;
      default:
        return <Step1 onNext={handleNext} />;
    }
  };

  return (
    <div className={`app-container ${directionClass}`} dir={appDirection}>
      <header className='header-bar'>
        <button className='lang-toggle-btn' onClick={toggleLanguage}>
          {language === 'en' ? 'AR' : 'EN'}
        </button>
      </header>
      <div className='step-wrapper'>{renderStep()}</div>
    </div>
  );
}

export default App;
