CREATE TABLE IF NOT EXISTS project (username TEXT, title TEXT, id TEXT, date REAL, root TEXT, parent TEXT);
CREATE TABLE IF NOT EXISTS comment (username TEXT, targetType TEXT, targetId TEXT, date REAL, content TEXT);
CREATE TABLE IF NOT EXISTS user (username TEXT, isAdmin text, bio text);