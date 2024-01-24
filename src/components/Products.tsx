import type { FC } from 'react';
import { Box, Typography, Stack, Container, useMediaQuery, useTheme, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { productback, productsimage } from '@/theme/content';

interface Product {
  title: string;
  image: string;
}

const {eggs}=productback;
export const Products: FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100%',
        mt: { md: '0', lg: '0', sm: '20' },
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${eggs})`,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'left',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {productsimage.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 450 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent sx={{backgroundColor: 'secondary.main'}}>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
