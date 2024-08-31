import './App.css';
import Header from './components/Header';
import CampsitesList from './features/campsites/CampsitesList';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <CampsitesList />
            <Footer />
        </div>
    );
}

export default App;