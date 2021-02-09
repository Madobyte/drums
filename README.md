# Drums Project
**by M. Bambalan**

**Technologies used:**
- HTML5
- CSS3
    - CSS Grid
    - Animations and Transitions
    - Media Queries
    - Font Awesome
- Vanilla Javascript

## Dev's Reflection

I started this project to learn and practice DOM manipulation using vanilla Javascript.

If you see the code, the HTML code is very minimal. It is a boilerplate of HTML5. I just linked both CSS and JS script inside this HTML file.

The CSS file is very minimal as well. I used it for basic styling. I implemented CSS grid to manipulate the bahavior of the drum tiles. I tried doing CSS grid with `repeat(auto-fit, minmax())`, but the GUI did not look good when the drum tiles were cut off. Instead, I used media queries. 

I plan on learning CSS preprocessors (such as SASS) and implementing naming standards such as BEM.

Since this project focuses on learning and practicing DOM manipulation, the Javascript file is the longest. 

I used it to build most of the HTML elements with my drumSet function. I also listed an object of data (see data) to reduce repetitive lines of codes.

I added an eventlistener for keydown and mouse clicks that trigger the playDrum function.

Inside this function, I separated the keydown and the click events that trigger the sounds. The click event was more challenging since I needed to figure out which element was clicked and which sound corresponds to that element.

It was the first time I handled audio files. The first problem I encountered with audio files is compatibility. Some just does not work with Mozilla Firefox. Next, the audio needed to finish first before it can trigger another beat. Double beat was not possible until I set the currentTime to 0 before playing the audio file.

Lastly, I wanted it to look more dynamic. When a drum tile is clicked, it should visually respond to the command. So, I added the 'playing' class that has a transition. One problem, however, is I cannot dynamically add and remove the 'playing' class. So, I added an 'transitionend' eventlistener that triggers the removeClass function.

## What the Dev want to learn more about

I want to master DOM manipulation by practicing more JS. SASS and BEM are good additions, too. I want to learn writing Javascript more efficiently. The lesser the code, the better. Looking forward to more fun projects.

## Commits

**01/27/2021 - Initial Commit**

I pushed my first commit. The tink.wav [KeyK] was not working inside Mozilla Firefox (inside my Ubuntu virtualbox). 
The console was throwing a warning that says:

> Cannot play media. No decoders for requested formats: audio/x-wav, audio/x-wav, audio/x-wav, audio/x-wav

I had to try it out on Google Chrome on Windows. It turns out that it is working perfectly fine.

I need to work on the user interface next.

**01/28/2021**

Initial commit only has keyboard compatibility and an ugly UI. So I added a mouse compatibility for mobile users and a decent GUI with transitions.

Also, the background image is not showing on Google Chrome. It was fully working inside Mozilla Firefox. Fixed its directory by adding '.' in front.

Lastly, I added a title to complete this fun project.

**02/09/2021**
Revamped the UI. Added footer and a link to this github repo!

Added FontAwesome. Added animations and transitions.

**This project is a part of The Odin Project Curriculum**