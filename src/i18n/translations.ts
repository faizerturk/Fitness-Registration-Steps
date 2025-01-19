interface TranslationObject {
  [key: string]: string;
}

interface Translations {
  en: TranslationObject;
  ar: TranslationObject;
}

export const translations: Translations = {
  en: {
    next: 'Next',
    back: 'Back',
    save: 'Save',

    step1Title:
      "Let's hear more about you to prepare your personal workout plan",
    yourHeight: 'Your height',
    yourWeight: 'Your weight',

    step2Title: 'Pick your workout days',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',

    step3Title: 'What is your fitness goal?',
    loseWeight: 'Lose weight',
    buildMuscle: 'Build muscle',
    stayHealthy: 'Stay healthy',

    step4Title: 'Final step. Complete your registration',
    name: 'Name',
    surname: 'Surname',
    email: 'E-mail',
    password: 'Password',

    registrationComplete: 'Registration completed!',
  },

  ar: {
    next: 'التالي',
    back: 'رجوع',
    save: 'حفظ',

    step1Title: 'لنستمع إليك أكثر لإعداد خطة التمرين الخاصة بك',
    yourHeight: 'طولك',
    yourWeight: 'وزنك',

    step2Title: 'اختر أيام التمرين',
    monday: 'الاثنين',
    tuesday: 'الثلاثاء',
    wednesday: 'الأربعاء',
    thursday: 'الخميس',
    friday: 'الجمعة',
    saturday: 'السبت',
    sunday: 'الأحد',

    step3Title: 'ما هو هدف لياقتك؟',
    loseWeight: 'إنقاص الوزن',
    buildMuscle: 'بناء العضلات',
    stayHealthy: 'المحافظة على الصحة',

    step4Title: 'الخطوة الأخيرة. أكمل التسجيل',
    name: 'الاسم',
    surname: 'الكنية',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',

    registrationComplete: 'تم اكتمال التسجيل!',
  },
};
