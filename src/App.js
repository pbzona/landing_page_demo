import ConvertButton from './components/ConvertButton';
import Header from './components/Header';
import Logo from './components/Logo';
import TextBox from './components/TextBox';
import './css/global.css';

function App() {
  return (
    <>
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
