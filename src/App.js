import './App.css';
import './head/Head.css'
import Tail from './tail/Tail'
import HeadTop from './head/HeadTop'
import CenteredTabs from './head/CenteredTabs';



function App() {
 


  return (
    <div className="App">
        <HeadTop />
        <CenteredTabs/>

        <Tail />
    </div>
  );
}

export default App;
