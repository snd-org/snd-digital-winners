$(document).ready(function() {
	var finalHTML = [];

	var sortedWinners = _.sortBy(winners, "awardID");
	$(sortedWinners).each(function(){

		var imageHTML = (this["image"] == "TRUE") ? `<div class="image"><a href="` + this["Link"] + `"><img src="images/` + this["awardID"] + `.png"></a></div>` : "";

		var html = `<div class="row">
				<div class="winner cf image-`+ this["image"].toLowerCase() +`">
					<h2><a href="` + this["Link"] + `">` + this["Title of Work"] + `</a></h2>
					<h3 class="` + this["Award"].toLowerCase().replace("world's ", "") + `">` + this["Award"] + `</h3>
					`+ imageHTML +`
					<div class="category">` + this["Category"] + `</div>
					<div class="publication">` + this["Publication"] + `</div>
					<div class="judges"><strong>What the Judges Said: </strong>“` + this["Judges"] + `”</div>
					<div class="read"><a href="` + this["SND Post"] + `">Read the SND post.</a></div>
				</div>
			</div>`

		finalHTML.push(html);
	})

  $('.pieces').html(finalHTML.join(""));
});