
import { Routes, Route} from 'react-router-dom';
import { Home, Menu, Tabs, Slider, Footer, Modal, Announce, TabsCurrency, ApiCurrency, ModalFooter} from './components/index.js';










function App() {
 
  
  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Tabs/" element={<Tabs />} />
      <Route path="/Slider/" element={<Slider />} />
      <Route path="/Footer/" element={<Footer />} />
      <Route path="/Modal/" element={<Modal />} />
      <Route path="/Announce/" element={<Announce />} />
      <Route path="/TabsCurrency/" element={<TabsCurrency />} />
      <Route path="/ApiCurrency/" element={<ApiCurrency />} />
      <Route path="/ModalFooter/" element={<ModalFooter />} />

 
     




 

    </Routes>






   


    
    </>
  )
}

export default App