import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Media } from 'react-md';
import MediaOverlay from 'react-md/lib/Media/MediaOverlay';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import GridListTile from '../../titlebars/grid';

const OptionCard = props => {
  return (
    <div>
      {props.course ? (
        <Card>
          <img
            src={props.course.image}
            alt={props.course.title}
            height="200"
            width="100%"
          />
          <MediaOverlay>
            <a href={props.course.link}>
              <CardTitle title={props.course.title} />
            </a>
          </MediaOverlay>
        </Card>
      ) : null}
    </div>
  );
};
export default OptionCard;
