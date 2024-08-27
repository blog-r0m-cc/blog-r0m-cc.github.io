const WEBSITE_ITEM_HTML = `
<div class="website col-12 col-sm-6 col-lg-4 col-xl-3">
	<div class="card">
		<div class="card-header">
			{{favicon}}
			<b>{{url}}</b>
		</div>
		<div class="card-body">
		<h5 class="card-title">{{name}}</h5>
			<p class="card-text">{{desc}}</p>
			<a href="https://{{url}}/" class="btn btn-primary">Ziyaret Et</a>
		</div>
	</div>
</div>
`;

for (let i = 0; i < WEBSITE_LIST.length; i++) {
	const website = WEBSITE_LIST[i];
	$(".website-list").append(WEBSITE_ITEM_HTML.replaceAll("{{url}}", website.url)
		.replaceAll("{{name}}", website.name)
		.replaceAll("{{desc}}", website.desc)
		.replaceAll("{{favicon}}", !website.favicon ? "" : `<img class="favicon" src="https://${website.url}/${website.favicon}" />`)
	);
}

