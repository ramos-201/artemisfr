import { Box, Container, Typography } from '@mui/material'

interface Props {
  titleTG: string;
  descriptionTG: string;
  children: React.ReactNode;
}

const AuthPageLayoutComponent = ({ titleTG, descriptionTG, children }: Props): JSX.Element => {
  const boxStyles = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'rgb(244, 244, 244)',
  }

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    boxShadow: 3,
    borderRadius: 4,
    p: 3,
    maxWidth: {sm: 500},
    bgcolor: 'rgb(255, 255, 255)',
  }

  return (
    <Box component='section' sx={boxStyles} >
      <Container sx={containerStyles} >
        <Typography variant='h4' fontWeight='bold' mb={1} sx={{ opacity: 0.6 }}>
          {titleTG}
        </Typography>
        <Typography fontSize={'18px'} mb={1} sx={{ opacity: 0.5 }} >
          {descriptionTG}
        </Typography>
        {children}
      </Container>
    </Box>
  );
};


export default AuthPageLayoutComponent;
