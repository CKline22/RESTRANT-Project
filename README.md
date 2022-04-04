# RESTRANT-Project
REST-Rant is an app where users can review restaurants.

| Method | path | purpose |
|--------|------|---------|
| Get | / | Home page |
| Get | /places | Places index page |
| Post | /places | Create a new place |
| Get | /places/new | From page for creating new place |
| Get | /places/:id | Details about a places |
| Put | /places/:id | Update a places |
| Get | /places/:id/edit | From page for editing |
| Delete | /places/:id/edit | Delete a place |
| Post | /places/:id/rant | Create a rant (comment) |
| Delete | /places/:id/rant/:rantId | Deletes a rant (comment) |
| Get | * | 404 page (any undefined route) |