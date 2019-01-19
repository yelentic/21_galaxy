import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import OptionCard from './optionGrid/OptionCard';
import './OptionsGrid.css';

class OptionsGrid extends Component {
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
          <hr/>
          </div>

        {this.state.courses ? (
          <div>
            <Grid container style={{ padding: 20 }}>
              {this.state.courses
                .filter(s =>
                  s.fields.title.toLowerCase().includes(this.state.searchString)
                )
                .map(currentCourse => (
                  <Grid item  xs={4} style={{ padding: 20 }}>
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
      image: 'assets/logo_option.jpeg'

    }
  },
  {
    fields: {
      title: 'Marketing et Communication',
      image: 'assets/logo_option.jpeg'
    }
  },
  {
    fields: {
      title: 'Investir',
      image: 'assets/logo_option.jpeg'
    }
  },
  {
    fields: {
      title: 'Audit / Finances',
      image: 'assets/background.png'
    }
  },
  {
    fields: {
      title: 'Affaires Publics',
      image: 'assets/logo_option.jpeg'
    }
  },
  {
    fields: {
      title: 'RH et Formation',
      image: 'assets/logo_option.jpeg'
    }
  },
  {
    fields: {
      title: 'Social',
      image: 'assets/logo_option.jpeg'
    }
  },
  {
    fields: {
      title: 'Santé',
      image: 'assets/logo_option.jpeg'
    }
  }
];

export default OptionsGrid;
