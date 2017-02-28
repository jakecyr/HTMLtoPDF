$("#html-input").on("keyup", function(){
	$("#right-col").html( $("#html-input").val() );
});

function createPDF(){
	doc = new jsPDF('p', 'mm');

	html2canvas($("#right-col"), {background: "white"}).then(function(canvas) {
		// only jpeg is supported by jsPDF
		var imgData = canvas.toDataURL("image/jpeg", 0.6);
		doc.addImage(imgData, 'PNG', 5, 20);

		doc.save("export-html.pdf");
	});
}