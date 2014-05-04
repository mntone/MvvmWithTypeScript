/// <reference path="Scripts/typings/knockout/knockout.d.ts" />

window.onload = () =>
{
	var viewModel = new IndexPageViewModel();
	ko.applyBindings( viewModel );
	viewModel.load();
};