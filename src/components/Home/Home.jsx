import { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
    const [teams, setTeams] = useState([]);
    const [selectedTeams, setSelectedTeams] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
    
    const handleSelector = (team) => {
        setSelectedTeams([...selectedTeams, team]);
    };

  return (
    <div className="container">
      <div className="home-container">
        <div className="card-container">
          {teams.map((team) => (
            <div key={team.id} className="card">
              <div className="card-img">
                <img className="photo" src={team?.image} alt="" />
              </div>
              <h2>{team?.name}</h2>
              <p>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, iure?
                </small>
              </p>
              <div className="info">
                <p>salary:{team?.salary} $</p>
                <p>{team?.role}</p>
              </div>
              <button onClick={() => handleSelector(team)} className="card-btn">
                Select
              </button>
            </div>
          ))}
        </div>

        <div className="cart">
          <Cart selectedTeams={selectedTeams}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
