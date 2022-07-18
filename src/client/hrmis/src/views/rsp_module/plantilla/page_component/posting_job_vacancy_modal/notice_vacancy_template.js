export const noticeOfVacancyTemplate = (data) => {
	let num_dutiesandresponsibilities = data.dutiesandresponsibilities.length;
	let str_html =
		'<div class="tg-wrap" style="page-break-after: always">' +
		'<table class="tg" style="table-layout: fixed; width:578px">' +
		"<colgroup>" +
		'<col style="width: 28px">' +
		'<col style="width: 22px">' +
		'<col style="width: 22px">' +
		'<col style="width: 25px">' +
		'<col style="width: 23px">' +
		'<col style="width: 26px">' +
		'<col style="width: 32px">' +
		'<col style="width: 58px">' +
		'<col style="width: 285px">' +
		'<col style="width: 29px">' +
		"</colgroup>" +
		"<tbody>" +
		"<tr>" +
		'<td class="tg-wp8o" colspan="10"><span style="font-weight:bold">NOTICE OF VACANCY</span></td>' +
		"</tr>" +
		"<tr>" +
		'<td class="tg-0lax" colspan="10"><br></td>' +
		"</tr>" +
		"<tr>" +
		'<td class="tg-73oq" colspan="10" style="text-align: justify">' +
		"The Department of Science and Technology – " +
		data.office.office_agency.agn_name +
		"qualified applicants to fill up the position of One (1)" +
		'<span style="font-weight:bold">' +
		data.pos_title +
		" (SG-" +
		data.pos_salary_grade +
		")" +
		"Item No. " +
		data.itm_no +
		'</span> under the <span style="font-weight:bold">' +
		data.office.ofc_name +
		"</span>. Applicants must meet the following requirements of the position:</td>" +
		"</tr>" +
		"<tr>" +
		'<td class="tg-73oq" colspan="10"><br></td>' +
		"</tr>" +
		"<tr>" +
		'<td class="tg-73oq" colspan="10">' +
		'<span style="font-weight:bold;text-decoration:underline">' +
		"Minimum Requirements" +
		"</span>" +
		"</td>" +
		"</tr>" +
		"<tr>" +
		'<td class="tg-73oq" colspan="3">Education</td>' +
		'<td class="tg-73oq" colspan="1" style="width: fit-content">:</td>' +
		'<td colspan="6">' +
		data.education +
		"</td>" +
		"</tr>" +
		"<tr>" +
		'<td class="tg-73oq" colspan="3">Experience</td>' +
		'<td class="tg-73oq" colspan="7">:' +
		data.experience +
		"</td>" +
		"</tr>" +
		"<tr>" +
		'<td class="tg-73oq" colspan="3">Training</td>' +
		'<td class="tg-73oq" colspan="7">: ' +
		data.training +
		"</td>" +
		"</tr>" +
		"<tr>" +
		'<td class="tg-73oq" colspan="3">Eligibility</td>' +
		'<td class="tg-73oq" colspan="7">: ' +
		data.eligibility +
		"</td>" +
		"</tr>" +
		"<tr>" +
		'<td class="tg-73oq" colspan="3">Job Description </td>' +
		'<td class="tg-73oq" colspan="7">:</td>' +
		"</tr>";

	let dutiesandresponsibilities = data.dutiesandresponsibilities;
	for (let key in dutiesandresponsibilities) {
		let value = dutiesandresponsibilities[key];
		str_html +=
			"<tr>" +
			'<td class="tg-73oq" style="width: fit-content"></td>' +
			'<td class="tg-73oq tg-custom" >' +
			value.dty_itm_order +
			".</td>" +
			'<td colspan="8"> ' +
			value.dty_itm_desc +
			(key < num_dutiesandresponsibilities - 1
				? ";"
				: "." + key == num_dutiesandresponsibilities - 2
				? " and"
				: "") +
			"</td>" +
			"</tr>";
	}
	str_html +=
		"<tr>" +
			'<td class="tg-73oq" colspan="10">Remarks:</td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq tg-custom" style="text-align: justify" colspan="9">' +
			"With at least one (1) year of work experience in government procurement procedures preferred; " +
			"With a working knowledge of the provisions of or has attended relevant training on RA 9184 or the " +
			"Government Procurement Reform Act, including government accounting and auditing rules and regulations " +
			"preferred.</td>" +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"><br></td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq" colspan="10" style="text-align: justify">' +
			"Interested and qualified applicants may submit their requirements personally, through the mail, or online" +
			'<span style="font-weight:bold;text-decoration:underline"> on or before ' +
			data.formatted_date_submitted ??
		"" +
			"</span>. For online applications, it is expected that original copies will " +
			"be presented to the Personnel Division for verification within 10 calendar days." +
			'<span style="text-decoration:underline">' +
			"Only those applications with complete requirements as enumerated below shall be entertained" +
			"</span>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>" +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq" style="padding-top: 10px" colspan="10"></td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq tg-custom">1.</td>' +
			'<td class="tg-73oq" colspan="8">Letter of Application</td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq tg-custom">2.</td>' +
			'<td class="tg-73oq" colspan="8">' +
			'<span style="text-decoration:underline">' +
			"Personal Data Sheet</span> (CSC Form 212, Revised 2017) with latest passport-sized ID picture, " +
			'name tag, <span style="text-decoration:underline">and Work Experience Sheet' +
			"</span>" +
			"</td>" +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq tg-custom">3.</td>' +
			'<td class="tg-73oq" colspan="8">Photocopy of Diploma</td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq tg-custom">4.</td>' +
			'<td class="tg-73oq" colspan="8">Photocopy of Transcript of Records</td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq tg-custom">5.</td>' +
			'<td class="tg-73oq" colspan="8">' +
			'<span style="text-decoration:underline">Authenticated</span> Certificate of Eligibility/Board Exam' +
			"</td>" +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq tg-custom">6.</td>' +
			'<td class="tg-73oq" colspan="8">Certificate/s of Trainings/Seminars/ and Awards</td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq tg-custom">7.</td>' +
			'<td class="tg-73oq" colspan="8">Performance Evaluation Rating in the last rating period or its equivalent</td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq tg-custom">8.</td>' +
			'<td class="tg-73oq" colspan="8">Certificate/s of Previous Employment with No Pending Administrative Charge</td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq tg-custom">9.</td>' +
			'<td class="tg-73oq" colspan="8">Copy of <span style="text-decoration:underline">valid</span> NBI Clearance</td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq" colspan="10"><br></td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq" colspan="10">Please send your letter of application with complete documentation to:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq" colspan="10"><br></td>' +
			"</tr>" +
			" <tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-mcqj" colspan="9">' +
			data.letter_head.letter_office +
			"</td>" +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq" colspan="9">' +
			data.letter_head.letter_company +
			"</td>" +
			"</tr>" +
			"<tr>" +
			' <td class="tg-73oq"></td>' +
			'<td class="tg-73oq" colspan="9">' +
			data.letter_head.letter_address +
			"</td>" +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq" colspan="9">' +
			data.letter_head.letter_email +
			"</td>" +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"><br></td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"><br></td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"><br></td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq"></td>' +
			'<td class="tg-73oq"></td>' +
			'<td colspan="4" class="tg-mqa1"> ' +
			"<b>" +
			data.memo_from_name.memo_name +
			"</b><br>" +
			data.memo_from_name.memo_position +
			", " +
			data.memo_from_name.memo_position +
			"</td>" +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"><br><br></td>' +
			"</tr>" +
			"<tr>" +
			' <td class="tg-73oq" style="text-align: justify" colspan="10">' +
			" As an advocate of the Equal Employment Opportunity Principle (EEOP), " +
			"the DOST-Central Office encourages and welcomes all applicants regardless of age," +
			"religion, political affiliation including persons with disability, members of indigenous " +
			"communities, and those from any sexual orientation and gender identities. For specific guidelines, " +
			"please see attached " +
			'<span style="text-decoration:underline;color:#2C90C2">Annex</span>.' +
			"</td>" +
			"</tr>" +
			"<tr>" +
			'<td class="tg-73oq"><br></td>' +
			'<td class="tg-73oq"><br></td>' +
			'<td class="tg-73oq"><br></td>' +
			'<td class="tg-73oq"><br></td>' +
			'<td class="tg-73oq"><br></td>' +
			'<td class="tg-73oq"><br></td>' +
			'<td class="tg-73oq"><br></td>' +
			"</tr>" +
			"<tr>" +
			'<td class="tg-mcqj" colspan="10">Date Posted: <span style="text-decoration:underline">' +
			data.formatted_date_submitted +
			"</span></td>" +
			"</tr>" +
			"</tbody>" +
			"</table>" +
			"</div>";

	return {
		content: str_html,
		deadline: data.deadline_formatted,
	};
};