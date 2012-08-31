# Section: A HTML5 videogame by Luis Ramirez

Section is a 2D platform videogame featuring a gameplay based in the sectioning of 3D objects.
More information will be added.

## Some architecture notes:

### Why Node?

Mainly for learning purpouses, and the posibility of publishing it in a Node Server

### Project Structure

    -http/		# The files of the game itself
     |-index.html	# Main page
     |-style.css	# Main page style
     -server/	# Code of the server(s)
      |-CRServer.js	# Module for creating simple servers w/ varios routers, contains the CRServer class
      |-PFRouter.js   # Module for a simple file-serving router
    -server.js	# Node server
