import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HoverCard from '../Body/HoverCard';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Opacity } from '@mui/icons-material';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const useStyles = styled({
    root: {
        maxWidth: 310,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
});

export default function RecipeReviewCard(props) {
    const [expanded, setExpanded] = React.useState(false);
    const [Hover,setHover]=React.useState("false");
    const upcoming=props.upcoming==="true"
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const array1=props.itemData;
    const style=props.style;

    return (
        <div >

            <Card sx={{
                maxWidth: 345, ':hover': {
                    boxShadow: 20,  transform: "scale3d(1, 1, 1.5)", overflowY:"hidden" ,
                 }
            }} onMouseOver={() => setHover("true")} onMouseOut={() => setHover("false")} style={style}>
                <CardHeader
                    title={props.title}
                    subheader={props.date}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={props.image}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <HoverCard  itemData = {array1}
/>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {props.paragraph}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card> 
            
        </div>
    );
}