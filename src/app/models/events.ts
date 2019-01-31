export interface Event {
  id: number | string;
  name: string;
  date: string;
  location: EventLocation;
  imageUrl: string;
  ticketsAvailable: boolean;
  description: string;
}

export interface EventLocation {
  name: string;
  lat: number;
  lng: number;
}

export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}

//model.
export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._token) {
      return null;
    }
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }

  get isAuth() {
    return !!this.token;
  }

  get timeToExpiry() {
    return this._tokenExpirationDate.getTime() - new Date().getTime();
  }
}
