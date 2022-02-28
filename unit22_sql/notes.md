# RELATIONAL DATABASE

model data as rows and columns of tabular data (like spreadsheets)
RDBMS - relational database management system. Allows us to interact with the database.
schema - a logical representation of a database including its tables. a representation of our database.
SQL - structured query language, a human-readable language for querying.

<br/>

# WHY WE USE PostgreSQL

PostgreSQL is a relational database that uses SQL and is an open source RDBMS we'll use here.
Powerful, popular, follows the SQL standard closely (it does not add bunch of features that are not standard SQL).

<br/>

# OTHER DATABASE INTRODUCTION NOTES

to delete the database:
dropdb my_database_name

to back up a database:
pg_dump -C -c -O my_database_name > backup.sql

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

> SELECT author, COUNT(_) FROM books GROUP BY author;
> SELECT author, COUNT(_), AVG(page_count) FROM books GROUP BY author;

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
