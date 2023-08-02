import { gql } from '@apollo/client';
import OpinionsCarousel from '../components/Organisms/OpinionsCarousel/OpinionsCarousel';
import { IWilderProps } from './Wilder';

interface ISkillFromAPI {
  id: number;
  name: string;
}

interface IGradeFromAPI {
  grade: number;
  skill: ISkillFromAPI;
}

interface IWilderFromAPI {
  name: string;
  id: number;
  grades: IGradeFromAPI[];
}

const formatWildersFromApi = (wilders: IWilderFromAPI[]): IWilderProps[] =>
  wilders.map((wilder) => {
    return {
      id: wilder.id,
      name: wilder.name,
      skills: wilder.grades.map((grade) => {
        return { votes: grade.grade, title: grade.skill.name };
      }),
    };
  });

export const GET_WILDERS_AND_SKILLS = gql`
  query GetWildersAndSkills {
    wilders {
      id
      name
      grades {
        grade
        skill {
          id
          name
        }
      }
    }
    getAllSkills {
      id
      name
    }
  }
`;

const HomePage = () => {
  // console.log(formatWildersFromApi(data.wilders));
  return (
    <div>
      <main className="container">
        <OpinionsCarousel />
      </main>
    </div>
  );
};

export default HomePage;
