import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';

class Offres extends Component {
    state = {
        services: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getServices()
    }
    getServices = () => {
        this.state.services = MENU_Offres;
    }
    handleChange = (e) =>{
        this.setState({searchString: e.target.value});
    }
    render() {
        return (
            <div>
                <TextField id="text"
                           type="text"
                           placeholder="Recherche"
                           onChange={this.handleChange} />
                { this.state.services ? (
                    <div>
                        <Grid container spacing={24}>
                            { this.state.services.filter( s => s.fields.title.toLowerCase().includes(this.state.searchString)).map(currentService => (
                                <Grid item item xs={3}>
                                    <Offres service={currentService} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No services found" }
            </div>
        )
    }
}


const MENU_Offres = [
    {
        "fields": {
            "title": "Créer/Gerer ma societé",
            "image": ""
        }
    },
    {
        "fields": {
            "title": "Marketing et Communication ",
            "image": ""
        }
    },
    {
        "fields": {
            "title": "Investir en France",
            "image": ""
        }
    },
    {
        "fields": {
            "title": "Audit / Finances",
            "image": ""
        }
    },
    {
        "fields": {
            "title": "Affaires Publics",
            "image": ""
        }
    },
    {
        "fields": {
            "title": "RH et Formation",
            "image": ""
        }
    },
    {
        "fields": {
            "title": "Social",
            "image": ""
        }
    },
    {
        "fields": {
            "title": "Santé",
            "image": ""
        }
    }
];

export default Offres;
