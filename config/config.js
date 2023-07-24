
import profile from './profile.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const navigation = {
	name: "Itan",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Itan",
	description: "A Fullstack Developer || Backend Developer || Frontend Developer.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1fn6M8Xg_4orc8rPD5J3fr3pDBszsQL8F/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"My name is Itan Sutarlan, and I am an aspiring Full Stack Web Developer with a passion for Backend Development. My journey in the tech world began with my enrollment in the Full Stack Web Development course at Binar Academy, followed by honing my skills as a Backend Developer Expert at Dicoding and completing a FullStack Javascript Immersive Bootcamp at Hacktiv8.",
		"While I may not have a vast career experience related to tech industry just yet, my dedication to continuous learning and growth drives me forward. I am enthusiastic about embracing challenges and staying up-to-date with the ever-evolving technology landscape.",
		'One of my significant accomplishments is my involvement in the development of "FlexWell," a mobile application that promotes a healthy lifestyle. Collaborating on this project has allowed me to apply my knowledge and skills in a practical setting, contributing to the creation of a tool that benefits people striving for better health.',
		"Looking ahead, I am eager to embark on my professional journey by joining a solid team with challenging projects. I believe that the ideal environment for me is one where I can both contribute effectively as a software developer and learn extensively from experienced mentors and colleagues.",
		"As a backend and frontend enthusiast, I am committed to leveraging my expertise to create seamless and user-friendly digital experiences. My goal is to be part of a team that fosters innovation, embraces collaboration, and shares a collective vision of creating remarkable software solutions.",
		"Thank you for taking the time to learn a bit about me. I am excited about the possibilities that lie ahead, and I am eager to contribute my skills and dedication to the world of web development. Let's connect and explore opportunities for collaboration and growth!"
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Mobile App Development",
			description: "I create a mobile app using React Native.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive static websites using Reactjs and Vuejs.",
			icons: null,
		},
		{
			title: "Backend Development",
			description: "I create a Restful API using nodejs frameworks like hapijs and expressjs.",
			icons: null,
		},
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Forum API",
			description: "A robust API application implementing automation testing, clean architecture and and CI/CD. Tech stack: Hapi framework, PostgreSQL, Jest, Github Action, AWS EC2, AWS RDS",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/ItanSutarlan/forum-api.git",
				},
			]
		},
		{
			title: "Open Music API",
			description: "An Open Music API implementing Queue Messaging using RabbitMQ.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/ItanSutarlan/open-music-api.git",
				},
				{
					icon: faGithub,
					link: "https://github.com/ItanSutarlan/music-app-queue-consumer.git",
				},
			]
		},
		{
			title: "FlexWell App",
			description: "A mobile app, a collaborative project built with React Native, that helps people who want to start a healthy lifestyle.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/orgs/FlexWell-Team/repositories",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out directly by email at itan030644@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:itan030644@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Itan Sutarlan | Software developer | Backend developer | Reactjs developer | Vuejs developer",
	description: "I create mobile apps and backend apps. I graduated from Hacktiv8 FullStack Javascript Immersive Bootcamp.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@ItanSutarlan",
	description: "Backend Developer | Frontend Developer | FullStack Developer",
	cards: [
		{
			title: "My GitHub",
			link: "https://github.com/ItanSutarlan",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/itan-sutarlan/",
		},
	]
}