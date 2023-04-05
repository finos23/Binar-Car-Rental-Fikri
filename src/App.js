import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import OurServices from "./component/OurService";
import WhyUs from "./component/WhyUs";
import Testimonial from "./component/Testimonial";
import SewaMobil from "./component/SewaMobil";
import Faq from "./component/Faq";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <OurServices />
        <WhyUs />
        <Testimonial />
        <SewaMobil />
        <Faq />
        <Footer />
        </div>
  );
}

export default App;
