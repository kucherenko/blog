import sqlite3
import feedparser


def parse_rss_feed(feed_url):
    # Connect to the SQLite database
    conn = sqlite3.connect('rss_database.db')
    cursor = conn.cursor()
    
    # Parse the RSS feed
    feed_data = feedparser.parse(feed_url)
    
    # Extract relevant data from the feed
    for entry in feed_data.entries:
        title = entry.title
        description = entry.description
        published_date = entry.published
        
        # Store the data in the database
        cursor.execute("INSERT INTO feed_entries (title, description, published_date) VALUES (?, ?, ?)", (title, description, published_date))
    
    # Commit the changes and close the database connection
    conn.commit()
    conn.close()