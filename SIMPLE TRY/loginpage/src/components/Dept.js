// import React from 'react'
// import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
// import './Dept.css'

// export default function Dept() {
//   return (
//     <Card id="tot">
//       <CardContent id="outer">
//         <Typography variant='h5'>
//         <b>Computers and information technology</b>
//         </Typography>
//             <br></br>
//         <Typography>
//         Information technology is a set of related fields that encompass computer systems, software, programming languages and data and information processing and storage. IT forms part of information and communications technology
//         </Typography>

//       <CardActions>
//         <Button>See Vacancies</Button>
//       </CardActions>
//       </CardContent>
//       <br></br>
//       <CardContent id="outer">
//         <Typography variant='h5'>
//         <b>New product development</b>
//         </Typography>
//         <br></br>
//         <Typography>
//         In business and engineering, product development or new product development covers the complete process of bringing a new product to market, renewing an existing product and introducing a product in a new market. A central aspect of NPD is product design, along with various business considerations.
//         </Typography>

//       <CardActions>
//         <Button>See Vacancies</Button>
//       </CardActions>
//       </CardContent>
//       <br></br>
//       <CardContent id="outer">
//         <Typography variant='h5'>
//         <b>Marketing</b>
//         </Typography>
//         <br></br>
//         <Typography>
//         Marketing is the process of identifying customers and "creating, communicating, delivering, and exchanging" goods and services for the satisfaction and retention of those customers. It is one of the primary components of business management and commerce.
//         </Typography>

//       <CardActions>
//         <Button>See Vacancies</Button>
//       </CardActions>
//       </CardContent>
//       <br></br>
//       <CardContent id="outer">
//         <Typography variant='h5'>
//         <b>New product development</b>
//         </Typography>
//         <br></br>
//         <Typography>
//         In business and engineering, product development or new product development covers the complete process of bringing a new product to market, renewing an existing product and introducing a product in a new market. A central aspect of NPD is product design, along with various business considerations.
//         </Typography>

//       <CardActions>
//         <Button>See Vacancies</Button>
//       </CardActions>
//       </CardContent>
//     </Card>
//   )
// }

import * as React from 'react';
import './Home.css';
import './Dept.css';
import Why from './Why';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Navbar from './Navbar';

const defaultTheme = createTheme();

export default function Dept() {
 
  return (
 
    <ThemeProvider theme={defaultTheme}>
      <Navbar/>
      <CssBaseline />

      <main id='full'>
        <div style={{height:'0px'}}></div>
        <Container sx={{ py: 25 }} maxWidth="100px">
          {/* End hero unit */}
          <Grid container spacing={3} className='fname'>
            <Grid item xs={12} sm={6} md={4} className='l1'>
              <Card 
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://i.pinimg.com/564x/20/6f/ad/206fada9a22e977d1a2e4ab32ab4030e.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"Teko"}}>
                  Management
                    <hr></hr>
                  </Typography>
                  <Typography>
                  Management is the administration of organizations, whether they are a business, a nonprofit organization, or a government body through business administration, nonprofit management, or the political science sub-field of public administration respectively
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='l1'>
              <Card 
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://i.pinimg.com/564x/41/23/05/41230590a0ff35dd78f8856bd993affb.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"Teko"}}>
                  Computers and information technology
                    <hr></hr>
                  </Typography>
                  <Typography>
                  Information technology is a set of related fields that encompass computer systems, software, programming languages and data and information processing and storage. IT forms part of information and communications technology. 
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='l1'>
              <Card 
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://i.pinimg.com/564x/be/a5/50/bea55085a166a10f55a4c32559fa63bd.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"Teko"}}>
                  Research and development
                    <hr></hr>
                  </Typography>
                  <Typography>
                  Research and development, is the set of innovative activities undertaken by corporations or governments in developing new services or products, and improving existing ones. Research and development constitutes the first stage of development of a potential new service or the production process.
                </Typography>
                </CardContent>
                
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='l1'>
              <Card 
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://i.pinimg.com/564x/ab/0d/af/ab0dafc18a9d5114434623141eff96ce.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"Teko"}}>
                  Human Resources
                    <hr></hr>
                  </Typography>
                  <Typography>
                  Human resources is the set of people who make up the workforce of an organization, business sector, industry, or economy. A narrower concept is human capital, the knowledge and skills which the individuals command. Similar terms include manpower, labor, or personnel
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='l1'>
              <Card 
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://i.pinimg.com/564x/4e/e8/de/4ee8de1944a5f1f7daf247a292319f76.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"Teko"}}>
                  Finance
                    <hr></hr>
                  </Typography>
                  <Typography>
                  Finance is the study and discipline of money, currency and capital assets. It is related to, but not synonymous with economics, which is the study of production, distribution, and consumption of goods and services; the discipline of financial economics bridges the two.
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='l1'>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://i.pinimg.com/564x/dd/eb/9c/ddeb9cb4fbef56ed635d505eece1313a.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"Comfortaa"}}>
                  New product development
<hr></hr>
                  </Typography>
                  <Typography>

                    In business and engineering, product development or new product development covers the complete process of bringing a new product to market, renewing an existing product and introducing a product in a new market. A central aspect of NPD is product design, along with various business considerations.
                  </Typography>
                </CardContent>
                <CardActions>
                  
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='l1'>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://i.pinimg.com/564x/11/9c/cb/119ccb40a425be4faa25aaabae3533af.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"Comfortaa"}}>
                  UX/UI Department
<hr></hr>
                  </Typography>
                  <Typography>

                    It’s here where the graphic part of the project is created. Graphic Designers develop artworks and wireframes based on data collected through meticulous sociological and psychological research. As a result they design the whole application and its individual components. While creating the product, they work closely with the IT Department.
                  </Typography>
                </CardContent>
                <CardActions>
                  
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='l1'>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://i.pinimg.com/564x/eb/75/b1/eb75b12bf1160d6d6c27fdd9d6231e5b.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:"Comfortaa"}}>
                    Marketing
                    <hr></hr>
                  </Typography>
                  <Typography>
                  Marketing is the process of identifying customers and "creating, communicating, delivering, and exchanging" goods and services for the satisfaction and retention of those customers. It is one of the primary components of business management and commerce.
                  </Typography>
                </CardContent>
                <CardActions>
               
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <hr></hr>
        <br></br>
      </main>
      <Footer/>
    </ThemeProvider>
  );
}