// fetch news via suzuki global 
import * as cheerio from 'cheerio';

export default async function handler(req,res){
  const result = await fetch('https://www.globalsuzuki.com/motorcycle/');
  const text = await result.text();
  const $ = cheerio.load(text);
  const list = [];
  $('.box:not(.show) > #news-list > li').each((i, title) => {
    const text = $(title).find('a').html();
    const href = $(title).find('a').attr('href');
    list.push({
      text: text,
      href: href,
    })
  })

  return res.json({
    status: true,
    data: list,
  })
}