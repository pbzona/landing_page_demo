import ConvertButton from './components/ConvertButton';
import Banner from './components/Banner';
import Header from './components/Header';
import Logo from './components/Logo';
import TextBox from './components/TextBox';
import './css/global.css';

import { useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  const { showBanner, showIncidentMessage } = useFlags();

  const flags = useFlags();

  console.log(flags);
  return (
    <>
      {showBanner && <Banner isIncident={showIncidentMessage} />}
      <Header />
      <main>
        <Logo />
        <TextBox />
        <ConvertButton />
      </main>
    </>
  );
}

export default App;
