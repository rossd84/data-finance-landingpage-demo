
// eslint-disable-next-line react/prop-types
const Button = ({title, inverse, classes}) => {

  const handleClasses = () => {
    let classProps = 'rounded-md font-medium w-[200px] px-6 py-3 my-6'
  
    inverse
    ? classProps += ' bg-black text-[#00df9a] active:shadow-[inset_0_0_25px_10px_rgba(0,223,154,0.5)]'
    : classProps += ' bg-[#00df9a] text-black active:shadow-[inset_0_0_25px_10px_rgba(0,0,0,0.5)]'

    classProps += ` ${classes}`

    return classProps
  }


  return (
    <button className={handleClasses()} type="button">{title}</button>
  )
}

export default Button