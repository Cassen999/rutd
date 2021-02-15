-- Enter in all commands in order they are written from top to bottom
-- Tables
-- HIGHLIGHT TO THE THE END COMMENT AND EXECUTE!

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

CREATE TABLE "type" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255) NOT NULL
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80),
    "password" VARCHAR (1000),
    "type_id" INT REFERENCES "type" ON DELETE CASCADE
);

-- STOP HERE! AFTER CREATING THE TABLES, RESTART THE TABLES TO 1 BY HIGHLIGHTING THEM!

ALTER SEQUENCE user_id_seq RESTART WITH 1;

ALTER SEQUENCE type_id_seq RESTART WITH 1;

ALTER SEQUENCE gender_id_seq RESTART WITH 1;

ALTER SEQUENCE married_id_seq RESTART WITH 1;

ALTER SEQUENCE branch_id_seq RESTART WITH 1;

ALTER SEQUENCE rank_id_seq RESTART WITH 1;

ALTER SEQUENCE status_id_seq RESTART WITH 1;

ALTER SEQUENCE country_id_seq RESTART WITH 1;

ALTER SEQUENCE state_id_seq RESTART WITH 1;

ALTER SEQUENCE discharge_id_seq RESTART WITH 1;

ALTER SEQUENCE injury_id_seq RESTART WITH 1;

ALTER SEQUENCE percentage_id_seq RESTART WITH 1;

ALTER SEQUENCE categories_id_seq RESTART WITH 1;

-- Start inserts for dropdowns
-- DO THE INSERTS FOR ALL OF THE DROPDOWN TABLES

INSERT INTO "type" (description)
VALUES ('Veteran'), ('Admin'), ('Organization');

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
    "vet_id" INT REFERENCES "user" ON DELETE CASCADE,
    "first_name" VARCHAR (255),
    "last_name" VARCHAR (255),
    "email" VARCHAR (255),
    "date_of_birth" DATE,
    "number" VARCHAR (10),
    "gender_id" INT REFERENCES "gender" ON DELETE CASCADE,
    "married_id" INT REFERENCES "married" ON DELETE CASCADE,
    "children" INT,
    "homeless" BOOLEAN,
    "current_address" varchar(255),
    "city" VARCHAR(255),
    "state_id" INT REFERENCES "state" ON DELETE CASCADE,
    "zipcode" VARCHAR (5),
    "country_id" INT REFERENCES "country" ON DELETE CASCADE,
    "mailing_address" VARCHAR(255),
    "city2" VARCHAR(255),
    "state_id2" INT REFERENCES "state" ON DELETE CASCADE,
    "zipcode2" VARCHAR (5),
    "country_id2" INT REFERENCES "country" ON DELETE CASCADE,
    "branch_id" INT REFERENCES "branch" ON DELETE CASCADE,
    "rank_id" INT REFERENCES "rank" ON DELETE CASCADE,
    "start_date" DATE,
    "end_date" DATE,
    "status_id" INT REFERENCES "status" ON DELETE CASCADE,
    "discharge_id" INT REFERENCES "discharge" ON DELETE CASCADE,
    "injury_id" INT REFERENCES "injury" ON DELETE CASCADE,
    "compensation" BOOLEAN,
    "percentage" INT REFERENCES "percentage" ON DELETE CASCADE,
    "danger_areas" BOOLEAN,
    "purple_heart" BOOLEAN
);

CREATE TABLE "organization" (
    "id" SERIAL PRIMARY KEY UNIQUE,
    "org_id" INT REFERENCES "user" ON DELETE CASCADE,
    "name" VARCHAR(255),
    "number" bigint,
    "email" VARCHAR(255),
    "city" VARCHAR(255),
    "state_id" INT REFERENCES "state" ON DELETE CASCADE,
    "pdf" bytea,
    "website" VARCHAR(255),
    "pictures" bytea,
    "description" VARCHAR(1000),
    "approved" BOOLEAN
);

CREATE TABLE "veteran_categories" (
    "id" SERIAL PRIMARY KEY,
    "vet_id" INT REFERENCES "veteran" ON DELETE CASCADE,
    "categories_id" INT REFERENCES "categories" ON DELETE CASCADE
);

CREATE TABLE "organization_categories" (
    "id" SERIAL PRIMARY KEY,
    "org_id" INT REFERENCES "organization" ON DELETE CASCADE,
    "categories_id" INT REFERENCES "categories" ON DELETE CASCADE
);

CREATE TABLE "match" (
    "id" SERIAL PRIMARY KEY,
    "vet_id" INT REFERENCES "veteran" ON DELETE CASCADE,
    "org_id" INT REFERENCES "organization" ON DELETE CASCADE,
    "received" TIME,
    "contacted" TIME,
    "approved" TIME
);

-- End Tables
-- STOP HERE! AFTER CREATING THE TABLES, RESTART THE TABLES TO 1 BY HIGHLIGHTING THEM!
ALTER SEQUENCE veteran_id_seq RESTART WITH 1;

ALTER SEQUENCE organization_id_seq RESTART WITH 1;

ALTER SEQUENCE veteran_categories_id_seq RESTART WITH 1;

ALTER SEQUENCE organization_categories_id_seq RESTART WITH 1;

ALTER SEQUENCE match_id_seq RESTART WITH 1;

-- HIGHLIGHT VETERAN AND ORGANIZATION ONLY!!
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
        'cassenpt@gmail.com',
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
        'cassenpt@gmail.com',
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
        'Joeleen',
        'Kado',
        'cassenpt@gmail.com',
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
        "approved"
    )
VALUES
    (
        7,
        'Wounded Warrior Project',
        5555555555,
        'cassenpt@gmail.com',
        'Minneapolis',
        1,
        'none',
        'www.Woundedwarriorproject.org',
        'none',
        'Wounded Warrior Project stuff',
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
        "approved"
    )
VALUES
    (
        8,
        'Hives for Heroes',
        8323651183,
        'cassenpt@gmail.com',
        'Houston',
        1,
        'none',
        'www.hivesforheroes.com',
        'none',
        'We do beekeeping stuff',
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
        "approved"
    )
VALUES
    (
        9,
        'American Red Cross',
        5555555555,
        'cassenpt@gmail.com',
        'Minneapolis',
        1,
        'none',
        'www.redcross.org',
        'none',
        'American Red Cross stuff',
        true
    );
-- End inserts into organization

-- HIGHLIGHT MATCH, VETERAN_CATEGORIES, ORG_CATAGORIES!
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

-- Inserts into veteran_categories 
INSERT INTO
    veteran_categories(vet_id, categories_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (2, 5),
    (2, 6),
    (2, 7),
    (2, 8),
    (3, 9),
    (3, 10),
    (3, 3),
	(3, 4);
-- End inserts into match

-- Inserts into organization_categories
INSERT INTO
    organization_categories(org_id, categories_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 5),
    (2, 3),
    (2, 9),
    (3, 3),
    (3, 10),
    (3, 7),
    (3, 4),
    (2, 6);
-- End inserts into organization_categories

DROP TABLE 
"user",
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
"organization",
"veteran_categories",
"organization_categories" CASCADE;