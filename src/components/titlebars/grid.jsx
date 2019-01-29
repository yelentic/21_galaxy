import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 800,
    height: 590,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: 'white'
  }
});

const tileData = [
  {
    img: 'assets/test2/audit.jpg',
    title: 'Audit',
    author: 'audit',
    featured: true
  },
  {
    img: 'assets/test2/finance.jpg',
    title: 'Finance',
    author: 'finance',
    featured: true
  },
  {
    img: 'assets/test2/digital.jpg',
    title: 'Digital',
    author: 'digital',
    featured: true
  },
  {
    img: 'assets/test2/notaire.jpg',
    title: 'Juridique',
    author: 'Juridique',
    featured: true
  },
  {
    img: 'assets/test2/public.png',
    title: 'Affaires Publiques',
    author: 'Affaires Publiques',
    featured: true
  },
  {
    img: 'assets/test2/corporate.jpg',
    title: 'Corporate',
    author: 'Corporate',
    featured: true
  },
  {
    img: 'assets/test2/Health.jpg',
    title: 'Santé',
    author: 'Santé',
    featured: true
  }
];

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleLineGridList);
