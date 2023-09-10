import Laptop from '../assets/laptop.jpg'
import Button from './ui/Button'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-8'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quis suscipit quasi ea provident iste vero architecto corrupti modi. Culpa, eaque quasi natus nemo provident incidunt corrupti quo accusamus eos.</p>
          <Button
            title="Get Started"
            inverse
            classes="my-6 mx-auto md:mx-0" />
        </div>
      </div>
    </div>
  )
}

export default Analytics