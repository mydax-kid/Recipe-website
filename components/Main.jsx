import Menulist from './Menulist'
import Sidemenu from './Sidemenu'

const Main = () => {
  return(
    <div className= 'p-6 px-4 py-12 flex bg-white'>
      <Menulist/>
      <Sidemenu/>
    </div>
  )
}

export default Main;