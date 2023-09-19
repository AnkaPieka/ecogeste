import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Ecogeste } from '../entity/Ecogeste';
import dataSource from '../utils';

@Resolver()
class EcogesteResolver {
  @Mutation(() => Ecogeste)
  async addEcogeste(
    @Arg('title') title: string,
    @Arg('description') description: string,
    @Arg('level') level: number,
    @Arg('icon') icon: string,
    @Arg('category') category: string
  ): Promise<Ecogeste> {
    const createEcogeste = await dataSource
      .getRepository(Ecogeste)
      .save({ title, description, level, icon, category });

    return createEcogeste;
  }

  @Query(() => [Ecogeste])
  async getAll(
    @Arg('title') title: string,
    @Arg('description') description: string,
    @Arg('level') level: number,
    @Arg('icon') icon: string,
    @Arg('category') category: string
  ): Promise<Ecogeste[]> {
    try {
      const getOneEcogeste = await dataSource
        .getRepository(Ecogeste)
        .find({ where: { title, description, level, icon, category } });
      return getOneEcogeste;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  @Mutation(() => String)
  async deleteEcogeste(@Arg('id') id: number): Promise<String> {
    const deleteResult = await dataSource
      .getRepository(Ecogeste)
      .delete({ id });
    console.log(deleteResult);
    return 'Ecogeste deleted successfully';
  }

  @Mutation(() => Ecogeste)
  async updateEcogeste(
    @Arg('id') id: number,
    @Arg('title') title: string,
    @Arg('description') description: string,
    @Arg('level') level: number,
    @Arg('icon') icon: string,
    @Arg('category') category: string
  ): Promise<Ecogeste> {
    const ecogeste = await dataSource
      .getRepository(Ecogeste)
      .findOne({ where: { id } });

    if (ecogeste === null) {
      throw new Error(`The ecogeste with id: ${id} does not exist!`);
    }

    // Effectuez les mises à jour sur l'utilisateur si les champs sont fournis
    if (title !== '') {
      ecogeste.title = title;
    }
    if (description !== '') {
      ecogeste.description = description;
    }
    if (typeof level === 'number') {
      ecogeste.level = level;
    }
    if (icon !== '') {
      ecogeste.icon = icon;
    }
    if (category !== '') {
      ecogeste.category = category;
    }

    const updatedEcogeste = await dataSource
      .getRepository(Ecogeste)
      .save(ecogeste);
    return updatedEcogeste;
  }
}

export default EcogesteResolver;
