import { Arg, Mutation, Resolver , Query} from 'type-graphql';
import { Challenge } from '../entity/Challenge';
import dataSource from '../utils';

@Resolver()
class ChallengeResolver {
    @Mutation(() => Challenge)
    async addChallenge( 
        @Arg('description') description: string,
        @Arg('title') title: string,
        @Arg('progress') progress: number,
        @Arg('photo') photo: string,
        @Arg('likes') likes: number,
        @Arg('creator') creator: number,
        @Arg('duration') duration: string,
        ): Promise<Challenge> {     
            const createChallenge = await dataSource
                .getRepository(Challenge)
                .save({ description, title, progress, photo, likes, creator, duration });
            return createChallenge;            
        }

    // @Query(() => [Challenge])
    // async getAllChallenges(
    //     @Arg('description') description: string,
    //     @Arg('title') title: string,
    //     @Arg('progress') progress: number,
    //     @Arg('photo') photo: string,
    //     @Arg('likes') likes: number,
    //     @Arg('creator') creator: number,
    //     @Arg('duration') duration: string,
    // ) : Promise<Challenge[]> {
    //     try {
    //         const getOneChallenge = await dataSource
    //             .getRepository(Challenge)
    //             .find({where: {description, title, progress, photo, likes, creator, duration}});
    //         return getOneChallenge;
    //     } catch (err) {
    //         console.log(err);
    //         return [];
    //     }
    // }
    @Query(() => [Challenge])
    async getAllChallenges() : Promise<Challenge[]> {
        try {
            const getOneChallenge = await dataSource
                .getRepository(Challenge)
                .find();
            return getOneChallenge;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    @Mutation(() => String)
    async deleteChallenge(
        @Arg('id') id: number,
    ) : Promise<String> {
        const deleteResult = await dataSource.getRepository(Challenge).delete({ id });
        console.log(deleteResult);
        return 'Challenge deleted successfully';
    }

    @Mutation(() => Challenge)
    async updateChallenge(
        @Arg("id") id: number,
        @Arg('description', { nullable: true }) description: string,
        @Arg('title', { nullable: true }) title: string,
        @Arg('progress', { nullable: true }) progress: number,
        @Arg('photo', { nullable: true }) photo: string,
        @Arg('likes', { nullable: true }) likes: number,
        @Arg('creator', { nullable: true }) creator: number,
        @Arg('duration', { nullable: true }) duration: string
    ): Promise<Challenge> {

        const challenge = await dataSource
            .getRepository(Challenge)
            .findOne({where: {id}});

        if (challenge === null) {
            throw new Error(`The challenge with id: ${id} does not exist!`);
        }

        // Effectuez les mises à jour sur l'utilisateur si les champs sont fournis
        if (description !== "") {
            challenge.description = description;
        }
        if (title !== "") {
            challenge.title = title;
        }
        if (progress !== 0) {
            challenge.progress = progress;
        }
        if (photo !== "") {
            challenge.photo = photo;
        }
        if (likes !== 0) {
            challenge.likes = likes;
        }
        if (creator !== 0) {
            challenge.creator = creator;
        }
        if (duration !== "") {
            challenge.duration = duration;
        }

        // Enregistrez les modifications apportées à l'utilisateur
        const updateChallenge = await dataSource
            .getRepository(Challenge)
            .save(challenge);
        return updateChallenge;
    }
}

export default ChallengeResolver;
