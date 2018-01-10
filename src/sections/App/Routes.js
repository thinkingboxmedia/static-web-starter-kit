// Sections.
import Home from 'src/sections/Home';
import Test from 'src/sections/Test';

export const Routes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/test',
		component: Test,
		exact: false,
	},
];

// module.exports = {
// 	Routes,
// };
