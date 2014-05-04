/// <reference path="Scripts/typings/knockout/knockout.d.ts" />

class User
{
	name: KnockoutObservable<string> = ko.observable( "" );
	age: KnockoutObservable<number> = ko.observable( 0 );

	constructor( name: string, age: number )
	{
		this.name( name );
		this.age( age );
	}

	toString()
	{
		return this.name() + " (" + this.age() + ")";
	}
} 