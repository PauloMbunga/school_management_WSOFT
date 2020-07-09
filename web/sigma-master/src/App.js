import React, {Component} from 'react';
import classNames from 'classnames';
import {AppTopbar} from './AppTopbar';
import {AppFooter} from './AppFooter';
import {AppMenu} from './AppMenu';
import {AppProfile} from './AppProfile';
import {Route} from 'react-router-dom';
import {Dashboard} from './components/Dashboard';
import {FormsDemo} from './components/FormsDemo';
import {SampleDemo} from './components/SampleDemo';
import {DataDemo} from './components/DataDemo';
import {PanelsDemo} from './components/PanelsDemo';
import {OverlaysDemo} from './components/OverlaysDemo';
import {MenusDemo} from './components/MenusDemo';
import {MessagesDemo} from './components/MessagesDemo';
import {ChartsDemo} from './components/ChartsDemo';
import {MiscDemo} from './components/MiscDemo';
import EmptyPage from './components/EmptyPage';
import Estudante from './pages/Estudante';
import Professor from './pages/Professor';
import Funcionario from './pages/Funcionario';
import Parente from './pages/Parente';
import Sala from './pages/Sala';
import Turma from './pages/Turma';
import Ano_Lectivo from './pages/Ano_Lectivo';
import Curso from './pages/Curso';
import Classe from './pages/Classe';
import Periodo from './pages/Periodo';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './layout/layout.scss';
import './App.scss';

class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false
        };

        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.createMenu();
    }

    onWrapperClick(event) {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }

    onToggleMenu(event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.state.layoutMode === 'overlay') {
                this.setState({
                    overlayMenuActive: !this.state.overlayMenuActive
                });
            }
            else if (this.state.layoutMode === 'static') {
                this.setState({
                    staticMenuInactive: !this.state.staticMenuInactive
                });
            }
        }
        else {
            const mobileMenuActive = this.state.mobileMenuActive;
            this.setState({
                mobileMenuActive: !mobileMenuActive
            });
        }
       
        event.preventDefault();
    }

    onSidebarClick(event) {
        this.menuClick = true;
    }

    onMenuItemClick(event) {
        if(!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            })
        }
    }

    createMenu() {
        this.menu = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', command: () => {window.location = '#/'}
              },
            
            {
                label: 'Cadastros', icon: 'pi pi-fw pi-save',
                items: [
					
                    {label: 'Estudante', icon: 'pi pi-fw pi-user-plus', to: '/estudante'},
                    {label: 'Professor', icon: 'pi pi-fw pi-user-plus', to: '/professor'},
                    {label: 'Parente', icon: 'pi pi-fw pi-user-plus', to: '/parente'},
                    {label: 'Funcionario', icon: 'pi pi-fw pi-user-plus', to: '/funcionario'},
                    {label: 'Sala', icon: 'pi pi-fw pi-user-plus', to: '/sala'},
                    {label: 'Turma', icon: 'pi pi-fw pi-user-plus', to: '/turma'},
                    {label: 'Ano_Lectivo', icon: 'pi pi-fw pi-user-plus', to: '/ano_lectivo'},
                    {label: 'Curso', icon: 'pi pi-fw pi-user-plus', to: '/curso'},
                    {label: 'Classe', icon: 'pi pi-fw pi-user-plus', to: '/classe'},
                    {label: 'Periodo', icon: 'pi pi-fw pi-user-plus', to: '/periodo'}
                ]
            },
            {label: 'Confirmação de Matricula', icon: 'pi pi-fw pi-home', command: () => {window.location = '#/ano_lectivo'}
              },

              {
                label: 'Finanças', icon: 'pi pi-fw pi-save',
                items: [
					
                    {label: 'Pagamentos', icon: 'pi pi-fw pi-user-plus', to: '/estudante'},
                    {label: 'Serviços', icon: 'pi pi-fw pi-user-plus', to: '/professor'},
                    
                    
                ]
            },

            

            // {

                
            //     label: 'Components', icon: 'pi pi-fw pi-globe', badge: '9',
            //     items: [
			// 		{label: 'Sample Page', icon: 'pi pi-fw pi-th-large', to: '/sample'},
			// 		{label: 'Forms', icon: 'pi pi-fw pi-file', to: '/forms'},
			// 		{label: 'Data', icon: 'pi pi-fw pi-table', to: '/data'},
			// 		{label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels'},
			// 		{label: 'Overlays', icon: 'pi pi-fw pi-clone', to: '/overlays'},
			// 		{label: 'Menus', icon: 'pi pi-fw pi-plus', to: '/menus'},
			// 		{label: 'Messages', icon: 'pi pi-fw pi-spinner',to: '/messages'},
			// 		{label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts'},
            //         {label: 'Misc', icon: 'pi pi-fw pi-upload', to: '/misc'}
                   
            //     ]
            // },
            // {
            //     label: 'Template Pages', icon: 'pi pi-fw pi-file',
            //     items: [
            //         {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
            //     ]
            // },
            // {
            //     label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
            //     items: [
            //         {
            //             label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
            //                         {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
            //                         {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},
            //                         {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}
            //                     ]
            //                 },
            //             ]
            //         },
        //             {
        //                 label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
        //                 items: [
        //                     {
        //                         label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
        //                             {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
        //                             {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},
        //                         ]
        //                     },
        //                     {
        //                         label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
        //                             {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark',to: '/empty'}
        //                         ]
        //                     }
        //                 ]
        //             }
        //      //   ]
        //   //  },
            
        ];
    }

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    componentDidUpdate() {
        if (this.state.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    }

    render() {
        const logo = this.state.layoutColorMode === 'dark' ? 'assets/layout/images/logo.png': 'assets/layout/images/logo.svg';

        const wrapperClass = classNames('layout-wrapper', {
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.state.mobileMenuActive
        });

        const sidebarClassName = classNames("layout-sidebar", {
            'layout-sidebar-dark': this.state.layoutColorMode === 'dark',
            'layout-sidebar-light': this.state.layoutColorMode === 'light'
        });

        return (
            <div className={wrapperClass} onClick={this.onWrapperClick}>
                <AppTopbar onToggleMenu={this.onToggleMenu}/>

                <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}>
                    <div className="layout-logo">
                        <img alt="Logo" src={logo} />
                    </div>
                    <AppProfile />
                    <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
                </div>

                <div className="layout-main">
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/forms" component={FormsDemo} />
                    <Route path="/sample" component={SampleDemo} />
                    <Route path="/data" component={DataDemo} />
                    <Route path="/panels" component={PanelsDemo} />
                    <Route path="/overlays" component={OverlaysDemo} />
                    <Route path="/menus" component={MenusDemo} />
                    <Route path="/messages" component={MessagesDemo} />
                    <Route path="/charts" component={ChartsDemo} />
                    <Route path="/misc" component={MiscDemo} />
                    <Route path="/empty" component={EmptyPage} />
                    <Route path="/estudante" component={Estudante} />
                    <Route path="/funcionario" component={Funcionario} />
                    <Route path="/professor" component={Professor} />
                    <Route path="/parente" component={Parente} />
                    <Route path="/ano_lectivo" component={Ano_Lectivo} />
                    <Route path="/sala" component={Sala} />
                    <Route path="/turma" component={Turma} />
                    <Route path="/curso" component={Curso} />
                    <Route path="/classe" component={Classe} />
                    <Route path="/periodo" component={Periodo} />
        
                </div>

                <AppFooter />

                <div  className="layout-mask"></div>
            </div>
        );
    }
}

export default App;
