import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ProductDescriptionCard.css'
function ProductDescriptionCard(props) {
  return (
    <div style={{}}>
        <Card sx={{ maxWidth: 315,borderRadius:5,boxShadow:1,marginBottom:2,marginLeft:-2,maxHeight:300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
        />
      </CardActionArea>
    </Card>
    </div>
  )
}

export default ProductDescriptionCard
