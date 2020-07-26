export default () => {
	let params = (new URL(document.location)).searchParams;
	let page = params.get("p");
	return page;
}
