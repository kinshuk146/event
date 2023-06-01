import Slider from "./components/Slider";
import Events from "./components/Body/Events";
import Heading from "./components/Body/Heading";
import Hover from "./components/Body/Hover";
import HoverCard from "./components/Body/HoverCard";
import './App.css';
import Header from './containers/Header/Header';
import ImageGenerator from './containers/ImageGenerator/ImageGenerator';
import HowItWorks from './containers/HowItWorks/HowItWorks';
import Enrich from './containers/Enrich/Enrich';
import Faq from './containers/Faq/Faq';
import ProductContent from './containers/ProductContent/ProductContent';
import DiscoverMore from './containers/DiscoverMore/DiscoverMore';
import AIProductDescription from './containers/AIProductDescription/AIProductDescription';
import Footer from './containers/Footer/Footer';
import ProductDescriptionExamples from './containers/ProductDescriptionExamples/ProductDescriptionExamples';

function App() {
  return (
    <>
      <Slider/>
      <Heading/>
      <ImageGenerator/>
      <Events/>
      <ProductDescriptionExamples/>
      <HowItWorks/>
      {/* <Header/> */}
      <DiscoverMore/>
      {/* <Footer/> */}
    </>
  
  );
}

export default App;
