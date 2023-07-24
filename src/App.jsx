import ScreenSection from './components/title_screen/title_screen'
import PrimarySection from './components/Primary_Comp/litergy_page'
import SecondarySection from './components/secondary_comp/specifc_text'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<ScreenSection />} />
            <Route path='/liturgy-of-the-word' element={<PrimarySection />} />
            <Route path='/specific-text' element={<SecondarySection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;