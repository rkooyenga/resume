# Ray Kooyenga Resume

This resume project is something I just threw together in a few minutes. The general flow is that I asked ChatGPT, with some minor design specs, to scour the web for known professional details about Ray Kooyenga and write up a resume. The output requested was to aggregate that information and produce a markdown text file, as well as a one-page static HTML file with any external resources supplied by CDN. The HTML was then copied into CodePen for review. 

I did this a couple of times, experimenting with different layouts before settling on one. Next, I created a GitHub repo named `resume` and uploaded the file, naming it `index.html`. Then, I went to DigitalOcean, where I normally host my server (which has been offline and needs rebuilding). After managing 100+ sites and 15 VPS servers over 10 years, I had somehow never used the (new to me) DigitalOcean Applications function. 

I opted for that, assuming it would be able to connect to the repo and continuously update changes. To my great pleasure, it worked exactly how I hoped and expected. This process produced an application URL as a subdomain of DigitalOcean. Since I already have my domain raykooyenga.com hosted there, adding a CNAME to point a subdomain of "resume" to the application was a breeze. Literally, in a matter of minutes, I had AI write my resume, output it as HTML, upload it to GitHub, and have DigitalOcean serve and monitor for changes. The final product is now served as a subdomain: `resume.raykooyenga.com`.

Pretty f****** cool. For a non-tech person, this probably sounds like the hard way to do something, but considering how I would have done this in the past, this is actually me cheating and taking the easy way out.

One final touch: I am writing this summary as a `README.md` to upload into my resume repo as an explanation for those not accessing the resume via the domain or DigitalOcean, but stumbling upon the repo for whatever reason on my GitHub. And to do this, I am narrating my voice to OpenAI again and requesting it to review for grammar, spelling, and formatting and to output this as markdown.

If only everything I worked on was this easy and fun!

**Authored by Ray Kooyenga**

GitHub: [github.com/rkooyenga](https://github.com/rkooyenga)  
X (Twitter): [X.com/RayKTweets](https://x.com/RayKTweets)  
Website: [raykooyenga.com](https://raykooyenga.com)
