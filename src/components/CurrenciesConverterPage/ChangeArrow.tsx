import AutorenewIcon from '@mui/icons-material/Autorenew';
export const ChangeArrow = () => {
  return (
    <AutorenewIcon
      sx={{
        width: '60px',
        height: '60px',
        color: 'rgb(0, 111, 232)',
        '&:hover': { cursor: 'pointer' },
      }}
    />
  );
};
