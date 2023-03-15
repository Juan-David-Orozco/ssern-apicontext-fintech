import { Component } from 'react'

export default class AdminTabContent extends Component {
  render() {
    return (
      <div
        className={"tab-pane fade "+this.props.active}
        id={'tabContent-'+this.props.tabIndex}
        role="tabpanel" aria-labelledby="v-pills-home-tab"
      >
        {this.props.children}
      </div>
    )
  }
}