import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface ActionAreaCardModel{
    imagePath: string;
    title: string;
    desc: string;
}

const ActionAreaCard = ({
    imagePath,
    title,
    desc
}: ActionAreaCardModel) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: '70px', objectFit: 'contain' }}
          component="img"
          image={`${imagePath}`}
        />
        <CardContent>
          <Typography sx={{ color: 'text.dark' }} gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard;