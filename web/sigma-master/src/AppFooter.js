import React, { Component } from 'react';

export class AppFooter extends Component {

    render() {
        return  (
            <div className="layout-footer">
               
                <img src="assets/layout/images/logo-white.png"  alt="" height="50" width="80"/>

                <span className="footer-text" style={{'marginLeft': '5px','fontWeight':'bold'}}>Sistema de Gestão Escolar</span>
            </div>
        );
    }
}