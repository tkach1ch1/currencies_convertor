import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useState } from 'react';
import '../../styles/AnimationEffect.css';

export const ChangeArrow = () => {
  const [isActive, setIsActive] = useState(false);

  const onHandleClick = () => {
    setIsActive(true);
  };
  return (
    <AutorenewIcon
      sx={{
        width: '60px',
        height: '60px',
        color: 'rgb(0, 111, 232)',
        '&:hover': { cursor: 'pointer' },
      }}
      onClick={onHandleClick}
      onAnimationEnd={() => setIsActive(false)}
      className={isActive ? 'animation' : undefined}
    />
  );
};
