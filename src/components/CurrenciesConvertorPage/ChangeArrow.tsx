import { useState } from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export const ChangeArrow = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AutorenewIcon
      sx={{
        width: '60px',
        height: '60px',
        color: 'rgb(0, 111, 232)',
        '&:hover': { cursor: 'pointer' },
      }}
      onClick={() => setIsActive(true)}
      onAnimationEnd={() => setIsActive(false)}
      className={isActive ? 'animation' : undefined}
    />
  );
};
