
import data from '../api/FooterMenu.json';
const Footer = () => {
  return (<footer className='flex flex-col py-6 bg-[#0F153B] text-white p-4 '>
    <div className="innerFooter page-width ">
      <div className='logo py-2'>
        <img src="/images/Euryka-Logo-white.svg" className="py-3" width="150px" height="100px" />
      </div>
      <div className='quickMenus flex flex-col gap-2 md:flex-row '>
        {Object.entries(data).map(([sectionKey, sectionData]) => (

          sectionData.map((section) => (
            <section key={section.id} className='w-full lg:flex-1 border-t border-white mr-4'>
              <h4 className="text-[#FFD600] mb-4 mt-2">{section.name}</h4>
              <ul>
                {section.children.map((item) => (
                  <li key={item.id} className=''>
                    <a href={item.url} target={sectionKey === 'socialSection' ? "_blank" : "_self"} rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))
        ))}

        <section className='w-full lg:flex-1 border-t border-white mr-4'>
          <h4 className="text-[#FFD600] mb-4 mt-2">SUBSCRIBE</h4>
          <div className='flex flex-col'>
            <input type="text" placeholder='Email' className='flex-1 min-h-10 mb-3 p-2' />
            <button type="submit" className='bg-[#BB0015] text-white min-h-10 flex-1 font-semibold'>SUBSCRIBE</button>
          </div>
        </section>
      </div>
    </div>
  </footer>)
}

export default Footer