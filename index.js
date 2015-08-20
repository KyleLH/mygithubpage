function showBlog() {
	var blog = document.getElementById("Blog");
	var active = document.getElementsByClassName("active")[0];
	
	if (blog.className.indexOf("active") !== -1) {
		return;
	}

	active.classList.remove("active");
	document.getElementsByClassName("active-link")[0].classList.remove("active-link");
	document.getElementsByClassName("blog")[0].classList.add("active-link");
	setTimeout(function () {
		active.classList.add("none");
		blog.classList.remove("none");
		setTimeout(function () {
			blog.classList.add("active");
		}, 5);
	}, 500);
}

function showProjects() {
	var projects = document.getElementById("Projects");
	var active = document.getElementsByClassName("active")[0];
	
	if (projects.className.indexOf("active") !== -1) {
		return;
	}

	active.classList.remove("active");
	document.getElementsByClassName("active-link")[0].classList.remove("active-link");
	document.getElementsByClassName("projects")[0].classList.add("active-link");
	setTimeout(function () {
		active.classList.add("none")
		projects.classList.remove("none");
		setTimeout(function () {
			projects.classList.add("active");
		}, 5);
	}, 500);
}