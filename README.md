# youtube-graphql-server
GraphQL wrapper for the YouTube data API, built with Node, Express and Apollo.

## Installation
Execute the following to install the necessary dependencies and boot up the server:
```
yarn
yarn start
```

## Disclaimer
This is a work in progress. Currently, the data being served through the GraphQL endpoint is not being fetched from the YouTube data API yet.

## Usage

Once the server is running, the GraphQL endpoint can be reached on `localhost:3000/graphql`. 

The GraphiQL endpoint can be found on `localhost:3000/graphiql`, which can be used to explore the GraphQL endpoint using the GraphiQL interface.

The following query is an example of how to get all the videos, including their respective amount of views:
```
query {
  allVideos {
    id
    statistics {
      viewCount
    }
  }
}
```
