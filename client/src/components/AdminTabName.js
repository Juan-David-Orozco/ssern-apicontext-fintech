import { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AdminTabName extends Component {
  render() {
    var tabsUpdate = this.props.tabsUpdate;
    return (
      <Link
        className={"border nav-link py-4 "+this.props.active}
        id={'tabName-'+this.props.tabIndex}
        data-toggle="pill" role="tab"
        aria-controls="v-pills-home" name='tabName'
        aria-selected="true" align='center'
        onClick={() => tabsUpdate(this)}
      >
        <span className={'fa pr-2 '+this.props.icon}></span> <br/>
          {this.props.children}
      </Link>
    )
  }
}

/*
                <AdminTabName
                  key={index} tabIndex={index} icon={tab.icono}
                  active={tabSelected === index ? 'active' : ''}
                  tabsUpdate={tabsUpdate}
                >
                  {tab.nombre}
                </AdminTabName>
*/