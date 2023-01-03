console.log("zeub");

const btnContact = document.getElementById("btn-contact");
const contact = document.getElementById("contact");
let show = false;

btnContact.addEventListener("click", () => {
	if (show === false) {
		contact.style.visibility = "visible";
		contact.style.opacity = "1";
		contact.style.transform = "translateX(0)";
		show = true;
	} else if (show === true) {
		contact.style.visibility = "hidden";
		contact.style.opacity = "0";
		contact.style.transform = "translateX(200)";
		show = false;
	}
});

