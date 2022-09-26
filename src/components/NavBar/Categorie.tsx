import Box from '@mui/material/Box';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type CategorieProps = {
  children: ReactNode;
  link: string;
};

const defaultStyle = {
  width: '50%',
  textDecoration: 'none',
  backgroundColor: 'rgb(240, 245, 250)',
  color: 'rgb(55, 80, 110)',
};

const activeStyle = {
  backgroundColor: 'white',
  color: 'rgb(0, 111, 232)',
  width: '50%',
  fontWeight: '700',
  textDecoration: 'none',
};

export const Categorie = ({ children, link }: CategorieProps) => {
  return (
    <NavLink
      to={link}
      style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
      end
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          fontSize: '20px',
          padding: '15px 0',
          '&:hover': {
            opacity: '0.5',
          },
        }}
      >
        {children}
      </Box>
    </NavLink>
  );
};
