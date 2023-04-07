import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Chris Cline',
	title: 'Chris Cline',
	subTitle: emoji("subtitle"),
	role: "Web Developer Starter",
	resumeLink: "Your resume link... google drive or something else",
	view: false
};

export const socialMediaLinks = {
	github: 'https://github.com/ccline29',
	linkedin: 'www.linkedin.com/in/chris-cline-9315',
	email: 'clinechris29@gmail.com',
	facebook: '',
	twitter: "",
	instagram: "",
	medium: '',
	stackoverflow: ''
};

export const skills = {
	title: emoji("Many Talents"),
	subTitle: "Front End/Back End Design",
	describeSkills: [
		emoji(" HTML to add structure and content to webpages."),
		emoji("CSS to add custom colors and fonts to webpages."),
		emoji("Javascript to add functionality and interactivity to webpage."),
		emoji("Node.js to write server-side code using Javascript."),
		emoji("REACT to create a single-page application."),
	],
	lists: [
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		{fontAwesome: "fab fa-node", text: "NODE", proficiency: 60},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 30},
		
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2022.October",
			company: "UofT Web Development BootCamp",
			role: "Student",
		},
		{
			date: "2006-Current",
			company: "The Home Depot",
			role: "Merchandise Execution Manager",
		},
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "Projects created through Bootcamp.",
	lists: [
		{
			title: "No Days Off",
			desc: "Have no plans on a day off, use this to quickly learn what is happening in your city.",
			url: "https://adam42288.github.io/team-4-project/"
		},
		{
			title: "Team Profile Generator",
			desc: "Profile Generator using Node.js to create a HTML webpage.",
			url: "https://github.com/ccline29/challenge10"
		},
		{
			title: "TC-12",
			desc: "Build a command-line application to manage a company's employee database.",
			url: "https://github.com/ccline29/T-C12"
		},
		{
			title: "Come Challenge Me",
			desc: "Create a timed Javascript Quiz that stores high scores.",
			url: "https://ccline29.github.io/come_challenge_me/"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: false
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: false
}

export const contactInfo = {
	title: "Contact Me! 📞",
	subTitle: "Reach out and get in touch.",
	introduce: emoji("I'm a 47 year old beginning developer. I just completed the Front End Webstack Development Bootcamp from University of Texas. I've spent 20 years in retail and am looking for a new adventure. "),
	view: true
}