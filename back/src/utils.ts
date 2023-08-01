import { DataSource } from 'typeorm';
import { Avatar } from './entity/Avatar';
import { Challenge } from './entity/Challenge';
import { Comment } from './entity/Comment';
import { Ecogeste } from './entity/Ecogeste';
import { Icon } from './entity/Icon';
import { Report } from './entity/Report';
import { Role } from './entity/Role';
import { User } from './entity/User';
import { ChallengeEcogesteList } from './entity/joinTables/ChallengeEcogesteList';
import { UserParticipation } from './entity/joinTables/UserParticipation';
import { UserRole } from './entity/joinTables/UserRole';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'example',
  database: 'postgres',
  synchronize: true,
  entities: [
    User,
    Report,
    Comment,
    Role,
    Ecogeste,
    Challenge,
    Icon,
    Avatar,
    ChallengeEcogesteList,
    UserParticipation,
    UserRole,
  ],
});

export default dataSource;
