# COMP229 - 23/05/2023

Document-oriented databases handle data differently

MongoDB

Key features of MongoDB

1. One of the greatest features of MongoDB is its JSON-like storage format named BSON.
2. Another big advantage of the BSON format is the use of the \_id field as the primary key. (native generate unique id)
3. Supporting ad hoc queries means that the database will respond to dynamically structured queries
4. db.[collections].find({ key: value});
5. SELECT \* FROM Posts WHERE Title LIKE '%mongo%';
   db.posts.find({ title:/mongo/ });
6. MongoDB solves this issue using a mechanism called indexing.
7. To speed up the scan, the database engine can use a predefined index, which maps document fields and can tell the engine which documents are compatible with this query statement.
8. replica set, can only write on the primary set
9. Arbiters do not maintain any data; their main purpose is to maintain a `quorum` in the replica set.
10. The various approaches to solve this issue can be divided into two groups: vertical scaling and horizontal scaling.
11. MongoDB sharding - Sharding is the process of splitting the data between different machines, or shards.
12. In order to do so, the team presented several new
    features:
     Storage API: In this version, the storage engine layer is
    decoupled from higher-level operations. This means
    organizations can now choose which storage engines to use
    according to their application needs, gaining up to 10x
    better performance.
     Enhanced query engine introspection: This allows the
    DBA to better analyze key queries, making sure performance
    is optimized.
     Better authentication and auditing: This allows larger
    organization to manage their MongoDB instance more
    securely.
     Better logging: More elaborate logging features allow
    developers to better track MongoDB's operations.
    Angular 15 + Node.js + MongoDB Architecture

Angular: Router, Components, Service, HTTP Client
Node.js: Router, Controller, ODM
Database.

13. ng g c
14. Products
    name - string
    description - string
    published - boolean
    price - int32
    category - string
15. https://e.centennialcollege.ca/d2l/le/content/964441/viewContent/12127326/View
16. Promise will be related to assignment
