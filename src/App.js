import Faucet from './Faucet/Faucet';
import { ParallaxProvider } from 'react-scroll-parallax';
import Cloud from './cloud/Cloud';
import Tree from './Tree/Tree';


function App() {
  return (
    <div className="App">
       <ParallaxProvider>
      <Faucet></Faucet>
      <Cloud/>
    <Tree></Tree>
      </ParallaxProvider>
    
    </div>
  );
}

export default App;
