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
SELECT _ FROM census
WHERE sex = F
SQLAlchemy :
db.select([census]).where(census.columns.sex == 'F')
in
SQL :
SELECT state, sex
FROM census
WHERE state IN (Texas, New York)
SQLAlchemy :
db.select([census.columns.state, census.columns.sex]).where(census.columns.state.in\_(['Texas', 'New York']))
and, or, not
SQL :
SELECT _ FROM census
WHERE state = 'California' AND NOT sex = 'M'
SQLAlchemy :
db.select([census]).where(db.and\_(census.columns.state == 'California', census.columns.sex != 'M'))

Using SQLAlchemy with Web Frameworks
There is no reason why you cannot use the SQLAlchemy library in any application that requires a database backend. However, if you are building a web app with Flask, Bottle or another web framework then take a look at the following extensions. They provide some glue code along with helper functions that can reduce the boilerplate code needed to connect your application's code with the SQLAlchemy library.

SQLAlchemy is typically used with Flask as the database ORM via the Flask-SQLAlchemy extension.

The bottle-sqlalchemy extension for Bottle provides a bridge between the standard SQLAlchemy library and Bottle. However, from my experience using the library it does not have quite as many helper functions as Flask-SQLAlchemy.

Pyramid uses the alchemy scaffold to make it easy to add SQLAlchemy to a Pyramid web app.

While Django does not yet support easy swapping of the default Django backend ORM with SQLAlchemy (like it does for template engines), there are hacks for using SQLAlchemy within Django projects.

Morepath has easy-to-use support for SQLAlchemy via its more.transaction module. There is a morepath-sqlalchemy demo that serves as a working example.

Merging Django ORM with SQLAlchemy for Easier Data Analysis has details on why, how and when you may want to use SQLAlchemy to augment the Django ORM.

Building a Simple Birthday App with Flask-SQLAlchemy combines SQLAlchemy with Flask to create a birthday reminder application.

SQLAlchemy resources
The best way to get comfortable with SQLAlchemy is to dig in and write a database-driven application. The following resources can be helpful if you are having trouble getting started or are starting to run into some edge cases.

There is an entire chapter in the Architecture of Open Source Applications book on SQLAlchemy. The content is detailed and well worth reading to understand what is executing under the covers.

The SQLAlchemy cheatsheet has many examples for querying, generating database metadata and many other common (and not so common) operations when working with Core and the ORM.

10 reasons to love SQLAlchemy is a bit of a non-critical lovefest for the code library. However, the post makes some good points about the quality of SQLAlchemy's documentation and what a pleasure it can be to use it in a Python project.

SQLAlchemy and Django explains how one development team uses the Django ORM for most of their standard queries but relies on SQLAlchemy for really advanced queries.

This SQLAlchemy tutorial provides a slew of code examples that cover the basics for working with SQLAlchemy.

Implementing User Comments with SQLAlchemy gives a wonderful walkthrough of how to build your own online commenting system in Python using SQLAlchemy.

Master SQLAlchemy Relationships in a Performance Friendly Way dives into code that shows how to improve performance when setting and accessing relationship-based data in your models.

SQLAlchemy and data access in Python is a podcast interview with the creator of SQLAlchemy that covers the project's history and how it has evolved over the past decade.

Most Flask developers use SQLAlchemy as an ORM to relational databases. If you're unfamiliar with SQLAlchemy questions will often come up such as what's the difference between flush and commit? that are important to understand as you build out your app.

SQLAlchemy in batches shows the code that a popular iOS application runs in background batch scripts which uses SQLAlchemy to generate playlists. They provide some context and advice for using SQLAlchemy in batch scripts.

Getting PostgreSQL transactions under control with SQLAlchemy provides a quick introduction to the tool Chryso that they are working on to provide better transaction management in SQLAlchemy connections.

SQLAlchemy compared to other ORMs
SQLAlchemy is one of many Python object-relational mapper (ORM) implementations. Several open source projects and articles are listed here to make it a bit easier to understand the differences between these implementations.

Introduction to SQLAlchemy ORM for Django Developers is written by a developer who typically used the Django ORM at work and then had a chance to try SQLAlchemy for one project. He covers differences in how each one handles transactions, models and queries.

SQLAlchemy vs Other ORMs provides a detailed comparison of SQLAlchemy against alternatives.

If you're interested in the differences between SQLAlchemy and the Django ORM I recommend reading SQLAlchemy and You by Armin Ronacher.

This GitHub project named PythonORMSleepy implements the same Flask application with several different ORMs: SQLAlchemy, Peewee, MongoEngine, stdnet and PonyORM. Looking through the code is helpful for understanding the varying approaches each library takes to accomplish a similar objective.

Quora has several answers to the question of which is better and why: Django ORM or SQLALchemy based on various developers' experiences.
