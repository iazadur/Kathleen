import './App.css';
import Hero from './components/Hero';
import Features from './components/Shared/Features';
import TextCard from './components/Shared/TextCard';

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
      <TextCard heading={text[0]} paragraph={text[1]}/>
      <Features />
      <TextCard heading={text[2]} paragraph={text[3]}/>
    </div>
  );
}

export default App;
