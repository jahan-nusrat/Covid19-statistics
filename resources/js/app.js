/* fetch(`https://covid19-monitor-pro.p.rapidapi.com/coronavirus/cases_by_days_by_country.php?country=country`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "covid19-monitor-pro.p.rapidapi.com",
			"x-rapidapi-key": "7e269ec140msh8a5df9cfc21b4b4p1c1e3ejsn9aba26afc6e0"
		}
	}) */

const valueColor = document.querySelectorAll('.value');
let colorArr = ['#ffffff', '#009688', '#f44336']
for (let i = 0; i < valueColor.length && i < colorArr.length; i++) {
	valueColor[i].style.color = colorArr[i]
}