# Readings: APIs

## Content

- [Web API design](#web-api-design)
- [Reference](#reference)

***

# Web API design

REST is an architectural style for creating hypermedia-based distributed networks. It isn't bound to HTTP and isn't relying on the underlying protocol. REST-compliant schemes are distinguished by their statelessness and separation of client and server considerations.

It is not necessary for a resource to be dependent on a single physical data object. Avoid making APIs that actually replicate a database's internal configuration. REST is used to model entities and the operations that can be performed on them by an application.

Any API that takes more than one call to execute a single, common procedure is known as a chatty API. The load increases as the number of requests increases. Try to stay away from "chatty" web APIs that reveal a lot of limited tools. Denormalize the data instead, and group similar knowledge into larger tools.

Hypermedia as the Engine of Application State (HATEOAS) is an acronym for Hypermedia as the Engine of Application State. Contains only the information needed to move from one atate to another. MIME (Multipurpose Internet Mail Extensions) is a medium that expands the format of emails.

[Back to Content](#content)

***

## Reference

## 1

dragon119 (2018). API design guidance - Best practices for cloud applications. [online] Microsoft.com. Available at: https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design [Accessed 5 May 2021].

***

[⇐ Home Page](../../README.md)
