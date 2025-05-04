import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const facebookLink = ""
  const instagramLink = ""
  const linkedlnLink = "https://www.linkedin.com/in/mary-princess-lagura/"

  return (
    <>
      <div className="bg-black text-white relative isolate py-6">

        <div className="px-4 lg:px-64 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-4 md:gap-15">
            <div>
              <ul className="flex">
                <li>
                  <HashLink to="/#works" smooth>
                    <span className="uppercase text-white pr-2">Work</span>
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/#about" smooth>
                    <span className="uppercase text-white px-2">About</span>
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/#services" smooth>
                    <span className="uppercase text-white px-2">Services</span>
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/#contact" smooth>
                    <span className="uppercase text-white px-2">Contact</span>
                  </HashLink>
                </li>
              </ul>
            </div>
            <div>
              <p className="uppercase text-white" id="contact">contact</p>
              <h1 className="text-1xl lg:text-base font-semibold text-white">hello@maryprincessdesigns.com</h1>
            </div>
          </div>
      
          <div className="flex flex-col gap-3 md:ml-auto">
            <p className="uppercase text-white">social media</p>
            <a href={facebookLink} className="capitalize text-white" target="_blank">facebook</a>
            <a href={instagramLink} className="capitalize text-white" target="_blank">instagram</a>
            <a href={linkedlnLink} className="capitalize text-white" target="_blank">linkedln</a>
          </div>
        </div>

        <hr className="h-px border-t-1 mt-12 mb-4" />

        <div className="flex justify-center gap-2 font-thin text-white">
          <p className="uppercase">&copy; mary princess</p>
          <p>{new Date().getFullYear()}</p>
        </div>

      </div>
    </>
  )
}

export default Footer