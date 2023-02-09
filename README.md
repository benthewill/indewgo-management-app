# InDewGo
### A parking lot management web-app aiming to be the single source of truth for information for all parking lots in Indigo Park - BC.
## Features
At the moment, it is intended to have the following features before shipping the first beta release to Guest Services management:

- Card-based view of parking lots and their relevant details. 
- Easily insert or update new parking lots with their relevant details. 
- Easily accessible and robust search filters for various elements for quick lookup in the immediate events of inquiry, internal and external. 
- Simple user authentication with admin and agent roles. 
- Notification Board for updates and guest services requesting permissions for certain parking lot rate inquiry and application. 
- Automatic generation of documents and e-mail templates. Fields will be available and/or editable so that guest services can just fill relevant information of the customer's details:
  - Welcome Letters 
  - Rates Inquiry Templates 
  - Monthly Parking Contracts 
  - Cancellation E-mail 
  - Notice Disputes:
    - Reduction Response 
    - Void Response 
    - Lot-specific Memo 
    - Future Release features:
- API connection to:
  - Parking Lot availabilities 
  - Parking Notices API 
  - Daily Payments and Coupons from PbP, IndigoApp, Ventek 
  - PayMachine Details from Ventek 
- Personalized and easily-editable dashboard with blocks relevant to users. 
- Connect personal Indigo e-mails to InDewGo.

Current Tech Stack:
Language : js

Libraries : @types/big.jsand big.js for calculating accurate decimals for tax purposes.

Framework : vue

Build Dev : vite

CSS Library : bulma

Database : PostgreSQL

Back-end : supabase

Tools : DataGrip, Webstorm, Jetbrains Space