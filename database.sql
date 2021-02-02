-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "veteran" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (255) NOT NULL,
    "last_name" VARCHAR (255) NOT NULL,
    "email" VARCHAR (255) NOT NULL,
    "date_of_birth" VARCHAR (8) NOT NULL,
    "number" VARCHAR (10) NOT NULL,
    "gender_id" INT REFERENCES "gender",
    "married_id" INT REFERENCES "married",
    "children" INT (20) NOT NULL,
    "homeless" BOOLEAN NOT NULL,
    "current_address" varchar(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state_id" INT REFERENCES "state",
    "zipcode" VARCHAR (5) NOT NULL,
    "country_id" INT REFERENCES "country",
    "mailing_address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state_id" INT REFERENCES "state",
    "zipcode" VARCHAR (5) NOT NULL,
    "country_id" INT REFERENCES "country",
    "branch_id" INT REFERENCES "branch",
    "rank_id" INT REFERENCES "rank",
    "start_date" VARCHAR(8) NOT NULL,
    "end_date" VARCHAR(8) NOT NULL,
    "status_id" INT REFERENCES "status",
    "discharge_id" INT REFERENCES "discharge",
    "injury_id" INT REFERENCES "injury",
    "compensation" BOOLEAN NOT NULL,
    "percentage" INT REFERENCES "percentage",
    "danger_areas" BOOLEAN NOT NULL,
    "purple_heart" BOOLEAN NOT NULL
);

CREATE TABLE "organization" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "number" bigint(10) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state_id" INT REFERENCES "state",
    "pdf" bytea NOT NULL,
    "website" VARCHAR(255) NOT NULL,
    "pictures" bytea NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "categories_id" INT REFERENCES "categories",
    "approved" BOOLEAN NOT NULL
);

CREATE TABLE "match" (
    "id" SERIAL PRIMARY KEY,
    "vet_id" INT REFERENCES "veteran",
    "org_id" INT REFERENCES "organization",
    "received" BOOLEAN,
    "accepted" BOOLEAN,
    "contacted" BOOLEAN
);