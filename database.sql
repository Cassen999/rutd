-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
DROP TABLE "user",
"type",
"rank",
"gender",
"married",
"branch",
"status",
"country",
"state",
"discharge",
"injury",
"percentage",
"categories",
"veteran",
"match",
"organization" CASCADE;

CREATE TABLE "type" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "type_id" INT REFERENCES "type"
);

CREATE TABLE "gender" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "married" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "branch" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "rank" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "status" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "country" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "state" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "discharge" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "injury" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "percentage" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "veteran" (
    "id" SERIAL PRIMARY KEY,
    "vet_id" INT REFERENCES "user",
    "first_name" VARCHAR (255) NOT NULL,
    "last_name" VARCHAR (255) NOT NULL,
    "email" VARCHAR (255) NOT NULL,
    "date_of_birth" VARCHAR (8) NOT NULL,
    "number" VARCHAR (10) NOT NULL,
    "gender_id" INT REFERENCES "gender",
    "married_id" INT REFERENCES "married",
    "children" INT NOT NULL,
    "homeless" BOOLEAN NOT NULL,
    "current_address" varchar(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state_id" INT REFERENCES "state",
    "zipcode" VARCHAR (5) NOT NULL,
    "country_id" INT REFERENCES "country",
    "mailing_address" VARCHAR(255) NOT NULL,
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
    "org_id" INT REFERENCES "user",
    "name" VARCHAR(255) NOT NULL,
    "number" bigint NOT NULL,
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

-- Data --
INSERT INTO
    type (description)
VALUES
    ('veteran'),
    ('admin'),
    ('organization');

INSERT INTO
    gender (description)
VALUES
    ('Male'),
    ('Female'),
    ('Other'),
    ('Perfer not to answer');

INSERT INTO
    married (description)
VALUES
    ('Single'),
    ('Married'),
    ('Divorce'),
    ('Perfer not to answer');

INSERT INTO
    branch (description)
VALUES
    ('Army'),
    ('Marine Corps'),
    ('Navy'),
    ('Air Force'),
    ('Space Force'),
    ('Coast Guard'),
    ('National Guard');

INSERT INTO
    rank (description)
VALUES
    ('E1'),
    ('E2'),
    ('E3'),
    ('E4'),
    ('E5'),
    ('E6'),
    ('E7'),
    ('E8'),
    ('E9'),
    ('O1'),
    ('O2'),
    ('O3'),
    ('O4'),
    ('O5'),
    ('O6'),
    ('O7'),
    ('O8'),
    ('O9'),
    ('O10'),
    ('W1'),
    ('W2'),
    ('W3'),
    ('W4'),
    ('W5');

INSERT INTO
    status (description)
VALUES
    ('Active/Return to Active'),
    ('Discharged'),
    ('National Guard'),
    ('Pending Med Board'),
    ('Permanent Disabillity Retired List (PDRL)'),
    ('Reserved'),
    ('Retired'),
    ('Temporary Disabillity Retired List (TDRL)');

INSERT INTO
    discharge (description)
VALUES
    ('Active'),
    ('Administrative'),
    ('Bad Conduct Discharge'),
    ('General Under Honorable Conditions'),
    ('General Under Other than Honorable Conditions'),
    ('Honorable'),
    ('Unknown'),
    ('Uncharacterized');

INSERT INTO
    injury (description)
VALUES
    ('Amputee'),
    ('Blind'),
    ('Post-Traumatic Stress Disorder(PTSD)'),
    ('Traumatic Brain Injury(TBI)'),
    ('Vision Impairment'),
    ('Mental Health'),
    ('Orthopedic'),
    ('Spinal Cord Injury(SCI)'),
    ('Shrapnel Fragment/ Gunshot Wound(SFW / GSW)'),
    ('Hearing Impairment'),
    ('Military Sexual Trauma(MST)'),
    ('Other');

INSERT INTO
    percentage (description)
VALUES
    ('0%'),
    ('10%'),
    ('20%'),
    ('30%'),
    ('40%'),
    ('50%'),
    ('60%'),
    ('70%'),
    ('80%'),
    ('90%'),
    ('100%');

INSERT INTO
    categories (description)
VALUES
    ('Benefits and Compensation'),
    ('Education and Training'),
    ('Employment'),
    ('Family and Caregiver Support'),
    ('Health'),
    ('Homeless Assistance'),
    ('Housing'),
    ('Other Services and Resources'),
    ('Military Adaptive Sports Program'),
    ('Transportation and Travel');

INSERT INTO
    state (description)
VALUES
    ('Texas'),
    ('Minnesota');

INSERT INTO
    country (description)
VALUES
    ('United States of America'),
    ('Minnesota');