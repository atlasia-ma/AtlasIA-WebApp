import Collection from "./components/organisms/presentation";
import Faq from "./components/organisms/faq";
import Footer from "./components/organisms/footer";
import LatestAuction from "./components/organisms/latestauction";
import YoutubeTranscript from "./components/organisms/youtubeTranscript/youtubeTranscript";
import Navigation from "./components/organisms/navigation";
import RoadMap from "./components/organisms/roadmap";
import Companies from "./components/organisms/companies";
import ValidateTranslation from "./components/organisms/form/translationForm";
import AjiTerjem from "./components/organisms/translation";

function App() {
  return (
    <div className="container_eggs">
      <Navigation />

      <div className="py-20  zoom_out" id="intro" style={{paddingTop: '150px'}}>
        <Collection />
      </div>

      <div className="container" id="aji_terjem">
        <AjiTerjem />
      </div>

      <div className="container" id="ytb_transcripts" style={{paddingTop: '10px'}}>
        <ValidateTranslation />
      </div>

      <div className='container' id="ytb_transcripts" style={{paddingTop: '5px'}}>
        <YoutubeTranscript />
      </div>
{/* 
      <div className=" zoom_out" id="auction" style={{paddingTop: '80px'}}>
        <LatestAuction />
      </div> */}

      <div className='my-20 zoom_out' id="roadmap" style={{paddingTop: '80px'}}>
        <RoadMap />
      </div>

      <div className='mt-20 zoom_out' id="collabs" style={{paddingTop: '80px'}}>
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
