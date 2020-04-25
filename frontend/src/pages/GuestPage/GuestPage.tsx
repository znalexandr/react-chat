import React, { useState } from 'react';

import { SinginForm } from './SingInForm';
import { SingupForm } from './SingupForm';

type ScreenType = 'signin' | 'signup';

export default function GuestPage() {
  const [screen, setScreen] = useState<ScreenType>();

  const isSingUp = screen === 'signup';

  function goToSingup() {
    setScreen('signup');
  }

  function goToSingin() {
    setScreen('signin');
  }

  if (isSingUp) {
    return <SingupForm goToSingin={goToSingin} />;
  }

  return <SinginForm goToSingup={goToSingup} />;
}
