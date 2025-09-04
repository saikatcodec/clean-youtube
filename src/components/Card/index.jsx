import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ImgCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt={item.name}
        image={item.defaultThumbnails.url}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {item.name.substr(0, 50) + (item.name.length > 50 ? "...." : "")}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          By {item.channelName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ImgCard;
