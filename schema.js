export const typedef = `#graphql
type Game{
    id: ID!
    title: String!
    platform: [String!]!
}
type Review{
    id: ID!
    rating: Int!
    platform: String!
}
type Author{
    id: ID!
    name: String!
    varified: Boolean!
}
type Query{
    games: [Game]
    reviews: [Review]
    authors:[Author]
}





`;

//int, float, string, boolean, ID
