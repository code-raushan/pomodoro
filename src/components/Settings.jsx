import React, {useContext} from 'react'
import iconSetting from '../assets/icon-setting.svg'
import GlobalContext from '../Context'
const Settings = () => {
    const {setIsModalOpen}=useContext(GlobalContext)
  return (
    <div>
        <img style={{cursor:'pointer'}} src={iconSetting} alt="settings" onClick={()=>setIsModalOpen(true)} />
    </div>
  )
}

export default Settings