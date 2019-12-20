import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './Profile.css';

export const Profile = (props) =>  {
  const user = props.user
  const skills = props.skills
  console.log(user);
  console.log(skills);
  return (
    <div className="section">
      <div className="profile-section">
        <div className="user-name">
          <h1>{user.en_name}</h1>
          <p>{user.name}/{user.profession}</p>
        </div>
        <div className="user-image">
          <span><img src={user.image_url}/></span>
          <div className="user-icons">
            <a href="https://github.com/Yuki-Sato-I">
              <FontAwesomeIcon icon={['fab', 'github-square']} style={{ color: "white", margin: '5px 20px 0 0' }}/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100008097306849">
              <FontAwesomeIcon icon={['fab', 'facebook-square']} style={{ color: "white", margin: '5px 20px 0 0' }}/>
            </a>
            <a href="https://twitter.com/mij9992587">
              <FontAwesomeIcon icon={['fab', 'twitter-square']} style={{ color: "white", margin: '5px 20px 0 0' }}/>
            </a>
          </div>
        </div>
        <div className="user-content">
          <div className="user-profile">
            <h2>Profile</h2>
            <p>{user.content}</p>
            <div className="user-history-link">
              <Link to={`/histories`}>
                <FontAwesomeIcon icon={['fas', 'code-branch']} style={{ color: "red", margin: '0 10px 0 0' }}/>My History
              </Link>
            </div>
          </div>
          <div className="user-service">
            <h2>Service</h2>
            <p>{user.service}</p>
          </div>
          <div className="user-skills">
            <h2>Skills</h2>
            <p>
              {
                skills.map(skill => {
                  return(
                    `${skill.name}  `
                  );
                })
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;