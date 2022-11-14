import './App.css';
import './components/component.css'
import { useTranslation } from 'react-i18next';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styled from 'styled-components';
import useTitle from './utils/useTitle';
import useDrawer from './utils/hooks/viewHook/useDrawer';
import HeaderApp from './layout/header/HeaderApp';
import Home from './pages/Home';

const Main=styled.main`
  height: 87vh;
  padding: 0px 10px 0px 10px;
  overflow-y:auto;
  overflow-x:hidden;
`
const FOOTER=styled.footer`
  background: #2196F3;
  font-size:0.8em;
  height: 5vh;
  padding-top:5px
`

function App() {
  const {t, i18n}=useTranslation()
  const title=useTitle(t('site.title'))
  const {open, toogle}=useDrawer()

  return (
    <div className="App">
      <header className="App-header">          
          <HeaderApp title={title} toogle={toogle} open={open} />
      </header>
      <Main>
          <Home />
      </Main>
      <FOOTER>
        &copy;2022 Lymytz Sarl
      </FOOTER>
    </div>
  );
}

export default App;
