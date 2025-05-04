import { HashLink } from 'react-router-hash-link';

function NavigationBar() {
  const links = [
    { name: 'work', endpoint: '/#works'},
    { name: 'about', endpoint: '/#about'},
    { name: 'services', endpoint: '/#services'},
    { name: 'contact', endpoint: '/#contact'},
  ]

  return (
    <>
      <header>
        <nav className="flex flex-col items-center md:flex-row md:justify-between py-6 px-4 lg:px-64">

          <h1 className="text-base">
            maryprincess<span className="font-bold">designs</span> 
          </h1> 

          <ul className="flex justify-end">
            {links.map((link, index) => {
              return (
                <HashLink
                  key={index}
                  to={link.endpoint}
                  smooth 
                >
                  <span className="uppercase text-xs hover:cursor-pointer px-2">{link.name}</span>
                </HashLink>
              )
            })}
          </ul>

        </nav>
      </header>
    </>
  )
}
  
export default NavigationBar
  