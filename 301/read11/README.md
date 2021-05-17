# Readings: Authentication

## Content

- [What is OAuth? How the open authorization framework works](#what-is-oauth-how-the-open-authorization-framework-works)
- [Authentication and Authorization Flows](#authentication-and-authorization-flows)
- [Reference](#reference)

***

# What is OAuth? How the open authorization framework works

OAuth allows you to visit various websites from several machines with a single physical sign-on. It's a significant step forward in the battle against distributed information protection. Users can log in using a password, phone number, digital identification, biometric identification, two-factor authentication (2FA), or multi-factor authentication (MFA) with OAuth (MFA)

[Back to Content](#content)

## OAuth Definition

OAuth is an open-source authorization system or protocol. It explains how unrelated servers and services can grant authenticated access to their assets in a secure manner.

[Back to Content](#content)

## OAuth History

OAuth was first published as an open standard in 2010 as RFC 5849, and it soon gained popularity. RFC 6749, version 2.0 of OAuth, was published in 2012. Early adopters include Amazon, Facebook, Instagram, LinkedIn, Microsoft, Netflix, and Paypal.

[Back to Content](#content)

## OAuth Examples

The most basic example of OAuth is when you try to log into a website and it provides one or more options to log in with the login credentials of another website or service. Then you choose the button that is connected to the other.

Auth can be used to connect files stored in the cloud with email systems that are unrelated to one another. Behind the scenes, OAuth may be used to enable the email system to authenticate and browse to the secure files with ease. Another example is a consumer printing pictures from an unrelated web site using a third-party printing service.

In any event, the end-user is using two or three resources on a single transaction. The services and authentication vendor must also accept the correct version of OAuth for OAuth to function.

[Back to Content](#content)

## OAuth Explained

Almost all OAuth cases involve two unrelated locations or programs attempting to achieve a goal. For the completed transaction to be approved, all three must collaborate and obtain several approvals.

OAuth is mostly concerned with authorization rather than authentication. Many people mistakenly believe that OAuth stands for open authentication, but it's better to think of it as open authorization.

OAuth is identical to a car's valet card, which allows a valet to drive and park a car temporarily. It does not, like a normal key, give the holder absolute, unrestricted access. OAuth 2.0 is a collection of guidelines, not a protocol (like version 1.0). It'd be the equivalent of all the car companies deciding to how valets can automatically order, collect, and use valet keys, as well as how they would appear in general.

[Back to Content](#content)

# Authentication and Authorization Flows

Auth0 authenticates users and obtains their permission to access secure services using the OpenID Connect (OIDC) Protocol and the OAuth 2.0 Authorization Framework. You can easily support various flows in your own apps and APIs with Auth0. Server-side, smartphone, laptop, client-side, and machine-to-machine scenarios are also supported.

[Back to Content](#content)

## Authorization Code Flow with Proof Key for Code Exchange (PKCE)

The Authorization Code Flow can be used by mobile and native applications during authentication, but it requires additional protection. Furthermore, single-page users face unique challenges. To address these issues, OAuth 2.0 includes a Proof Key for Code Exchange version of the Authorization Code Flow (PKCE).

[Back to Content](#content)

## Implicit Flow with Form Post

The Implicit Flow is provided by OAuth 2.0 and is intended for Public Clients or programs that are unable to safely store Client Secrets. It offers simplified workflows when used for Form Post response mode.

[Back to Content](#content)

## Hybrid Flow

An application should have direct access to an ID token while also ensuring that access and refresh tokens are retrieved in a stable and protected manner. This is helpful in cases where the program requires immediate access to user information.

[Back to Content](#content)

## Client Credentials Flow

Instead of a customer, the system authenticates and authorizes machine-to-machine (M2M) programs such as CLIs, daemons, or utilities running on the backend. Typical authentication systems such as username + password or a combination of username + password or a combination of username + password or a combination of username

[Back to Content](#content)

## Device Authorization Flow

Rather than authenticating the user directly, input-constrained systems that connect to the internet require the user to go to a connection on their computer or smartphone. This prevents a bad user experience for devices that don't have a simple way to connect.

[Back to Content](#content)

## Resource Owner Password Flow

The Resource Owner Password Flow can be used by highly trusted programs. It usually uses an integrated method to seek users' passwords (username and password).

[Back to Content](#content)

***

## Reference

### 1
Grimes, R.A. (2019). What is OAuth? How the open authorization framework works. [online] CSO Online. Available at: https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html [Accessed 17 May 2021].

### 2
Auth0 (2013). Authentication and Authorization Flows. [online] Auth0 Docs. Available at: https://auth0.com/docs/flows [Accessed 17 May 2021].

***

[⇐ Home Page](../../README.md)
