# Minimalist website template
I have fallen in the portfolio design hell several times. The more you look at examples, the more confussing it gets, just like in the case of cover letters. As a result, I ended up making something that is pretty minimalist (it can be better, check brutalist web design).

![](https://i.imgur.com/ZLfp3S6.gif)

## What is this?
My attempt at making a minimalist website template. While I did mention that the main purpose of this template was to act as portfolio, it can easily be converted into a blog.

## What does it do?
Just enough to make a minimalist portfolio, blog, or whatever you might think of using it for.

## Features you say?
- responsive
- single page -> using vue just for the router
- dark / light mode

# How to?
## Template sections
The index.html file has everything labelled, so it is easy to see where a section starts and where it ends.
- Red - header content 
- Green - menu
- Yellow - main content 
- Blue - footer content

![](https://i.imgur.com/BZFrRkO.png)

## Adding a new page 
#### Maybe we want to create a projects page
- add it to the navbar menu 
	- duplicate line 53
	- replace `{active: route == 'home'}` with `{active: route == 'projects'}`
- create the new page 
	- select from line 65 to line 95 
	- paste bellow the selected aread
	- change ` v-if="route == 'home'"` to ` v-if="route == 'projects'"`
	- refresh and you should have another entry in the menu


## Preset colors
- <span style="color:#ffb70c">.font-color-yellow</span>
- <span style="color:#50ADB7">.font-color-winter-green</span>
- <span style="color:#444444">.font-color-secondary</span>
- <span style="color:#c7c2c2">.font-color-light-gray-super</span>
- <span style="color:#8c0099">.font-color-violet</span>
- <span style="color:#4413ff">.font-color-blue</span>
- <span style="color:#e49503">.font-color-orange</span>
- <span style="color:#00ff88">.font-color-green</span>
- <span style="color:#00c3ff">.font-color-aqua</span>
- <span style="color:#f00000">.font-color-red</span>

## Preset margin 
- 5 px = -xs   .margin-top-sx -> margin top of 5px
- 15 px = -sm   .margin-bottom-sm -> margin bottom of 15px
- 30 px = -md   .margin-left-md -> margin left of 30px
- 50 px = -lg   .margin-right-lg -> margin right of 50px


