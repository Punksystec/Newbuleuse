
function HEADER(){
	document.write("<header class='w3-container w3-center w3-padding-32'>");
	document.write("<h1><b>Newbuleuse Blog</b></h1>");
	document.write("<p>Welcome to the blog of <span class='w3-tag'>Newbuleuse.com</span></p>");
	//document.write("<link rel='canonical' href='https://www.w3schools.com/w3css/tryw3css_templates_blog.htm' />");
	console.log("HEADER done");
}

function READ_MORE(id){
	document.write("<div class='w3-row'>");
	document.write("<div class='w3-col m8 s12'>");
	document.write("<p><button class='w3-btn w3-padding-large w3-white w3-border w3-hover-border-black' ");
	document.write(" OnClick=\"javascript:READ_MORE_OnClick('"+id+"');\">");
	document.write("<b>READ MORE &raquo;</b></button></p>");
	document.write("</div>");
	document.write("</div>");
	console.log("READ_MORE done for "+id);
}
function BACK_BLOG(){
	document.write("<div class='w3-row'>");
	document.write("<div class='w3-col m8 s12'>");
	document.write("<p><button class='w3-btn w3-padding-large w3-white w3-border w3-hover-border-black' ");
	document.write(" OnClick=\"javascript:READ_MORE_OnClick('myBlog.html');\">");
	document.write("<b>BACK TO BLOG</b></button></p>");
	document.write("</div>");
	document.write("</div>");
	console.log("READ_MORE done for "+id);
}
function FOOTER(prevy,nexty){
	document.write("<footer class='w3-container w3-dark-grey w3-padding-32 w3-margin-top'>");
	if (prevy==""){
		document.write("<button class='w3-btn w3-disabled w3-padding-large w3-margin-bottom'>Previous</button>");
	}else{
		document.write("<button class='w3-btn w3-padding-large w3-margin-bottom' ");
		document.write(" OnClick=\"javascript:READ_MORE_OnClick('"+prevy+"');\">Previous</button>");
	}
	if (nexty==""){
		document.write("<button class='w3-btn w3-disabled w3-padding-large w3-margin-bottom'>Next &raquo;</button>");
	}else{
		document.write("<button class='w3-btn w3-padding-large w3-margin-bottom' ");
		document.write(" OnClick=\"javascript:READ_MORE_OnClick('"+nexty+"');\">Next &raquo;</button>");
	}
	document.write("<p>Powered by <a href='https://www.w3schools.com/w3css/default.asp' target='_blank'>w3.css</a></p>");
	document.write("</footer>");
	console.log("FOOTER done");
}
