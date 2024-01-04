import { gql, useQuery  } from "@apollo/client";
import Challenge from "./Challenge.interface";

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
        <h1>My Challenge</h1>
        {data && data.getAllChallenges.map((challenge: Challenge) => (
        <p key={challenge.id}>{challenge.title}</p>
    ))}
    </div>
    )
}
export default ChallengeDashboard