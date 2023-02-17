import React from 'react';
import './styles/app.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const scrollToGraph = () => {
    console.log("Scroll to Graph");
  };

  const scrollToTable = () => {
    console.log("Scroll to Table");
  };

  return (
    <div className="App">
      <Header scrollToGraph={scrollToGraph} scrollToTable={scrollToTable}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
