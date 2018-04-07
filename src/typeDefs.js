const typeDefs = [`
    type Video {
        kind: String
        etag: String
        id: String
        contentDetails: ContentDetails
        statistics: Statistics
    }

    type ContentDetails {
        duration: String
        dimension: String
        definition: String
        caption: String
        licensedContent: Boolean
        projection: String
    }

    type Statistics {
        viewCount: String
        likeCount: String
        dislikeCount: String
        favoriteCount: String
        commentCount: String
    }

    type Query {
        allVideos: [Video]
        video(id: Int!): Video
    }
`];

export default typeDefs;
