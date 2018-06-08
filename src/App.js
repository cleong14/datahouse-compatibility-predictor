import React, { Component } from 'react';
import logo from './datahouse-logo.png';
import './App.css';
import CompatibilityChecker from './CompatibilityChecker';
import db from './db.json';

class App extends Component {

  checker = () => {
    console.log('CLICKED');
    console.log('APPLICANTS', db.applicants);
    console.log('TEAM', db.team);
  }

  render() {
    console.log(db);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Compatibility Predictor</h1>
        </header>
        <div className="row">
          <div className="applicants col-md-4">
            <h3 className="header">Applicants</h3>

              {db.applicants.map((applicant, i) => {
                return (
                  <div key={i} className="applicants">
                    {applicant.name} <br />
                      <li>
                        Endurance: {applicant.attributes.endurance}
                      </li>
                      <li>
                        Intelligence: {applicant.attributes.intelligence}
                      </li>
                      <li>
                        Strength: {applicant.attributes.strength}
                      </li>
                      <li>
                        Spicy Food Tolerance: {applicant.attributes.spicyFoodTolerance}
                      </li>
                  </div>
                );
              })}
          </div>
          <div className="team col-md-4">
            <h3 className="header">Team</h3>

            {db.team.map((teamMember, i) => {
              return (
                <div key={i} className="teamMembers">
                  {teamMember.name} <br />
                    <li>
                      Endurance: {teamMember.attributes.endurance}
                    </li>
                    <li>
                      Intelligence: {teamMember.attributes.intelligence}
                    </li>
                    <li>
                      Strength: {teamMember.attributes.strength}
                    </li>
                    <li>
                      Spicy Food Tolerance: {teamMember.attributes.spicyFoodTolerance}
                    </li>
                </div>
              );
            })}
          </div>
          <div className="results col-md-4">
            <h3 className="header">Results</h3>


          </div>
        </div>
        <CompatibilityChecker db={db} checker={this.checker} />
      </div>
    );
  }
}

export default App;
