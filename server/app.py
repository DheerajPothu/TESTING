import sqlite3
from flask import Flask, jsonify, request
from flask_cors import CORS
from data import data  # Import the data from data.py
import uuid
from werkzeug.utils import secure_filename
import os
import re

app = Flask(__name__)
CORS(app)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # This goes up one level to 'frl'
CLIENT_PUBLIC_DIR = os.path.join(BASE_DIR, 'client', 'public', 'images')

def get_db_connection(db_name='sqlLite.db'):
    conn = sqlite3.connect(db_name)
    conn.row_factory = sqlite3.Row
    return conn



@app.route('/data', methods=['GET'])
def get_data():
    session_id = request.args.get('sessionId', default='initial')  # Get sessionId from query parameter
    conn = get_db_connection()
    c = conn.cursor()

    # Filter uploads by sessionId or include uploads with sessionId = 'initial'
    c.execute('SELECT * FROM uploads WHERE sessionId = ? OR sessionId = ?', (session_id, 'initial'))
    uploads = c.fetchall()

    conn.close()

    # Convert query results to dictionaries
    uploads_list = [{
        "id": row["id"],
        "src": row["src"],
        "title": row["title"],
        "season": row["season"],
        "day": row["day"],
        "date": row["date"],
        "company": row["company"],
        "category": row["category"],
        "playlist": row["playlist"],
        "fileType": row["fileType"],
        "tags": row["tags"].split(",") if row["tags"] else [],  # Convert string back to list
        "sessionId": row["sessionId"],
        "displayImgSrc": row["displayImgSrc"],  # Add display image source
        "favorite": row["favorite"]  # Add favorite status
    } for row in uploads]

    return jsonify({"uploads": uploads_list})

@app.route('/upload', methods=['POST'])
def upload_item():
    # Get form data and files
    title = request.form.get('title')
    season = request.form.get('season')
    day = request.form.get('day')
    date = request.form.get('date')
    company = request.form.get('company')
    category = request.form.get('category')
    playlist = request.form.get('playlist')
    tags = request.form.getlist('tags')  # Assuming tags is sent as a list
    sessionId = request.form.get('sessionId') or "initial"
    fileType = request.form.get('fileType') or "unknown"
    favorite = request.form.get('favorite', 'false').lower() == 'true'
    
    # File paths initialization
    src_path = None
    display_img_src_path = None

    # Handle file uploads for 'src' and 'displayImgSrc'
    if 'src' in request.files:
        src_file = request.files['src']
        src_filename = secure_filename(src_file.filename)
        session_dir = os.path.join(CLIENT_PUBLIC_DIR, sessionId)
        os.makedirs(session_dir, exist_ok=True)
        src_path = f'/images/{sessionId}/{src_filename}'
        src_file.save(os.path.join(session_dir, src_filename))

    if 'displayImgSrc' in request.files:
        display_img_file = request.files['displayImgSrc']
        display_img_filename = secure_filename(display_img_file.filename)
        session_dir = os.path.join(CLIENT_PUBLIC_DIR, sessionId)
        os.makedirs(session_dir, exist_ok=True)
        display_img_src_path = f'/images/{sessionId}/{display_img_filename}'
        display_img_file.save(os.path.join(session_dir, display_img_filename))

    # Database insertion
    conn = get_db_connection()
    c = conn.cursor()
    
    c.execute('''INSERT INTO uploads 
                 (src, displayImgSrc, title, season, day, date, company, category, playlist, fileType, tags, sessionId, favorite)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''', (
        src_path,
        display_img_src_path,
        title,
        season or "",
        day or "",
        date or "",
        company,
        category or "",
        playlist or "",
        fileType,
        ",".join(tags) if tags else "",  # Convert tags list to a comma-separated string
        sessionId,
        favorite
    ))

    conn.commit()
    conn.close()

    return jsonify({"message": "Item uploaded successfully"}), 201

@app.route('/update/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    reqPayload = request.json
    data = reqPayload
    
    category = data.get('category')
    company = data.get('company')
    date = data.get('date')
    day = data.get('day')
    displayImgSrc = data.get('displayImgSrc')
    fileType = data.get('fileType')
    season = data.get('season')
    sessionId = data.get('sessionId')
    src = data.get('src')
    tags = data.get('tags', [])  # Get tags from request payload
    # Check for existing tags in the database (case-insensitive)
    conn = get_db_connection()
    c = conn.cursor()
    
    # Fetch existing tags for the item
    c.execute('SELECT tags FROM uploads WHERE id = ?', (item_id,))
    existing_tags = c.fetchone()
    print(len(tags))
    print(existing_tags['tags'])
        
    if len(existing_tags['tags'].split(",")) <= len(tags):
        # Convert existing tags to a normalized form (letters only, lowercase)
        existing_tags_list = existing_tags['tags'].split(",")
        existing_tags_normalized = {re.sub(r"[^a-z]", "", tag.lower()) for tag in existing_tags_list}

        if tags:  # Ensure tags list is not empty
            # Normalize the last tag in the list
            last_tag = re.sub(r"[^a-z]", "", tags[-1].lower())
            if last_tag in existing_tags_normalized:
                # Find the original matching tag for the error message
                matching_tag = next(
                    (tag for tag in existing_tags_list if re.sub(r"[^a-z]", "", tag.lower()) == last_tag),
                    tags[-1]
                )
                conn.close()
                return jsonify({"error": f"Tag already exists for this item."}), 400

# Update the record in the uploads table based on the item_id


    # Update the record in the uploads table based on the item_id
    c.execute('''UPDATE uploads
                 SET category = ?, company = ?, date = ?, day = ?, displayImgSrc = ?, fileType = ?, season = ?, sessionId = ?, src = ?, tags = ?, title = ?, favorite = ?
                 WHERE id = ?''', (category, company, date, day, displayImgSrc, fileType, season, sessionId, src, ",".join(tags), data.get('title'), data.get('favorite'), item_id))

    conn.commit()
    conn.close()

    return jsonify({"message": "Item updated successfully"}), 200

@app.route('/create_session', methods=['POST'])
def create_session():
    session_id = str(uuid.uuid4())  
    ip_address = request.remote_addr  

    conn = get_db_connection()
    c = conn.cursor()

    c.execute('''INSERT INTO sessions (sessionId, ip_address)
                 VALUES (?, ?)''', (session_id, ip_address))

    conn.commit()
    conn.close()

    return jsonify({"sessionId": session_id}), 201

@app.route('/delete/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    conn = get_db_connection()
    c = conn.cursor()

    # First, get the file paths before deleting the record
    c.execute('SELECT src, displayImgSrc, sessionId FROM uploads WHERE id = ?', (item_id,))
    item = c.fetchone()
    
    if not item:
        conn.close()
        return jsonify({"message": "Item not found"}), 404

    # Delete the physical files if they exist
    if item['src']:
        file_path = os.path.join(CLIENT_PUBLIC_DIR, item['sessionId'], os.path.basename(item['src']))
        if os.path.exists(file_path):
            os.remove(file_path)
    
    if item['displayImgSrc']:
        display_img_path = os.path.join(CLIENT_PUBLIC_DIR, item['sessionId'], os.path.basename(item['displayImgSrc']))
        if os.path.exists(display_img_path):
            os.remove(display_img_path)

    # Delete the record from the database
    c.execute('DELETE FROM uploads WHERE id = ?', (item_id,))
    
    conn.commit()
    conn.close()

    return jsonify({"message": "Item deleted successfully"}), 200

if __name__ == '__main__':
    app.run(port=5004, debug=True)
