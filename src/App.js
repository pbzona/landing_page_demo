import ConvertButton from './components/ConvertButton';
import Banner from './components/Banner';
import Header from './components/Header';
import Logo from './components/Logo';
import TextBox from './components/TextBox';
import './css/global.css';

import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';

function App() {
  const { showBanner, showIncidentMessage, showLiveMessage } = useFlags();

  const flags = useFlags();
  const client = useLDClient();

  // console.log(flags);
  console.log(client.getUser());
  console.log(showBanner);
  return (
    <>
      {showBanner && <Banner isIncident={showIncidentMessage} />}
      <Header />
      <main>
        <Logo />
        <TextBox />
        <ConvertButton />
        {showLiveMessage && <p style={{fontSize: 64, color: 'red'}}>TESTING LIVE!</p>}
      </main>
    </>
  );
}

export default App;
