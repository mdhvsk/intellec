import { MultiOnClient } from "multion"


let api_key = process.env.MULTION_API_KEY
const multion = new MultiOnClient({
  apiKey: "api_key",
});


let browse = async () =>{

    await multion.browse({
        cmd: "Find the top comment of the top post on Hackernews.",
        url: "https://news.ycombinator.com/",
      });
      console.log("Browse response:", browse)
      return JSON.stringify(browse)
      
}

export {browse}
