/* eslint-disable react/prop-types */
import Button from "./Button"

const Card = (props) => {
  let {
    title,
    image,
    imageAlt,
    price,
    infoItems,
    highlighted
  } = props;

  return (
    <div className={
      highlighted
      ? "w-full shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg md:hover:scale-105 duration-300 bg-gray-100"
      : "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg md:hover:scale-105 duration-300"}>
          <img className={
            highlighted 
            ? 'w-20 mx-auto mt-[-3rem] bg-transparent'
            : 'w-20 mx-auto mt-[-3rem] bg-white'} 
            src={image} 
            alt={imageAlt} 
          />
          <h3 className='text-2xl font-bold text-center py-8'>{title}</h3>
          <p className='text-center font-medium'>${price}</p>
          <div className='text-center font-medium'>
            {infoItems.map((item, idx) => {
              return (
                <p 
                  key={idx}
                  className={
                    idx === 0 
                    ? 'py-2 border-b mx-8 mt-8' 
                    : 'py-2 border-b mx-8'}
                >{item}</p>
              )
            })}
          </div>
          <Button 
            title="Start Trial"
            inverse={highlighted ? true : false}
            classes="mx-auto my-6"
          />
        </div>
  )
}

export default Card