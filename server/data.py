
import sqlite3

data = [
 {
            "category": "montreal",
            "company": "Photos",
            "date": "2024/08/12",
            "day": "Monday",
            "displayImgSrc": "images/Montreal1.jpg",
            "fileType": "jpg",
            "id": 1,
            "playlist": "",
            "season": "Summer",
            "sessionId": "initial",
            "src": "images/Montreal1.jpg",
            "tags": [],
            "title": "Mount Royal"
        },
        {
            "category": "montreal",
            "company": "Photos",
            "date": "2024/07/06",
            "day": "Tuesday",
            "displayImgSrc": "images/Bonjour_montreal.jpg",
            "fileType": "jpg",
            "id": 2,
            "playlist": "",
            "season": "Summer",
            "sessionId": "initial",
            "src": "images/Bonjour_montreal.jpg",
            "tags": [],
            "title": "Bonjour Montreal"
        },
        {
            "category": "montreal",
            "company": "Photos",
            "date": "2024/12/05",
            "day": "Wednesday",
            "displayImgSrc": "images/centre-ville-montreal.jpg",
            "fileType": "jpg",
            "id": 3,
            "playlist": "",
            "season": "Winter",
            "sessionId": "initial",
            "src": "images/centre-ville-montreal.jpg",
            "tags": [],
            "title": "Centre Ville Montreal"
        },
        {
            "category": "montreal",
            "company": "Photos",
            "date": "2024/08/10",
            "day": "Thursday",
            "displayImgSrc": "images/montreal2.jpg",
            "fileType": "jpg",
            "id": 4,
            "playlist": "",
            "season": "Summer",
            "sessionId": "initial",
            "src": "images/montreal2.jpg",
            "tags": [],
            "title": "Biosphere Montreal"
        },
        {
            "category": "ontario",
            "company": "Photos",
            "date": "2024/08/24",
            "day": "Friday",
            "displayImgSrc": "images/ontario1.jpg",
            "fileType": "jpg",
            "id": 5,
            "playlist": "",
            "season": "Summer",
            "sessionId": "initial",
            "src": "images/ontario1.jpg",
            "tags": [],
            "title": "Toronto CN Tower"
        },
        {
            "category": "ontario",
            "company": "Photos",
            "date": "2024/06/10",
            "day": "Saturday",
            "displayImgSrc": "images/ng1.jpg",
            "fileType": "jpg",
            "id": 6,
            "playlist": "",
            "season": "Summer",
            "sessionId": "initial",
            "src": "images/ng1.jpg",
            "tags": [],
            "title": "Niagara Falls"
        },
        {
            "category": "ontario",
            "company": "Photos",
            "date": "2024/09/26",
            "day": "Sunday",
            "displayImgSrc": "images/ontario2.jpg",
            "fileType": "jpg",
            "id": 7,
            "playlist": "",
            "season": "Fall",
            "sessionId": "initial",
            "src": "images/ontario2.jpg",
            "tags": [],
            "title": "Toronto Fall Colors"
        },
        {
            "category": "montreal",
            "company": "Photos",
            "date": "2024/09/23",
            "day": "Monday",
            "displayImgSrc": "images/montreal3.jpg",
            "fileType": "jpg",
            "id": 8,
            "playlist": "",
            "season": "Fall",
            "sessionId": "initial",
            "src": "images/montreal3.jpg",
            "tags": [],
            "title": "Notre-dame Basilica of Montreal"
        },
        {
            "category": "montreal",
            "company": "Photos",
            "date": "2024/12/07",
            "day": "Tuesday",
            "displayImgSrc": "images/montreal4.jpg",
            "fileType": "jpg",
            "id": 9,
            "playlist": "",
            "season": "Winter",
            "sessionId": "initial",
            "src": "images/montreal4.jpg",
            "tags": [],
            "title": "Olympic Stadium"
        },
        {
            "category": "ontario",
            "company": "Photos",
            "date": "2024/10/02",
            "day": "Wednesday",
            "displayImgSrc": "images/ontario3.jpg",
            "fileType": "jpg",
            "id": 10,
            "playlist": "",
            "season": "Fall",
            "sessionId": "initial",
            "src": "images/ontario3.jpg",
            "tags": [],
            "title": "Thousand Islands"
        },
        {
            "category": "ottawa",
            "company": "Photos",
            "date": "2024/05/07",
            "day": "Thursday",
            "displayImgSrc": "images/ottawa1.jpg",
            "fileType": "jpg",
            "id": 11,
            "playlist": "",
            "season": "Summer",
            "sessionId": "initial",
            "src": "images/ottawa1.jpg",
            "tags": [],
            "title": "Parliament Building"
        },
        {
            "category": "ottawa",
            "company": "Photos",
            "date": "2024/01/31",
            "day": "Friday",
            "displayImgSrc": "images/ottawa2.jpg",
            "fileType": "jpg",
            "id": 12,
            "playlist": "",
            "season": "Winter",
            "sessionId": "initial",
            "src": "images/ottawa2.jpg",
            "tags": [],
            "title": "Ottawa"
        },
        {
            "category": "ottawa",
            "company": "Photos",
            "date": "2024/09/19",
            "day": "Saturday",
            "displayImgSrc": "images/ottawa3.jpg",
            "fileType": "jpg",
            "id": 13,
            "playlist": "",
            "season": "Fall",
            "sessionId": "initial",
            "src": "images/ottawa3.jpg",
            "tags": [],
            "title": "OTTAWA"
        },
        {
            "category": "banff",
            "company": "Photos",
            "date": "2024/10/15",
            "day": "Sunday",
            "displayImgSrc": "images/banff1.jpeg",
            "fileType": "jpg",
            "id": 14,
            "playlist": "",
            "season": "Fall",
            "sessionId": "initial",
            "src": "images/banff1.jpeg",
            "tags": [],
            "title": "Banff National Park"
        },
        {
            "category": "banff",
            "company": "Photos",
            "date": "2024/12/31",
            "day": "Monday",
            "displayImgSrc": "images/banff2.jpg",
            "fileType": "jpg",
            "id": 15,
            "playlist": "",
            "season": "Winter",
            "sessionId": "initial",
            "src": "images/banff2.jpg",
            "tags": [],
            "title": "Lake Louise"
        },
        {
            "category": "banff",
            "company": "Photos",
            "date": "2024/04/17",
            "day": "Tuesday",
            "displayImgSrc": "images/banff3.jpeg",
            "fileType": "jpg",
            "id": 16,
            "playlist": "",
            "season": "Summer",
            "sessionId": "initial",
            "src": "images/banff3.jpeg",
            "tags": [],
            "title": "Banff"
        },
        {
            "category": "montreal",
            "company": "Photos",
            "date": "2024/04/27",
            "day": "Wednesday",
            "displayImgSrc": "images/montreal5.jpg",
            "fileType": "jpg",
            "id": 17,
            "playlist": "",
            "season": "Summer",
            "sessionId": "initial",
            "src": "images/montreal5.jpg",
            "tags": [],
            "title": "Old Montreal"
        },
        {
            "category": "banff",
            "company": "Photos",
            "date": "2024/11/03",
            "day": "Thursday",
            "displayImgSrc": "images/banff4.jpeg",
            "fileType": "jpg",
            "id": 18,
            "playlist": "",
            "season": "Fall",
            "sessionId": "initial",
            "src": "images/banff4.jpeg",
            "tags": [],
            "title": "Welcome to Banff"
        },
        {
            "category": "banff",
            "company": "Photos",
            "date": "2024/02/14",
            "day": "Friday",
            "displayImgSrc": "images/banff5.jpg",
            "fileType": "jpg",
            "id": 19,
            "playlist": "",
            "season": "Winter",
            "sessionId": "initial",
            "src": "images/banff5.jpg",
            "tags": [],
            "title": "Banff Mountains"
        },
        {
            "category": "banff",
            "company": "Photos",
            "date": "2024/03/07",
            "day": "Saturday",
            "displayImgSrc": "images/banff6.jpg",
            "fileType": "jpg",
            "id": 20,
            "playlist": "",
            "season": "Winter",
            "sessionId": "initial",
            "src": "images/banff6.jpg",
            "tags": [],
            "title": "Banff"
        },
        {
            "category": "ontario",
            "company": "Photos",
            "date": "2024/11/27",
            "day": "Sunday",
            "displayImgSrc": "images/toronto.jpg",
            "fileType": "jpg",
            "id": 21,
            "playlist": "",
            "season": "Fall",
            "sessionId": "initial",
            "src": "images/toronto.jpg",
            "tags": [],
            "title": "Toronto"
        },
        {
            "category": "",
            "company": "Music",
            "date": "",
            "day": "",
            "displayImgSrc": "images/birthdayimg.jpeg",
            "fileType": "mp3",
            "id": 22,
            "playlist": "birthday",
            "season": "",
            "sessionId": "initial",
            "src": "media/birthday.mp3",
            "tags": [],
            "title": "Birthday Song"
        },
        {
            "category": "",
            "company": "Music",
            "date": "",
            "day": "",
            "displayImgSrc": "images/jaz1.jpeg",
            "fileType": "mp3",
            "id": 23,
            "playlist": "jazz",
            "season": "",
            "sessionId": "initial",
            "src": "media/jazz.mp3",
            "tags": [],
            "title": "Jazz Music"
        },
        {
            "category": "",
            "company": "Music",
            "date": "",
            "day": "",
            "displayImgSrc": "images/jaz2.jpg",
            "fileType": "mp3",
            "id": 24,
            "playlist": "jazz",
            "season": "",
            "sessionId": "initial",
            "src": "media/jazz2.mp3",
            "tags": [],
            "title": "You Got Jazz"
        },
        {
            "category": "",
            "company": "Music",
            "date": "",
            "day": "",
            "displayImgSrc": "images/dance0img.jpeg",
            "fileType": "mp3",
            "id": 25,
            "playlist": "dance",
            "season": "",
            "sessionId": "initial",
            "src": "media/dance0.mp3",
            "tags": [],
            "title": "Dance Zero"
        },
        {
            "category": "",
            "company": "Music",
            "date": "",
            "day": "",
            "displayImgSrc": "images/talent.jpg",
            "fileType": "mp3",
            "id": 26,
            "playlist": "dance",
            "season": "",
            "sessionId": "initial",
            "src": "media/talentdance.mp3",
            "tags": [],
            "title": "Talent in the Air"
        }
]

def get_db_connection(db_name='sqlLite.db'):
    conn = sqlite3.connect(db_name)
    conn.row_factory = sqlite3.Row
    return conn
def init_db():
    conn = get_db_connection()
    c = conn.cursor()

    c.execute('DROP TABLE IF EXISTS uploads')

    c.execute('''CREATE TABLE IF NOT EXISTS uploads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        src TEXT,
        displayImgSrc TEXT,
        title TEXT,
        season TEXT,
        day TEXT,
        date TEXT,
        company TEXT,
        category TEXT,
        playlist TEXT,
        fileType TEXT,
        tags TEXT,
        sessionId TEXT,
        favorite BOOLEAN DEFAULT FALSE  -- Add favorite column with default value
    )''')
    c.execute('''CREATE TABLE IF NOT EXISTS sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sessionId TEXT,
        ip_address TEXT
    )''')

    conn.commit()
    conn.close()

def populate_db():
    conn = get_db_connection()
    c = conn.cursor()

    for item in data:
        # Directly use item attributes without checking the source type
        src = item.get("src")  # Assuming a unified 'src' key is now used
        displayImgSrc = item.get("displayImgSrc")
        title = item.get("title")
        season = item.get("season") or ""
        day = item.get("day") or ""
        date = item.get("date") or ""
        company = item.get("company")
        category = item.get("category") or ""
        playlist = item.get("playlist") or ""
        fileType = item.get("fileType") or "unknown"  # Default if not provided
        tags = ",".join(item.get("tags", []))  # Convert tags list to a string
        sessionId = item.get("sessionId") or "initial"
        
        # Set favorite to false for all new entries
        favorite = False

        c.execute('''INSERT INTO uploads (src, displayImgSrc, title, season, day, date, company, category, playlist, fileType, tags, sessionId, favorite)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            src,
            displayImgSrc,
            title,
            season,
            day,
            date,
            company,
            category,
            playlist,
            fileType,
            tags,
            sessionId,
            favorite  # Insert false for favorite
        ))

    conn.commit()
    conn.close()

if __name__ == '__main__':
    init_db()
    populate_db()