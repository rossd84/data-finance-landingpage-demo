import MyLogo from '../../assets/logo.svg'

const Logo = () => {
  return (
    <a className="block z-10 w-[60px] h-[60px]" href="/">
      <img className="svg-color-accent" src={MyLogo} alt="website logo" />
      {/* <p className="w-full text-3xl font-bold text-[#00df9a]">DEMO.</p> */}
    </a>
  )
}

export default Logo