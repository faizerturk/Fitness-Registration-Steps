// src/context/StepDataContext.tsx
import React, { createContext, useContext, useState } from 'react';

export interface StepData {
  height: string;
  weight: string;
  selectedDays: string[];
  fitnessGoal: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface StepDataContextProps {
  stepData: StepData;
  setStepData: React.Dispatch<React.SetStateAction<StepData>>;
}

const defaultData: StepData = {
  height: '',
  weight: '',
  selectedDays: [],
  fitnessGoal: '',
  name: '',
  surname: '',
  email: '',
  password: '',
};

const StepDataContext = createContext<StepDataContextProps>({
  stepData: defaultData,
  setStepData: () => {},
});

export const useStepData = () => useContext(StepDataContext);

export const StepDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [stepData, setStepData] = useState<StepData>(defaultData);

  return (
    <StepDataContext.Provider value={{ stepData, setStepData }}>
      {children}
    </StepDataContext.Provider>
  );
};
