import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Report } from './entity/Report';
import { Comment } from './entity/Comment';
import { Ecogeste } from './entity/Ecogeste';
import { Challenge } from './entity/Challenge';
import { Role } from './entity/Role';
import { Avatar } from './entity/Avatar';
import { Icon } from './entity/Icon';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'example',
  database: 'postgres',
  synchronize: true,
  entities: [User, Report, Comment, Role, Ecogeste, Challenge, Icon, Avatar],
});

export default dataSource;
