/**
 * fetch global news via xml */ 
import { parseString } from "xml2js";
export default async function handler(req,res){
  const result = await fetch('https://www.globalsuzuki.com/globalnews/release.xml');
  const text = await result.text();
  let data;
  parseString(text, (err,results) => {
    data = results;
  })
  return res.json({
    status: 200,
    data: data
  });
}