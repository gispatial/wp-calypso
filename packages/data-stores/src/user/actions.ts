/**
 * Internal dependencies
 */
import {
	CurrentUser,
	CreateAccountParams,
	NewUserErrorResponse,
	NewUserSuccessResponse,
	GetAccountTypeParams,
	GetAccountTypeResponse,
	GetAccountTypeError,
} from './types';

export const fetchCurrentUser = () => ( {
	type: 'FETCH_CURRENT_USER' as const,
} );

export const receiveCurrentUser = ( currentUser: CurrentUser ) => ( {
	type: 'RECEIVE_CURRENT_USER' as const,
	currentUser,
} );

export const receiveCurrentUserFailed = () => ( {
	type: 'RECEIVE_CURRENT_USER_FAILED' as const,
} );

export const fetchNewUser = () => ( {
	type: 'FETCH_NEW_USER' as const,
} );

export const receiveNewUser = ( response: NewUserSuccessResponse ) => ( {
	type: 'RECEIVE_NEW_USER' as const,
	response,
} );

export const receiveNewUserFailed = ( error: NewUserErrorResponse ) => ( {
	type: 'RECEIVE_NEW_USER_FAILED' as const,
	error,
} );

export const fetchAccountType = ( usernameOrEmail: string ) => ( {
	type: 'FETCH_ACCOUNT_TYPE' as const,
	params: { usernameOrEmail },
} );

export const recieveAccountType = ( response: GetAccountTypeResponse ) => ( {
	type: 'RECIEVE_ACCOUNT_TYPE' as const,
	response,
} );

export const recieveAccountTypeFailed = ( error: GetAccountTypeError ) => ( {
	type: 'RECIEVE_ACCOUNT_TYPE_FAILED' as const,
	error,
} );

export function* createAccount( params: CreateAccountParams ) {
	yield fetchNewUser();
	try {
		const newUser = yield {
			type: 'CREATE_ACCOUNT' as const,
			params,
		};
		return receiveNewUser( newUser );
	} catch ( err ) {
		return receiveNewUserFailed( err );
	}
}

export function* getAccountType( params: GetAccountTypeParams ) {
	try {
		console.log( 'getAccountType' );

		const accountType = yield fetchAccountType( params.usernameOrEmail );
		console.log( 'recieveAccountType' );
		return recieveAccountType( accountType );
	} catch ( err ) {
		console.log( 'recieveAccountTypeFailed' );

		return recieveAccountTypeFailed( err );
	}
}

export type Action = ReturnType<
	| typeof fetchCurrentUser
	| typeof receiveCurrentUser
	| typeof receiveCurrentUserFailed
	| typeof fetchNewUser
	| typeof receiveNewUser
	| typeof receiveNewUserFailed
	| typeof fetchAccountType
	| typeof recieveAccountType
	| typeof recieveAccountTypeFailed
>;
