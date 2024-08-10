import componentİmage from '../../assets/components.png';
import './Header.css'



const secenek = ["fundamental","core","basic"]
const genRandomVal = (max) => {
  return secenek[Math.floor(Math.random() * (max + 1))]
}




export default function Header() {
    return(<header>
      <img src={componentİmage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {genRandomVal(2)} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>)
  }