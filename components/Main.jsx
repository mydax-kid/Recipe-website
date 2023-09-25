import Menulist from './Menulist'
import Sidemenu from './Sidemenu'

const Main = () => {
  return(
    <div className= 'main-grid p-6 px-2 md:px-4 py-12 bg-white'>
      <Menulist/>
      <Sidemenu/>
    </div>
  )
}

export default Main;