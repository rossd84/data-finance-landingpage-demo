import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa'
import Logo from './ui/Logo'

const Footer = () => {

  const linkLists = [
    {
      title: "Solutions",
      links: [
        {
          name: "Analytics",
          link: "/"
        },
        {
          name: "Marketing",
          link: "/"
        },
        {
          name: "Commerce",
          link: "/"
        },
        {
          name: "Insights",
          link: "/"
        },
      ]
    },
    {
      title: "Support",
      links: [
        {
          name: "Pricing",
          link: "/"
        },
        {
          name: "Documentation",
          link: "/"
        },
        {
          name: "Guides",
          link: "/"
        },
        {
          name: "API Status",
          link: "/"
        },
      ]
    },
    {
      title: "Company",
      links: [
        {
          name: "About",
          link: "/"
        },
        {
          name: "Blog",
          link: "/"
        },
        {
          name: "Jobs",
          link: "/"
        },
        {
          name: "Press",
          link: "/"
        },
        {
          name: "Careers",
          link: "/"
        }
      ]
    },
    {
      title: "Legal",
      links: [
        {
          name: "Claim",
          link: "/"
        },
        {
          name: "Policy",
          link: "/"
        },
        {
          name: "Terms",
          link: "/"
        },
      ]
    },
  ]

  return (
    <footer>
    <div className='max-w-[1240px] mx-auto py-16 px-8 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <Logo />
        <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quia obcaecati iste aperiam molestias ducimus sequi at ad itaque, architecto laboriosam recusandae. </p>
        <div className='flex justify-between md:w-[75%] my-6' >
          <a className="hover:text-[#00df9a]" href="/"><FaFacebookSquare size={30} /></a>
          <a className="hover:text-[#00df9a]" href="/"><FaInstagram size={30} /></a>
          <a className="hover:text-[#00df9a]" href="/"><FaDribbbleSquare size={30} /></a>
          <a className="hover:text-[#00df9a]" href="/"><FaTwitterSquare size={30} /></a>
          <a className="hover:text-[#00df9a]" href="/"><FaGithubSquare size={30} /></a>
        </div>
      </div>

      <div className='lg:col-span-2 flex justify-between mt-6'>

        {linkLists.map(list => {
          return (
            <div key={list.title}>
              <h3 className='font-medium text-gray-400'>{list.title}</h3>
              <ul>
                {list.links.map((item, idx) => {
                  return (

                    <li key={idx} className='py-2 text-sm hover:text-[#00df9a]'><a href={item.link}>{item.name}</a></li>
                  )
                  })}
              </ul>
            </div>
          )
        })}

      </div>
      </div>
      <div className='w-100 py-2 w-100 flex flex-col justify-center items-center text-white'>
				<span>Copyright © 2023 Darby Ross</span>
				<span>All Rights Reserved</span>
			</div>
    </footer>
  )
}

export default Footer