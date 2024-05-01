import Collection from "./components/organisms/presentation";
import Faq from "./components/organisms/faq";
import Footer from "./components/organisms/footer";
import LatestAuction from "./components/organisms/latestauction";
import Navigation from "./components/organisms/navigation";
import RoadMap from "./components/organisms/roadmap";
import Companies from "./components/organisms/companies";
import AjiTerjem from "./components/organisms/form/translationForm";

function App() {
  return (
    <div className="container_eggs">
      <Navigation />

      <div className="py-20  zoom_out" id="game" style={{paddingTop: '150px'}}>
        <Collection />
      </div>

      <div className="container">
        <AjiTerjem />
      </div>
{/* 
      <div className=" zoom_out" id="auction" style={{paddingTop: '80px'}}>
        <LatestAuction />
      </div> */}

      <div className='my-20 zoom_out' id="roadmap" style={{paddingTop: '80px'}}>
        <RoadMap />
      </div>

      <div className='mt-20 zoom_out' id="companies" style={{paddingTop: '80px'}}>
        <Companies />
      </div>
      
      <div className=' pt-20 zoom_out' id="faq" style={{paddingTop: '20px'}}>
        <Faq />
      </div>

      <div className='mt-20 zoom_out' id="footer"style={{paddingTop: '40px'}}>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
