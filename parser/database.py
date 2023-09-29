import sqlite3


def create_database():
    conn = sqlite3.connect('rss_database.db')
    cursor = conn.cursor()
    
    # Create tables if they don't exist
    cursor.execute("CREATE TABLE IF NOT EXISTS feeds (id INTEGER PRIMARY KEY AUTOINCREMENT, url TEXT)")
    cursor.execute("CREATE TABLE IF NOT EXISTS feed_entries (id INTEGER PRIMARY KEY AUTOINCREMENT, feed_id INTEGER, title TEXT, description TEXT, published_date TEXT, FOREIGN KEY (feed_id) REFERENCES feeds(id))")
    
    # Close the connection
    conn.close()
    

def get_feed_entries():
    conn = sqlite3.connect('rss_database.db')
    cursor = conn.cursor()
    
    # Retrieve all feed entries
    cursor.execute("SELECT * FROM feed_entries")
    entries = cursor.fetchall()
    
    # Close the connection
    conn.close()
    
    return entries