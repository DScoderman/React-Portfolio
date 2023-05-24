// import ButtonComponent from "../../../Components/Button"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img from '../../../Images/CodingDog.jpg'
import { Button, CardActionArea, CardActions } from '@mui/material';

// import CodingDog from '../../Images/Coding-Dog.jpg'
import uuid from 'react-uuid';

const ProjectCardComponent = ({ project }) => {

    // console.log(props)
    // const {project} = props
    // const handleButtonPress = () => alert("You pressed a project!")


    // const otherPress = () => alert("You did something else!")

    console.log(project)
    return (
        <Card sx={{ maxWidth:250}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
             image="{img}"
          
             key="uuid()"
              alt="Coding dog"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              {project.repoLink}
            </Button>
          </CardActions>
        </Card>
      );
}

export default ProjectCardComponent