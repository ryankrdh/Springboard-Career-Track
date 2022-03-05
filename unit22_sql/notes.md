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

IN, NOT IN: gives title in the given id

> SELECT id, title FROM books WHERE id IN (1, 7, 9);
> SELECT id, title FROM books WHERE id NOT IN (1, 7, 9);

BETWEEN, AND, OR, XOR:
\*XOR is One of the other (but NOT both)

> SELECT id, title FROM books WHERE id BETWEEN >=20 and id <=25;  
> SELECT id, title FROM books WHERE id BETWEEN >=20 and id <=25 AND price > 12;  
> SELECT id, title FROM books WHERE id NOT BETWEEN >=20 and id <=25;  
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
