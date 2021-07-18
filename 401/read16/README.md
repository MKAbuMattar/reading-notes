# Read: 16 - Spring Authentication

## Content

## Spring Security Architecture

Authentication and Access Control
* Two problems of app security: authentication and authorization
* Authentication - AuthenticationManager is the main strategy interface for authentication. In its authenticate() function, AuthenticationManager can accomplish one of three things: If it can verify that the input represents a genuine principal, it will return an Authentication. If it feels the input represents an invalid principal, it will throw an AuthenticationException. If it is unable to make a decision, it will return null. AuthenticationException is a runtime exception that is generally handled in a generic fashion by an application, depending on its style or purpose. Authentication Managers Can Be Customized The most popular configuration assistance provided by Spring Security is AuthenticationManagerBuilder, which allows you to easily set up basic authentication manager functionality in your application. AuthenticationManagerBuilder - supporting in-memory, JDBC, or LDAP user data, as well as creating a custom UserDetailsService
* Authorization or Access Control
* The AccessDecisionManager is the primary approach for authorization. The framework provides three implementations, each of which delegate to a chain of AccessDecisionVoter objects.
* An Authentication and a secure Object with ConfigAttributes are taken into account by AccessDecisionVoter.

***

Web Security

Servlet Filters are used in the web layer of Spring Security. A single HTTP request client submits a request to the application, and the container determines which filters and servlets apply to it based on the path of the request URI. Filters create a chain, and the order in which they are applied is crucial, as a servlet can only handle one request at a time. If a filter wishes to handle the request directly, it can veto the remainder of the chain, and it can even change the request or response used by downstream filters and servlets. FilterChainProxy is the concrete kind of Spring Security, which is implemented as a single Filter in the chain. There are more filters within the single filter. Another layer of indirection in the security filter, DelegatingFilterProxy, which does not have to be a Spring @Bean, is generally deployed in the container as a DelegatingFilterProxy. There can be numerous filter chains, all of which are unknown to the container and are maintained by Spring Security in the same top-level FilterChainProxy.


***

[⇐ Home Page](../../README.md)