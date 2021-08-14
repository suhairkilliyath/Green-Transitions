function changeListElement(number, text="", link="#",attributeKey="style",attributeValue="",removeHref, innerHtml) {
	links[0]["children"][number]["children"][0].innerText = text
	links[0]["children"][number]["children"][0].href = link
	links[0]["children"][number]["children"][0].setAttribute(attributeKey,attributeValue)

    if(innerHtml) {
        links[0]["children"][number]["children"][0].innerHTML = innerHtml
    }

    if(removeHref==true) {
        links[0]["children"][number]["children"][0].removeAttribute('href');
    }
}


function backToHomeUI() {
	changeListElement(0, "Github", "https://github.com/suhairkilliyath/Green-Transitions", "target", "_blank")
	changeListElement(1, "QGIS Walkthrough", "https://suhairkilliyath.github.io/Green-Transitions/", "target", "_blank")
	changeListElement(1, "QGIS Walkthrough", "https://suhairkilliyath.github.io/Green-Transitions/", "style", "color:white")
    changeListElement(5, "","javascript:toggleInfo()",undefined, undefined,undefined,"<img src='res/info5.svg' width='19px' height=19px> About")

	document.getElementsByClassName("mapboxgl-control-container")[0].style.display = 'block';

    document.getElementById('controls').style.display = 'block';
}
