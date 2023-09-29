import * as RSSParser from 'rss-parser';

export async function parseRSSFeed(url: string): Promise<any> {
  const parser = new RSSParser();
  const feed = await parser.parseURL(url);
  return feed;
}