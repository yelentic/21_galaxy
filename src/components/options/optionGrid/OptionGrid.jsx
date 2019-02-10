import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import OptionCard from '../optionCard/OptionCard';
import './OptionGrid.css';

class OptionGrid extends Component {
  state = {
    courses: [],
    searchString: ''
  };
  constructor() {
    super();
    this.getCourses();
  }
  getCourses = () => {
    this.state.courses = MENUOPTIONS;
  };
  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };
  render() {
    return (
      <div>
        <div>
          <h1> Nos Offres </h1>
          <TextField
            id="researchOption"
            type="text"
            placeholder="Recherche"
            style={{ paddingLeft: 10 }}
            onChange={this.handleChange}
          />
          <hr />
        </div>

        {this.state.courses ? (
          <div>
            <Grid container className="root">
              {this.state.courses
                .filter(s =>
                  s.title.toLowerCase().includes(this.state.searchString)
                )
                .map(currentCourse => (
                  <Grid item xs={6} className="gridList">
                    <OptionCard course={currentCourse} />
                  </Grid>
                ))}
            </Grid>
          </div>
        ) : (
          'No item found'
        )}
      </div>
    );
  }
}

const MENUOPTIONS = [
  {
    title: 'Créer/Gerer Ma societé',
    image: 'assets/test/1.jpg',
    link: '#'
  },
  {
    title: 'Marketing et Communication',
    image: 'assets/test/2.jpg',
    link: '/mark_com'
  },
  {
    title: 'Investir',
    image: 'assets/test/3.jpg',
    link: '#'
  },
  {
    title: 'Audit',
    image: 'assets/test2/audit.jpg',
    link: '#'
  },
  {
    title: 'RH et Formation',
    image: 'assets/test/6.jpg',
    link: '#'
  },
  {
    title: 'Social',
    image: 'assets/test/7.jpg',
    link: '#'
  },
  {
    title: 'Santé',
    image: 'assets/test2/Health.jpg',
    link: '#'
  },
  {
    title: 'Juridique',
    image: 'assets/test2/notaire.jpg',
    link: '#'
  },
  {
    title: 'Corporate',
    image: 'assets/test2/corporate.jpg',
    link: '#'
  },
  {
    title: 'Finance',
    image: 'assets/test2/finance.jpg',
    link: '#'
  },
  {
    title: 'Digital',
    image: 'assets/test2/digital.jpg',
    link: '#'
  },
  {
    title: 'Affaires Publiques',
    image: 'assets/test2/public.png',
    link: '/policy'
  }
];

export default OptionGrid;
