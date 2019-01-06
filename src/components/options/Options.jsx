import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Option from './option/Option';
import './Options.css';

class Options extends Component {
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
      <div style={{ backgroundImage: `url(${'assets/dog-people.jpg'})` }}>
        <TextField
          id="researchOption"
          type="text"
          placeholder="Recherche"
          style={{ paddingLeft: 50 }}
          onChange={this.handleChange}
        />
        {this.state.courses ? (
          <div>
            <Grid container style={{ padding: 24 }}>
              {this.state.courses
                .filter(s =>
                  s.fields.title.toLowerCase().includes(this.state.searchString)
                )
                .map(currentCourse => (
                  <Grid item item xs={3} style={{ padding: 24 }}>
                    <Option course={currentCourse} />
                  </Grid>
                ))}
            </Grid>
          </div>
        ) : (
          'No courses found'
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
      image: 'assets/logo_option.jpeg'
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

export default Options;
