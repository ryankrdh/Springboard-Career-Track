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

BETWEEN, AND, OR:

> SELECT id, title FROM books WHERE id BETWEEN >=20 and id <=25;
> SELECT id, title FROM books WHERE id BETWEEN >=20 and id <=25 AND price > 12;
> SELECT id, title FROM books WHERE id NOT BETWEEN >=20 and id <=25;

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

> <br/> > <br/> > <br/> > <br/> > <br/> > <br/> > <br/> > <br/> > <br/>

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
