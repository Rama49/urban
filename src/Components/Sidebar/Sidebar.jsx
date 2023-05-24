import {BsFillGridFill, BsFillCartFill, BsFillStarFill, BsGraphUp, BsFillPlusCircleFill, BsFillChatSquareHeartFill, BsFillWalletFill, BsFillPersonFill, BsFillGearFill, BsArrowRightShort} from "react-icons/bs";
import urban from '../../Image/urban.png';


const Side = () => {
  return (
    <div className="container-fluid">
    <div className="row fixed-top w-25">
    <div className="groupe me-5">
                      <img src={urban} className=" ps-5 ms-5 pt-5 image img-fluid" />
                    </div>
         <div className="col-auto min-vh-100 text-dark d-md-block    ">
                        <h6 className="ms-4 mt-5 marke"> MARKETPLACE</h6>
            <ul className=""> 
              <il className='une'>
                <a href="/" className="nav-link une  p-2  ">
                   <BsFillGridFill />
                   <span className="ms-3 d-none d-sm-inline ">Dashboard</span>
                </a>
              </il>
              <il className='une'>
                <a href="/" className="nav-link une  p-2">
                <BsFillCartFill />
                  <span className="ms-3 une d-none d-sm-inline ">Market</span> 
                </a>
              </il>
              <il className='une'>
                <a href="/" className="nav-link une  p-2">
                   <BsFillStarFill />   
                   <span className="ms-3 d-none d-sm-inline ">Favorites</span> 
                </a>
              </il>
            </ul>
            <ul className="mb-5 pb-5">
              <h6 className=" mb-3 marke pt-5">MYPROFILE</h6>
                  <il className='une'>
                <a href="/" className="nav-link une  p-2">
                   <BsGraphUp />
                   <span className="ms-3 mb-2 d-none d-sm-inline ">Insight</span>
                </a>
              </il>
              <il className='une'>
                <a href="/" className="nav-link une  p-2">
                   <BsFillWalletFill />
                   <span className="ms-3 mb-2 d-none d-sm-inline ">Wallet</span>
                </a>
              </il>
              <il className='une'>
                <a href="/" className="nav-link une  p-2">
                   <BsFillPersonFill />
                   <span className="ms-3 mb-2 d-none d-sm-inline ">Profile</span>
                </a>
              </il>
              <il className='une'>
                <a href="/" className="nav-link une  p-2">
                <BsFillGearFill />
                  <span className="ms-3  d-none d-sm-inline ">Setting</span> 
                </a>
              </il>
            </ul>
            <div className="ms-4">
            <a href="/" className="nav-link une  p-2">
                <BsArrowRightShort />
                  <span className="ms-3  d-none d-sm-inline ">Log out</span> 
                </a>
            </div>
         </div>
         <div>
         </div>
      </div>
    </div>
  )
}
export default Side;