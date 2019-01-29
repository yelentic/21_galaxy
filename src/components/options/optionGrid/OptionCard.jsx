import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Media } from 'react-md';
import '~react-md/src/scss/react-md';

const OptionCard = props => {
  return (
    <div>
      {props.course ? (
        <Card>
          <Media>
            <img
              src={props.course.fields.image}
              alt={props.course.fields.title}
              height="200"
              width="500"
            />
          </Media>
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="h3">
              {props.course.fields.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={''} target="_blank">
              En France
            </Button>
            <Button size="small" color="primary" href={''} target="_blank">
              À l'international
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default OptionCard;
