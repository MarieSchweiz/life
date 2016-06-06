Layer0 = new Layer
	y: 614
	x: 299
	size: 150
	html: "20"
	width: 150
	height: 75
	style: {
            fontSize: "100px",
            textAlign: "center",
            color: "#fff",
            zindex:"100",
            padding: "10px",
        }
	backgroundColor: "rgba(133,159,188,0)"
	
Circle = new Layer
	y: 539
	x: 275
	borderRadius: 100
	backgroundColor: "rgba(64,64,64,0)"
	style: {
            zindex:"200",
        }
	borderWidth: 4
	borderColor: "rgba(255,255,255,0.5)"
	
Circle.draggable.enabled = true

Circle.draggable.constraints =
    x: 275
    y: 539
    width: 200
    height: 200 
 
# Define friction, tension and tolerance of bounce 
Circle.draggable.bounceOptions =
    friction: 20,
    tension: 300,
    tolerance: 0.0001
    
Circle.onDrag () ->
	