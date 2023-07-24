import ScreenSection from './components/title_screen/title_screen'
import PrimarySection from './components/Primary_Comp/litergy_page'
import SecondarySection from './components/secondary_comp/specifc_text'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/'element={<ScreenSection />} />
      <Route path='/liturgy-of-the-word' element={<PrimarySection />} />
      <Route path='/specific-text' element={<SecondarySection />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );

}

export default App;