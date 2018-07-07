var API_ENDPOINT = "https://1cadhsexxd.execute-api.ap-northeast-1.amazonaws.com/Dev"

document.getElementById("searchButton").onclick = function(){

	$.ajax({
				url: API_ENDPOINT + '?carId=*',
				type: 'GET',
				success: function (response) {

					$('#cars tr').slice(1).remove();

	        jQuery.each(response, function(i,data) {

						$("#cars").append("<tr> \
								<td>" + data['id'] + "</td> \
								<td>" + data['nama_pemilik'] + "</td> \
								<td>" + data['plate_no'] + "</td> \
								<td>" + data['merk'] + "</td> \
								<td>" + data['model'] + "</td> \
	                            <td>" + data['warna'] + "</td> \
	                            <td>" + data['nilai_jual'] + "</td> \
	                            <td>" + data['milik_ke'] + "</td> \
	                            <td>" + data['status_pajak'] + "</td> \
	                            <td>" + data['location']['lat'] + "</td> \
                                <td>" + data['location']['lon'] + "</td> \
	                            <td><a href=" + data['url'] + ">Link</a></td> \
                                <td>" + data['timestamp'] + "</td> \
								</tr>");
	        });
				},
				error: function () {
						alert("error");
				}
		});
}
