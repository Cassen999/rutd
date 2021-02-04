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
    "first_name" VARCHAR (255),
    "last_name" VARCHAR (255),
    "email" VARCHAR (255),
    "date_of_birth" DATE,
    "number" VARCHAR (10),
    "gender_id" INT REFERENCES "gender",
    "married_id" INT REFERENCES "married",
    "children" INT,
    "homeless" BOOLEAN,
    "current_address" varchar(255),
    "city" VARCHAR(255),
    "state_id" INT REFERENCES "state",
    "zipcode" VARCHAR (5),
    "country_id" INT REFERENCES "country",
    "mailing_address" VARCHAR(255),
    "city2" VARCHAR(255),
    "state_id2" INT REFERENCES "state",
    "zipcode2" VARCHAR (5),
    "country_id2" INT REFERENCES "country",
    "branch_id" INT REFERENCES "branch",
    "rank_id" INT REFERENCES "rank",
    "start_date" DATE,
    "end_date" DATE,
    "status_id" INT REFERENCES "status",
    "discharge_id" INT REFERENCES "discharge",
    "injury_id" INT REFERENCES "injury",
    "compensation" BOOLEAN,
    "percentage" INT REFERENCES "percentage",
    "danger_areas" BOOLEAN,
    "purple_heart" BOOLEAN
);

CREATE TABLE "organization" (
    "id" SERIAL PRIMARY KEY,
    "org_id" INT REFERENCES "user",
    "name" VARCHAR(255),
    "number" bigint,
    "email" VARCHAR(255),
    "city" VARCHAR(255),
    "state_id" INT REFERENCES "state",
    "pdf" bytea,
    "website" VARCHAR(255),
    "pictures" bytea,
    "description" VARCHAR(1000),
    "categories_id" INT REFERENCES "categories",
    "approved" BOOLEAN
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
    ('United States of America');

SELECT
    *
FROM
    veteran;

SELECT
    match.*,
    veteran.first_name,
    organization.*
FROM
    match
    INNER JOIN veteran ON veteran.id = match.vet_id
    INNER JOIN organization ON organization.id = match.org_id;

SELECT
    "first_name",
    "last_name",
    "match".received,
    "organization"."name"
FROM
    "user"
    JOIN "veteran" ON "vet_id" = "user".id
    JOIN "match" ON "match".vet_id = "veteran".id
    JOIN "organization" ON "organization".id = "match".org_id
ORDER BY
    "last_name" ASC
LIMIT
    10;

INSERT INTO
    "veteran" (
        "vet_id",
        "first_name",
        "last_name",
        "email",
        "date_of_birth",
        "number",
        "gender_id",
        "married_id",
        "children",
        "homeless",
        "current_address",
        "city",
        "state_id",
        "zipcode",
        "country_id",
        "mailing_address",
        "branch_id",
        "rank_id",
        "start_date",
        "end_date",
        "status_id",
        "discharge_id",
        "injury_id",
        "compensation",
        "percentage",
        "danger_areas",
        "purple_heart"
    )
VALUES
    (
        1,
        'C',
        'McC',
        'fakeemail@email.email',
        '1990-01-01',
        5555555555,
        1,
        1,
        1,
        false,
        '1235 Second Street',
        'Minneapolis',
        1,
        55420,
        1,
        '1235 Second Street',
        1,
        1,
        '1990-01-01',
        '1990-01-01',
        1,
        1,
        1,
        false,
        1,
        false,
        false
    );

INSERT INTO
    "match" (
        "vet_id",
        "org_id",
        "received",
        "accepted",
        "contacted"
    )
VALUES
    (3, 1, true, false, false);

INSERT INTO
    "organization" (
        "org_id",
        "name",
        "number",
        "email",
        "city",
        "state_id",
        "pdf",
        "website",
        "pictures",
        "description",
        "categories_id",
        "approved"
    )
VALUES
    (
        1,
        'org3',
        5555555555,
        'fakeemail@email.com',
        'Minneapolis',
        1,
        'none',
        'www.org1.com',
        'none',
        'its org1',
        1,
        true
    );

INSERT INTO
    "user" ("username", "password", "type_id")
VALUES
    ('org1', 'org1', 3),
    ('org2', 'org2', 3),
    ('org3', 'org3', 3);