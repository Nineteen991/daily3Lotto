I suddenly had the idea to track frequency of the winning
numbers in the California Daily 3 lotto. 

The idea is that the numbers that appear most often in the
last 20 draws will be numbers that I'll buy lotto tickets
to, and they'll be the Box drawing (meaning the 3 #'s drawn
can be in any order). 

I'm thinking that I'll save each set of winning #'s in an
array, which will be part of a larger array which contains
all the arrays. If that makes sense. 

After 20 games have been completed the newest array of 
winning #'s will be added and the oldest array out of 20 
will be popped. So we'll always have 20 arrays containing
the latest 20 games. This will all be saved in a Mongo
Atlas DB.

The most frequently used numbers will be added to a lotto
ticket that I will buy. I'll also keep track of any 
winning tickets, so I can see if any fine tuning is required.