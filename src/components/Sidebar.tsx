import { useNavigate, NavLink } from 'react-router-dom'
import useStore from '../store'
import { SidebarItem } from './SidebarItem'
import { sidebarAdminRoutes, sidebarUserRoutes } from '../constants/routes'
import logo from '../assets/logo.png'

const Sidebar = () => {
  const { user } = useStore()

  if (user?.role.find(role => role === 'admin') || user?.role.find(role => role === 'dev')) return (
    <div className='sm:w-20 md:w-64 bg-slate-800'>
      <div className='py-4 px-6'>
        <NavLink to='/'>
          <img src={logo} alt='Frozt Enterprise Logo' />
        </NavLink>
      </div>

      <div className='mt-4 fixed overflow-y-auto overflow-x-hidden h-[85vh] sm:w-20 md:w-60 pb-16'>
        {sidebarAdminRoutes.map((item, i) => (
          <>
            <h3
              key={i}
              className='mx-6 overflow-hidden mb-2 text-xs text-gray-100 uppercase tracking-widest'
            >
              {item.title}
            </h3>
            <div key={item.title}>
            {item.links.map((link, i) => (
              <SidebarItem label={link.label} path={link.path} icon={link.icon} key={i} />
            ))}
            </div>
          </>
        ))}
      </div>
    </div>
  )

  if (user?.role.find(role => role === 'user')) return (
    <div className='sm:w-20 md:w-64 bg-slate-800'>
      <div className='py-4 px-6'>
        <NavLink to='/'>
          <img src={logo} alt='Frozt Enterprise Logo' />
        </NavLink>
      </div>

      <div className='mt-4 fixed overflow-y-auto overflow-x-hidden h-[85vh] sm:w-20 md:w-60'>
        {sidebarUserRoutes.map((item, i) => (
          <>
            <h3
              key={i}
              className='mx-6 overflow-hidden mb-2 text-xs text-gray-100 uppercase tracking-widest'
            >
              {item.title}
            </h3>
            <div key={item.title}>
            {item.links.map((link, i) => (
              <SidebarItem label={link.label} path={link.path} icon={link.icon} key={i} />
            ))}
            </div>
          </>
        ))}
      </div>
    </div>
  )

  const nav = useNavigate()

  return <div></div>
}

export default Sidebar
