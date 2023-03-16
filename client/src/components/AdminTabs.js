import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/font-awesome/css/font-awesome.css'
import { useState } from 'react'
import AdminTabName from './AdminTabName'
import AdminTabContent from './AdminTabContent'

export function AdminTabs(props) {

  console.log(props)

  const [tabSelected, setTabSelected] = useState(props.tabIndexActive)

  const tabsUpdate = (tabCurrent) => {
    setTabSelected(tabCurrent.props.tabIndex)
  }

  return (
    <div className="container rounded bg-light my-2 py-2 px-1">
      <div className="row mx-auto">
        <div className="col-sm-3 px-1 mx-auto my-1">
          <div className="nav flex-column nav-pills mx-auto" id="v-pills-tab"
            role="tablist" aria-orientation="vertical">
            {
              props.tabs.map((tab, index) =>
                <AdminTabName
                  key={index} tabIndex={index} icon={tab.icono}
                  active={tabSelected === index ? 'active' : ''}
                  tabsUpdate={tabsUpdate}
                >
                  {tab.nombre}
                </AdminTabName>
              )
            }
          </div>
        </div>
        <div className="col-sm-9 border border-dark px-1 mx-auto my-1">
          <div className="tab-content text-dark" id="v-pills-tabContent">
            {
              props.tabs.map((tab, index) =>
                <AdminTabContent
                  key={index} tabIndex={index}
                  active={tabSelected === index ? 'show active' : ''}
                >
                  {tab.contenido}
                </AdminTabContent>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )

  /*
  return (
    <div>AdminTabs</div>
  )
  */
}
