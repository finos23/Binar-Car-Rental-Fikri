import "./style.css"
import carImg from "../../assets/Car.png"


const Banner = () => {
 

  return (

          <div>
            <div id="hero-section" class="bg-light-purple position-relative">
            
              <div class="container">
                <div class="row">
                  <div class="col-6 left-hero pr-4 d-flex align-items-center">
                    <div class="box"> 
                      <h1 class="heading-style" style={{color: "black", fontWeight: "bold"}}>Sewa & Rental Mobil Terbaik di kawasan Jakarta</h1>
                      <p class= "body-text" style={{fontWeight: 'bold', marginTop: "20px"}}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                      <a class="btn btn-green mt-3 text-light" href="#s">Mulai Sewa Mobil</a>
                    </div>    
                  </div>
                  <div className="col-lg-6 mt-lg-5">
                  <div class="row justify-content-start">
                  <div class="car-style">
                    </div>
                  <img class="car img-fluid" src={carImg} alt="Car"/>
                </div>
              </div>
            </div>
           </div> 
        </div>
        </div>
        )
      }
  
      

export default Banner;
