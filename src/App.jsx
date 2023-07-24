import ScreenSection from './components/title_screen/title_screen'
import PrimarySection from './components/Primary_Comp/litergy_page'
import SecondarySection from './components/secondary_comp/specifc_text'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/catholic_website/'element={<ScreenSection />} />
      <Route path='/catholic_website/liturgy-of-the-word' element={<PrimarySection />} />
      <Route path='/catholic_website/specific-text' element={<SecondarySection />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );

}

export default App;