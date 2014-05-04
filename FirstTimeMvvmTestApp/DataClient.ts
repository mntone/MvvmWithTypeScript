/// <reference path="Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="Scripts/linq.d.ts" />

class DataClient
{
	static data: string = '[{"name":"太郎", "age": 12}, {"name":"花子", "age": 11}]';

	static load()
	{
		var json = JSON.parse( this.data );
		return Enumerable.from( json ).select( ( user: any ) => new User( user.name, user.age ) ).toArray();
	}

	static store( value: User[] )
	{
		this.data = JSON.stringify( Enumerable.from( value ).select( user => { return { name: user.name, age: user.age }; }).toArray() );
		alert( "stored: " + this.data );
	}
}