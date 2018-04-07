import videos from './data/videos';

const resolvers = {
    Query: {
        allVideos: () => videos.items,
        video: (root, { id }) => videos.items.find(video => video.id === id)
    }
}

export default resolvers;
