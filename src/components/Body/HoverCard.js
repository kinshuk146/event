// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import './HoverCard.css'

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function HoverCard(props) {
//     if(props.Hover=="true")
//     {
//   return (
//     <>
//     <Card sx={{ minWidth: 275 }} >
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>

//     {/*<div className="event">
//         <head>
//           <link href="https://fonts.googleapis.com/css?family=Pangolin&amp;subset=cyrillic,cyrillic-ext,latin-ext,vietnamese" rel="stylesheet"></link>
//         </head>

//         <div class="grow" style={{ backgroundColor: '#2a75a9' }}>
//           <h2>Title</h2>
//           <p style={{ color: 'black' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
//         </div>


//          <div id="container">
//           <div id="zero">
//             <img src="https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
//             <p class="titlebox">Women</p>
//           </div>
//           <div class="one">
//             <img src="https://cdn.pixabay.com/photo/2017/11/25/21/43/flower-2977709_960_720.png" />
//             <p class="titlebox"> Yellow Flower</p>
//           </div>
//           <div class="two">
//             <img src="https://cdn.pixabay.com/photo/2017/09/08/20/29/chess-2730034_960_720.jpg" />
//             <p class="titlebox"> Chess Game</p>
//           </div>
//           <div class="three">
//             <img src="https://cdn.pixabay.com/photo/2016/08/05/09/21/leaf-1571833_960_720.jpg" />
//             <p class="titlebox"> bridge</p></div>
//           <div class="four">
//             <img src="https://images.pexels.com/photos/733482/pexels-photo-733482.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
//             <p class="titlebox">Horses</p>
//           </div>
//           <div class="five">
//             <img src="https://cdn.pixabay.com/photo/2015/09/21/13/17/road-949832_960_720.jpg" />
//             <p class="titlebox">Old Roads</p></div>
//           <div class="six">
//             <img src="https://cdn.pixabay.com/photo/2017/12/10/13/51/black-3009964_960_720.jpg" />
//             <p class="titlebox">Rain</p>
//           </div>
//           <div class="seven">
//             <img src="https://cdn.pixabay.com/photo/2016/08/12/11/27/umbrella-1588167_960_720.jpg" />
//             <p class="titlebox">Umbrellas</p>
//           </div>
//           <div class="eight">
//             <img src="https://cdn.pixabay.com/photo/2017/02/28/15/42/tree-2106115_960_720.jpg" />
//             <p class="titlebox">Wood</p>
//           </div>
//           <footer>
//           </footer>

//         </div> 
//       </div>*/}
//     </>
//   )};
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  maxWidth:'100%',
  boxShadow: 24,
  p: 4,
};

export default function HoverCard({itemData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>View Pics</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
        </Box>
      </Modal>
    </div>
  );
}

