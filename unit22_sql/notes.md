# RELATIONAL DATABASE

model data as rows and columns of tabular data (like spreadsheets)
RDBMS - relational database management system. Allows us to interact with the database.
schema - a logical representation of a database including its tables. a representation of our database.
SQL - structured query language, a human>readable language for querying.

<br/>

# WHY WE USE PostgreSQL

PostgreSQL is a relational database that uses SQL and is an open source RDBMS we'll use here.
Powerful, popular, follows the SQL standard closely (it does not add bunch of features that are not standard SQL).

<br/>

# OTHER DATABASE INTRODUCTION NOTES

to delete the database:

> dropdb my_database_name

to back up a database:

> pg_dump -C -c -O my_database_name > backup.sql

SQL is a human-readable language for relational databases.
Strings in SQL:
case-sensitive: 'Bob' not same as 'bob'  
single-quotes, not double, around strings.  
commands end with semicolon.
SQL keywords are conventionally written in ALL IN CAPS but not required.

setting the terminal:

> export PATH="/Users/ryankrdh/Library/Application Support/Postgres/var-14/bin:$PATH"

modifying .zshrc:

> PSQL_PATH="/Applications/Postgres.app/Contents/Versions/latest/bin"PATH="$PATH:$PSQL_PATH"

Create DB:

> createdb "database name"

Load sql:

> psql < my_database.sql

list tables in database:

> \dt;

selecting all from table:

> SELECT \* FROM database_name;

selcting title from table:

> SELECT title FROM database_name;

selecting titleand author from table:

> SELECT title, author FROM database_name;

display the tables in terminal differently.

> \x auto;

<br/>

# SQL QUERYING

Data Manipulation Language(DML) is a subset of SQL that involves querying and manipulating records in existing tables. Most of the DML you'll be doing will be related to CRUD operations on rows

CRUD:
CREATE: INSERT INTO
READ: SELECT ...FROM
UPDATE: UPDATE ...SET
DELETE: DELETE FROM

<br/>

## WHERE

Using WHERE to filter which rows get included:

> SELECT title, price FROM books WHERE price > 10;

filter books with page count from 400 to 700

> SELECT title, page_count FROM books WHERE page_count < 700 and page_count > 400;

filter where author is Ari Berman or Trevor Noah:

> SELECT title, author FROM books WHERE author IN ('Ari Berman', 'Trevor Noah');

counts how many rows:

> SELECT COUNT(\*) FROM books;

finding max, min, avg, sum from books:

> SELECT MIN(price) FROM books;  
> SELECT AVG(page_count) FROM books;  
> SELECT AVG(page_count) FROM books WHERE author = 'J. K. Rowling';  
> SELECT SUM(price) FROM books;

<br/>

## GROUP BY

filtering how many rows by author:

> SELECT author, COUNT(\*) FROM books GROUP BY author;
> SELECT author, COUNT(\*), AVG(page_count) FROM books GROUP BY author;

## GROUP BY + HAVING

decide which group, if grouped, to keep:

> SELECT author, COUNT(\*) FROM books GROUP BY author HAVING COUNT(\*) > 2;

<br/>

## ORDER BY

in alphabetical order by author names:

> SELECT id, author FROM books ORDER BY author;

in descending order:

> SELECT id, author FROM books ORDER BY author desc;

in slphabetical order by author, when there's a tie, break it with title:

> SELECT author, title FROM books ORDER BY author, title;

<br/>

## LIMIT

only show n number of rows:

> SELECT title, author, price FROM books ORDER BY price LIMIT 5;
> SELECT \* FROM books WHERE page_count > 500 ORDER BY author LIMIT 2;
> SELECT \* FROM books WHERE page_count > 500 ORDER BY author desc LIMIT 2;

<br/>

## OFFSET

skip n number of rows. Used in combination with LIMIT to paginate results.

> SELECT id, author FROM books LIMIT 5 OFFSET 10;

<br/>

## SQL OPERATORS

IN Operator :
The IN operator is used with Where Clause to test if the expression matches any value in the list of values. The advantage of using IN operator is that it avoids the use of multiple OR Operator.

Query :
To fetch record of students with address as Delhi or ROHTAK.
The SQL query using IN operator would be,

> SELECT \* FROM Student WHERE ADDRESS IN ('Delhi', 'ROHTAK');

IN, NOT IN: gives title in the given id

> SELECT id, title FROM books WHERE id IN (1, 7, 9);
> SELECT id, title FROM books WHERE id NOT IN (1, 7, 9);

BETWEEN, AND, OR, XOR:
\*XOR is One of the other (but NOT both)

> SELECT id, title FROM books WHERE id BETWEEN 20 and 25;  
> SELECT id, title FROM books WHERE id BETWEEN 20 and 25 AND price > 12;  
> SELECT id, title FROM books WHERE id NOT BETWEEN 20 and id 25;  
> SELECT name, population, area FROM world WHERE area > 3000000 XOR population > 250000000;

LIKE:

returns if partial matches. ex:
'abc' LIKE 'a%' more than one can character be matched
'abc' LIKE '_b_' only one character can be matched.

> SELECT id, title FROM books WHERE title LIKE '%T%';

** ILIKE will match case-insensitive **

end with letter g:

> SELECT author FROM books WHERE author ILIKE '%g';

all authors that begin with J or a K:

> SELECT author FROM books WHERE author ILIKE 'J%' OR author ILIKE 'K%';

<br/>

## ALIASES

getting average page count and prices:
using Aliases gives column name

> SELECT AVG(page_count) AS avg_pages, AVG(price) AS avg_prices FROM books GROUP BY author;

using 'total' ALIAS for ORDER BY

> SELECT author, SUM(page_count) AS total FROM books GROUP BY author ORDER BY total;

<br/>

## INSERT

> INSERT INTO books (title, author, price) VALUES ('Life of Shiba', 'Ryan', 59.99)

> INSERT INTO books (title, author) VALUES ('Life of Shiba', 'Ryan'), ('Life of Cats', 'Janet')

<br/>

## UPDATE

> UPDATE books SET author = 'Colt Steele' WHERE author = 'J. K. Rowling';

<br/>

## DELETE

delete all books with certain page number

> DELETE FROM books WHERE page_count > 500;

<br/>

## ROUND

For South America show population in millions and GDP in billions both to 2 decimal places.

> SELECT name, round(population/1000000, 2), round(gdp/1000000000, 2) FROM world WHERE continent = ('South America')

## FUNCTIONS and OPERATORS

- round(name, -3) will give 0 up to 1000.
- <> means not equal.

<br/>

## ASSIGNMENT NOTES

--1. Change the query shown so that it displays Nobel prizes for 1950.

SELECT yr, subject, winner
FROM nobel
WHERE yr = 1950;

<br/>

--2. Show who won the 1962 prize for Literature.

SELECT winner
FROM nobel
WHERE yr = 1962
AND subject = 'Literature';

<br/>

--3. Show the year and subject that won 'Albert Einstein' his prize.

SELECT yr, subject FROM nobel WHERE winner = 'Albert Einstein';

<br/>

--4. Give the name of the 'Peace' winners since the year 2000, including 2000.

SELECT winner FROM nobel WHERE subject = 'Peace' AND yr >= 2000;

<br/>

--5. Show all details (yr, subject, winner) of the Literature prize winners for 1980 to 1989 inclusive.

SELECT \* FROM nobel WHERE subject = 'Literature' AND yr >= 1980 AND yr <= 1989;

<br/>

--6. Show all details of the presidential winners

SELECT \* FROM nobel
WHERE winner IN ('Theodore Roosevelt',
'Woodrow Wilson',
'Jimmy Carter');

<br/>

--7. Show the winners with first name John

SELECT winner FROM nobel WHERE winner LIKE 'John%';

<br/>

--8. Show the Physics winners for 1980 together with the Chemistry winners for 1984.

SELECT \* FROM nobel WHERE subject = 'Physics' AND yr = 1980 OR subject = 'Chemistry' AND yr = 1984;

<br/>

--9. Show the winners for 1980 excluding the Chemistry and Medicine

SELECT \* FROM nobel WHERE yr = 1980 AND subject NOT IN ('Chemistry', 'Medicine');

<br/>

--10. Show who won a 'Medicine' prize in an early year (before 1910, not including 1910) together with winners of a 'Literature' prize in a later year (after 2004, including 2004)

SELECT \* FROM nobel WHERE subject = 'Medicine' AND yr < 1910 OR subject = 'Literature' AND yr >= 2004;

<br/>

--11. Find all details of the prize won by PETER GRÜNBERG

SELECT \* FROM nobel WHERE winner = 'Peter Grünberg';

<br/>

--12.Find all details of the prize won by EUGENE O'NEILL

SELECT \* FROM nobel WHERE winner = 'Eugene O''Neill';

<br/>

--13. List the winners, year and subject where the winner starts with Sir. Show the the most recent first, then by name order.

Select winner, yr, subject FROM nobel WHERE winner LIKE 'Sir%' ORDER BY yr DESC, winner;

<br/>

--14. Show the 1984 winners ordered by subject and winner name; but list Chemistry and Physics last.

SELECT winner, subject
FROM nobel
WHERE yr=1984
ORDER BY subject IN ('Physics','Chemistry'), subject,winner;

<br/>

-- 1. For this challenge you need to create a simple SELECT statement that will return all columns from the people table WHERE their age is over 50

SELECT \* FROM people WHERE age > 50 ORDER BY age DESC;

<br/>

-- 2. For this challenge you need to create a simple SUM statement that will sum all the ages.

SELECT SUM(age) AS age_sum FROM people;

<br/>

-- 3. For this challenge you need to create a simple MIN / MAX statement that will return the Minimum and Maximum ages out of all the people.

SELECT MIN(age) AS age_min, MAX(age) AS age_max FROM people;

<br/>

-- 4. Create a simple SELECT query to display student information of all ACTIVE students.
True or False answer. 1 = true -1 = false

SELECT \* FROM students WHERE isActive = 1;

<br/>

-- 5. For this challenge you need to create a simple GROUP BY statement, you want to group all the people by their age and count the people who have the same age.

SELECT age, COUNT(\*) AS people_count FROM people GROUP BY age ORDER BY age DESC;

<br/>

-- 6. For this challenge you need to create a simple HAVING statement, you want to count how many people have the same age and return the groups with 10 or more people who have that age.

SELECT age, COUNT(_) AS total_people FROM people GROUP BY age HAVING COUNT(_) >= 10;

<br/>

--#1
/_
Show the total population of the world.
_/
SELECT SUM(population)
FROM world

<br/>

--#2
/_
List all the continents - just once each.
_/
SELECT DISTINCT(continent)
FROM world

<br/>

--#3
/_
Give the total GDP of Africa
_/
SELECT SUM(gdp)
FROM world
WHERE continent = 'Africa'

<br/>

--#4
/_
How many countries have an area of at least 1000000
_/
SELECT COUNT(name)
FROM world
WHERE area >= 1000000

<br/>

--#5
/_
What is the total population of ('France','Germany','Spain')
_/
SELECT SUM(population)
FROM world
WHERE name IN ('France', 'Germany', 'Spain')

<br/>

--#6
/_
For each continent show the continent and number of countries.
_/
SELECT continent, COUNT(name)
FROM world
GROUP BY continent

<br/>

--#7
/_
For each continent show the continent and number of countries with populations of at least 10 million.
_/
SELECT continent, COUNT(name)
FROM world
WHERE population >= 10000000
GROUP BY continent

<br/>

--#8
/_
List the continents that have a total population of at least 100 million.
_/
SELECT continent
FROM world
GROUP BY continent
HAVING SUM(population) > 100000000

<br/> 
------------------------------------------------------------------------- 
<br/>

# SQL RELATIONSHIPS

One-to-Many (1:M)
Our studio_id column provides us with a reference to the corresponding record in the studios table by its primary key.

Typically this is implemented with a foreign key constraint, which makes sure every studio_id exists somewhere in the studios table.

One-to-Many (1:M) in the sense that one studio has many movies, but each movie has one studio.

In this example, we can say movies is the referencing table, and studios is the referenced table.

# One to Many

Our studio_id column provides us with a reference to the corresponding record in the studios table by its primary key.
Typically this is implemented with a foreign key constraint, which makes sure every studio_id exists somewhere in the studios table.
One-to-Many (1:M) in the sense that one studio has many movies, but each movie has one studio.
In this example, we can say movies is the referencing table, and studios is the referenced table.

## Setting up FOREIGN KEY CONSTRAINT

CREATE TABLE studios
(id SERIAL PRIMARY KEY,
name TEXT,
founded_in TEXT);

CREATE TABLE movies
(id SERIAL PRIMARY KEY,
title TEXT,
studio_id INTEGER REFERENCES studios (id));

## Constraints are specified by the DDL, but affect DML query behavior.

INSERT INTO studios (name, founded_in) VALUES
('Walt Disney Studios Motion Pictures', '1953-06-23'),
('20th Century Fox', '1935-05-31'),
('Universal Pictures', '1912-04-30');

-- reference Disney's primary key
INSERT INTO movies (title, studio_id)
VALUES ('Star Wars: The Force Awakens', 1);

-- Throws an Foreign Key Constraint Error...
-- There is no studio with a primary key of 1000
INSERT INTO movies (title, studio_id)
VALUES ('Black Panther', 1000);

## Deleting Data Examples

When trying to delete a studio…
We cannot delete it outright while movies still reference it.

DELETE FROM studios WHERE id=1; -- error

Option 1: Clear out the studio_id columns of movies that reference it.
UPDATE movies SET studio_id=NULL WHERE studio_id=1;
DELETE FROM studios WHERE id=1;

Option 2: Delete the movies associated with that studio first.
DELETE FROM movies WHERE studio_id=1;
DELETE FROM studios WHERE id=1;

## JOIN Operation

The JOIN operation allows us to create a table in memory by combining information from different tables
Data from tables is matched according to a join condition
Most commonly, the join condition involves comparing a foreign key from one table and a primary key in another table
Setting Up the Data

CREATE TABLE studios
(id SERIAL PRIMARY KEY,
name TEXT,
founded_in TEXT);

CREATE TABLE movies
(id SERIAL PRIMARY KEY,
title TEXT,
release_year INTEGER,
runtime INTEGER,
rating TEXT,
studio_id INTEGER REFERENCES studios (id));

INSERT INTO studios
(name, founded_in)
VALUES
('Walt Disney Studios Motion Pictures', '1953-06-23'),
('20th Century Fox', '1935-05-31'),
('Universal Pictures', '1912-04-30');

INSERT INTO movies
(title, release_year, runtime, rating, studio_id)
VALUES
('Star Wars: The Force Awakens', 2015, 136, 'PG-13', 1),
('Avatar', 2009, 160, 'PG-13', 2),
('Black Panther', 2018, 140, 'PG-13', 1),
('Jurassic World', 2015, 124, 'PG-13', 3),
('Marvel’s The Avengers', 2012, 142, 'PG-13', 1);

## Our First Join

SELECT title, name
FROM movies
JOIN studios
ON movies.studio_id = studios.id;

SELECT title, name
FROM movies
INNER JOIN studios
ON movies.studio_id = studios.id;

JOIN and INNER JOIN are the same, the INNER keyword is optional.

# Types of Joins

There are two primary types of joins: inner and outer.

## Inner

Only the rows that match the condition in both tables.

## Outer

Left - All of the rows from the first table (left), combined with matching rows from the second table (right).

Right - The matching rows from the first table (left), combined with all the rows from the second table (right).

Full - All the rows from both tables (left and right).

> SELECT \* FROM movies INNER JOIN studios ON movies.studio_id = studios.id;
> SELECT \* FROM movies RIGHT JOIN studios ON movies.studio_id = studios.id;
> SELECT \* FROM movies LEFT JOIN studios ON movies.studio_id = studios.id;
> SELECT \* FROM movies FULL JOIN studios ON movies.studio_id = studios.id;

## Grouping example with JOIN

> SELECT name, COUNT(\*) AS totalFROM movies JOIN studios ON movies.studio_id = studios.id GROUP BY studios.name ORDER BY total DESC;;

## Many to Many

CREATE TABLE actors
(id SERIAL PRIMARY KEY,
first_name TEXT,
last_name TEXT,
birth_date TEXT);

CREATE TABLE roles
(id SERIAL PRIMARY KEY,
movie_id INTEGER REFERENCES movies (id),
actor_id INTEGER REFERENCES actors (id));

INSERT INTO actors
(first_name, last_name, birth_date)
VALUES
('Scarlett', 'Johansson', '1984-11-22'),
('Samuel L', 'Jackson', '1948-12-21'),
('Kristen', 'Wiig', '1973-08-22');

INSERT INTO roles
(movie_id, actor_id)
VALUES
(1, 1),
(1, 2),
(3, 2);

## Querying a Many-to-Many

Connecting movies and actors:

SELECT \* FROM movies
JOIN roles
ON movies.id = roles.movie_id
JOIN actors
ON roles.actor_id = actors.id;

Selecting certain columns, using table alias shorthand:

SELECT m.title, a.first_name, a.last_name
FROM movies m
JOIN roles r
ON m.id = r.movie_id
JOIN actors a
ON r.actor_id = a.id;

Get all the id, first name and last name of the actors that have been in more than one movie

SELECT a.id, a.first_name, a.last_name
FROM movies m
JOIN roles r
ON m.id = r.movie_id
JOIN actors a
ON r.actor_id = a.id
GROUP BY a.id, a.first_name, a.last_name
HAVING count(\*) >= 2;

> <br/> > <br/> > <br/> > <br/> > <br/> > <br/>

In SQL, there are three types of relationships--one-to-one (1:1), one-to-many (1:N) or many-to-many (M:N)--which can be modeled. The six tables (Students, Lecturers, Courses, StudentLecturer, StudentCourse and LecturerCourse) will be used to illustrate these relationships. The Students, Lecturers and Courses tables are the master tables and relationships are built using the other three tables, the StudentLecturer, StudentCourse and LecturerCourse.

Let's first discuss the concept of primary and foreign keys. The keys can be a single field or formed using a combination of fields in the table. Every table can have only one primary key and the primary key must be unique (i.e. the value of a primary key must be different for each row of data in the table). In the diagram from a moment ago, the vertical key symbol shows the field which is the primary key of the table.

One-to-many relationship
Let’s start with a one-to-many relationship as it is the most commonly used type. So, what is one-to-many relationship in SQL? A one-to-many relationship occurs when one record in table 1 is related to one or more records in table 2. However, one record in table 2 cannot be related to more than one record in table 1. We can come up with hundreds of examples of such relations: pages and the book they belong to, pupils and their class, orders and the customer who placed them, etc.

One-to-one relationship
A one-to-one relationship in a database occurs when each row in table 1 has only one related row in table 2. For example, a department may have only one head manager, a husband — only one wife, an employee — one company car, etc.

Many-to-many relationship
A many-to-many relationship occurs when multiple records in one table are related to multiple records in another table. For example, products and suppliers: one supplier may deliver one or many products and at the same time, the company may order one product from one or many suppliers.

Example of creating many-to-many relation in SQL
Relational databases don’t support direct many-to-many relationships between two tables. Then, how to implement many-to-many relationships in SQL? To create a many-to-many relationship in a database, you’ll need to create a third table to connect the other two. This new table (also known as a linking, joining, bridging, or junction table) will contain the primary key columns of the two tables you want to relate and will serve as an intermediate table between them.

Example of creating many-to-many relation in SQL
Relational databases don’t support direct many-to-many relationships between two tables. Then, how to implement many-to-many relationships in SQL? To create a many-to-many relationship in a database, you’ll need to create a third table to connect the other two. This new table (also known as a linking, joining, bridging, or junction table) will contain the primary key columns of the two tables you want to relate and will serve as an intermediate table between them.

Self-referencing relationships
A self-referencing relationship (also known as a recursive relationship) in a database occurs when a column in a table relates to another column in the same table. In such a relationship, only one table is involved. For example, the Staff table contains information about company employees and their managers, however, managers themselves belong to staff too.

Create table relationships in SQL Server using SQL Designer
The methods to define relationships in a SQL Server database described above are not so easy and straightforward. They involve a bit of coding and demand a certain level of SQL expertise. Is there an easier way to create relationships? Let’s have a look at the method to implement relations visually—using the SQL Designer that comes with dbForge Studio for SQL Server.
