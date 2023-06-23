import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import store from '../redux/store';
import Mobilefooter from '../components/Mobilefooter';
import Loginform from '../components/loginform';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Mobilefooter />
        <Loginform />
      </div>
    </Provider>
  );
}

export default MyApp;
