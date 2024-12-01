import { Box, Container, Typography } from '@mui/material'

interface Props {
  titleTG: string;
  descriptionTG: string;
  children: React.ReactNode;
}

const AuthPageLayoutComponent = ({ titleTG = 'Título por defecto', descriptionTG = 'Descripción por defecto', children }: Props): JSX.Element => {
  return (
    <Box
      component='section'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgb(244, 244, 244)',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: 3,
          borderRadius: 4,
          p: 3,
          maxWidth: { sm: 500 },
          bgcolor: 'rgb(255, 255, 255)',
        }}
      >
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ opacity: 0.6 }}>
          {titleTG}
        </Typography>
        <Typography
          sx={{
            fontSize: '18px',
            opacity: 0.5,
            marginBottom: 3,
          }}
        >
          {descriptionTG}
        </Typography>
        {children}
      </Container>
    </Box>
  );
};


export default AuthPageLayoutComponent;
