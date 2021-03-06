export interface Vendor {
    "vendorId": number
    "code": string,
    "name": string,
    "description": string,
    "mail": string,
    "phone": string,
    "mobile": string,
    "imagePath": string,
    "annulled": true,
    "timeZone": number
    "restrictedGeofenceId": number
}

export interface Profile {
    "profileId": number
    "name": string,
    "description": string,
    "vendorId": number
    "createdBy": number
    "createdDate": string
    "modifiedBy": number
    "modifiedDate": string
    "annulled": true,
    "annulledBy": number
    "annulledDate": string
}

export interface User {
    "userId": number,
    "vendorId": number,
    "userName": string,
    "password": string,
    "email": string,
    "phone": string,
    "profileId": number,
    "style": string,
    "attemps": number,
    "lastVisit": string
    "createdBy": number,
    "createdDate": string
    "modifiedBy": number,
    "modifiedDate": string
    "annulled": true,
    "annulledBy": number,
    "annulledDate": string
    "accessLevel": number
}