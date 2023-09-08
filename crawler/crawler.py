import feedparser
import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('crawler/crawler.db')
c = conn.cursor()

def fetch_articles(url):
    # Fetch the RSS feed
    feed = feedparser.parse(url)
    for entry in feed.entries:
        # Extract relevant article details
        title = entry.title
        link = entry.link
        description = entry.description
        # Insert the article into the database
        c.execute("INSERT INTO feeds (title, link, description) VALUES (?, ?, ?)", (title, link, description))
    # Commit changes
    conn.commit()

def main():
    # Read the list of URLs from the configuration file
    with open('crawler/urls.txt') as file:
        urls = file.read().splitlines()
    # Fetch articles for each URL
    for url in urls:
        fetch_articles(url)
    # Close database connection
    conn.close()


if __name__ == '__main__':
    main()