import './RingLine.scss'
import ring_svg from "../../assets/images/ring.svg";


const RingLine = () => {
  return (
    <div className='ringLine'>
          <hr className="line" />{" "}
          <img src={ring_svg} alt="" className="ring-img" />
          <hr className="line" />
      
    </div>
  )
}

export default RingLine
