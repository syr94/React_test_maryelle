import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import berries_1 from '../img/berries/berries_1.jpg';
import berries_2 from '../img/berries/berries_2.jpg';
import berries_3 from '../img/berries/berries_3.png';
import berries_4 from '../img/berries/berries_4.jpg';
import berries_5 from '../img/berries/berries_5.jpg';
import berries_6 from '../img/berries/berries_6.jpg';
import berries_7 from '../img/berries/berries_7.jpg';
import berries_8 from '../img/berries/berries_8.jpeg';
import berries_9 from '../img/berries/berries_9.jpg';
import berries_10 from '../img/berries/berries_10.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '80%',
  },
}));



export default function BodyComponent_1() {
  const classes = useStyles();

  const TileData = [
    {
      img: berries_1,
      title: 'Image',
      author: 'author',
      cols: 1,
    },

    {
      img: berries_2,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
        img: berries_3,
        title: 'Image',
        author: 'author',
        cols: 2,
      },
      {
        img: berries_4,
        title: 'Image',
        author: 'author',
        cols: 1,
      },
      {
        img: berries_5,
        title: 'Image',
        author: 'author',
        cols: 1,
      },
      {
        img: berries_6,
        title: 'Image',
        author: 'author',
        cols: 2,
      },
      {
        img: berries_7,
        title: 'Image',
        author: 'author',
        cols: 2,
      },
      {
        img: berries_8,
        title: 'Image',
        author: 'author',
        cols: 1,
      },
      {
        img: berries_9,
        title: 'Image',
        author: 'author',
        cols: 1,
      },
      {
        img: berries_10,
        title: 'Image',
        author: 'author',
        cols: 2,
      }
  ];

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={2}>
        {TileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      <div className="text">
                    <p>
                        Our story has started from 1859 year. And every year and every day now , we selling freshiest berries in the all of the Russia.
                        Our berries were growing with love and nature resources. So make your new day with a the best berries that you have ever take.
                    </p>
      </div>
    </div>
  );
}

