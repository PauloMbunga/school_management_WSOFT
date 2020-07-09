import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import PropTypes from 'prop-types';
import api from '../src/service/api' 

export class AppTopbar extends Component {

    static defaultProps = {
        onToggleMenu: null
    }

    static propTypes = {
        onToggleMenu: PropTypes.func.isRequired
    }

    constructor() {
        super();
        this.state = {
            ano_lectivo: ''
        };
        
    }



    componentDidMount() {

        api.get('ano_lectivo_max').then(response =>this.setState({ano_lectivo:response.data.max}));
      //  this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
}


    render() {
        return (
            <div className="layout-topbar clearfix">
                <button className="p-link layout-menu-button" onClick={this.props.onToggleMenu}>
                    <span className="pi pi-bars"/>
                </button>
               
                <div className="layout-topbar-icons">
                    
                        <h1 className="layout-topbar-badge">Ano Lectivo {this.state.ano_lectivo}</h1>
        
                </div>
            </div>
        );
    }
}