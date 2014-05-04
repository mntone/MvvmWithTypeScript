/// <reference path="Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="Scripts/linq.d.ts" />

class IndexPageViewModel
{
	users: KnockoutObservableArray<User> = ko.observableArray( [] );
	selectedUser: KnockoutObservable<User> = ko.observable( null );

	avarageAge: KnockoutComputed<number> = ko.computed(
		() => this.users().length > 0 ? Enumerable.from( this.users() ).average( user => user.age() ) : 0 );
	minimumAge: KnockoutComputed<number> = ko.computed(
		() => this.users().length > 0 ? Enumerable.from( this.users() ).min( user => user.age() ) : 0 );
	maximumAge: KnockoutComputed<number> = ko.computed(
		() => this.users().length > 0 ? Enumerable.from( this.users() ).max( user => user.age() ) : 0 );

	load()
	{
		this.users( DataClient.load() );
	}

	store()
	{
		DataClient.store( this.users() );
	}

	addUser()
	{
		var newUser = new User( "", 0 );
		this.users.push( newUser );
		this.selectedUser( newUser );
	}

	removeUser( user: User )
	{
		this.users.remove( user );
	}
}