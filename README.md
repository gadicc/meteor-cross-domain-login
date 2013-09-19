# cross-domain-login for Meteor

By default, even if your Meteor app is accessible from multiple
domains (or subdomains of a single domain), each hostname will
require a separate login (albeit with the same login credentials).

The cross-domain-login package will allow a user to access your
app through any available hostname/domain and remain logged in
throughout.  There is slightly more of a delay than usual since
an extra http request is required to remain within the confines
of browser security.

This is PROOF OF CONCEPT, not a final package.
It works, but the intended audience is other
developers, and should not be used on production websites.
(yet)

Notably:

* Security policies are in place but have not been reviewed
* Only retrieves the login data from ROOT_URL, and does not
(yet) save logins from other hosts back to the root.
* Always retrieves if on different domain, not only if
the login credentials are missing.
* I finally have a reason to implement callbacks in
meteor-headers :)  Coming soon.
