// Select the elements from the HTML
let body=document.querySelector("body")
let colorSelect=document.querySelector("#select_color")
let colorCode=document.querySelector(".color_code")
let colorName=document.querySelector(".color_name")

// Add an alert for color selection 
alert("Click on the color box to select the color.")

// Create the div for color display
let display_color=document.createElement("div")
display_color.style.width="250px"
display_color.style.height="250px"
display_color.style.border="black 2px solid"
display_color.style.margin="30px 0px 0px 520px"

// Append display_color on the body
body.appendChild(display_color)

// Add Event on color select
colorSelect.addEventListener("input",(event)=>{
    const selectedColor=event.target.value

    // update the color of display box
    display_color.style.backgroundColor=selectedColor

    // update the color code
    colorCode.textContent=`HEX Code: ${selectedColor}`

    // update the color name
    const colorInfo = ntc.name(selectedColor);
    // to get the color name start the index from 1
    const name = colorInfo[1];
    colorName.textContent=`Color Name: ${name}`
})

