import React from 'react'
import { Link } from 'react-router-dom'



const Header = ({logoImage, festName}) => {

    // const { isAuthenticated, loading, userInfo } = useSelector(state => state.authentication)
    // const { cartItems } = useSelector(state => state.cart)
    // console.log('isAuthenticated',isAuthenticated)
    // console.log('userInfo', userInfo)

    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Events',
            link: '/events'
        },
        {
            name: 'Schedule',
            link: '/schedule'
        },
        {
            name: 'Sponsors',
            link: '/sponsors'
        },
        {
            name: 'About Us',
            link: '/about'
        },
        {
            name: 'Contact Us',
            link: '/contact'
        }
    ]

  return (

    <>
        <div className='flex justify-between py-3 px-8 items-center shadow-lg mx-[8rem] rounded-xl bg-purple-50'>
                <div className='flex items-center space-x-4'>
                <img
                    src={logoImage}
                    alt="Fest logo"
                    className="w-10 h-10 object-cover rounded-full shadow-md"/>
                    <div>
                        <h className="text-2xl font-bold uppercase">{festName}</h>
                        
                    </div>
                </div>
                <ul className='flex text-neutral-600'>
                    {navItems.map((item, index) => {
                        return(

                            <li className={`mx-2 lg:mx-8 text-[0.5rem] lg:text-[0.9rem] drop-shadow-2xl hover:text-purple-600 hover:font-medium hover:scale-110 duration-300`} key={index}>
                            <Link to={item.link}>
                            {item.name}
                            </Link>
                            
                            </li>
                        )
                    })
                    }
                </ul>
                <div className='flex items-center space-x-4'>
                    <Link to ="/login">
                        <div>
                            <h className="bg-gradient-to-b from-purple-600 to-purple-500 text-lg drop-shadow-xl px-8 py-2 rounded-lg text-white font-medium hover:bg-purple-700">Login</h>
                        </div>
                    </Link> 
                </div>
            </div>
            
    </>

  )
}

export default Header