SQLAlchemy ORM
Popular, powerful, Python-based ORM (object-relational mapping)
Translation service between OOP in our server language and relational data in our database
Can use by itself, with Flask, or other web frameworks
Installing SQLAlchemy
Need the program that lets Python speak PostgreSQL: psycopg2

Need the program that provides SQLAlchemy: flask-sqlalchemy

$ pip install psycopg2-binary
$ pip install flask-sqlalchemy

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
