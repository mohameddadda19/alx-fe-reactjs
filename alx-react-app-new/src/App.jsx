// App.jsx
import WelcomeMessage from './components/WelcomeMessage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: "Alice",
    age: "25",
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}>
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
        <Counter />
        <UserProfile /> {/* ✅ no more props passed directly */}
        <Footer />
      </>
    </UserContext.Provider>
  );
}

export default App;
