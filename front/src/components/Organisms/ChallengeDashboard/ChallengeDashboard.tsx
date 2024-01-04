import { gql, useQuery  } from "@apollo/client";
import Challenge from "./Challenge.interface";
import handimage from "../../../assets/handimage.png"

const GET_CHALLENGES = gql`
query GetAllChallenges {
    getAllChallenges {
    creator
      description
      duration
      id
      likes
      photo
      progress
      title
    }
  }
`;


const ChallengeDashboard = () => {
    const {data} = useQuery(GET_CHALLENGES);
    return (
<div className="challenge-container">
  <h1 className="challenge-title">My Challenge</h1>
  <div className="challenge-content">
    {data && data.getAllChallenges.map((challenge: Challenge) => (
      <div key={challenge.id}>
        <h6>{challenge.title}</h6>
        <img src={challenge.photo} alt="Challenge" />
      </div>
    ))}
  </div>
  {/* <img className= "hand" src={handimage} alt="logo" /> */}
</div>

    )
}
export default ChallengeDashboard

/*
Exemple de mutation avec une image
{  "duration": "One hour",
  "creator": 15,
  "likes": 150,
  "photo": "https://images.pexels.com/lib/api/pexels.png",
  "progress": 10,
  "title": "Web Eco Challenge",
  "description": "Try to reduce your energy try to reduce your energy consumption"
}
*/