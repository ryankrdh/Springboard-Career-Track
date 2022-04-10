SQLAlchemy ORM
Popular, powerful, Python-based ORM (object-relational mapping)
Translation service between OOP in our server language and relational data in our database
Can use by itself, with Flask, or other web frameworks
Installing SQLAlchemy
Need the program that lets Python speak PostgreSQL: psycopg2

Need the program that provides SQLAlchemy: flask-sqlalchemy

$ pip install psycopg2-binary (helps python speak to postgres)
$ pip install flask-sqlalchemy

from flask_sqlalchemy import SQLAlchemy

app = FLask(**name**)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///sqla_intro'

db =SQLalchemy()
db.app = app
db.init_app(app)

OO into SQL  
Model
A model like this:

demo/models.py
class Pet(db.Model):
"""Pet."""

    __tablename__ = "pets"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)
    species = db.Column(db.String(30), nullable=True)
    hunger = db.Column(db.Integer, nullable=False, default=20)

Would turn into this SQL:

CREATE TABLE pets (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
species VARCHAR(30),
hunger INTEGER NOT NULL DEFAULT 20
)

Setup
demo/models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
"""Connect to database."""

    db.app = app
    db.init_app(app)

from flask import Flask, request, redirect, render_template
from models import db, connect_db, Pet

app = Flask(**name**)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///sqla_intro'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)
SQLALCHEMY_DATABASE_URI - Where is your database?
SQLALCHEMY_TRACK_MODIFICATIONS - Set this to false or SQLAlchemy will yell at you
SQLALCHEMY_ECHO - Print all SQL statements to the terminal (helpful for debugging)
Can talk to SQLite, PostgreSQL, MySQL, and more
You (almost) never have to change code if you change databases

Models
Our Model
demo/models.py
class Pet(db.Model):
"""Pet."""

    __tablename__ = "pets"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)
    species = db.Column(db.String(30), nullable=True)
    hunger = db.Column(db.Integer, nullable=False, default=20)

All models should subclass db.Model
Specify the tablename with **tablename**
demo/models.py
class Pet(db.Model):
"""Pet."""

    __tablename__ = "pets"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)
    species = db.Column(db.String(30), nullable=True)
    hunger = db.Column(db.Integer, nullable=False, default=20)

demo/models.py
class Pet(db.Model):
"""Pet."""

    __tablename__ = "pets"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)
    species = db.Column(db.String(30), nullable=True)
    hunger = db.Column(db.Integer, nullable=False, default=20)

Creating the Database
$ ipython3
In [1] %run app.py

In [2] db.create_all()
Create all the tables using this database connection
Only have to do once
No effect if tables already exist
If you change table schema
drop table & re-run

Using our Model

> > > fluffy = Pet(name='Fluffy', species="Pet")
> > > fluffy.hunger
> > > 20

> > > db.session.add(fluffy) # required to add to database!
> > > db.session.commit() # commit the transaction
> > > You only have to use db.session.add() to add a new object once – you don’t need to keep adding it to the session each time you change it.

Using our Model

> > > fluffy = Pet(name='Fluffy', species="Pet")
> > > fluffy.hunger
> > > 20

> > > db.session.add(fluffy) # required to add to database!
> > > db.session.commit() # commit the transaction
> > > You only have to use db.session.add() to add a new object once – you don’t need to keep adding it to the session each time you change it.

The advantages text() provides over a plain string are −

backend-neutral support for bind parameters
per-statement execution options
result-column typing behaviour
The text()function requires Bound parameters in the named colon format. They are consistent regardless of database backend. To send values in for the parameters, we pass them into the execute() method as additional arguments.

The following example uses bound parameters in textual SQL −

from sqlalchemy.sql import text
s = text("select students.name, students.lastname from students where students.name between :x and :y")
conn.execute(s, x = 'A', y = 'L').fetchall()

Filtering data
Lets see some examples of raw SQLite Queries and queries using SQLAlchemy.
where
SQL :
SELECT * FROM census 
WHERE sex = F
SQLAlchemy :
db.select([census]).where(census.columns.sex == 'F')
in
SQL :
SELECT state, sex
FROM census
WHERE state IN (Texas, New York)
SQLAlchemy :
db.select([census.columns.state, census.columns.sex]).where(census.columns.state.in_(['Texas', 'New York']))
and, or, not
SQL :
SELECT * FROM census
WHERE state = 'California' AND NOT sex = 'M'
SQLAlchemy :
db.select([census]).where(db.and_(census.columns.state == 'California', census.columns.sex != 'M'))
