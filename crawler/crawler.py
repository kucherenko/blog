import feedparser
import sqlite3

# Read RSS URLs from file
with open('crawler/urls.txt', 'r') as file:
    urls = file.readlines()

# Iterate over each URL
for url in urls:
    # Fetch data from URL
    data = feedparser.parse(url)
    entries = data.entries

    # Connect to SQLite database
    conn = sqlite3.connect('crawler/crawler.db')
    c = conn.cursor()

    # Iterate over each entry
    for entry in entries:
        title = entry['title']
        link = entry['link']
        published = entry['published']

        # Insert entry into database
        c.execute("INSERT INTO feeds (title, link, published) VALUES (?, ?, ?)", (title, link, published))

    # Commit and close connection
    conn.commit()
    conn.close()
