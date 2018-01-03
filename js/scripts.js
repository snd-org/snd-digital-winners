$(document).ready(function() {
	var finalHTML = [];

	var sortedWinners = _.sortBy(winners, "Number");
	$(sortedWinners).each(function(){

		var html = `<div class="row">
				<div class="winner">
					<h3 class="` + this["Award"].toLowerCase().replace("world's ", "") + `">` + this["Award"] + `</h3>
					<h2><a href="` + this["Link"] + `">` + this["Title of Work"] + `</a></h2>
					<div class="category">` + this["Category"] + `</div>
					<div class="publication">` + this["Publication"] + `</div>
					<div class="judges"><strong>What the Judges Said: </strong>“` + this["Judges"] + `”</div>
					<div class="read"><a href=“` + this["SND Post"] + `”>Read more.</a></div>
					<div class="image-placeholder"></div>
				</div>
			</div>`

		finalHTML.push(html);
	})

  $('.pieces').html(finalHTML.join(""));
});