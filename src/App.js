import React, { useState, useEffect } from "react";
import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from 'react-router-dom';
import GetAllGames from './components/Game/GetAllGamesTest';
import AddGame from './components/Game/AddGame';
import DownloadGame from './components/Game/AddGame';
import AddPost from './components/Forum/AddPost';
import DisplayPosts from './components/Forum/DisplayPosts';
import DisplayDetailsGame from './components/Game/DisplayDetailsGame';
import Authenticate from "./components/Account/Authenticate";
//import AuthenticateByToken from "./components/AuthenticateByToken";
import Logout from "./components/Account/Logout";
import Register from "./components/Account/Register";

function Home() {
  return (
    <section className="hero">
      <div className="container">
        <h2>Games Sharing App</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula diam vitae bibendum tincidunt.</p>
        <a href="/" className="btn">Więcej</a>
      </div>
    </section>
  );
}

function Forum() {
  return (
    <section className="forum">
      <div className="container">
        <h2>Forum</h2>
        <DisplayPosts />
        <AddPost />
      </div>
    </section>
  );
}

{/*function GetGames() {
  return (
    <section className="get-games">
      <div className="container">
        <h2>Games</h2>
        <GetAllGames />
      </div>
    </section>
  );
}*/}

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm !== '') {
      setLoading(true);
      fetchGamesByTitle(searchTerm);
    } else {
      setSearchResults([]);
      setLoading(false);
    }
  }, [searchTerm]);

  const fetchGamesByTitle = async (title) => {
    try {
      const response = await fetch(`http://localhost:5162/api/game?title=${title}`);
      const data = await response.json();
      setSearchResults(data);

      const sampleData = [
        { id: 1, title: "Gra 1" },
        { id: 2, title: "Gra 2" },
        { id: 3, title: "Inna gra" },
      ];
      const results = sampleData.filter(game =>
        game.title.toLowerCase().includes(title.toLowerCase())
      );
      setSearchResults(results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching games by title:', error);
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="search">
      <div className="container">
        <h2>Search for games</h2>
        <form>
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="games-list">
            {searchResults.map(game => (
              <div key={game.id} className="game-item">
                <h3>{game.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Games Sharing</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/addgame">AddGame</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/forum">Forum</Link></li>
              <li><Link to="/downloads">Download</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <ul className="right">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game-details/:id" element={<DisplayDetailsGame />} />
          <Route path="/search" element={<Search />} />
          <Route path="/games" element={<GetAllGames />} />
          <Route path="/addgame" element={<AddGame />} />
          <Route path="/download" element={<DownloadGame />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Authenticate />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2023 Games Sharing</p>
        </div>
      </footer>
    </div>
  );
}

export default App;