# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
gender          | string    | not null (M or F)
birthdate       | date      | not null
city            | string    | not null
state           | string    | not null
type            | string    | not null
breed           | string    | 
website         | string    | 
instagram       | string    |

## votes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
voter_id    | integer   | not null, foreign key (references users)
votee_id    | integer   | not null, foreign key (references users)
value       | integer   | not null, (0 or 1)

## pictures
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image_url   | string    | not null, unique
user_id     | integer   | not null, foreign key (references users)

## hobbyings
_(better name?)_

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
hobby_id    | integer   | not null, foreign key (references hobbies)
user_id     | integer   | not null, foreign key (references users)

## hobbies
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique
