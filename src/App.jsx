import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CompanyInfo from './components/CompanyInfo';
import KakaoMap from './components/KakaoMap';

function App() {
    return (
        <div className="container">
            <Header />
            <CompanyInfo />
            <KakaoMap />
            <Footer />
        </div>
    );
}

export default App;
