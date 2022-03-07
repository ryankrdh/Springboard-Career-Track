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

<br/> > <br/> > <br/> > <br/> > <br/> > <br/> > <br/> > <br/>

SQL Constraints
Constraints are the rules enforced on data columns on a table. These are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the database.

Constraints can either be column level or table level. Column level constraints are applied only to one column whereas, table level constraints are applied to the entire table.

Following are some of the most commonly used constraints available in SQL −

NOT NULL Constraint − Ensures that a column cannot have a NULL value.

DEFAULT Constraint − Provides a default value for a column when none is specified.

UNIQUE Constraint − Ensures that all the values in a column are different.

PRIMARY Key − Uniquely identifies each row/record in a database table.

FOREIGN Key − Uniquely identifies a row/record in any another database table.

CHECK Constraint − The CHECK constraint ensures that all values in a column satisfy certain conditions.

INDEX − Used to create and retrieve data from the database very quickly.

AND Operator
The AND operator allows multiple conditions to be combined. Records must match both conditions that are joined by AND to be included in the result set. The given query will match any car that is blue and made after 2014.

SELECT model
FROM cars
WHERE color = 'blue'
AND year > 2014;
AS Clause
Columns or tables can be aliased using the AS clause. This allows columns or tables to be specifically renamed in the returned result set. The given query will return a result set with the column for name renamed to movie_title.

SELECT name AS 'movie_title'
FROM movies;
OR Operator
The OR operator allows multiple conditions to be combined. Records matching either condition joined by the OR are included in the result set. The given query will match customers whose state is either 'CA' or 'NY'.

SELECT name
FROM customers
WHERE state = 'CA'
OR state = 'NY';
% Wildcard
The % wildcard can be used in a LIKE operator pattern to match zero or more unspecified character(s). The given query will match any movie that begins with The, followed by zero or more of any characters.

SELECT name
FROM movies
WHERE name LIKE 'The%';
SELECT Statement
The SELECT \* statement returns all columns from the provided table in the result set. The given query will fetch all columns and records (rows) from the movies table.

SELECT \*
FROM movies;
_ Wildcard
The _ wildcard can be used in a LIKE operator pattern to match any single unspecified character. The given query will match any movie which begins with a single character, followed by ove.

SELECT name
FROM movies
WHERE name LIKE '\_ove';
ORDER BY Clause
The ORDER BY clause can be used to sort the result set by a particular column either alphabetically or numerically. It can be ordered in two ways:

DESC is a keyword used to sort the results in descending order.
ASC is a keyword used to sort the results in ascending order (default).
SELECT \*
FROM contacts
ORDER BY birth_date DESC;
LIKE Operator
The LIKE operator can be used inside of a WHERE clause to match a specified pattern. The given query will match any movie that begins with Star in its title.

SELECT name
FROM movies
WHERE name LIKE 'Star%';
DISTINCT Clause
Unique values of a column can be selected using a DISTINCT query. For a table contact_details having five rows in which the city column contains Chicago, Madison, Boston, Madison, and Denver, the given query would return:

Chicago
Madison
Boston
Denver

SELECT DISTINCT city
FROM contact_details;
BETWEEN Operator
The BETWEEN operator can be used to filter by a range of values. The range of values can be text, numbers, or date data. The given query will match any movie made between the years 1980 and 1990, inclusive.

SELECT \*
FROM movies
WHERE year BETWEEN 1980 AND 1990;
LIMIT Clause
The LIMIT clause is used to narrow, or limit, a result set to the specified number of rows. The given query will limit the result set to 5 rows.

SELECT \*
FROM movies
LIMIT 5;
NULL Values
Column values can be NULL, or have no value. These records can be matched (or not matched) using the IS NULL and IS NOT NULL operators in combination with the WHERE clause. The given query will match all addresses where the address has a value or is not NULL.

SELECT address
FROM records
WHERE address IS NOT NULL;

WHERE Clause
The WHERE clause is used to filter records (rows) that match a certain condition. The given query will select all records where the pub_year equals 2017.

SELECT title
FROM library
WHERE pub_year = 2017;

The Foreign Key Constraint
Setting up a foreign key constraint with DDL:

CREATE TABLE studios
(id SERIAL PRIMARY KEY,
name TEXT,
founded_in TEXT);

CREATE TABLE movies
(id SERIAL PRIMARY KEY,
title TEXT,
studio_id INTEGER REFERENCES studios (id));
Constraints are specified by the DDL, but affect DML query behavior.

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

Deleting Data Examples
When trying to delete a studio…

We cannot delete it outright while movies still reference it.

DELETE FROM studios WHERE id=1; -- error
Option 1: Clear out the studio_id columns of movies that reference it.

UPDATE movies SET studio_id=NULL WHERE studio_id=1;
DELETE FROM studios WHERE id=1;
Option 2: Delete the movies associated with that studio first.

DELETE FROM movies WHERE studio_id=1;
DELETE FROM studios WHERE id=1;
What are the trade-offs? We will revisit this when we look at how to implement each of the two options above in the DDL.

Joining Tables
JOIN Operation
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

Our First Join
SELECT title, name
FROM movies
JOIN studios
ON movies.studio_id = studios.id;
SELECT title, name
FROM movies
INNER JOIN studios
ON movies.studio_id = studios.id;
