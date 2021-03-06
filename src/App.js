import './App.css';
import CustomerSay from './components/CustomerSay';
import Footer from './components/Footer';
import Gallary from './components/Gallary';
import Hero from './components/Hero';
import NewsLetter from './components/NewsLetter';
import ProductDetails from './components/ProductDetails';
import RecentBlog from './components/RecentBlog';
import Features from './components/Shared/Features';
import TextCard from './components/Shared/TextCard';
import Slider from './components/Slider';

const text = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Non ipsum eligendi perspiciatis doloribus qui adipisci.Modi, sit officiis! Placeat nostrum expedita odio at tempora repellat nemo molestias hic, aspernatur, provident exercitationem corporis assumenda",
  'Lorem Ipsum is simply dummy',
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak"
]

function App() {
  return (
    <div>
      <Hero />
      <TextCard heading={text[0]} paragraph={text[1]} />
      <Features />
      <TextCard heading={text[2]} paragraph={text[3]} />
      <Slider />
      <ProductDetails />
      <CustomerSay />
      <RecentBlog />
      <Gallary />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
