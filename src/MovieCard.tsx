import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Movie } from "./Models/movies";

export default function MovieCard({
  title,
  poster,
  description,
  year,
  rating,
}: Movie) {
  const logDetails = () => {
    console.log(year);
  };
  logDetails();

  return (
    <Card className="movie-card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={poster} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="p">
            {year}- {rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
