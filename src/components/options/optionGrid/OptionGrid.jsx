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
            <Grid container style={{ padding: 20 }}>
              {this.state.courses
                .filter(s =>
                  s.fields.title.toLowerCase().includes(this.state.searchString)
                )
                .map(currentCourse => (
                  <Grid item xs={4} style={{ padding: 20 }}>
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
    fields: {
      title: 'Créer/Gerer Ma societé',
      image: 'assets/test/1.jpg'
    }
  },
  {
    fields: {
      title: 'Marketing et Communication',
      image: 'assets/test/2.jpg'
    }
  },
  {
    fields: {
      title: 'Investir',
      image: 'assets/test/3.jpg'
    }
  },
  {
    fields: {
      title: 'Audit / Finances',
      image: 'assets/test/4.jpg'
    }
  },
  {
    fields: {
      title: 'Affaires Publics',
      image: 'assets/test/5.jpg'
    }
  },
  {
    fields: {
      title: 'RH et Formation',
      image: 'assets/test/6.jpg'
    }
  },
  {
    fields: {
      title: 'Social',
      image: 'assets/test/7.jpg'
    }
  },
  {
    fields: {
      title: 'Santé',
      image: 'assets/test/8.jpg'
    }
  }
];

export default OptionGrid;
