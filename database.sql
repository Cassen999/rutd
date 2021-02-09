-- Enter in all commands in order they are written from top to bottom
-- Tables
CREATE TABLE "type" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE type_id_seq RESTART WITH 1;

CREATE TABLE "gender" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE gender_id_seq RESTART WITH 1;

CREATE TABLE "married" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE married_id_seq RESTART WITH 1;

CREATE TABLE "branch" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE branch_id_seq RESTART WITH 1;

CREATE TABLE "rank" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE rank_id_seq RESTART WITH 1;

CREATE TABLE "status" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE status_id_seq RESTART WITH 1;

CREATE TABLE "country" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE country_id_seq RESTART WITH 1;

CREATE TABLE "state" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE state_id_seq RESTART WITH 1;

CREATE TABLE "discharge" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE discharge_id_seq RESTART WITH 1;

CREATE TABLE "injury" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE injury_id_seq RESTART WITH 1;

CREATE TABLE "percentage" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE percentage_id_seq RESTART WITH 1;

CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

ALTER SEQUENCE categories_id_seq RESTART WITH 1;

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "type_id" INT REFERENCES "type"
);

ALTER SEQUENCE user_id_seq RESTART WITH 1;

-- STOP HERE, DO THE INSERTS FOR ALL OF THE DROPDOWN TABLES
-- Start inserts for dropdowns
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
    ('Prefer not to answer');

INSERT INTO
    married (description)
VALUES
    ('Single'),
    ('Married'),
    ('Divorce'),
    ('Prefer not to answer');

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

-- End inserts for dropdowns
-- USING THE BROWSER ENTER 6 DIFFERENT USERS THAT ARE VETS
-- IN POSTGRESS, CHANGE 3 OF THOSE USER TYPES FROM TYPE 1 TO TYPE 2
-- NOW THERE SHOULD BE 3 VETS AND 3 ADMIN IN THE USER TABLE
-- THEN, ADD 3 MORE IN THE BROWSER
-- BACK IN POSTGRESS, CHANGE THOSE LAST 3 ADDED USERS TO USER TYPE 3 MAKING THEM ORGS
-- AFTER DOING THIS, YOU SHOULD HAVE 3 USERS OF EACH OF THE 3 TYPES
-- NOW ADD THE VETERAN AND ORGANIZATION TABLES
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

ALTER SEQUENCE veteran_id_seq RESTART WITH 1;

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

ALTER SEQUENCE organization_id_seq RESTART WITH 1;

CREATE TABLE "match" (
    "id" SERIAL PRIMARY KEY,
    "vet_id" INT REFERENCES "veteran",
    "org_id" INT REFERENCES "organization",
    "received" TIME,
    "contacted" TIME,
    "approved" TIME
);

ALTER SEQUENCE match_id_seq RESTART WITH 1;

-- End Tables
-- Inserts into veteran
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
        'Cassen',
        'Gerber',
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
        '2015-03-15',
        '2019-03-15',
        1,
        1,
        1,
        false,
        1,
        false,
        false
    );

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
        2,
        'Yer',
        'Thao',
        'fakeemail@email.email',
        '1990-01-01',
        5555555555,
        2,
        2,
        2,
        false,
        '1235 Second Street',
        'Minneapolis',
        1,
        55420,
        1,
        '1235 Second Street',
        1,
        1,
        '2015-03-15',
        '2019-03-15',
        1,
        1,
        1,
        false,
        1,
        false,
        false
    );

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
        3,
        'Joel',
        'Kado',
        'fakeemail@email.email',
        '1990-01-01',
        5555555555,
        3,
        3,
        3,
        false,
        '1235 Second Street',
        'Minneapolis',
        1,
        55420,
        1,
        '1235 Second Street',
        1,
        1,
        '2015-03-15',
        '2019-03-15',
        1,
        1,
        1,
        false,
        1,
        false,
        false
    );

-- End inserts into veteran
-- Inserts into organization
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
        7,
        'Wounded Warrior Project',
        5555555555,
        'fakeemail@email.com',
        'Minneapolis',
        1,
        'none',
        'www.Woundedwarriorproject.org',
        'none',
        'Wounded Warrior Project stuff',
        1,
        true
    );

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
        8,
        'Hives for Heroes',
        8323651183,
        'support@hivesforheroes.com',
        'Houston',
        1,
        'none',
        'www.hivesforheroes.com',
        'none',
        'We do beekeeping stuff',
        1,
        true
    );

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
        9,
        'American Red Cross',
        5555555555,
        'fakeemail@email.com',
        'Minneapolis',
        1,
        'none',
        'www.redcross.org',
        'none',
        'American Red Cross stuff',
        1,
        true
    );

-- End inserts into organization
-- Inserts into match
INSERT INTO
    "match" (
        "vet_id",
        "org_id",
        "received",
        "contacted",
        "approved"
    )
VALUES
    (1, 1, '05:00:00', '06:00:00', '07:00:00');

INSERT INTO
    "match" (
        "vet_id",
        "org_id",
        "received",
        "contacted",
        "approved"
    )
VALUES
    (2, 2, '04:00:00', '05:00:00', '06:00:00');

INSERT INTO
    "match" (
        "vet_id",
        "org_id",
        "received",
        "contacted",
        "approved"
    )
VALUES
    (3, 3, '03:00:00', '04:00:00', '05:00:00');

-- End inserts into match
-- Query for AdminVetList
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

-- End query for AdminVetList
-- Query to get all vets
SELECT
    *
FROM
    veteran;

-- End query to get all vets
-- Query to get vet and org name for matches
SELECT
    match.*,
    veteran.first_name,
    organization.*
FROM
    match
    INNER JOIN veteran ON veteran.id = match.vet_id
    INNER JOIN organization ON organization.id = match.org_id;

-- End query to get vet and org name for matches
-- Drop all tables
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

-- End drop all tables
CREATE TABLE "veteran_categories" (
    "id" SERIAL PRIMARY KEY,
    "vet_id" INT REFERENCES "veteran",
    "categories_id" INT REFERENCES "categories"
);

CREATE TABLE "organization_categories" (
    "id" SERIAL PRIMARY KEY,
    "org_id" INT REFERENCES "organization",
    "categories_id" INT REFERENCES "categories"
);

INSERT INTO
    veteran_categories(vet_id, categories_id)
VALUES
(1, 1),
(1, 2),
    (1, 3),
(1, 4);

INSERT INTO
    organization_categories(org_id, categories_id)
VALUES
(1, 1),
(1, 2),
(1, 5),
(2, 3),
(3, 4),
(3, 3);

INSERT INTO
    organization_categories(org_id, categories_id)
VALUES
(4, 5);

SELECT
    *
FROM
    veteran;

SELECT
    *
FROM
    (
        SELECT
            oc.org_id,
            count(oc.categories_id) AS org_needs,
            count(vc.categories_id) AS vet_has,
            (count(vc.categories_id) + 0.0) / (count(oc.categories_id) + 0.0) * 100 AS percent_match
        FROM
            organization_categories oc
            LEFT JOIN veteran_categories vc ON vc.categories_id = oc.categories_id
            AND vc.vet_id = 1
        GROUP BY
            oc.org_id
        ORDER BY
            percent_match desc,
            vet_has desc
    ) AS records
WHERE
    percent_match = 0;

SELECT
    veteran.first_name,
    veteran.last_name,
    veteran.email,
    veteran.date_of_birth,
    veteran.number,
    veteran.children,
    veteran.homeless,
    veteran.current_address,
    veteran.city,
    veteran.city2,
    veteran.zipcode,
    veteran.mailing_address,
    veteran.zipcode2,
    veteran.start_date,
    veteran.end_date,
    veteran.compensation,
    veteran.danger_areas,
    veteran.purple_heart,
    gender.description AS gender,
    married.description AS married,
    state.description AS state,
    country.description AS country,
    branch.description AS branch,
    rank.description AS rank,
    percentage.description AS percentage
FROM
    veteran
    LEFT JOIN gender ON gender.id = veteran.gender_id
    LEFT JOIN married ON married.id = veteran.married_id
    LEFT JOIN state ON state.id = veteran.state_id
    LEFT JOIN country ON country.id = veteran.country_id
    LEFT JOIN branch ON branch.id = veteran.branch_id
    LEFT JOIN rank ON rank.id = veteran.rank_id
    LEFT JOIN percentage ON percentage.id = veteran.percentage
WHERE
    veteran.id = 1;

DELETE FROM
    organization
WHERE
    id = 1;