import React from 'react';

export const Run: React.FC<{ run: () => void }> = ({ run }) => {
  React.useEffect(() => {
    run();
  }, [run]);
  return null;
};
