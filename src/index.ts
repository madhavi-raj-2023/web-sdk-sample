import { EventsLog } from './resources/events';
//import { Users } from './resources/users';

export class WebSDK {
  events: EventsLog;
  // users: Users;

  constructor(config: { apiKey: string}) {
    this.events = new EventsLog(config);
    // this.users = new Users(config);
  }
}