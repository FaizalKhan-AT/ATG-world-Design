import forest from './Assets/images/forest.jpg'
import kamra from './Assets/people/sharma.png'
import wall from './Assets/images/wall.png'
import sara from './Assets/people/sara.png'
import car from './Assets/images/car.png'
import ronal from './Assets/people/ronal.png'
import joseph from './Assets/people/joseph.png'
import leisure from './Assets/groups/leisure.png'
import activism from './Assets/groups/activism.png'
import mba from './Assets/groups/mba.png'
import philosophy from './Assets/groups/philosophy.png'

export const data = [
	{
		type: '✍️ Article',
		title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
		description: "I've worked in UX for the better part of a decade.From now on ,I plan to rei... ",
		username: 'Sarthak Kamra',
		post_views: '1.4k',
		post_image: forest,
		profile_image:kamra ,
	},
	{
		type: '🔬 Education',
		title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
		description: "I've worked in UX for the better part of a decade.From now on ,I plan to rei...",
		username: "Sarah West",
		post_views:"1.4k" ,
		post_image: wall,
		profile_image: sara,
	},
	{
		type: '📅 Meetup',
		title: "Finance & Investment Elite Socil Mixer @Lujiazui",
		date: "Fri, 12 Oct, 2018",
		place: "Ahmedabad, India",
		username: "Ronal Jones",
		post_views: '1.4k',
		button_text: "Visit Website",
		post_image: car ,
		profile_image: ronal,
	},
	{
		type: '💼 Job',
		title: "Software Developer",
		event: "Innovaccer Analytics Private Ltd.",
		place:"Noida, India",
		username: "Joseph Gary",
		post_views: '1.4k',
		button_text: "Apply on Timesjobs",
		profile_image: joseph,
	}
];

export const groups = [
	{
		group_name:'Leisure',
		group_profile: leisure,
		is_following:false
	},
	{
		group_name:'Activism',
		group_profile: activism,
		is_following:false
	},
	{
		group_name:'MBA',
		group_profile: mba,
		is_following:false
	},
	{
		group_name:'Philosophy',
		group_profile: philosophy,
		is_following:false
	}

];
export const user = {
	username:'Siddharth Goyal',
	profile_image:joseph
}