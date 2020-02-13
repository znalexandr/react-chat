import React, { useState } from 'react';

import { LightBox } from '.';

export default {
  title: 'Atoms/LightBox'
};

export const BaseUsage = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <h2>Base usage</h2>
      <button type="button" onClick={() => setVisible(true)}>
        Show lighbox
      </button>
      {isVisible && (
        <LightBox onClose={() => setVisible(false)}>
          <>Hello Button</>
        </LightBox>
      )}
    </>
  );
};
