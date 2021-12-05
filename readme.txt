--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--
Andrew Ton, Eric Nguyen
aton4@uci.edu, ericdn4@uci.edu
23219061, 40352816

1. How long, in hours, did it take you to complete this assignment?

    20 hours

2. What online resources did you consult when completing this assignment? (list specific URLs)

    Zulip - asked how a question on how to traverse a bootstrap carousel
    https://victordibia.com/handtrack.js/#/
    https://getbootstrap.com/docs/4.3/components/carousel/#methods
    https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20156

3. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

    Zulip - same as number 2

4. Basic Gestures Used
    a. Two Open Hands       - traverse tracklist upwards
        i.  We chose this because the fingers are pointing upwards and thus it means to move upwards
        ii. We chose two hands since one hand would sometimes mess with our custom gestures
    b. Two Closed Hands     - traverse tracklist downwards
        i.  We chose this because the fingers are pointing downwards and thus it means to move downwards (also opposite of two open hands)
        ii. We chose two hands since one hand would sometimes mess with our custom gestures
    c. Two Hands Pointing   - close the browser tab (only works if initially opened by hand pinched)
        i.  We chose this because browser tab is on top of where the camera is placed and it seems like it means "close this tab"
        ii. We chose two hands since one hand would sometimes mess with our custom gestures
    d. Two Hands Pinching   - stop the camera from recording
        i.  We chose this because when you hold a professional camera and take a picture, you are stopping the scene at that moment to take the picture
        ii. We chose two hands since one hand would sometimes mess with our custom gestures
    e. Hand Pinching        - go to the currently selected link (tracklist or carousel item)
        i.  We chose this because it looks like the user is "grabbing" the link
        ii. We chose one hand since this specific gesture is harder to detect and thus will not mess with the custom gestures as 
            much as the other ones

5. Custom Gestures Made
    a. One Hand Open, One Hand Closed   - traverse carousel left (will not move left if at first item)
        i.  We chose this mainly to contrast moving the tracklist 
    b. One Hand Open, One Hand Pointing - traverse carousel right (will not move right if at last item)
        i.  We chose this to contrast traversing the carousel to the left where pointing signifies the direction the user wants to go
            (which is generally forward and in terms of a carousel, to the right)

6. Did you add a bonus feature to your submission? If so, what is it and how should we see it?

    None

7. Is there anything special we need to know in order to run your code?

    Run npm install in client and webserver folder.
    npm start for webserver.
    ng serve --open for client.
    As per assignment 3 instructions.