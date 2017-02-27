"use strict";


var bio = {
	"name": "Denis Moroz",
	"role": "Software Developer",
	"contacts": {
		"mobile": "+375 29 637 9008",
		"email": "moroz.denis@gmail.com",
		"github": "https://github.com/denismoroz",
		"linkedin": "https://www.linkedin.com/in/dmoroz",
		"location": "Minsk, Belarus"
	},
	"biopic": "images/me2.jpg",
	"welcomeMessage": "Keep It Simple, Stupid!",
	"skills": ["Python", "C++", "Android", "MongoDB", "MySQL", "PostgreSQL",
			 "PyCharm", "Emacs", "AndroidStudio", "Git", "CVS", "Celery"],

	"display": function() {
		var formatedName = HTMLheaderName.replace("%data%", bio.name);
		var formatedRole = HTMLheaderRole.replace("%data%", bio.role);

		$("#header").prepend(formatedRole);
		$("#header").prepend(formatedName);

		var contacts = bio.contacts;
		var contact_section =  HTMLLinkedIn.replace("%data%", contacts["linkedin"])
		contact_section += HTMLemail.replace("%data%", contacts["email"]);
		contact_section += HTMLgithub.replace("%data%", contacts["github"]);
		contact_section +=HTMLmobile.replace("%data%", contacts["mobile"]);

		$("#topContacts").append(contact_section);
		$("#footerContacts").append(contact_section);

		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		$("#header").append(HTMLskillsStart);
		for (var skill in  bio.skills) {
			var s = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(s);
		};
	}
};

var work = {
	"jobs": [
		{
			"employer": "US Based Startup",
			"title": "Python Developer",
			"dates": "01.2014 - present",
			"location": "remote, US",
			"description" : "Responsible for design of a mobile application backend and development of a " +
					"database schema for MongoDB. Created REST API service to access backend functions. " +
					"Used Flask to implement REST API. Archived reliable codebase support and minimized " +
					"amount of bugs through use of unit tests for all backend API functions. Implemented" +
					" use of Ngnix on server side for better system scalability. Created system administrator’s" +
					" interface using web UI with Flask and JavaScript to consume REST API services. Built " +
					"a Spark script to fetch real-time information about system requests and added displayed" +
					" requests statistics in administrator interface using D3D.js. Developed a set of acceptance" +
					" tests to validate CI main chains of execution and verify quality of recent backend-side" +
					" commits. That enabled company to ensure that backend of the system is stable after new" +
					" code deployments and prevented broken releases. Managed development of the Android " +
					"mobile client system that used developed backend REST API."
		},
		{
			"employer": "MobSafety",
			"title": "Senior Python Developer",
			"dates": "2013.03 - 2013.09",
			"location": "remote, Canada",
			"description" : "Responsible for Mobile Device Management solution for iOS and Android devices." +
							" Managed a team of four developers working on backend part of the project that" +
							" runs as WSGI handler using Flask and MongoDB. Used agile scrum methodology, two" +
							" weeks iteration cycle and Jira to organize development workflow. Unit tests were" +
							" used to ensure system stability. Bamboo server was used as continuous integration" +
							" platform. Backend services were deployed in Amazon cloud using Juju deployment tool."
		},
		{
			"employer": "LatamIQ",
			"title": "Python Developer",
			"dates": "2012.07 – 2013.02",
			"location": "remote, Chili",
			"description" : "Company service was to grab and analyze economic indexes. My responsibility was to " +
							"build set of services at backend on MySQL that will help to analyze, predict flows of" +
							" economical indexes using several metrics"
		},
		{
			"employer": "Keeyword.com",
			"title": "Django Python Developer",
			"dates": "2011.09 – 2012.06",
			"location": "remote, Denmark",
			"description" : "The company is building tools for keyword research. My task was to optimize " +
							"PostgreSQL database schema to store at least 500k of keywords in one project " +
							"and provide fast access to them."
		},

		{
			"employer": "Visionica",
			"title": "Python C++ C Developer",
			"dates": "2008.03 – 2011.06",
			"location": "remote, Brasil",
			"description" : "Developed server side components for IP cameras recording system using MySQL " +
							"database, backend run on Ubuntu. I took part in development of client side " +
							"application for this system written in QT. "
		},
		{
			"employer": "PlayAll",
			"title": "Python C++ Game Mods Developer",
			"dates": "2007.05 – 2008.03",
			"location": "remote, Germany",
			"description" : "Developed several mods to control game flow for Q4, HL family, HL2 family, " +
							"COD 1, COD2, UT2004, Linux Kernel Module on C and user mode management " +
							"application on Python to protect server side components."
		},
		{
			"employer": "CheckPoint BelRus",
			"title": "C++ Developer",
			"dates": "2005.01 – 2007.08",
			"location": "Minsk, Belarus",
			"description" : "The project was connected with Linux Kernel module development and debugging" +
							" in UML environment with crash dump analysis."
		},
		{
			"employer": "Intetics",
			"title": "C++ Developer",
			"dates": "2003.09 – 2004.12",
			"location": "Minsk, Belarus",
			"description" : "Developed the system level security application for Win32 OS using MSVC 6.0." +
							" My tasks included driver management application plug-in, user interface and" +
							" communication mechanism between LSP provider and driver. "
		}
	],

	"display": function() {
		for(var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var job_info = work.jobs[job];
			var experience = HTMLworkEmployer.replace("%data%", job_info.employer);
			experience += HTMLworkTitle.replace("%data%", job_info.title);
			experience += HTMLworkLocation.replace("%data%", job_info.location);
			experience += HTMLworkDates.replace("%data%", job_info.dates);
			experience += HTMLworkDescription.replace("%data%", job_info.description);
			$(".work-entry:last").append(experience);
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Behavioral Cloning",
			"dates": 2017,
			"description": 'Build a convolution neural network in Keras that predicts steering angles from images',
			"images": ["images/bh.png"],
			"url": "https://github.com/denismoroz/carnd-p3-behavioral-cloning"
		},
		{
			"title": "WayHome",
			"dates": 2016,
			"description": 'How many time have you asked yourself where your friends or family are at the moment?',
			"images": ["images/wh.png"],
			"url": "https://play.google.com/store/apps/details?id=com.pdev7.wayhome"
		},
		{
			"title": "ClackBoard",
			"dates": 2014,
			"description": "ClackBoard is a simple casual game. Tap on cell that is located near cell with" +
							" the same color and they will dissapear. ",
			"images": ["images/cb.png"],
			"url": "http://market.android.com/details?id=com.doandroid.clackboard"
		},
		// {
		// 	"title": "BreakAlarm",
		// 	"dates": 2013,
		// 	"description": "Minimal countdown timer to control work flow. I realize that I work more " +
		// 					"productive if I make breaks each 45 minutes.",
		// 	"images": ["images/ba_clock.png"],
		// 	"url": "http://market.android.com/details?id=com.doandroid.break_alarm"
		// }
	],

	"display": function() {

		$("#projects").append(HTMLprojectsListStart);

		for (var prj_i in projects.projects) {
			$("#projects-list").append(HTMLprojectStart);

			var project_info = projects.projects[prj_i];

			var p = HTMLprojectTitle.replace("%data%", project_info.title).replace("#", project_info.url);
			p += HTMLprojectDates.replace("%data%", project_info.dates);
			p += HTMLprojectDescription.replace("%data%", project_info.description);
			for (var image in project_info.images) {
				p += HTMLprojectImage.replace("%data%", project_info.images[image]);
			}
			$(".project-entry:last").append(p);
		}
	}
};

var education =
{
	"schools": [
		{
			"name": "Belarusian State University of Informatics and Radio-Electronics",
			"location": "Minsk, Belarus",
			"dates": 2003,
			"degree": "Major in Informational Security and Artificial Intelligence",
			"majors": ["MS of computer science", ],
			"url": "http://www.bsuir.by/"
		}
	],

	"onlineCourses": [
		{
			"title": "Self-Driving Car Engineer",
			"school": "Udacity",
			"date": 2017,
			"url": "https://www.udacity.com/drive",
			"state": "In progress"
     	},
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
			"certificate": "http://denismoroz.github.io/resume/udacity-fend-2015.pdf"
     	},
		{
			"title": "M101P MongoDB for Developers",
			"school": "MongoDB University",
			"date": 2014,
			"url": "https://university.mongodb.com/courses/M101P/about",
			"certificate": "http://education.mongodb.com/downloads/certificates/636b5cdfd6e4489aaef246084937949c/Certificate.pdf"
     	}
	],

	"display": function() {
		for (var s in education.schools) {
			$("#education").append(HTMLschoolStart);

			var school_info = education.schools[s];

			var school = HTMLschoolName.replace("%data%", school_info.name).replace("#", school_info.url);
			school += HTMLschoolDegree.replace("%data%", school_info.degree);
			school += HTMLschoolDates.replace("%data%", school_info.dates);
			school += HTMLschoolLocation.replace("%data%", school_info.location);
			school += HTMLschoolMajor.replace("%data%", school_info.majors.join(", "))

			$(".education-entry:last").append(school);
		}

		$("#education").append(HTMLonlineClasses);

		for (var oc in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var course_info = education.onlineCourses[oc];

			var course = HTMLonlineTitle.replace("%data%", course_info.title).replace("#", course_info.url);
			course += HTMLonlineSchool.replace("%data%", course_info.school);
			course += HTMLonlineDates.replace("%data%", course_info.date);

			if (course_info.certificate != undefined) {
				course += HTMLonlineURL.replace("%data%", "Certificate").replace("#", course_info.certificate);
			}
			else {
				course += HTMLonlineState.replace("%data%", course_info.state)
			}

			$(".education-entry:last").append(course);
		}
	}
};

function initGMap() {
	$("#mapDiv").append(googleMap);
};

bio.display();
work.display();
projects.display();
education.display();

initGMap();
