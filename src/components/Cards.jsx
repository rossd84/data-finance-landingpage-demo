import Card from './ui/Card'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Cards = () => {

  const cardList = [
    {
      title: "Single User",
      image: Single,
      imageAlt: "/",
      price: 39,
      infoItems: [
        "500GB Storage",
        "1 Granted User",
        "Send up to 2GB"
      ],
      highlighted:false
    },
    {
      title: "Professional",
      image: Double,
      imageAlt: "/",
      price: 99,
      infoItems: [
        "2TB Storage",
        "10 Granted User",
        "Send up to 20GB"
      ],
      highlighted:true
    },
    {
      title: "Enterprise",
      image: Triple,
      imageAlt: "/",
      price: 199,
      infoItems: [
        "10TB Storage",
        "100 Granted User",
        "Send up to 1TB"
      ],
      highlighted:false
    },
  ]

  return (
    <div className="w-full py-[10rem] px-8 bg-white">
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {cardList.map(card => {
          return (
            <Card 
              key={card.title}
              title={card.title}
              image={card.image} 
              imageAlt={card.imageAlt}
              price={card.price}
              infoItems={card.infoItems}
              highlighted={card.highlighted} />
          )
        })}        

      </div>
    </div>
  )
}

export default Cards