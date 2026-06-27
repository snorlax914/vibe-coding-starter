DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS highlights;

CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  uniform_number TEXT NOT NULL,
  tagline TEXT NOT NULL,
  introduction TEXT NOT NULL,
  image_path TEXT NOT NULL
);

CREATE TABLE highlights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL
);

INSERT INTO profile (
  name,
  team,
  position,
  uniform_number,
  tagline,
  introduction,
  image_path
) VALUES (
  '여대기',
  '비밀',
  '농구',
  '공개 안 함',
  '농구를 좋아하는 여대기의 간단한 자기소개 페이지입니다.',
  '안녕하세요. 저는 여대기입니다. 나이는 비밀이고, 취미는 농구입니다.',
  '/images/ohtani.jpeg'
);

INSERT INTO highlights (label) VALUES
  ('나이는 비밀'),
  ('취미는 농구'),
  ('간단한 자기소개');
