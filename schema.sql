
CREATE TABLE "users" (
  "username" varchar PRIMARY KEY,
  "hashed_password" varchar NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "address" varchar NOT NULL,
  "address2" varchar NOT NULL,
  "city" varchar NOT NULL,
  "country" varchar NOT NULL,
  "user_type" varchar NOT NULL DEFAULT 'streamer',
  "is_email_verified" bool NOT NULL DEFAULT false,
  "password_changed_at" timestamptz NOT NULL DEFAULT '0001-01-01',
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "sessions" (
  "id" uuid PRIMARY KEY,
  "username" varchar NOT NULL,
  "refresh_token" varchar NOT NULL,
  "user_agent" varchar NOT NULL,
  "client_ip" varchar NOT NULL,
  "is_blocked" boolean NOT NULL DEFAULT false,
  "expires_at" timestamptz NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "verify_emails" (
  "id" BIGSERIAL PRIMARY KEY,
  "username" varchar NOT NULL,
  "email" varchar NOT NULL,
  "secret_code" varchar NOT NULL,
  "is_used" boolean NOT NULL DEFAULT false,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "expired_at" timestamptz NOT NULL DEFAULT (now()+interval'15 minutes')
);

CREATE TABLE "playlist" (
  "id" BIGSERIAL PRIMARY KEY,
  "title" varchar NOT NULL,  
  "duration" varchar NOT NULL,  
  "description" varchar NOT NULL, 
  "qualification" varchar NOT NULL, 
  "genre" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "playlist_track" (
  "id" BIGSERIAL PRIMARY KEY,
  "playlist_id" bigint NOT NULL,  
  "track_id" bigint NOT NULL,  
  "created_at" timestamptz NOT NULL DEFAULT (now())
);


CREATE TABLE "tracks" (
  "id" BIGSERIAL PRIMARY KEY,
  "title" varchar NOT NULL, 
  "duration" varchar NOT NULL, 
  "format" varchar NOT NULL, 
  "album_id" bigint NOT NULL, 
  "artist_id" bigint NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "albums" (
  "id" BIGSERIAL PRIMARY KEY,
  "title" varchar UNIQUE NOT NULL,
  "release_year" varchar NOT NULL,
  "duration" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "artist" (
  "id" BIGSERIAL PRIMARY KEY,
  "name" varchar UNIQUE NOT NULL,
  "about" varchar NOT NULL,
  "content" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "notifications" (
  "id" BIGSERIAL PRIMARY KEY,
  "user" varchar UNIQUE NOT NULL,
  "content" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "subscription_plan" (
  "id" BIGSERIAL PRIMARY KEY,
  "sender_username" varchar UNIQUE NOT NULL,
  "reciever_username" varchar NOT NULL,
  "content" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "ratings" (
  "id" BIGSERIAL PRIMARY KEY,
  "reviewer" varchar UNIQUE NOT NULL,
  "applicant_id" bigint NOT NULL,
  "ratings" bigint NOT NULL,
  "review_text" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);





CREATE INDEX ON "employers" ("user");

CREATE INDEX ON "applicants" ("user");

CREATE INDEX ON "jobs" ("employer_id");

CREATE INDEX ON "applications" ("job_id");

ALTER TABLE "verify_emails" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");

ALTER TABLE "employers" ADD FOREIGN KEY ("user") REFERENCES "users" ("username");

ALTER TABLE "applicants" ADD FOREIGN KEY ("user") REFERENCES "users" ("username");


ALTER TABLE "jobs" ADD FOREIGN KEY ("employer_id") REFERENCES "employers" ("id");

ALTER TABLE "messages" ADD FOREIGN KEY ("sender_username") REFERENCES "user" ("username");

ALTER TABLE "messages" ADD FOREIGN KEY ("reciever_username") REFERENCES "users" ("username");

ALTER TABLE "notifications" ADD FOREIGN KEY ("user") REFERENCES "users" ("username");

ALTER TABLE "sessions" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");

ALTER TABLE "ratings" ADD FOREIGN KEY ("reviewer") REFERENCES "enrollment" ("applicant");
